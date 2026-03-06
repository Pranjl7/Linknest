import { Home, NotebookText, Github, Linkedin, Twitter, Mail, Moon, Sun } from 'lucide-react';
import { useState, useEffect } from 'react';

export function FloatingNav() {
  const [isLight, setIsLight] = useState(false);

  useEffect(() => {
    if (isLight) {
      document.documentElement.classList.add('light');
    } else {
      document.documentElement.classList.remove('light');
    }
  }, [isLight]);

  return (
    <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 pointer-events-none">
      <nav className="flex items-center h-12 rounded-full bg-[#161618] border border-[#2d2d33] shadow-[0_8px_32px_rgba(0,0,0,0.6)] pointer-events-auto overflow-hidden">
        
        {/* Left Section (Home, Notes) */}
        <div className="flex items-center px-2 h-full">
          <button className="px-3 h-full text-[#9ca3af] hover:text-white hover:bg-white/5 transition-colors flex items-center justify-center">
            <Home size={18} />
          </button>
          <button className="px-3 h-full text-[#9ca3af] hover:text-white hover:bg-white/5 transition-colors flex items-center justify-center">
            <NotebookText size={18} />
          </button>
        </div>
        
        {/* First Divider */}
        <div className="w-[1px] h-6 bg-[#2d2d33]"></div>

        {/* Middle Section (Socials/Mail) */}
        <div className="flex items-center px-2 h-full">
          <button className="px-3 h-full text-[#9ca3af] hover:text-white hover:bg-white/5 transition-colors flex items-center justify-center">
            <Github size={18} />
          </button>
          <button className="px-3 h-full text-[#9ca3af] hover:text-white hover:bg-white/5 transition-colors flex items-center justify-center">
            <Linkedin size={18} />
          </button>
          <button className="px-3 h-full text-[#9ca3af] hover:text-white hover:bg-white/5 transition-colors flex items-center justify-center">
            <Twitter size={18} />
          </button>
          <button className="px-3 h-full text-[#9ca3af] hover:text-white hover:bg-white/5 transition-colors flex items-center justify-center">
            <Mail size={18} />
          </button>
        </div>

        {/* Second Divider */}
        <div className="w-[1px] h-6 bg-[#2d2d33]"></div>
        
        {/* Right Section (Theme Toggle) */}
        <div className="flex items-center px-2 h-full">
          <button 
            onClick={() => setIsLight(!isLight)}
            className="px-3 h-full text-[#9ca3af] hover:text-white hover:bg-white/5 transition-colors flex items-center justify-center group"
            aria-label="Toggle Theme"
          >
            {isLight ? <Sun size={18} className="group-hover:rotate-45 transition-transform duration-300" /> : <Moon size={18} className="group-hover:-rotate-12 transition-transform duration-300" />}
          </button>
        </div>

      </nav>
    </div>
  );
}
