import React from 'react';

export default function MinimalistFooter() {
    const footerLinks = {
        services: [
            { name: 'Work', href: '#' },
            { name: 'About', href: '#' },
            { name: 'Team', href: '#' }
        ],
        resources: [
            { name: 'Freebies', href: '#' },
            { name: 'Blog', href: '#' },
            { name: 'Contact', href: '#' }
        ],
        social: [
            { name: 'Instagram', href: '#' },
            { name: 'Facebook', href: '#' },
            { name: 'Dribbble', href: '#' },
            { name: 'Webflow', href: '#' }
        ]
    };

    return (
        <footer className="bg-black text-white py-20 px-8">
            <div className="max-w-7xl mx-auto">
                {/* Main Heading */}
                <div className="mb-24">
                    <h2 className="text-5xl md:text-7xl font-light leading-tight">
                        Text us,
                        <br />
                        <span className='text-green-500'>Let's get to work.</span>

                    </h2>
                </div>

                {/* Footer Links Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
                    {/* Contact Column */}
                    <div>
                        <h3 className="text-sm font-bold uppercase tracking-wider mb-6">
                            CONTACT
                        </h3>
                        <div className="space-y-3">
                            <p className="text-gray-400 leading-relaxed">
                                Greater Accra
                                <br />
                                Accra, Ghana
                            </p>
                            <a
                                href="mailto:hello@hitrefresh.co"
                                className="block text-gray-400 hover:text-emerald-400 transition-colors duration-300"
                            >
                                betaforgelabs@bfabs.com
                            </a>
                        </div>
                    </div>

                    {/* Services Column */}
                    <div>
                        <h3 className="text-sm font-bold uppercase tracking-wider mb-6">
                            SERVICES
                        </h3>
                        <ul className="space-y-3">
                            {footerLinks.services.map((link, index) => (
                                <li key={index}>
                                    <a
                                        href={link.href}
                                        className="text-gray-400 hover:text-emerald-400 transition-colors duration-300"
                                    >
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Resources Column */}
                    <div>
                        <h3 className="text-sm font-bold uppercase tracking-wider mb-6">
                            RESOURCES
                        </h3>
                        <ul className="space-y-3">
                            {footerLinks.resources.map((link, index) => (
                                <li key={index}>
                                    <a
                                        href={link.href}
                                        className="text-gray-400 hover:text-emerald-400 transition-colors duration-300"
                                    >
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Social Column */}
                    <div>
                        <h3 className="text-sm font-bold uppercase tracking-wider mb-6">
                            SOCIAL
                        </h3>
                        <ul className="space-y-3">
                            {footerLinks.social.map((link, index) => (
                                <li key={index}>
                                    <a
                                        href={link.href}
                                        className="text-gray-400 hover:text-emerald-400 transition-colors duration-300"
                                    >
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Copyright */}
                <div className="mt-20 pt-8 border-t border-gray-800">
                    <p className="text-gray-500 text-sm">
                        © 2024 BetaForge. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}