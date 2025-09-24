import Link from 'next/link';
import React from 'react';

export const Header = () => {
    return (
        <div className="fixed top-0 md:top-0 md:left-0 md:right-0 md:mx-auto md:max-w-5xl z-20 w-full md:w-full sm:bottom-0 md:bottom-auto p-4 sm:p-6">
            <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-lg shadow-2xl">
                <div className="px-4 sm:px-8 py-4">
                    <nav className="flex items-center justify-between flex-wrap">
                        {/* Logo */}
                        <div className="flex items-center space-x-2">
                            <span className="text-xl sm:text-2xl font-bold text-white">Bitevia</span>
                        </div>

                        {/* Navigation Links */}
                        <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
                            <Link href="/" className="text-white/90 hover:text-white transition-colors duration-300">Home</Link>
                            <Link href="/about" className="text-white/90 hover:text-white transition-colors duration-300">About</Link>
                            <Link href="/services" className="text-white/90 hover:text-white transition-colors duration-300">Services</Link>
                            <Link href="/contact" className="text-white/90 hover:text-white transition-colors duration-300">Contact</Link>
                            <Link href="/portfolio" className="text-white/90 hover:text-white transition-colors duration-300">Portfolio</Link>
                        </div>

                        {/* CTA Button */}
                        <button className="mt-2 md:mt-0 px-4 sm:px-6 py-2 bg-white/20 backdrop-blur-sm border border-white/30 text-white rounded-full hover:bg-white/30 transition-all duration-300">
                            Get Started
                        </button>
                    </nav>
                </div>
            </div>
        </div>
    );
};
