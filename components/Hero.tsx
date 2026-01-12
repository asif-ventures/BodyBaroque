
import React from 'react';

const Hero: React.FC = () => {
  return (
    <div className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
      {/* Background Image updated to the style of the user provided asset */}
      <img 
        src="https://images.unsplash.com/photo-1537832816519-689ad163238b?q=80&w=2000&auto=format&fit=crop" 
        alt="Body Baroque Aesthetic" 
        className="absolute inset-0 w-full h-full object-cover scale-100 brightness-90"
      />
      
      {/* Overlay to match the lighting in the image */}
      <div className="absolute inset-0 bg-black/20"></div>
      
      <div className="relative z-10 text-center px-6 max-w-5xl">
        <h2 className="text-white text-sm md:text-base tracking-[0.5em] uppercase mb-8 font-light animate-fade-in">
          Body Baroque
        </h2>
        
        <div className="mb-6 relative">
          <h1 className="text-white font-serif text-[80px] md:text-[140px] leading-none lowercase tracking-tighter opacity-95">
            aesthetic
          </h1>
          <h3 className="text-white font-serif text-3xl md:text-5xl italic mt-[-15px] md:mt-[-30px] font-light">
            Body Boutique
          </h3>
        </div>

        <p className="text-white/90 text-sm tracking-[0.2em] uppercase mt-12 mb-10 font-medium">
          Blackbox.fashion
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center mt-12">
          <button className="bg-white text-black px-12 py-4 rounded-full text-xs font-bold tracking-[0.2em] uppercase hover:bg-gray-100 transition-all transform hover:-translate-y-1">
            The Collection
          </button>
          <button className="bg-transparent border border-white text-white px-12 py-4 rounded-full text-xs font-bold tracking-[0.2em] uppercase hover:bg-white/10 transition-all">
            Join the Community
          </button>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center text-white/60 gap-4">
        <div className="w-px h-16 bg-gradient-to-b from-white to-transparent opacity-50"></div>
      </div>
    </div>
  );
};

export default Hero;
