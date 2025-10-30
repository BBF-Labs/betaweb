import React, { useState, useEffect } from 'react'

const Services = () => {
    const [hoveredId, setHoveredId] = useState(null);

    const services = [
        {
            id: 1,
            number: "01",
            title: "Product design",
            tags: ["Saas Platform", "Web Platform", "Mobile App"],
            description: "We craft intuitive and engaging product experiences that delight users and drive business growth. Our product design process focuses on understanding user needs and creating solutions that are both beautiful and functional.",
            bgColor: "bg-white"
        },
        {
            id: 2,
            number: "02",
            title: "UX Design",
            tags: ["UX Audit", "Analysis", "Research"],
            description: "Our UX design services help you understand your users better and create experiences that truly resonate. Through comprehensive audits, analysis, and research, we identify opportunities for improvement and design solutions that enhance user satisfaction.",
            bgColor: "bg-white"
        },
        {
            id: 3,
            number: "03",
            title: "Development",
            tags: ["Net Core", "PHP", "React", "Node.js", "Angular"],
            description: "Our development team brings your digital projects to life with robust, scalable, and high-performing solutions. Using the latest technologies, we ensure that your applications are built to meet your business goals and provide a seamless experience for users.",
            bgColor: "bg-rose-50"
        },
        {
            id: 4,
            number: "04",
            title: "Quality Assurance",
            tags: ["Testing", "Planning, creating following KPI's", "Documentation"],
            description: "We ensure your product meets the highest quality standards through rigorous testing and quality assurance processes. Our QA team creates comprehensive test plans, follows key performance indicators, and maintains detailed documentation throughout the development lifecycle.",
            bgColor: "bg-white"
        }
    ];

    return (
        <>
            <div className='scroll-mt-16 py-20 bg-neutral-50 md:py-32'>
                <div className='px-4 md:px-16'>
                    <h1 className='text-5xl text-center'>Services We Provide</h1>
                </div>
                <div className=" bg-gray-100 py-12 px-6">
                    <div className="max-w-6xl mx-auto space-y-4">
                        {services.map((service) => (
                            <div
                                key={service.id}
                                className={`${service.bgColor} rounded-lg overflow-hidden transition-all duration-500 ease-in-out ${hoveredId === service.id ? 'shadow-lg' : 'shadow'
                                    }`}
                                onMouseEnter={() => setHoveredId(service.id)}
                                onMouseLeave={() => setHoveredId(null)}
                            >
                                {/* Green accent bar */}
                                <div
                                    className={`h-1 bg-emerald-500 transition-all duration-500 ${hoveredId === service.id ? 'opacity-100' : 'opacity-0'
                                        }`}
                                />

                                {/* Content */}
                                <div className="p-12 flex items-start gap-12">
                                    {/* Number */}
                                    <div className="text-gray-400 text-lg font-light min-w-[3rem]">
                                        {service.number}
                                    </div>

                                    {/* Main content */}
                                    <div className="flex-1">
                                        {/* Title */}
                                        <h2
                                            className={`text-4xl font-light mb-4 transition-colors duration-300 ${hoveredId === service.id ? 'text-emerald-600' : 'text-gray-800'
                                                }`}
                                        >
                                            {service.title}
                                        </h2>

                                        {/* Tags */}
                                        <div className="flex flex-wrap items-center gap-3 text-gray-500 text-sm mb-6">
                                            {service.tags.map((tag, index) => (
                                                <React.Fragment key={index}>
                                                    <span>{tag}</span>
                                                    {index < service.tags.length - 1 && (
                                                        <span className="w-1 h-1 bg-gray-400 rounded-full" />
                                                    )}
                                                </React.Fragment>
                                            ))}
                                        </div>

                                        {/* Expanded content */}
                                        <div
                                            className={`transition-all duration-500 ease-in-out overflow-hidden ${hoveredId === service.id
                                                    ? 'max-h-96 opacity-100 mt-6'
                                                    : 'max-h-0 opacity-0'
                                                }`}
                                        >
                                            <p className="text-gray-600 leading-relaxed mb-8 max-w-3xl">
                                                {service.description}
                                            </p>
                                            <button className="px-8 py-3 border-2 border-gray-800 text-gray-800 rounded-full hover:bg-gray-800 hover:text-white transition-all duration-300 uppercase tracking-wider text-sm font-medium">
                                                Discuss Project
                                            </button>
                                        </div>
                                    </div>
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