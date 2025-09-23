import Plasma from "@/components/ui/Plasma";
import SplitText from "@/components/ui/SplitText";
import AboutPage from "./about/page";
import { Github, Linkedin, Instagram, Twitter } from "lucide-react";
import Dock from "@/components/ui/Dock";




// <Dock 
//   items={items}
//   panelHeight={68}
//   baseItemSize={50}
//   magnification={70}
// />

export default function Home() {

 
  return (
    <>
      <div style={{ width: "100%", height: "100vh", position: "relative" }}>
        <Plasma
          color="#ff6b35"
          speed={1}
          direction="forward"
          scale={1.1}
          opacity={0.8}
          mouseInteractive={true}
        />

        {/* Content Overlay */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white z-10 px-8 pt-20 space-y-6 text-center">
          <SplitText
            text="To Digital Reality"
            className="text-[70px] font-bold text-center"
            delay={100}
            duration={0.6}
            ease="power3.out"
            splitType="chars"
            from={{ opacity: 0, y: 40 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.1}
            rootMargin="-100px"
            textAlign="center"
          />

          {/* Paragraph */}
          <p className="max-w-2xl text-lg">
            We help businesses and creators transform their ideas into stunning
            digital experiences. From design to development, we craft solutions
            that make an impact and engage audiences.
          </p>

          {/* Buttons */}
          <div className="flex gap-4 mt-4">
            <button className="bg-[#af1aea] text-black px-6 py-3 rounded-md font-semibold hover:bg-[#974EB5] transition">
              Get Started
            </button>
            <button className="bg-transparent border border-white px-6 py-3 rounded-md font-semibold hover:bg-white hover:text-black transition">
              Learn More
            </button>
          </div>

          {/* Social Icons */}
          <div className="flex gap-6 mt-10">
            {[
              { icon: Github, href: "https://github.com/" },
              { icon: Linkedin, href: "https://linkedin.com/" },
              { icon: Instagram, href: "https://instagram.com/" },
              { icon: Twitter, href: "https://twitter.com/" },
            ].map(({ icon: Icon, href }, i) => (
              <a
                key={i}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-2xl backdrop-blur-md bg-white/10 border border-white/20 shadow-lg hover:bg-white/20 transition"
              >
                <Icon size={28} />
              </a>
            ))}
          </div>
        </div>
      </div>

      <AboutPage />
    </>
  );
}
