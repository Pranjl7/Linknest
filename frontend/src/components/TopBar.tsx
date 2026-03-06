import { Plus, Home, NotebookText, Sparkles, LinkIcon } from 'lucide-react';

export function TopBar() {

  return (
    <header className="flex items-center justify-between mb-8 pt-6">
      {/* Top Left Navigation */}
      <nav className="flex items-center h-12 rounded-lg bg-white dark:bg-[#161618] border border-gray-200 dark:border-[#2d2d33] overflow-hidden shadow-sm dark:shadow-none transition-colors duration-300">
        <div className="flex items-center px-2 h-full">
          <button className="px-3 h-full text-gray-400 dark:text-[#9ca3af] hover:text-gray-900 dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/5 transition-colors flex items-center justify-center">
            <Home size={18} />
          </button>
          <button className="px-3 h-full text-gray-400 dark:text-[#9ca3af] hover:text-gray-900 dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/5 transition-colors flex items-center justify-center">
            <NotebookText size={18} />
          </button>
        </div>
        
        <div className="w-[1px] h-6 bg-gray-200 dark:bg-[#2d2d33] transition-colors duration-300"></div>
        
        <div className="flex items-center px-2 h-full">
          <button 
            className="px-3 h-full text-gray-400 dark:text-[#9ca3af] hover:text-blue-500 dark:hover:text-blue-400 hover:bg-black/5 dark:hover:bg-white/5 transition-colors flex items-center justify-center group"
            aria-label="Ask AI"
          >
            <Sparkles size={18} className="transition-transform duration-300 group-hover:scale-110" />
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
          <LinkIcon size={14} className="text-gray-400 dark:text-gray-500 shrink-0 transition-colors duration-300" />
          <span>Share Nest</span>
        </button>
      </div>
    </header>
  );
}
