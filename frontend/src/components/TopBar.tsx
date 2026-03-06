import { Plus, Home, NotebookText, Moon, Sun } from 'lucide-react';
import { useState, useEffect } from 'react';

export function TopBar() {
  const [isLight, setIsLight] = useState(false);

  useEffect(() => {
    if (isLight) {
      document.documentElement.classList.add('light');
    } else {
      document.documentElement.classList.remove('light');
    }
  }, [isLight]);

  return (
    <header className="flex items-center justify-between mb-8 pt-6">
      {/* Top Left Navigation */}
      <nav className="flex items-center h-12 rounded-full bg-[#161618] border border-[#2d2d33] overflow-hidden">
        <div className="flex items-center px-2 h-full">
          <button className="px-3 h-full text-[#9ca3af] hover:text-white hover:bg-white/5 transition-colors flex items-center justify-center">
            <Home size={18} />
          </button>
          <button className="px-3 h-full text-[#9ca3af] hover:text-white hover:bg-white/5 transition-colors flex items-center justify-center">
            <NotebookText size={18} />
          </button>
        </div>
        
        <div className="w-[1px] h-6 bg-[#2d2d33]"></div>
        
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

      {/* Top Right Actions */}
      <div className="flex items-center gap-4">
        <button className="flex items-center gap-1.5 px-5 py-2 rounded-full bg-white text-black text-sm font-bold hover:bg-gray-200 hover:scale-105 active:scale-95 transition-all duration-200 shadow-sm">
          <Plus size={17} strokeWidth={2.5} />
          <span>New Link</span>
        </button>
        <button className="flex items-center gap-1.5 px-5 py-2 rounded-full bg-surface border border-border text-text-primary text-sm font-bold hover:bg-surface-hover hover:border-gray-500 hover:scale-105 active:scale-95 transition-all duration-200 shadow-sm">
          <span>Share Nest</span>
        </button>
      </div>
    </header>
  );
}
