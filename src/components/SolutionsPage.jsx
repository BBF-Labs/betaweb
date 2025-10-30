// import React, { useState } from 'react';
// import { ExternalLink, Sparkles, Zap, Rocket } from 'lucide-react';

// export default function SolutionsPage() {
//     const [hoveredId, setHoveredId] = useState(null);

//     const solutions = [
//         {
//             id: 1,
//             title: "Quiz Platform",
//             subtitle: "Interactive Learning Experience",
//             description: "A comprehensive quiz platform designed to engage users and track learning progress with real-time analytics and customizable assessments.",
//             url: "https://quizzes.theniitettey.live",
//             status: "live",
//             gradient: "bg-green-500",
//             bgPattern: "radial-gradient(circle at 20% 50%, rgba(16, 185, 129, 0.3) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(20, 184, 166, 0.3) 0%, transparent 50%)",
//             icon: <Sparkles className="w-10 h-10" />,
//             tags: ["Live", "Interactive", "Analytics"]
//         },
//         {
//             id: 2,
//             title: "Enterprise Suite",
//             subtitle: "Business Management Platform",
//             description: "All-in-one solution for managing your business operations, from team collaboration to project tracking and resource allocation.",
//             status: "coming-soon",
//             gradient: "bg-green-700",
//             bgPattern: "radial-gradient(circle at 20% 50%, rgba(139, 92, 246, 0.3) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(168, 85, 247, 0.3) 0%, transparent 50%)",
//             icon: <Zap className="w-10 h-10" />,
//             tags: ["Coming Soon", "Enterprise", "Automation"]
//         },
//         {
//             id: 3,
//             title: "AI Assistant",
//             subtitle: "Smart Workflow Automation",
//             description: "Leverage artificial intelligence to automate repetitive tasks, gain insights from your data, and boost productivity across your organization.",
//             status: "coming-soon",
//             gradient: "bg-green-700",
//             bgPattern: "radial-gradient(circle at 20% 50%, rgba(251, 146, 60, 0.3) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(244, 63, 94, 0.3) 0%, transparent 50%)",
//             icon: <Rocket className="w-10 h-10" />,
//             tags: ["Coming Soon", "AI-Powered", "Smart"]
//         }
//     ];

//     return (
//         <div className="scroll-mt-16 min-h-screen py-20 px-6 relative overflow-hidden">
//             {/* Animated background */}
//             {/* <div className="absolute inset-0 opacity-30">
//                 <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-500 rounded-lg mix-blend-multiply filter blur-3xl animate-pulse" />
//                 <div className="absolute top-0 -right-4 w-72 h-72 bg-emerald-500 rounded-lg mix-blend-multiply filter blur-3xl animate-pulse animation-delay-2000" />
//                 <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-500 rounded-lg mix-blend-multiply filter blur-3xl animate-pulse animation-delay-4000" />
//             </div> */}

//             <div className="max-w-7xl mx-auto relative z-10">
//                 {/* Header */}
//                 <div className="text-center mb-20 space-y-6">
//                     <h1 className="text-6xl text-black  mb-6 leading-tight">
//                         Transformative
//                         <br />
//                         <span className="bg-linear-to-r from-green-400 via-green-600 to-green-800 bg-clip-text text-transparent">
//                             Digital Solutions
//                         </span>
//                     </h1>
//                     <p className="text-2xl text-gray-500 max-w-3xl mx-auto font-extralight leading-relaxed">
//                         Cutting-edge platforms designed to elevate your digital presence and streamline your workflows
//                     </p>
//                 </div>

//                 {/* Solutions Grid */}
//                 <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
//                     {solutions.map((solution) => (
//                         <div
//                             key={solution.id}
//                             className={`group relative rounded-lg overflow-hidden transition-all duration-700 ${hoveredId === solution.id ? 'scale-105 -translate-y-2' : 'scale-100'
//                                 } ${solution.status === 'coming-soon' ? 'grayscale-0' : ''}`}
//                             onMouseEnter={() => setHoveredId(solution.id)}
//                             onMouseLeave={() => setHoveredId(null)}
//                             style={{
//                                 boxShadow: hoveredId === solution.id
//                                     ? `0 25px 50px -12px ${solution.id === 1 ? '' : solution.id === 2 ? '' : ''}`
//                                     : '0 10px 30px -5px rgba(0, 0, 0, 0.3)'
//                             }}
//                         >
//                             {/* Card background with pattern */}
//                             <div
//                                 className="absolute inset-0 bg-linear-to-br from-gray-900 to-gray-800"
//                                 style={{ background: solution.bgPattern }}
//                             />

//                             {/* Border gradient */}
//                             <div className={`absolute inset-0 bg-linear-to-br ${solution.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-700`}
//                                 style={{ padding: '2px', mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)', WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)', maskComposite: 'exclude', WebkitMaskComposite: 'xor' }}
//                             />

//                             {/* Content */}
//                             <div className="relative bg-black p-8 h-full flex flex-col rounded-lg">
//                                 {/* Status and icon */}
//                                 <div className="flex items-start justify-between mb-8">
//                                     <div className={`p-4 rounded-lg bg-linear-to-br ${solution.gradient} text-white shadow-lg group-hover:scale-110 transition-transform duration-500`}>
//                                         {solution.icon}
//                                     </div>

//                                     {solution.status === 'live' ? (
//                                         <div className="relative">
//                                             <span className="px-4 py-2 bg-green-500 text-white text-xs rounded-lg uppercase tracking-wider shadow-lg shadow-emerald-500/50 animate-pulse">
//                                                 ● Live
//                                             </span>
//                                         </div>
//                                     ) : (
//                                         <span className="px-4 py-2 bg-gray-800 text-gray-400 text-xs rounded-full uppercase tracking-wider border border-gray-700">
//                                             Coming Soon
//                                         </span>
//                                     )}
//                                 </div>

//                                 {/* Title and subtitle */}
//                                 <div className="mb-6">
//                                     <h3 className="text-3xl text-white mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text transition-all duration-500"
//                                         style={hoveredId === solution.id ? { backgroundImage: `linear-gradient(to right, ${solution.gradient})` } : {}}>
//                                         {solution.title}
//                                     </h3>
//                                     <p className={`text-base font-extralight bg-gradient-to-r ${solution.gradient} bg-clip-text text-transparent`}>
//                                         {solution.subtitle}
//                                     </p>
//                                 </div>

//                                 {/* Description */}
//                                 <p className="text-gray-300 leading-relaxed mb-8 flex-grow text-sm">
//                                     {solution.description}
//                                 </p>

//                                 {/* Tags */}
//                                 <div className="flex flex-wrap gap-2 mb-8">
//                                     {solution.tags.map((tag, index) => (
//                                         <span
//                                             key={index}
//                                             className="px-3 py-1.5 bg-white/5 text-gray-300 text-xs font-extralight rounded-lg border border-white/10 backdrop-blur-sm"
//                                         >
//                                             {tag}
//                                         </span>
//                                     ))}
//                                 </div>

//                                 {/* CTA Button */}
//                                 {solution.status === 'live' ? (
//                                     <a
//                                         href={solution.url}
//                                         target="_blank"
//                                         rel="noopener noreferrer"
//                                         className={`flex items-center justify-center gap-3 px-6 py-4 bg-gradient-to-r ${solution.gradient} text-white  rounded-lg hover:shadow-2xl transition-all duration-300 group-hover:scale-105 relative overflow-hidden`}
//                                     >
//                                         <span className="relative z-10">Launch Platform</span>
//                                         <ExternalLink className="w-5 h-5 relative z-10" />
//                                         <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
//                                     </a>
//                                 ) : (
//                                     <button
//                                         disabled
//                                         className="px-6 py-4 bg-gray-800/50 text-gray-500 rounded-lg border-2 border-gray-700/50 cursor-not-allowed backdrop-blur-sm"
//                                     >
//                                         Notify Me
//                                     </button>
//                                 )}

//                                 {/* Corner decoration */}
//                                 <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${solution.gradient} opacity-10 blur-3xl rounded-lg group-hover:opacity-20 transition-opacity duration-700`} />
//                             </div>
//                         </div>
//                     ))}
//                 </div>
//             </div>
//         </div>
//     );
// }
// import React, { useState } from 'react';
// import { ExternalLink, Sparkles, Zap, Rocket, ArrowRight } from 'lucide-react';

// export default function SolutionsPage() {
//     const [hoveredId, setHoveredId] = useState(null);

//     const solutions = [
//         {
//             id: 1,
//             title: "Quiz Platform",
//             subtitle: "Interactive Learning Experience",
//             description: "A comprehensive quiz platform designed to engage users and track learning progress with real-time analytics and customizable assessments.",
//             url: "https://quizzes.theniitettey.live",
//             status: "live",
//             primaryColor: "emerald",
//             gradient: "from-emerald-400 to-teal-500",
//             cardBg: "bg-gradient-to-br from-emerald-50 to-teal-50",
//             accentBg: "bg-emerald-500",
//             textColor: "text-emerald-900",
//             icon: <Sparkles className="w-12 h-12" />,
//             tags: ["Live", "Interactive", "Analytics"],
//             pattern: "M 0 50 Q 25 30, 50 50 T 100 50"
//         },
//         {
//             id: 2,
//             title: "Enterprise Suite",
//             subtitle: "Business Management Platform",
//             description: "All-in-one solution for managing your business operations, from team collaboration to project tracking and resource allocation.",
//             status: "coming-soon",
//             primaryColor: "purple",
//             gradient: "from-purple-400 to-indigo-500",
//             cardBg: "bg-gradient-to-br from-purple-50 to-indigo-50",
//             accentBg: "bg-purple-500",
//             textColor: "text-purple-900",
//             icon: <Zap className="w-12 h-12" />,
//             tags: ["Coming Soon", "Enterprise", "Automation"],
//             pattern: "M 0 50 L 25 30 L 50 50 L 75 30 L 100 50"
//         },
//         {
//             id: 3,
//             title: "AI Assistant",
//             subtitle: "Smart Workflow Automation",
//             description: "Leverage artificial intelligence to automate repetitive tasks, gain insights from your data, and boost productivity across your organization.",
//             status: "coming-soon",
//             primaryColor: "orange",
//             gradient: "from-orange-400 to-pink-500",
//             cardBg: "bg-gradient-to-br from-orange-50 to-pink-50",
//             accentBg: "bg-orange-500",
//             textColor: "text-orange-900",
//             icon: <Rocket className="w-12 h-12" />,
//             tags: ["Coming Soon", "AI-Powered", "Smart"],
//             pattern: "M 0 30 Q 50 70, 100 30"
//         }
//     ];

//     return (
//         <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 py-24 px-6 relative overflow-hidden">
//             {/* Floating decorative elements */}
//             <div className="absolute top-20 left-10 w-20 h-20 bg-yellow-300 rounded-full opacity-20 blur-2xl animate-pulse" />
//             <div className="absolute bottom-40 right-20 w-32 h-32 bg-pink-300 rounded-full opacity-20 blur-3xl animate-pulse animation-delay-2000" />
//             <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-blue-300 rounded-full opacity-20 blur-2xl animate-pulse animation-delay-4000" />

//             <div className="max-w-7xl mx-auto relative z-10">
//                 {/* Header */}
//                 <div className="text-center mb-24 space-y-8">
//                     <div className="inline-block animate-bounce">
//                         <div className="px-6 py-3 bg-white/80 backdrop-blur-sm text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 text-sm font-black rounded-full border-2 border-purple-200 uppercase tracking-widest shadow-lg">
//                             ✨ Our Solutions
//                         </div>
//                     </div>

//                     <h1 className="text-8xl font-black leading-tight">
//                         <span className="block text-gray-900">Build The</span>
//                         <span className="block bg-gradient-to-r from-purple-600 via-pink-500 to-orange-500 bg-clip-text text-transparent">
//                             Future Today
//                         </span>
//                     </h1>

//                     <p className="text-2xl text-gray-600 max-w-3xl mx-auto font-medium leading-relaxed">
//                         Revolutionary platforms that push boundaries and redefine possibilities
//                     </p>
//                 </div>

//                 {/* Solutions Grid */}
//                 <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mb-24">
//                     {solutions.map((solution, index) => (
//                         <div
//                             key={solution.id}
//                             className={`group relative transition-all duration-700 ${hoveredId === solution.id ? 'scale-105 z-20' : 'scale-100 z-10'
//                                 }`}
//                             onMouseEnter={() => setHoveredId(solution.id)}
//                             onMouseLeave={() => setHoveredId(null)}
//                             style={{ animationDelay: `${index * 100}ms` }}
//                         >
//                             {/* Main Card */}
//                             <div className={`relative ${solution.cardBg} rounded-3xl overflow-hidden shadow-2xl border-4 border-white transition-all duration-700 ${hoveredId === solution.id ? 'shadow-4xl rotate-1' : 'rotate-0'
//                                 }`}>

//                                 {/* Decorative wave pattern */}
//                                 <div className="absolute top-0 left-0 right-0 h-2 overflow-hidden">
//                                     <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
//                                         <path
//                                             d={solution.pattern}
//                                             fill="none"
//                                             stroke="white"
//                                             strokeWidth="4"
//                                             opacity="0.3"
//                                         />
//                                     </svg>
//                                 </div>

//                                 {/* Content */}
//                                 <div className="p-10 relative">
//                                     {/* Icon with floating animation */}
//                                     <div className={`inline-block mb-8 p-5 ${solution.accentBg} text-white rounded-3xl shadow-xl transform transition-all duration-500 ${hoveredId === solution.id ? 'rotate-12 scale-110' : 'rotate-0 scale-100'
//                                         }`}>
//                                         {solution.icon}
//                                     </div>

//                                     {/* Status badge */}
//                                     <div className="absolute top-8 right-8">
//                                         {solution.status === 'live' ? (
//                                             <div className="relative">
//                                                 <div className="absolute inset-0 bg-green-400 rounded-full blur-md animate-pulse" />
//                                                 <span className="relative px-5 py-2 bg-gradient-to-r from-green-400 to-emerald-500 text-white text-xs font-black rounded-full uppercase tracking-wider shadow-lg flex items-center gap-2">
//                                                     <span className="w-2 h-2 bg-white rounded-full animate-ping" />
//                                                     Live Now
//                                                 </span>
//                                             </div>
//                                         ) : (
//                                             <span className="px-5 py-2 bg-gray-200 text-gray-600 text-xs font-black rounded-full uppercase tracking-wider shadow-md">
//                                                 Soon
//                                             </span>
//                                         )}
//                                     </div>

//                                     {/* Title */}
//                                     <h3 className={`text-4xl font-black ${solution.textColor} mb-3 leading-tight`}>
//                                         {solution.title}
//                                     </h3>

//                                     {/* Subtitle */}
//                                     <p className={`text-lg font-bold bg-gradient-to-r ${solution.gradient} bg-clip-text text-transparent mb-6`}>
//                                         {solution.subtitle}
//                                     </p>

//                                     {/* Description */}
//                                     <p className="text-gray-700 leading-relaxed mb-8 text-base font-medium">
//                                         {solution.description}
//                                     </p>

//                                     {/* Tags */}
//                                     <div className="flex flex-wrap gap-2 mb-8">
//                                         {solution.tags.map((tag, tagIndex) => (
//                                             <span
//                                                 key={tagIndex}
//                                                 className={`px-4 py-2 bg-white/60 backdrop-blur-sm ${solution.textColor} text-xs font-bold rounded-xl shadow-sm border border-white`}
//                                             >
//                                                 {tag}
//                                             </span>
//                                         ))}
//                                     </div>

//                                     {/* CTA Button */}
//                                     {solution.status === 'live' ? (
//                                         <a
//                                             href={solution.url}
//                                             target="_blank"
//                                             rel="noopener noreferrer"
//                                             className={`group/btn flex items-center justify-center gap-3 px-8 py-5 bg-gradient-to-r ${solution.gradient} text-white font-black rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-300 text-lg relative overflow-hidden`}
//                                         >
//                                             <span className="relative z-10">Explore Now</span>
//                                             <ArrowRight className="w-6 h-6 relative z-10 group-hover/btn:translate-x-2 transition-transform duration-300" />
//                                             <div className="absolute inset-0 bg-white opacity-0 group-hover/btn:opacity-30 transition-opacity duration-300" />
//                                         </a>
//                                     ) : (
//                                         <button
//                                             disabled
//                                             className="w-full px-8 py-5 bg-gray-200 text-gray-500 font-black rounded-2xl shadow-md cursor-not-allowed text-lg border-2 border-gray-300"
//                                         >
//                                             Coming Soon
//                                         </button>
//                                     )}
//                                 </div>

//                                 {/* Decorative corner accent */}
//                                 <div className={`absolute -bottom-10 -right-10 w-40 h-40 bg-gradient-to-br ${solution.gradient} rounded-full opacity-10 blur-3xl group-hover:opacity-20 transition-opacity duration-700`} />
//                             </div>

//                             {/* Floating shadow */}
//                             <div className={`absolute inset-0 bg-gradient-to-br ${solution.gradient} rounded-3xl blur-2xl opacity-0 group-hover:opacity-30 transition-all duration-700 -z-10 scale-95`} />
//                         </div>
//                     ))}
//                 </div>

//                 {/* Bottom CTA Section */}
//                 <div className="relative">
//                     <div className="bg-gradient-to-r from-purple-600 via-pink-500 to-orange-500 rounded-3xl p-1 shadow-2xl">
//                         <div className="bg-white rounded-3xl p-16 text-center">
//                             <div className="inline-block mb-6">
//                                 <div className="text-6xl">🚀</div>
//                             </div>
//                             <h3 className="text-5xl font-black text-gray-900 mb-6">
//                                 Ready to Build Something Amazing?
//                             </h3>
//                             <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto font-medium">
//                                 Let's collaborate and create a custom solution tailored perfectly to your needs
//                             </p>
//                             <button className="group px-12 py-6 bg-gradient-to-r from-purple-600 via-pink-500 to-orange-500 text-white font-black rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-300 text-xl hover:scale-105 flex items-center gap-4 mx-auto">
//                                 Start Your Project
//                                 <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" />
//                             </button>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }

// import React, { useState } from 'react';
// import { ExternalLink, ArrowUpRight } from 'lucide-react';

// export default function SolutionsPage() {
//     const [hoveredId, setHoveredId] = useState(null);

//     const solutions = [
//         {
//             id: 1,
//             title: "Quiz Platform",
//             subtitle: "Interactive Learning",
//             description: "A comprehensive quiz platform designed to engage users and track learning progress with real-time analytics and customizable assessments.",
//             url: "https://quizzes.theniitettey.live",
//             status: "live",
//             color: "#10b981",
//             number: "01"
//         },
//         {
//             id: 2,
//             title: "Enterprise Suite",
//             subtitle: "Business Management",
//             description: "All-in-one solution for managing your business operations, from team collaboration to project tracking and resource allocation.",
//             status: "coming-soon",
//             color: "#6366f1",
//             number: "02"
//         },
//         {
//             id: 3,
//             title: "AI Assistant",
//             subtitle: "Workflow Automation",
//             description: "Leverage artificial intelligence to automate repetitive tasks, gain insights from your data, and boost productivity.",
//             status: "coming-soon",
//             color: "#f59e0b",
//             number: "03"
//         }
//     ];

//     return (
//         <div className="min-h-screen bg-neutral-50 py-32 px-8">
//             <div className="max-w-6xl mx-auto">
//                 {/* Header */}
//                 <div className="mb-24">
//                     <p className="text-sm uppercase tracking-widest text-neutral-500 mb-4 font-medium">
//                         Our Solutions
//                     </p>
//                     <h1 className="text-6xl md:text-7xl font-light text-neutral-900 mb-6 tracking-tight">
//                         Tools that work<br />for you
//                     </h1>
//                     <p className="text-xl text-neutral-600 max-w-xl font-light">
//                         Thoughtfully designed platforms to help you work smarter and achieve more.
//                     </p>
//                 </div>

//                 {/* Solutions */}
//                 <div className="space-y-6">
//                     {solutions.map((solution) => (
//                         <div
//                             key={solution.id}
//                             className={`group relative bg-white border border-neutral-200 transition-all duration-500 ${hoveredId === solution.id ? 'shadow-2xl shadow-neutral-200' : 'shadow-sm'
//                                 }`}
//                             onMouseEnter={() => setHoveredId(solution.id)}
//                             onMouseLeave={() => setHoveredId(null)}
//                         >
//                             {/* Color accent line */}
//                             <div
//                                 className="absolute top-0 left-0 right-0 h-1 transition-opacity duration-500"
//                                 style={{
//                                     backgroundColor: solution.color,
//                                     opacity: hoveredId === solution.id ? 1 : 0
//                                 }}
//                             />

//                             <div className="p-10 md:p-12 flex flex-col md:flex-row gap-8 md:gap-12">
//                                 {/* Number */}
//                                 <div className="flex-shrink-0">
//                                     <span className="text-5xl font-light text-neutral-300">
//                                         {solution.number}
//                                     </span>
//                                 </div>

//                                 {/* Content */}
//                                 <div className="flex-grow">
//                                     <div className="flex items-start justify-between mb-4">
//                                         <div>
//                                             <h3 className="text-3xl font-normal text-neutral-900 mb-2">
//                                                 {solution.title}
//                                             </h3>
//                                             <p className="text-base text-neutral-500">
//                                                 {solution.subtitle}
//                                             </p>
//                                         </div>

//                                         {/* Status */}
//                                         {solution.status === 'live' ? (
//                                             <span
//                                                 className="px-3 py-1 text-xs font-medium text-white rounded-md flex items-center gap-1.5"
//                                                 style={{ backgroundColor: solution.color }}
//                                             >
//                                                 <span className="w-1.5 h-1.5 bg-white rounded-full" />
//                                                 Live
//                                             </span>
//                                         ) : (
//                                             <span className="px-3 py-1 text-xs font-medium text-neutral-500 bg-neutral-100 rounded-md">
//                                                 Coming Soon
//                                             </span>
//                                         )}
//                                     </div>

//                                     {/* Description */}
//                                     <p className="text-neutral-600 leading-relaxed mb-8 max-w-2xl">
//                                         {solution.description}
//                                     </p>

//                                     {/* CTA */}
//                                     {solution.status === 'live' ? (
//                                         <a
//                                             href={solution.url}
//                                             target="_blank"
//                                             rel="noopener noreferrer"
//                                             className="inline-flex items-center gap-2 text-neutral-900 font-medium hover:gap-3 transition-all duration-300"
//                                         >
//                                             Visit platform
//                                             <ArrowUpRight className="w-5 h-5" />
//                                         </a>
//                                     ) : (
//                                         <button
//                                             disabled
//                                             className="inline-flex items-center gap-2 text-neutral-400 font-medium cursor-not-allowed"
//                                         >
//                                             Notify me
//                                             <ArrowUpRight className="w-5 h-5" />
//                                         </button>
//                                     )}
//                                 </div>
//                             </div>
//                         </div>
//                     ))}
//                 </div>

//                 {/* Bottom section */}
//                 <div className="mt-32 border-t border-neutral-200 pt-16">
//                     <div className="max-w-3xl">
//                         <h2 className="text-4xl font-light text-neutral-900 mb-6">
//                             Need something custom?
//                         </h2>
//                         <p className="text-lg text-neutral-600 mb-8 leading-relaxed">
//                             We build tailored solutions for unique challenges. Tell us what you need, and let's create something great together.
//                         </p>
//                         <a
//                             href="#"
//                             className="inline-flex items-center gap-2 px-6 py-3 bg-neutral-900 text-white font-medium hover:bg-neutral-800 transition-colors duration-300"
//                         >
//                             Get in touch
//                             <ArrowUpRight className="w-5 h-5" />
//                         </a>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }

import React, { useState } from 'react';
import { ExternalLink, ArrowRight, CheckCircle, Clock } from 'lucide-react';

export default function SolutionsPage() {
    const [hoveredId, setHoveredId] = useState(null);

    const solutions = [
        {
            id: 1,
            title: "Quiz Platform",
            category: "Education Technology",
            description: "A comprehensive quiz platform designed to engage users and track learning progress with real-time analytics and customizable assessments.",
            url: "https://quizzes.theniitettey.live",
            status: "live",
            color: "#059669",
            features: ["Real-time Analytics", "Custom Assessments", "Progress Tracking"],
            image: "🎯"
        },
        {
            id: 2,
            title: "Enterprise Suite",
            category: "Business Management",
            description: "All-in-one solution for managing your business operations, from team collaboration to project tracking and resource allocation.",
            status: "coming-soon",
            color: "#4f46e5",
            features: ["Team Collaboration", "Project Tracking", "Resource Management"],
            image: "⚡"
        },
        {
            id: 3,
            title: "AI Assistant",
            category: "Automation & AI",
            description: "Leverage artificial intelligence to automate repetitive tasks, gain insights from your data, and boost productivity across your organization.",
            status: "coming-soon",
            color: "#dc2626",
            features: ["Task Automation", "Data Insights", "Smart Workflows"],
            image: "🤖"
        }
    ];

    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <div className="bg-neutral-900 text-white py-24 px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="max-w-3xl">
                        <p className="text-sm uppercase tracking-wider text-neutral-400 mb-4">
                            Our Solutions
                        </p>
                        <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                            Powerful tools for modern teams
                        </h1>
                        <p className="text-xl text-neutral-300 leading-relaxed">
                            We build platforms that solve real problems. Explore our suite of solutions designed to help you work better.
                        </p>
                    </div>
                </div>
            </div>

            {/* Solutions Grid */}
            <div className="py-20 px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {solutions.map((solution) => (
                            <div
                                key={solution.id}
                                className={`group relative bg-white rounded-lg overflow-hidden transition-all duration-500 ${hoveredId === solution.id
                                        ? 'shadow-2xl -translate-y-2'
                                        : 'shadow-lg'
                                    }`}
                                onMouseEnter={() => setHoveredId(solution.id)}
                                onMouseLeave={() => setHoveredId(null)}
                                style={{
                                    border: `1px solid ${hoveredId === solution.id ? solution.color : '#e5e5e5'}`
                                }}
                            >
                                {/* Header with emoji and status */}
                                <div
                                    className="p-8 pb-6 relative overflow-hidden"
                                    style={{
                                        backgroundColor: hoveredId === solution.id
                                            ? `${solution.color}10`
                                            : '#fafafa'
                                    }}
                                >
                                    <div className="flex items-start justify-between mb-4">
                                        <div className="text-5xl">{solution.image}</div>

                                        {solution.status === 'live' ? (
                                            <div className="flex items-center gap-1.5 px-3 py-1.5 bg-white rounded-full shadow-sm">
                                                <CheckCircle className="w-4 h-4" style={{ color: solution.color }} />
                                                <span className="text-xs font-semibold" style={{ color: solution.color }}>
                                                    Live
                                                </span>
                                            </div>
                                        ) : (
                                            <div className="flex items-center gap-1.5 px-3 py-1.5 bg-white rounded-full shadow-sm">
                                                <Clock className="w-4 h-4 text-neutral-400" />
                                                <span className="text-xs font-semibold text-neutral-500">
                                                    Soon
                                                </span>
                                            </div>
                                        )}
                                    </div>

                                    <p className="text-xs uppercase tracking-wider font-semibold mb-2"
                                        style={{ color: solution.color }}>
                                        {solution.category}
                                    </p>
                                    <h3 className="text-2xl font-bold text-neutral-900">
                                        {solution.title}
                                    </h3>
                                </div>

                                {/* Content */}
                                <div className="p-8 pt-6">
                                    <p className="text-neutral-600 leading-relaxed mb-6">
                                        {solution.description}
                                    </p>

                                    {/* Features List */}
                                    <div className="space-y-2 mb-8">
                                        {solution.features.map((feature, index) => (
                                            <div key={index} className="flex items-center gap-2 text-sm text-neutral-700">
                                                <div
                                                    className="w-1.5 h-1.5 rounded-full"
                                                    style={{ backgroundColor: solution.color }}
                                                />
                                                {feature}
                                            </div>
                                        ))}
                                    </div>

                                    {/* CTA Button */}
                                    {solution.status === 'live' ? (
                                        <a
                                            href={solution.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="group/btn flex items-center justify-center gap-2 w-full px-6 py-3 text-white font-semibold rounded-lg transition-all duration-300 hover:shadow-lg"
                                            style={{
                                                backgroundColor: solution.color,
                                                transform: hoveredId === solution.id ? 'scale(1.02)' : 'scale(1)'
                                            }}
                                        >
                                            Launch Platform
                                            <ExternalLink className="w-4 h-4 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform duration-300" />
                                        </a>
                                    ) : (
                                        <button
                                            disabled
                                            className="flex items-center justify-center gap-2 w-full px-6 py-3 bg-neutral-100 text-neutral-400 font-semibold rounded-lg cursor-not-allowed"
                                        >
                                            Coming Soon
                                            <ArrowRight className="w-4 h-4" />
                                        </button>
                                    )}
                                </div>

                                {/* Hover indicator line */}
                                <div
                                    className="absolute bottom-0 left-0 right-0 h-1 transition-all duration-500"
                                    style={{
                                        backgroundColor: solution.color,
                                        transform: hoveredId === solution.id ? 'scaleX(1)' : 'scaleX(0)',
                                        transformOrigin: 'left'
                                    }}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* CTA Section */}
            <div className="bg-neutral-50 py-24 px-8">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-4xl font-bold text-neutral-900 mb-6">
                        Looking for something specific?
                    </h2>
                    <p className="text-lg text-neutral-600 mb-10 leading-relaxed max-w-2xl mx-auto">
                        We specialize in building custom solutions tailored to your unique needs. Let's discuss how we can help bring your vision to life.
                    </p>
                    <a
                        href="#"
                        className="inline-flex items-center gap-3 px-8 py-4 bg-neutral-900 text-white font-semibold rounded-lg hover:bg-neutral-800 transition-all duration-300 hover:shadow-xl"
                    >
                        Schedule a Consultation
                        <ArrowRight className="w-5 h-5" />
                    </a>
                </div>
            </div>
        </div>
    );
}