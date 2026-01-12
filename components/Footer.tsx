
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-[#111] text-white pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-8">
              <img 
                src="https://blackbox.fashion/cdn/shop/files/Body_Baroque_Logo_Final_300x.png?v=1712234567" 
                alt="Body Baroque" 
                className="h-8 w-auto brightness-0 invert"
              />
            </div>
            <p className="text-gray-400 max-w-md text-sm leading-relaxed mb-10 tracking-wide">
              A luxury boutique experience for the modern aesthetic. We curate identity through trend-aware styling and global fashion insights.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs tracking-widest uppercase font-semibold text-gray-500">
              <p className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-[#447043] rounded-full"></span> Bangalore, India</p>
              <p className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-[#447043] rounded-full"></span> Sales@blackbox.fashion</p>
              <p className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-[#447043] rounded-full"></span> +91-9661689666</p>
            </div>
          </div>
          
          <div>
            <h4 className="text-[10px] font-bold mb-8 uppercase tracking-[0.3em] text-[#447043]">Discovery</h4>
            <ul className="space-y-4 text-xs tracking-widest uppercase font-medium text-gray-400">
              <li><a href="#vision" className="hover:text-white transition-colors">Vision</a></li>
              <li><a href="#story" className="hover:text-white transition-colors">Story</a></li>
              <li><a href="#concept" className="hover:text-white transition-colors">Concept</a></li>
              <li><a href="#community" className="hover:text-white transition-colors">Community</a></li>
              <li><a href="#mapping" className="hover:text-white transition-colors">Mapping</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-[10px] font-bold mb-8 uppercase tracking-[0.3em] text-[#447043]">Connect</h4>
            <ul className="space-y-4 text-xs tracking-widest uppercase font-medium text-gray-400">
              <li><a href="https://blackbox.fashion" target="_blank" className="hover:text-white transition-colors">Shop Online</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Instagram</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Pinterest</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/5 pt-12 flex flex-col md:flex-row justify-between items-center text-[10px] tracking-[0.2em] uppercase text-gray-600 font-bold">
          <p>© 2024 Body Baroque by Blackbox.fashion</p>
          <div className="flex gap-10 mt-6 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
