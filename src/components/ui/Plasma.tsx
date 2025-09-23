"use client";
import React, { useEffect, useRef } from "react";
import { Renderer, Program, Mesh, Triangle } from "ogl";

interface PlasmaProps {
  color?: string;
  speed?: number;
  direction?: "forward" | "reverse" | "pingpong";
  scale?: number;
  opacity?: number;
  mouseInteractive?: boolean;
}

const hexToRgb = (hex: string): [number, number, number] => {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  if (!result) return [1, 0.5, 0.2];
  return [
    parseInt(result[1], 16) / 255,
    parseInt(result[2], 16) / 255,
    parseInt(result[3], 16) / 255,
  ];
};

const vertex = `#version 300 es
precision highp float;
in vec2 position;
in vec2 uv;
out vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = vec4(position, 0.0, 1.0);
}`;

const fragment = `#version 300 es
precision highp float;

uniform vec2 iResolution;
uniform float iTime;
uniform vec3 uCustomColor;
uniform float uUseCustomColor;
uniform float uSpeed;
uniform float uDirection;
uniform float uScale;
uniform float uOpacity;
uniform vec2 uMouse;
uniform float uMouseInteractive;

out vec4 fragColor;

void mainImage(out vec4 o, vec2 C) {
    // Normalize coordinates (0.0 - 1.0)
    vec2 uv = C / iResolution.xy;

    // Center coords
    uv -= 0.5;
    uv.x *= iResolution.x / iResolution.y;

    // Animate time with direction & speed
    float t = iTime * uSpeed * uDirection;

    // Plasma formula
    float v = 0.0;
    v += sin((uv.x + t) * 3.0) * 0.5;
    v += sin((uv.y + t) * 3.0) * 0.5;
    v += sin((uv.x + uv.y + t) * 3.0) * 0.5;
    v += cos(length(uv) * 4.0 - t);

    v = 0.5 + 0.5 * v;

    vec3 col = vec3(
        0.5 + 0.5 * sin(6.2831 * v + 0.0),
        0.5 + 0.5 * sin(6.2831 * v + 2.094),
        0.5 + 0.5 * sin(6.2831 * v + 4.188)
    );

    // Apply custom color if enabled
    if (uUseCustomColor > 0.5) {
        col = mix(col, uCustomColor * v, 0.7);
    }

    o = vec4(col, uOpacity);
}

bool finite1(float x){ return !(isnan(x) || isinf(x)); }
vec3 sanitize(vec3 c){ return vec3(finite1(c.r) ? c.r : 0.0, finite1(c.g) ? c.g : 0.0, finite1(c.b) ? c.b : 0.0); }

void main() {
    vec4 o = vec4(0.0);
    mainImage(o, gl_FragCoord.xy);
    vec3 rgb = sanitize(o.rgb);
    fragColor = vec4(rgb, o.a);
}`;

export const Plasma: React.FC<PlasmaProps> = ({
  color = "#974EB5",
  speed = 1,
  direction = "forward",
  scale = 1,
  opacity = 1,
  mouseInteractive = true,
}) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const mousePos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const useCustomColor = 1.0;
    const customColorRgb = hexToRgb(color);
    const directionMultiplier = direction === "reverse" ? -1.0 : 1.0;

    const renderer = new Renderer({
      webgl: 2,
      alpha: true,
      antialias: false,
      dpr: Math.min(window.devicePixelRatio || 1, 2),
    });
    const gl = renderer.gl;
    const canvas = gl.canvas as HTMLCanvasElement;
    canvas.style.display = "block";
    canvas.style.width = "100%";
    canvas.style.height = "100%";
    container.appendChild(canvas);

    const geometry = new Triangle(gl);
    const program = new Program(gl, {
      vertex,
      fragment,
      uniforms: {
        iTime: { value: 0 },
        iResolution: { value: new Float32Array([1, 1]) },
        uCustomColor: { value: new Float32Array(customColorRgb) },
        uUseCustomColor: { value: useCustomColor },
        uSpeed: { value: speed * 0.4 },
        uDirection: { value: directionMultiplier },
        uScale: { value: scale },
        uOpacity: { value: opacity },
        uMouse: { value: new Float32Array([0, 0]) },
        uMouseInteractive: { value: mouseInteractive ? 1.0 : 0.0 },
      },
    });

    const mesh = new Mesh(gl, { geometry, program });

    const handleMouseMove = (e: MouseEvent) => {
      if (!mouseInteractive) return;
      const rect = container.getBoundingClientRect();
      mousePos.current.x = e.clientX - rect.left;
      mousePos.current.y = e.clientY - rect.top;
      const mouseUniform = program.uniforms.uMouse.value as Float32Array;
      mouseUniform[0] = mousePos.current.x;
      mouseUniform[1] = mousePos.current.y;
    };

    if (mouseInteractive)
      container.addEventListener("mousemove", handleMouseMove);

    const setSize = () => {
      const rect = container.getBoundingClientRect();
      const width = Math.max(1, Math.floor(rect.width));
      const height = Math.max(1, Math.floor(rect.height));
      renderer.setSize(width, height);
      const res = program.uniforms.iResolution.value as Float32Array;
      res[0] = gl.drawingBufferWidth;
      res[1] = gl.drawingBufferHeight;
    };

    const ro = new ResizeObserver(setSize);
    ro.observe(container);
    setSize();

    let raf: number;
    const t0 = performance.now();
    const loop = (t: number) => {
      const timeValue = (t - t0) * 0.001;

      if (direction === "pingpong") {
        const cycle = Math.sin(timeValue * 0.5) * directionMultiplier;
        (program.uniforms.uDirection as { value: number }).value = cycle;
      }

      (program.uniforms.iTime as { value: number }).value = timeValue;
      renderer.render({ scene: mesh });
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      if (mouseInteractive)
        container.removeEventListener("mousemove", handleMouseMove);
      try {
        container.removeChild(canvas);
      } catch {}
    };
  }, [color, speed, direction, scale, opacity, mouseInteractive]);

  return (
    <div ref={containerRef} className="w-full h-full relative overflow-hidden" />
  );
};

export default Plasma;
