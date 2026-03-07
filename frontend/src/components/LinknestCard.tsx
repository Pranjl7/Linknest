import { Eye, Sparkles, Link as LinkIcon } from "lucide-react";

export type TagColor = "pink" | "purple" | "orange" | "blue" | "green";

// export interface Tag {
//   title: string;
//   color: TagColor;
// }

interface LinknestCardProps {
  title: string;
  url: string;
  status: string;
  author: string;
  type: string;
  tags: string[];
}

const colorStyles: Record<TagColor, string> = {
  pink: "text-pink-600 dark:text-[#ed64a6] border-pink-200 dark:border-[#ed64a6]/30 bg-pink-50 dark:bg-[#ed64a6]/10",
  purple:
    "text-purple-600 dark:text-[#9f7aea] border-purple-200 dark:border-[#9f7aea]/30 bg-purple-50 dark:bg-[#9f7aea]/10",
  orange:
    "text-orange-600 dark:text-[#ed8936] border-orange-200 dark:border-[#ed8936]/30 bg-orange-50 dark:bg-[#ed8936]/10",
  blue: "text-blue-600 dark:text-[#63b3ed] border-blue-200 dark:border-[#63b3ed]/30 bg-blue-50 dark:bg-[#63b3ed]/10",
  green:
    "text-green-600 dark:text-[#48bb78] border-green-200 dark:border-[#48bb78]/30 bg-green-50 dark:bg-[#48bb78]/10",
};

const getTagColor = (tag: string): TagColor => {
  const colors: TagColor[] = ["pink", "purple", "orange", "blue", "green"];
  let hash = 0;
  for (let i = 0; i < tag.length; i++) {
    hash = tag.charCodeAt(i) + ((hash << 5) - hash);
  }
  return colors[Math.abs(hash) % colors.length];
};

export function LinknestCard({
  title,
  url,
  status,
  author,
  type,
  tags,
}: LinknestCardProps) {
  return (
    <div className="flex flex-col p-5 rounded-2xl bg-white dark:bg-[#111214] border border-gray-200 dark:border-[#2d2d33] hover:border-gray-300 dark:hover:border-[#4d4d55] transition-colors duration-300 w-full relative group shadow-sm hover:shadow-lg dark:shadow-none">
      {/* Top Header Section */}
      <div className="flex justify-between items-start mb-4">
        <div className="flex items-center gap-2 px-2.5 py-1 rounded-full border border-green-200 dark:border-[#1c4028] bg-green-50 dark:bg-[#0c2415] transition-colors duration-300">
          <div className="w-1.5 h-1.5 rounded-full bg-green-500 dark:bg-[#34d399] shadow-[0_0_6px_rgba(34,197,94,0.4)] dark:shadow-[0_0_6px_#34d399]"></div>
          <span className="text-[11px] font-medium text-green-700 dark:text-[#34d399]">
            {status}
          </span>
        </div>
      </div>

      {/* Title & Author */}
      <h3 className="text-[1.15rem] font-bold text-gray-900 dark:text-white mb-2 leading-tight transition-colors duration-300">
        {title}
      </h3>
      <p className="text-xs text-gray-500 dark:text-gray-400 mb-6 transition-colors duration-300">
        Posted by{" "}
        <span className="text-gray-700 dark:text-gray-300 font-medium transition-colors duration-300">
          {author}
        </span>
      </p>

      {/* Post Link */}
      <div className="mb-5 flex items-center gap-2 overflow-hidden">
        <LinkIcon
          size={14}
          className="text-gray-400 dark:text-gray-500 shrink-0 transition-colors duration-300"
        />
        <a
          href={url}
          target="_blank"
          rel="noreferrer"
          className="text-[12px] font-medium text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 hover:underline truncate transition-colors duration-300"
        >
          {url === "#" ? "https://example.com/post/xyz-random-link" : url}
        </a>
      </div>

      {/* Type */}
      {type && (
        <div className="mb-5 flex items-center gap-3">
          <h4 className="text-[10px] uppercase tracking-[0.15em] font-bold text-gray-500 transition-colors duration-300">
            Type
          </h4>
          <span className="px-2.5 py-1 rounded-md text-[11px] font-medium text-gray-600 dark:text-gray-400 bg-gray-50 dark:bg-[#16171a] border border-gray-200 dark:border-[#2d2d33] transition-colors duration-300">
            {type}
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
                className={`px-2.5 py-1 rounded-md text-[11px] font-medium border ${colorStyles[getTagColor(tag)]}`}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Bottom Actions */}
      <div className="mt-auto">
        <div className="h-px w-full bg-gray-100 dark:bg-[#2d2d33] mb-4 transition-colors duration-300"></div>
        <div className="flex gap-3">
          <a
            href={url}
            className="flex-1 flex items-center justify-center gap-2 py-2 rounded-xl border border-gray-200 dark:border-[#2d2d33] bg-gray-50 dark:bg-[#16171a] hover:bg-gray-100 dark:hover:bg-[#202126] text-[13px] font-medium text-gray-700 dark:text-gray-200 transition-colors duration-300 group cursor-pointer"
          >
            <Eye
              size={15}
              className="text-gray-400 group-hover:text-black dark:group-hover:text-white transition-colors duration-300"
            />
            View Link
          </a>
          <button className="flex-1 flex items-center justify-center gap-2 py-2 rounded-xl border border-gray-200 dark:border-[#2d2d33] bg-gray-50 dark:bg-[#16171a] hover:bg-gray-100 dark:hover:bg-[#202126] text-[13px] font-medium text-gray-700 dark:text-gray-200 transition-colors duration-300 group cursor-pointer">
            <Sparkles
              size={15}
              className="text-blue-600 dark:text-blue-500 group-hover:text-blue-500 dark:group-hover:text-blue-400 transition-colors duration-300"
            />
            Ask Ai
          </button>
        </div>
      </div>
    </div>
  );
}
