import { Eye, BadgeCheck } from 'lucide-react';

export type TagColor = 'pink' | 'purple' | 'orange' | 'blue' | 'green';

export interface Tag {
  name: string;
  color: TagColor;
}

interface LinknestCardProps {
  title: string;
  url: string;
  status: string;
  author: string;
  type: Tag;
  tags: Tag[];
}

const colorStyles: Record<TagColor, string> = {
  pink: "text-[#ed64a6] border-[#ed64a6]/30 bg-[#ed64a6]/10",
  purple: "text-[#9f7aea] border-[#9f7aea]/30 bg-[#9f7aea]/10",
  orange: "text-[#ed8936] border-[#ed8936]/30 bg-[#ed8936]/10",
  blue: "text-[#63b3ed] border-[#63b3ed]/30 bg-[#63b3ed]/10",
  green: "text-[#48bb78] border-[#48bb78]/30 bg-[#48bb78]/10",
};

export function LinknestCard({ title, url, status, author, type, tags }: LinknestCardProps) {
  return (
    <div className="flex flex-col p-5 rounded-2xl bg-[#111214] border border-[#2d2d33] hover:border-[#4d4d55] transition-colors w-full relative group shadow-sm hover:shadow-lg dark:shadow-none">
      
      {/* Top Header Section */}
      <div className="flex justify-between items-start mb-4">
        <div className="flex items-center gap-2 px-2.5 py-1 rounded-full border border-[#1c4028] bg-[#0c2415]">
          <div className="w-1.5 h-1.5 rounded-full bg-[#34d399] shadow-[0_0_6px_#34d399]"></div>
          <span className="text-[11px] font-medium text-[#34d399]">{status}</span>
        </div>
      </div>

      {/* Title & Author */}
      <h3 className="text-[1.15rem] font-bold text-white mb-2 leading-tight">
        {title}
      </h3>
      <p className="text-xs text-gray-500 mb-6">
        Posted by <span className="text-gray-300 font-medium">{author}</span>
      </p>

      {/* Type */}
      {type && (
        <div className="mb-5 flex items-center gap-3">
          <h4 className="text-[10px] uppercase tracking-[0.15em] font-bold text-gray-500">
            Type
          </h4>
          <span className="px-2.5 py-1 rounded-md text-[11px] font-medium text-gray-400 bg-[#16171a] border border-[#2d2d33]">
            {type.name}
          </span>
        </div>
      )}

      {/* Tags */}
      {tags && tags.length > 0 && (
        <div className="mb-8">
          <h4 className="text-[10px] uppercase tracking-[0.15em] font-bold text-gray-500 mb-2.5">
            Tags
          </h4>
          <div className="flex flex-wrap gap-2">
            {tags.map((tag, idx) => (
              <span 
                key={idx} 
                className={`px-2.5 py-1 rounded-md text-[11px] font-medium border ${colorStyles[tag.color] || colorStyles.blue}`}
              >
                {tag.name}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Bottom Actions */}
      <div className="mt-auto">
        <div className="h-[1px] w-full bg-[#2d2d33] mb-4"></div>
        <div className="flex gap-3">
          <a 
            href={url}
            className="flex-1 flex items-center justify-center gap-2 py-2 rounded-xl border border-[#2d2d33] bg-[#16171a] hover:bg-[#202126] text-[13px] font-medium text-gray-200 transition-colors"
          >
            <Eye size={15} className="text-gray-400 group-hover:text-white transition-colors" />
            View Link
          </a>
          <button className="flex-1 flex items-center justify-center gap-2 py-2 rounded-xl border border-[#2d2d33] bg-[#16171a] hover:bg-[#202126] text-[13px] font-medium text-gray-200 transition-colors">
            <BadgeCheck size={15} className="text-blue-500 group-hover:text-blue-400 transition-colors" />
            Ask Ai
          </button>
        </div>
      </div>
    </div>
  );
}
