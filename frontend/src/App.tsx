import { useState } from "react";
import { TopBar } from "./components/TopBar";
import { Heart } from "lucide-react";
import { Outlet } from "react-router-dom";
import { CreateLinkModal } from "./components/CreateLinkModal";
import "./index.css";

function App() {
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);

  return (
    <div className="min-h-screen w-full flex flex-col items-center py-2 px-4 sm:px-8 relative dark:bg-[#08090b] bg-[#f8fafc] text-gray-900 dark:text-white transition-colors duration-300 font-montserrat">
      {/* Container restricted to 5xl */}
      <div className="w-full max-w-5xl flex flex-col min-h-screen">
        <TopBar onOpenCreateModal={() => setIsCreateModalOpen(true)} />

        {/* Dynamic Page Content */}
        <div className=" w-full">
          <Outlet />
        </div>

        {/* Footer */}
        <footer className="w-full flex items-center justify-center gap-1.5 py-8 text-gray-500 text-sm font-archi">
          <span>build with</span>
          <Heart size={14} className="text-red-500 fill-red-500" />
          <span>by</span>
          <a
            href="https://x.com/Pranjltwt"
            target="_blank"
            rel="noreferrer"
            className="hover:text-gray-300 transition-colors"
          >
            Pranjltwt
          </a>
        </footer>
      </div>

      <CreateLinkModal 
        isOpen={isCreateModalOpen} 
        onClose={() => setIsCreateModalOpen(false)} 
      />
    </div>
  );
}

export default App;
