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

  const navItems = [
    { icon: <Home size={18} />, label: "Home" },
    { icon: <NotebookText size={18} />, label: "Notes" },
    { icon: <Github size={18} />, label: "GitHub" },
    { icon: <Linkedin size={18} />, label: "LinkedIn" },
    { icon: <Twitter size={18} />, label: "X" },
    { icon: <Mail size={18} />, label: "Contact" },
  ];

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 pointer-events-none">
      <nav className="flex items-center gap-1 p-1 rounded-full bg-surface/80 backdrop-blur-md border border-border shadow-lg pointer-events-auto">
        {navItems.map((item, index) => (
          <button 
            key={index} 
            className="p-2.5 rounded-full text-text-secondary hover:text-text-primary hover:bg-black/5 dark:hover:bg-white/10 hover:scale-105 active:scale-95 transition-all duration-200"
            aria-label={item.label}
            title={item.label}
          >
            {item.icon}
          </button>
        ))}
        
        {/* Divider */}
        <div className="w-[1px] h-6 bg-border mx-1"></div>
        
        <button 
          onClick={() => setIsLight(!isLight)}
          className="p-2.5 rounded-full text-text-secondary hover:text-text-primary hover:bg-black/5 dark:hover:bg-white/10 hover:scale-105 active:scale-95 transition-all duration-200"
          aria-label="Toggle Theme"
          title="Toggle Theme"
        >
          {isLight ? <Sun size={18} /> : <Moon size={18} />}
        </button>
      </nav>
    </div>
  );
}
