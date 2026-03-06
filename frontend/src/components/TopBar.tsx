import { Plus } from 'lucide-react';

export function TopBar() {
  return (
    <header className="flex items-center justify-end mb-12 py-6">
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
