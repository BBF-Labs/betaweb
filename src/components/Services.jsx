// import React, { useState, useEffect } from 'react'

// const Services = () => {
//     const [hoveredId, setHoveredId] = useState(null);

//     const services = [
//         {
//             id: 1,
//             number: "01",
//             title: "Product design",
//             tags: ["Saas Platform", "Web Platform", "Mobile App"],
//             description: "We craft intuitive and engaging product experiences that delight users and drive business growth. Our product design process focuses on understanding user needs and creating solutions that are both beautiful and functional.",
//             bgColor: "bg-white"
//         },
//         {
//             id: 2,
//             number: "02",
//             title: "UX Design",
//             tags: ["UX Audit", "Analysis", "Research"],
//             description: "Our UX design services help you understand your users better and create experiences that truly resonate. Through comprehensive audits, analysis, and research, we identify opportunities for improvement and design solutions that enhance user satisfaction.",
//             bgColor: "bg-white"
//         },
//         {
//             id: 3,
//             number: "03",
//             title: "Development",
//             tags: ["Net Core", "PHP", "React", "Node.js", "Angular"],
//             description: "Our development team brings your digital projects to life with robust, scalable, and high-performing solutions. Using the latest technologies, we ensure that your applications are built to meet your business goals and provide a seamless experience for users.",
//             bgColor: "bg-rose-50"
//         },
//         {
//             id: 4,
//             number: "04",
//             title: "Quality Assurance",
//             tags: ["Testing", "Planning, creating following KPI's", "Documentation"],
//             description: "We ensure your product meets the highest quality standards through rigorous testing and quality assurance processes. Our QA team creates comprehensive test plans, follows key performance indicators, and maintains detailed documentation throughout the development lifecycle.",
//             bgColor: "bg-white"
//         }
//     ];

//     return (
//         <>
//             <div className='scroll-mt-16 py-20 bg-neutral-50 md:py-32'>
//                 <div className='px-4 md:px-16'>
//                     <h1 className='text-5xl text-center'>Services We Provide</h1>
//                 </div>
//                 <div className=" bg-gray-100 py-12 px-6">
//                     <div className="max-w-6xl mx-auto space-y-4">
//                         {services.map((service) => (
//                             <div
//                                 key={service.id}
//                                 className={`${service.bgColor} rounded-lg overflow-hidden transition-all duration-500 ease-in-out ${hoveredId === service.id ? 'shadow-lg' : 'shadow'
//                                     }`}
//                                 onMouseEnter={() => setHoveredId(service.id)}
//                                 onMouseLeave={() => setHoveredId(null)}
//                             >
//                                 {/* Green accent bar */}
//                                 <div
//                                     className={`h-1 bg-emerald-500 transition-all duration-500 ${hoveredId === service.id ? 'opacity-100' : 'opacity-0'
//                                         }`}
//                                 />

//                                 {/* Content */}
//                                 <div className="p-12 flex items-start gap-12">
//                                     {/* Number */}
//                                     <div className="text-gray-400 text-lg font-light min-w-[3rem]">
//                                         {service.number}
//                                     </div>

//                                     {/* Main content */}
//                                     <div className="flex-1">
//                                         {/* Title */}
//                                         <h2
//                                             className={`text-4xl font-light mb-4 transition-colors duration-300 ${hoveredId === service.id ? 'text-emerald-600' : 'text-gray-800'
//                                                 }`}
//                                         >
//                                             {service.title}
//                                         </h2>

//                                         {/* Tags */}
//                                         <div className="flex flex-wrap items-center gap-3 text-gray-500 text-sm mb-6">
//                                             {service.tags.map((tag, index) => (
//                                                 <React.Fragment key={index}>
//                                                     <span>{tag}</span>
//                                                     {index < service.tags.length - 1 && (
//                                                         <span className="w-1 h-1 bg-gray-400 rounded-full" />
//                                                     )}
//                                                 </React.Fragment>
//                                             ))}
//                                         </div>

//                                         {/* Expanded content */}
//                                         <div
//                                             className={`transition-all duration-500 ease-in-out overflow-hidden ${hoveredId === service.id
//                                                     ? 'max-h-96 opacity-100 mt-6'
//                                                     : 'max-h-0 opacity-0'
//                                                 }`}
//                                         >
//                                             <p className="text-gray-600 leading-relaxed mb-8 max-w-3xl">
//                                                 {service.description}
//                                             </p>
//                                             <button className="px-8 py-3 border-2 border-gray-800 text-gray-800 rounded-full hover:bg-gray-800 hover:text-white transition-all duration-300 uppercase tracking-wider text-sm font-medium">
//                                                 Discuss Project
//                                             </button>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//             </div>
//         </>
//     )
// }

// export default Services

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
                                className="bg-white rounded-lg p-8 shadow-sm hover:shadow-md transition-all duration-500 border"
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