import { Github } from 'lucide-react';

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
        <button className="px-6 py-2.5 rounded-2xl bg-surface border border-border text-sm font-medium text-text-primary hover:bg-surface-hover hover:border-gray-500 hover:-translate-y-0.5 transition-all duration-300 shadow-sm">
          Create Link
        </button>
        <button className="px-6 py-2.5 rounded-2xl bg-surface border border-border text-sm font-medium text-text-primary hover:bg-surface-hover hover:border-gray-500 hover:-translate-y-0.5 transition-all duration-300 shadow-sm">
          Share Nest
        </button>
      </div>
    </header>
  );
}
