import { ExternalLink, Hash, LayoutGrid } from 'lucide-react';

interface LinknestCardProps {
  title: string;
  url: string;
  type: string;
  tags: string[];
}

export function LinknestCard({ title, url, type, tags }: LinknestCardProps) {
  return (
    <div className="relative group p-6 rounded-[2rem] bg-surface border border-border hover:border-gray-500 hover:shadow-[0_8px_30px_rgba(255,255,255,0.03)] transition-all duration-500 flex flex-col min-h-[220px] overflow-hidden">
      {/* Subtle background glow effect on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
      
      <div className="flex justify-between items-start mb-4 relative z-10 w-full">
        <h3 className="text-xl font-semibold text-text-primary line-clamp-2 leading-snug tracking-tight max-w-[85%] pr-4 group-hover:text-white transition-colors">
          {title}
        </h3>
        <a 
          href={url} 
          target="_blank" 
          rel="noreferrer"
          className="p-2.5 rounded-full bg-white/5 text-text-secondary hover:text-white hover:bg-white/10 hover:scale-110 active:scale-95 transition-all duration-300 shrink-0"
          aria-label="Visit link"
        >
          <ExternalLink size={20} />
        </a>
      </div>

      <div className="mt-auto space-y-4 relative z-10">
        <div className="flex items-center gap-2 text-sm text-text-secondary bg-black/20 w-fit px-3 py-1.5 rounded-xl border border-white/5">
          <LayoutGrid size={16} className="opacity-70" />
          <span className="capitalize font-medium">{type}</span>
        </div>

        <div className="flex flex-wrap gap-2 pt-1">
          {tags.map((tag, idx) => (
            <span 
              key={idx} 
              className="flex items-center px-3 py-1 text-xs font-semibold tracking-wide rounded-lg bg-white/5 text-text-secondary border border-transparent group-hover:border-white/10 group-hover:text-gray-300 transition-colors"
            >
              <Hash size={12} className="opacity-60 mr-1" />
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
