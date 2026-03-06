import { Home, NotebookText, Github, Linkedin, Twitter, Mail, Moon } from 'lucide-react';

export function FloatingNav() {
  const navItems = [
    { icon: <Home size={20} />, label: "Home" },
    { icon: <NotebookText size={20} />, label: "Notes" },
    { icon: <Github size={20} />, label: "GitHub" },
    { icon: <Linkedin size={20} />, label: "LinkedIn" },
    { icon: <Twitter size={20} />, label: "X" },
    { icon: <Mail size={20} />, label: "Contact" },
  ];

  return (
    <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 pointer-events-none">
      <nav className="flex items-center gap-1 sm:gap-2 p-2 rounded-[2rem] bg-surface/70 backdrop-blur-xl border border-white/10 shadow-2xl pointer-events-auto">
        {navItems.map((item, index) => (
          <button 
            key={index} 
            className="p-3 rounded-full text-text-secondary hover:text-text-primary hover:bg-white/10 hover:scale-110 active:scale-95 transition-all duration-300"
            aria-label={item.label}
            title={item.label}
          >
            {item.icon}
          </button>
        ))}
        
        {/* Divider */}
        <div className="w-[1px] h-8 bg-white/10 mx-1 sm:mx-2"></div>
        
        <button 
          className="p-3 rounded-full text-text-secondary hover:text-text-primary hover:bg-white/10 hover:scale-110 active:scale-95 transition-all duration-300"
          aria-label="Toggle Theme"
          title="Toggle Theme"
        >
          <Moon size={20} />
        </button>
      </nav>
    </div>
  );
}
