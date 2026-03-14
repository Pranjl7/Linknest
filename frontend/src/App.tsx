import { useState } from "react";
import { TopBar } from "./components/TopBar";
import { Outlet } from "react-router-dom";
import { CreateLinkModal } from "./components/CreateLinkModal";
import "./index.css";

function App() {
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);

  return (
    <div className="min-h-screen w-full flex flex-col items-center py-2 px-4 sm:px-8 relative dark:bg-[#08090b] bg-[#f8fafc] text-gray-900 dark:text-white transition-colors duration-300 font-montserrat">
      {/* Container restricted to 5xl */}
      <div className="w-full max-w-270 flex flex-col flex-1">
        <TopBar onOpenCreateModal={() => setIsCreateModalOpen(true)} />

        {/* Dynamic Page Content */}
        <div className=" w-full">
          <Outlet />
        </div>
      </div>

      <CreateLinkModal 
        isOpen={isCreateModalOpen} 
        onClose={() => setIsCreateModalOpen(false)} 
      />
    </div>
  );
}

export default App;
