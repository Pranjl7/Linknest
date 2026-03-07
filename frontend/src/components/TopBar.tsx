import { Plus, Home, NotebookText, Sparkles, LinkIcon, LogOut } from "lucide-react";
import { Link, NavLink, useLocation } from "react-router-dom";

export interface TopBarProps {
  onOpenCreateModal?: () => void;
}

export function TopBar({ onOpenCreateModal }: TopBarProps) {
  const location = useLocation();

  return (
    <header className="flex items-center justify-between mb-8 pt-2">
      {/* Top Left Navigation */}
      <nav className="flex items-center h-11 rounded-lg bg-white dark:bg-[#161618] border border-gray-200 dark:border-[#2d2d33] overflow-hidden shadow-sm dark:shadow-none transition-colors duration-300">
        <div className="flex items-center px-2 h-full">
          <Link
            to="/"
            className={`px-3 h-full hover:text-gray-900 dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/5 transition-colors flex items-center justify-center cursor-pointer ${location.pathname === "/" ? "text-gray-900 dark:text-white bg-black/5 dark:bg-white/5" : "text-gray-400 dark:text-[#9ca3af]"}`}
          >
            <Home size={18} />
          </Link>
          <Link
            to="/about"
            className={`px-3 h-full hover:text-gray-900 dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/5 transition-colors flex items-center justify-center cursor-pointer ${location.pathname === "/about" ? "text-gray-900 dark:text-white bg-black/5 dark:bg-white/5" : "text-gray-400 dark:text-[#9ca3af]"}`}
          >
            <NotebookText size={18} />
          </Link>
        </div>

        <div className="w-px h-[22px] bg-gray-200 dark:bg-[#2d2d33] transition-colors duration-300"></div>

        <div className="flex items-center px-2 h-full">
          <NavLink
            to={"/chatbot"}
            className={({ isActive }) =>
              `px-3 h-full hover:text-blue-500 dark:hover:text-blue-400 hover:bg-black/5 dark:hover:bg-white/5 transition-colors flex items-center justify-center group cursor-pointer ${
                isActive
                  ? "text-gray-900 dark:text-white bg-black/5 dark:bg-white/5"
                  : "text-gray-400 dark:text-[#9ca3af]"
              }`
            }
            aria-label="Ask AI"
          >
            <Sparkles
              size={18}
              className="transition-transform duration-300 group-hover:scale-110"
            />
          </NavLink>
        </div>

        <div className="w-px h-[22px] bg-gray-200 dark:bg-[#2d2d33] transition-colors duration-300"></div>

        <div className="flex items-center px-2 h-full">
          <button
            className="px-3 h-full text-gray-400 dark:text-[#9ca3af] hover:text-red-500 dark:hover:text-red-400 hover:bg-black/5 dark:hover:bg-white/5 transition-colors flex items-center justify-center group cursor-pointer"
            aria-label="Logout"
          >
            <LogOut size={18} className="transition-transform duration-300 group-hover:scale-110" />
          </button>
        </div>
      </nav>

      {/* Top Right Actions */}
      <div className="flex items-center gap-4">
        <button 
          onClick={onOpenCreateModal}
          className="flex items-center gap-1.5 px-5 py-2 rounded-full bg-white text-black text-sm font-bold hover:bg-gray-200 hover:scale-100 active:scale-95 transition-all duration-200 shadow-sm cursor-pointer"
        >
          <Plus size={17} strokeWidth={2.5} />
          <span>New Link</span>
        </button>
        <button className="flex items-center gap-1.5 px-5 py-2 rounded-full bg-surface border border-border text-text-primary text-sm font-bold hover:bg-surface-hover hover:border-gray-400 hover:scale-100 active:scale-95 transition-all duration-200 shadow-sm cursor-pointer">
          <LinkIcon
            size={14}
            className="text-gray-400 dark:text-gray-500 shrink-0 transition-colors duration-300"
          />
          <span>Share Nest</span>
        </button>
      </div>
    </header>
  );
}
