
import React from 'react';

const Story: React.FC = () => {
  return (
    <div className="bg-[#1a1a1a] text-white py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="order-2 lg:order-1">
            <h3 className="text-[#447043] font-medium tracking-widest uppercase mb-4">Our Story</h3>
            <h2 className="font-serif text-5xl mb-8 leading-tight">We don't just <br/> advise—<span className="italic text-gray-400">we deliver.</span></h2>
            <p className="text-gray-400 text-lg leading-relaxed mb-8">
              At Body Baroque, we believe true style is a blend of current trends and individual identity. As your full-service fashion partner, we provide personalized shopping recommendations and, if desired, the ability to acquire the perfectly-matched apparel directly through our service.
            </p>
            <div className="grid grid-cols-2 gap-8 pt-6">
              <div>
                <span className="block text-4xl font-serif mb-2">10k+</span>
                <span className="text-xs uppercase tracking-widest text-gray-500">Satisfied Clients</span>
              </div>
              <div>
                <span className="block text-4xl font-serif mb-2">50+</span>
                <span className="text-xs uppercase tracking-widest text-gray-500">Global Partners</span>
              </div>
            </div>
          </div>
          
          <div className="order-1 lg:order-2 relative">
            <img 
              src="https://picsum.photos/id/345/800/600" 
              alt="Artistic Fashion" 
              className="rounded-lg filter grayscale hover:grayscale-0 transition-all duration-700"
            />
            <div className="absolute -top-10 -left-10 w-40 h-40 border border-white/10 hidden md:block"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Story;
