import React from 'react';
import { PlusCircle,CircleDotIcon , TriangleIcon } from 'lucide-react';

interface ProjectProps {
  name: string;
  isActive?: boolean;
  isAlert?: boolean;
}

const ProjectItem: React.FC<ProjectProps> = ({ name, isActive, isAlert }) => {
  return (
    <div className={`flex items-center p-2 rounded-md cursor-pointer ${isActive ? 'bg-blue-500 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white'}`}>
      {isAlert && <TriangleIcon className="text-red-500 mr-2" />}
      {isActive && !isAlert && <CircleDotIcon className="text-blue-300 mr-2" />}
      <span className="flex-1">{name}</span>
    </div>
  );
};
const SidePanel: React.FC = () => {
  return (
    <aside className="bg-black text-white w-64 p-4 space-y-6">
      <div>
        <h2 className="font-semibold text-lg">GENERAL</h2>
        {/* General items would be here */}
      </div>
      <div>
        <h2 className="font-semibold text-lg">PROJECTS</h2>
        {/* Project items would be mapped here based on data fetched or provided */}
        <ProjectItem name="Orbital Odyssey" isActive />
        <ProjectItem name="Digital Product Launch" isAlert />
        <ProjectItem name="Brand Refresh" />
        <ProjectItem name="Social Media Strategy" />
        <button className="flex items-center p-2 rounded-md cursor-pointer text-gray-300 hover:bg-gray-700 hover:text-white mt-4">
          <PlusCircle className="mr-2" size={18} />
          Add new project
        </button>
      </div>
      <div className="fixed bottom-0 w-64">
        {/* User profile section */}
        <div className="flex items-center justify-between p-4 bg-gray-800 rounded-md">
          <div className="flex items-center space-x-3">
            {/* User image would be here */}
            <span>Ryan Lee</span>
          </div>
          <span className="text-sm text-gray-400">Product</span>
        </div>
      </div>
    </aside>
  );
};

export default SidePanel;