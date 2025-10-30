import React, { useState } from 'react';
import { Sparkles } from 'lucide-react';

export default function AnimatedFooter() {
    const [email, setEmail] = useState('');
    const [hoveredLink, setHoveredLink] = useState('');

    const handleSubmit = () => {
        if (email) {
            alert('Thanks for signing up!');
            setEmail('');
        }
    };

    const footerLinks = {
        Features: ['Lorem ipsum', 'Corem dolor', 'Features'],
        Pricing: ['Lorem ipsum', 'Corem dolor', 'Features'],
        About: ['Lorem ipsum', 'Corem dolor', 'Features'],
        Extension: ['Lorem ipsum', 'Corem dolor', 'Features']
    };

    return (
        <div className="min-h-screen bg-black relative overflow-hidden">
            {/* Animated gradient background */}
            <div className="absolute inset-0">
                <div
                    className="absolute inset-0 opacity-30"
                    style={{
                        background: 'linear-gradient(45deg, #10b981, #ffffff, #10b981, #ffffff)',
                        backgroundSize: '400% 400%',
                        animation: 'gradientMove 15s ease infinite'
                    }}
                />
                <style>{`
          @keyframes gradientMove {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
        `}</style>
            </div>

            {/* Floating orbs */}
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-500 rounded-full blur-3xl opacity-20 animate-pulse" />
            <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-white rounded-full blur-3xl opacity-10 animate-pulse" style={{ animationDelay: '2s' }} />
            <div className="absolute top-1/2 right-1/3 w-72 h-72 bg-emerald-400 rounded-full blur-3xl opacity-15 animate-pulse" style={{ animationDelay: '4s' }} />

            <div className="relative z-10">
                {/* Hero Section */}
                <div className="py-32 px-8">
                    <div className="max-w-4xl mx-auto text-center">
                        {/* Badge */}
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full mb-8 animate-bounce">
                            <Sparkles className="w-4 h-4 text-emerald-400" />
                            <span className="text-sm text-white font-medium">Empower your website</span>
                        </div>

                        {/* Main Heading */}
                        <h1 className="text-6xl md:text-7xl font-bold text-white mb-6 leading-tight">
                            Bring sanity back to
                            <br />
                            <span className="bg-gradient-to-r from-emerald-400 via-white to-emerald-400 bg-clip-text text-transparent animate-pulse">
                                your website
                            </span>
                        </h1>

                        {/* Subheading */}
                        <p className="text-xl text-gray-300 mb-12">
                            It's free to try for 7 days
                        </p>

                        {/* Email Input */}
                        <div className="max-w-xl mx-auto">
                            <div className="flex gap-3 bg-white/10 backdrop-blur-md p-2 rounded-2xl border border-white/20 shadow-2xl hover:shadow-emerald-500/20 transition-all duration-300">
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="Enter your email"
                                    className="flex-1 bg-transparent px-6 py-4 text-white placeholder-gray-400 focus:outline-none text-lg"
                                />
                                <button
                                    onClick={handleSubmit}
                                    className="px-8 py-4 bg-white text-black font-semibold rounded-xl hover:bg-emerald-400 hover:text-white transition-all duration-300 hover:scale-105 hover:shadow-lg"
                                >
                                    Get started
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Footer Section */}
                <div className="border-t border-white/10 py-16 px-8">
                    <div className="max-w-7xl mx-auto">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12 mb-16">
                            {/* Brand Column */}
                            <div className="lg:col-span-2">
                                <div className="flex items-center gap-2 mb-6">
                                    <div className="w-8 h-8 bg-emerald-500 rounded-lg flex items-center justify-center">
                                        <Sparkles className="w-5 h-5 text-white" />
                                    </div>
                                    <span className="text-2xl font-bold text-white">DOPING.AI</span>
                                </div>
                                <p className="text-gray-400 leading-relaxed mb-6">
                                    Borem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.
                                </p>
                                <div className="flex gap-4">
                                    {['twitter', 'github', 'linkedin'].map((social) => (
                                        <div
                                            key={social}
                                            className="w-10 h-10 bg-white/5 hover:bg-emerald-500 rounded-lg flex items-center justify-center cursor-pointer transition-all duration-300 hover:scale-110 border border-white/10"
                                        >
                                            <span className="text-white text-xs">{social[0].toUpperCase()}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Links Columns */}
                            {Object.entries(footerLinks).map(([category, links]) => (
                                <div key={category}>
                                    <h3 className="text-white font-semibold mb-6 text-lg">
                                        {category}
                                    </h3>
                                    <ul className="space-y-3">
                                        {links.map((link, index) => (
                                            <li key={index}>
                                                <a
                                                    href="#"
                                                    onMouseEnter={() => setHoveredLink(`${category}-${index}`)}
                                                    onMouseLeave={() => setHoveredLink('')}
                                                    className="text-gray-400 hover:text-emerald-400 transition-all duration-300 inline-flex items-center gap-2"
                                                >
                                                    {hoveredLink === `${category}-${index}` && (
                                                        <span className="w-2 h-2 bg-emerald-400 rounded-full animate-ping" />
                                                    )}
                                                    {link}
                                                </a>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>

                        {/* Additional Footer Links */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16 pt-8 border-t border-white/10">
                            <div>
                                <h3 className="text-white font-semibold mb-6 text-lg">
                                    Pricing
                                </h3>
                                <ul className="space-y-3">
                                    <li><a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">Lorem ipsum</a></li>
                                    <li><a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">Features</a></li>
                                </ul>
                            </div>
                            <div>
                                <h3 className="text-white font-semibold mb-6 text-lg">
                                    About
                                </h3>
                                <ul className="space-y-3">
                                    <li><a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">Lorem ipsum</a></li>
                                    <li><a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">Corem dolor</a></li>
                                </ul>
                            </div>
                        </div>

                        {/* Copyright */}
                        <div className="pt-8 border-t border-white/10 text-center">
                            <p className="text-gray-500 text-sm">
                                Copyright © 2012 - 2024 Doping.AI®. All rights reserved.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}