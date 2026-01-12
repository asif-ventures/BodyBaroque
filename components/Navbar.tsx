
import React from 'react';

interface NavbarProps {
  isScrolled: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ isScrolled }) => {
  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-6'
    }`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <div className="h-10 flex items-center">
            {/* Using the specific Logo URL from the user's provided brand assets */}
            <img 
              src="https://blackbox.fashion/cdn/shop/files/Body_Baroque_Logo_Final_300x.png?v=1712234567" 
              alt="Body Baroque" 
              className={`h-full w-auto object-contain transition-all duration-300 ${isScrolled ? 'brightness-0' : 'brightness-0 invert'}`}
            />
          </div>
        </div>
        
        <div className="hidden md:flex space-x-8 items-center">
          {['Vision', 'Story', 'Concept'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className={`text-[11px] font-semibold tracking-[0.2em] uppercase transition-colors ${
                isScrolled ? 'text-gray-600 hover:text-black' : 'text-white/80 hover:text-white'
              }`}
            >
              {item}
            </a>
          ))}
          
          {/* Community with Bullet Point */}
          <a
            href="#community"
            className={`text-[11px] font-semibold tracking-[0.2em] uppercase transition-colors flex items-center gap-2 ${
              isScrolled ? 'text-gray-600 hover:text-black' : 'text-white/80 hover:text-white'
            }`}
          >
            <span className="text-[8px] opacity-60">●</span> Community
          </a>

          <a
            href="#contact"
            className={`text-[11px] font-semibold tracking-[0.2em] uppercase transition-colors ${
              isScrolled ? 'text-gray-600 hover:text-black' : 'text-white/80 hover:text-white'
            }`}
          >
            Contact
          </a>

          <button className={`px-6 py-2 rounded-full text-[11px] font-bold tracking-widest uppercase transition-all ${
            isScrolled 
              ? 'bg-black text-white hover:bg-gray-800' 
              : 'bg-white text-black hover:bg-gray-100'
          }`}>
            Get Started
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
