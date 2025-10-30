import React, { useState, useEffect } from "react";
import { Code2, Zap } from "lucide-react";
import {
    SiReact,
    SiNodedotjs,
    SiTypescript,
    SiPython,
    SiNextdotjs,
    SiMongodb,
    SiDocker,
    SiPostgresql,
    SiGraphql,
    SiTailwindcss,
    SiFirebase,
} from "react-icons/si";

export default function TechStackSection() {
    const [hoveredId, setHoveredId] = useState(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) setIsVisible(true);
            },
            { threshold: 0.1 }
        );

        const section = document.getElementById("tech-stack");
        if (section) observer.observe(section);

        return () => observer.disconnect();
    }, []);

    const techStack = [
        { id: 1, name: "React", category: "Frontend", description: "Building dynamic user interfaces", icon: <SiReact className="text-cyan-500" />, bgColor: "from-cyan-50 to-blue-50", accentColor: "bg-cyan-500" },
        { id: 2, name: "Node.js", category: "Backend", description: "Scalable server applications", icon: <SiNodedotjs className="text-green-600" />, bgColor: "from-green-50 to-emerald-50", accentColor: "bg-green-500" },
        { id: 3, name: "TypeScript", category: "Language", description: "Type-safe development", icon: <SiTypescript className="text-blue-500" />, bgColor: "from-blue-50 to-indigo-50", accentColor: "bg-blue-500" },
        { id: 4, name: "Python", category: "Backend", description: "AI & data processing", icon: <SiPython className="text-yellow-500" />, bgColor: "from-yellow-50 to-orange-50", accentColor: "bg-yellow-500" },
        { id: 5, name: "Next.js", category: "Framework", description: "Production-ready React apps", icon: <SiNextdotjs className="text-gray-900" />, bgColor: "from-gray-50 to-slate-50", accentColor: "bg-gray-900" },
        { id: 6, name: "MongoDB", category: "Database", description: "Flexible NoSQL storage", icon: <SiMongodb className="text-green-600" />, bgColor: "from-green-50 to-teal-50", accentColor: "bg-green-600" },
        { id: 8, name: "Docker", category: "DevOps", description: "Container orchestration", icon: <SiDocker className="text-blue-600" />, bgColor: "from-blue-50 to-cyan-50", accentColor: "bg-blue-600" },
        { id: 9, name: "PostgreSQL", category: "Database", description: "Reliable SQL database", icon: <SiPostgresql className="text-indigo-600" />, bgColor: "from-indigo-50 to-blue-50", accentColor: "bg-indigo-600" },
        { id: 10, name: "GraphQL", category: "API", description: "Efficient data querying", icon: <SiGraphql className="text-pink-600" />, bgColor: "from-pink-50 to-rose-50", accentColor: "bg-pink-600" },
        { id: 11, name: "Tailwind CSS", category: "Styling", description: "Utility-first CSS framework", icon: <SiTailwindcss className="text-teal-500" />, bgColor: "from-teal-50 to-cyan-50", accentColor: "bg-teal-500" },
        { id: 12, name: "Firebase", category: "Backend", description: "Real-time app development", icon: <SiFirebase className="text-amber-500" />, bgColor: "from-amber-50 to-yellow-50", accentColor: "bg-amber-500" },
    ];

    return (
        <section
            id="tech-stack"
            className="relative py-24 px-6 bg-gradient-to-b from-gray-50 to-white overflow-hidden"
        >
            {/* Background */}
            <div className="absolute inset-0 opacity-40">
                <div className="absolute top-20 right-20 w-72 h-72 bg-emerald-200 rounded-full blur-3xl" />
                <div className="absolute bottom-20 left-20 w-72 h-72 bg-blue-200 rounded-full blur-3xl" />
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Header */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-emerald-500/10 border border-emerald-500/20 rounded-full mb-5">
                        <Code2 className="w-4 h-4 text-emerald-600" />
                        <span className="text-sm font-semibold text-emerald-600 uppercase tracking-wider">
                            Technologies We Master At BF Labs
                        </span>
                    </div>

                    <h2 className="text-3xl md:text-4xl tracking-tight text-gray-900 mb-4 leading-tight">
                        Our Tech Stack
                    </h2>

                    <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
                        Leveraging the best tools and frameworks to deliver exceptional digital experiences
                    </p>
                </div>

                {/* Tech Grid */}
                <div className="grid grid-cols-2 lg:grid-cols-5 gap-4 md:gap-5">
                    {techStack.map((tech, index) => (
                        <div
                            key={tech.id}
                            className={`group relative transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                                }`}
                            style={{ transitionDelay: `${index * 60}ms` }}
                            onMouseEnter={() => setHoveredId(tech.id)}
                            onMouseLeave={() => setHoveredId(null)}
                        >
                            <div
                                className={`relative h-full bg-gradient-to-br ${tech.bgColor} rounded-md p-3 border border-transparent transition-all duration-500 ${hoveredId === tech.id ? "scale-105 shadow-xl border-white" : "scale-100 shadow-md"
                                    }`}
                            >
                                <div
                                    className={`absolute top-0 left-0 right-0 h-0.5 ${tech.accentColor} rounded-t-md transition-all duration-500 ${hoveredId === tech.id ? "opacity-100" : "opacity-0"
                                        }`}
                                />

                                <div className="relative text-center">
                                    <div
                                        className={`text-4xl mb-2 transition-transform duration-700 ${hoveredId === tech.id ? "rotate-[360deg] scale-110" : "rotate-0 scale-100"
                                            }`}
                                    >
                                        {tech.icon}
                                    </div>

                                    <h3 className="text-lg font-semibold text-gray-900 mb-1">{tech.name}</h3>

                                    <span
                                        className={`inline-block px-2 py-0.5 ${tech.accentColor} text-white text-[10px] font-semibold rounded-full mb-1`}
                                    >
                                        {tech.category}
                                    </span>

                                    <p
                                        className={`text-xs text-gray-600 transition-all duration-500 ${hoveredId === tech.id ? "opacity-100 max-h-16" : "opacity-0 max-h-0"
                                            }`}
                                    >
                                        {tech.description}
                                    </p>
                                </div>

                                <div
                                    className={`absolute bottom-2 right-2 transition-all duration-500 ${hoveredId === tech.id ? "opacity-100 scale-100" : "opacity-0 scale-0"
                                        }`}
                                >
                                    <Zap className="w-4 h-4 text-gray-400" />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}