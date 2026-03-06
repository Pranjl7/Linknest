import { Github, Plus } from 'lucide-react';

export function TopBar() {
  return (
    <header className="flex items-center justify-between mb-12 py-6">
      <a 
        href="#" 
        className="w-9 h-9 rounded-full bg-surface border border-border flex items-center justify-center text-text-secondary hover:text-text-primary hover:bg-surface-hover hover:border-gray-500 hover:scale-105 transition-all duration-300"
        aria-label="GitHub Profile"
      >
        <Github size={18} />
      </a>
      
      <div className="flex items-center gap-4">
        <button className="flex items-center gap-1.5 px-5 py-2 rounded-full bg-white text-black text-sm font-bold hover:bg-gray-200 hover:scale-105 active:scale-95 transition-all duration-200 shadow-sm">
          <Plus size={18} strokeWidth={2.5} />
          <span>New Link</span>
        </button>
        <button className="flex items-center gap-1.5 px-5 py-2 rounded-full bg-surface border border-border text-text-primary text-sm font-bold hover:bg-surface-hover hover:border-gray-500 hover:scale-105 active:scale-95 transition-all duration-200 shadow-sm">
          <Plus size={18} strokeWidth={2.5} />
          <span>Share Nest</span>
        </button>
      </div>
    </header>
  );
}
