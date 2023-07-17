import React, { useState } from 'react';
import SidebarButton from './sidebar_button';
import HookEvaluatorToolButton from './features/hook_evaluation/hook_evaluator_button';
import ContentRepurposerToolButton from './features/content_repurposer/content_repurposer_button';


const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <button
        className={`fixed top-20 ${
          isOpen ? 'right-80' : 'right-4'
        } z-10 text-white px-4 py-2 rounded transition-transform duration-300`}
        onClick={toggleSidebar}
      >
        <SidebarButton />
      </button>
      <nav
        className={`fixed top-0 ${
          isOpen ? 'right-0' : '-right-80'
        } w-full h-full border-l bg-gray-100 space-y-8 sm:w-80 transition-transform duration-300`}
        style={{ maxWidth: '400px' }} // Adjust the max width as per your requirement
      >
        <div
          className="flex flex-col h-screen mt-40 px-4 overflow-y-auto"
          style={{ maxHeight: 'calc(100vh - 40px)' }}
        >
          <div className="flex flex-col flex-grow">
            <HookEvaluatorToolButton />
            <div style={{ width: '100%', height: '25px', background: 'transparent' }} />
            <ContentRepurposerToolButton/>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Sidebar;
