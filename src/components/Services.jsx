import React, { useState, useEffect } from 'react'

const Services = () => {
    const [visibleIcons, setVisibleIcons] = useState([]);
    const [visibleText, setVisibleText] = useState([]);

    const services = [
        {
            id: 1,
            icon: (
                <svg className="w-16 h-16" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="32" cy="32" r="20" />
                    <circle cx="32" cy="32" r="6" />
                </svg>
            ),
            title: "Brand identity",
            description: "We create unique and powerful brand identities that help companies achieve their goals and stand out amongst the competition."
        },
        {
            id: 2,
            icon: (
                <svg className="w-16 h-16" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="16" y="12" width="32" height="40" rx="2" />
                    <line x1="20" y1="16" x2="24" y2="16" strokeWidth="1.5" />
                    <line x1="28" y1="16" x2="32" y2="16" strokeWidth="1.5" />
                    <line x1="36" y1="16" x2="40" y2="16" strokeWidth="1.5" />
                </svg>
            ),
            title: "Web Design",
            description: "We help companies craft captivating websites. Our designs tell stories and guide users, from vision to action."
        },
        {
            id: 3,
            icon: (
                <svg className="w-16 h-16" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="22" y="8" width="20" height="48" rx="3" />
                </svg>
            ),
            title: "Mobile Design",
            description: "We design mobile and responsive web experiences, allowing users to interact with apps in a way that feels effortless."
        },
        {
            id: 4,
            icon: (
                <svg className="w-16 h-16" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M 16 36 Q 24 20, 32 28 T 48 24" />
                    <rect x="14" y="34" width="4" height="4" fill="currentColor" />
                    <rect x="46" y="22" width="4" height="4" fill="currentColor" />
                </svg>
            ),
            title: "Illustration",
            description: "We create visual stories that help explain your mission and vision."
        },
        {
            id: 5,
            icon: (
                <svg className="w-16 h-16" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2">
                    <polygon points="32,16 40,28 24,28" />
                    <rect x="20" y="36" width="12" height="12" rx="1" />
                    <circle cx="40" cy="42" r="6" />
                </svg>
            ),
            title: "Iconography",
            description: "Icons that support the brand and help simplify your message."
        },
        {
            id: 6,
            icon: (
                <svg className="w-16 h-16" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="32" cy="32" r="18" />
                    <path d="M 32 20 L 32 32 L 40 32" strokeLinecap="round" />
                    <circle cx="26" cy="26" r="2" fill="currentColor" />
                    <circle cx="38" cy="26" r="2" fill="currentColor" />
                    <circle cx="38" cy="38" r="2" fill="currentColor" />
                    <circle cx="26" cy="38" r="2" fill="currentColor" />
                </svg>
            ),
            title: "Development",
            description: "Solve any design challenge in Webflow. If you can dream it, we can build it."
        }
    ];

    useEffect(() => {
        // Animate icons first
        services.forEach((service, index) => {
            setTimeout(() => {
                setVisibleIcons(prev => [...prev, service.id]);
            }, index * 150);
        });

        // Then animate text after all icons are visible
        const textDelay = services.length * 150 + 200;
        services.forEach((service, index) => {
            setTimeout(() => {
                setVisibleText(prev => [...prev, service.id]);
            }, textDelay + index * 150);
        });
    }, []);
    return (
        <>
            <div className='scroll-mt-16 py-20 bg-neutral-50 md:py-32'>
                <div className='px-4 md:px-16'>
                    <h1 className='text-5xl text-center'>Services We Provide</h1>
                </div>
                <div className="bg-gray-150 p-8 flex items-center justify-center">
                    <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {services.map((service) => (
                            <div
                                key={service.id}
                                className="bg-white rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow"
                            >
                                <div
                                    className={`text-gray-900 mb-6 transition-all duration-500 ${visibleIcons.includes(service.id)
                                        ? 'opacity-100 translate-y-0'
                                        : 'opacity-0 translate-y-4'
                                        }`}
                                >
                                    {service.icon}
                                </div>
                                <div
                                    className={`transition-all duration-500 ${visibleText.includes(service.id)
                                        ? 'opacity-100 translate-y-0'
                                        : 'opacity-0 translate-y-4'
                                        }`}
                                >
                                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                                        {service.title}
                                    </h3>
                                    <p className="text-gray-500 leading-relaxed">
                                        {service.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Services