// import React from 'react'
// import Navbar from './Navbar'

// const HeroSection = () => {
//   return (
//     <>
//       <section className='scroll-mt-16 min-h-screen text-white bg-black flex items-center'>
//         <div className='px-4 md:px-6 mx-auto text-center tracking-tighter'>
//           <h1 className='text-6xl md:text-8xl'>
//             Transform Ideas Into <br />
//             Digital Success
//           </h1>
//           <h3 className='text-xl md:text-2xl font-extralight mt-8 text-gray-300'>
//             We're your partner in product design, website creation, <br />
//             and branding for every stage of your business.
//           </h3>
//           <div className='space-x-5 mt-8'>
//             <button className='bg-white text-black border px-6 py-2 rounded-lg hover:bg-transparent hover:text-white hover:border-gray-500 transition-all duration-500'>
//               Get Started
//             </button>
//             <button className="text-white px-6 py-2 rounded-lg border border-gray-500 hover:text-black hover:bg-white hover:border-none transition-all duration-500">
//               Contact
//             </button>
//           </div>
//         </div>
//       </section>
//     </>
//   )
// }

// export default HeroSection
import React, { useState, useEffect } from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

const HeroSection = () => {
  const [visible, setVisible] = useState({
    heading: false,
    subheading: false,
    buttons: false
  });

  useEffect(() => {
    // Staggered animation timing
    setTimeout(() => setVisible(prev => ({ ...prev, heading: true })), 200);
    setTimeout(() => setVisible(prev => ({ ...prev, subheading: true })), 600);
    setTimeout(() => setVisible(prev => ({ ...prev, buttons: true })), 1000);
  }, []);

  return (
    <section className='relative scroll-mt-16 min-h-screen text-white bg-black flex items-center overflow-hidden'>
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-40">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-500 rounded-full blur-3xl opacity-30 animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-green-400 rounded-full blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-teal-500 rounded-full blur-3xl opacity-25 animate-pulse" style={{ animationDelay: '4s' }} />
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: `linear-gradient(rgba(16, 185, 129, 0.1) 1px, transparent 1px),
                         linear-gradient(90deg, rgba(16, 185, 129, 0.1) 1px, transparent 1px)`,
        backgroundSize: '50px 50px'
      }} />

      {/* Floating particles */}
      {[...Array(20)].map((_, i) => (
        <div
          key={i}
          className="absolute w-2 h-2 bg-emerald-400 rounded-full opacity-20"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animation: `float ${5 + Math.random() * 10}s ease-in-out infinite`,
            animationDelay: `${Math.random() * 5}s`
          }}
        />
      ))}

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          25% { transform: translateY(-20px) translateX(10px); }
          50% { transform: translateY(-10px) translateX(-10px); }
          75% { transform: translateY(-30px) translateX(5px); }
        }
        
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        .animate-slide-up {
          animation: slideUp 0.8s ease-out forwards;
        }
        
        .animate-fade-in {
          animation: fadeIn 0.6s ease-out forwards;
        }
      `}</style>

      <div className='relative z-10 px-4 md:px-6 mx-auto text-center tracking-tighter w-full'>
        {/* Decorative badge */}
        <div className={`inline-flex items-center gap-2 px-4 py-2 bg-emerald-500/10 backdrop-blur-sm border border-emerald-500/20 rounded-full mb-8 ${visible.heading ? 'animate-fade-in' : 'opacity-0'
          }`}>
          <Sparkles className="w-4 h-4 text-emerald-400" />
          <span className="text-sm text-emerald-400 font-medium">Digital Excellence</span>
        </div>

        {/* Main Heading with staggered word animation */}
        <h1 className={`text-6xl md:text-8xl font-bold leading-tight mb-8 ${visible.heading ? 'animate-slide-up' : 'opacity-0'
          }`}>
          <span className="inline-block">Transform Ideas Into</span>
          <br />
          <span className="inline-block bg-gradient-to-r from-emerald-400 via-teal-400 to-green-400 bg-clip-text text-transparent mt-2">
            Digital Success
          </span>
        </h1>

        {/* Subheading */}
        <h3 className={`text-xl md:text-2xl font-light mt-8 text-gray-300 max-w-3xl mx-auto leading-relaxed ${visible.subheading ? 'animate-slide-up' : 'opacity-0'
          }`} style={{ animationDelay: '0.2s' }}>
          We're your partner in product design, website creation,
          <br className="hidden md:block" />
          and branding for every stage of your business.
        </h3>

        {/* Buttons */}
        <div className={`flex flex-col sm:flex-row gap-4 justify-center mt-12 ${visible.buttons ? 'animate-slide-up' : 'opacity-0'
          }`} style={{ animationDelay: '0.3s' }}>
          <button className='group relative px-8 py-4 bg-emerald-500 text-white font-semibold rounded-xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-emerald-500/50 hover:scale-105'>
            <span className="relative z-10 flex items-center justify-center gap-2">
              Get Started
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-teal-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </button>

          <button className="group px-8 py-4 text-white font-semibold rounded-xl border-2 border-gray-600 hover:border-emerald-500 hover:bg-emerald-500/10 transition-all duration-300 hover:scale-105 relative overflow-hidden">
            <span className="relative z-10 flex items-center justify-center gap-2">
              Contact Us
              <span className="w-2 h-2 bg-emerald-400 rounded-full group-hover:animate-ping" />
            </span>
          </button>
        </div>

        {/* Scroll indicator */}
        <div className="mt-20 animate-bounce">
          <div className="w-6 h-10 border-2 border-gray-600 rounded-full mx-auto flex justify-center">
            <div className="w-1.5 h-3 bg-emerald-400 rounded-full mt-2 animate-pulse" />
          </div>
          <p className="text-gray-500 text-sm mt-3">Scroll to explore</p>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent" />
    </section>
  );
};

export default HeroSection;