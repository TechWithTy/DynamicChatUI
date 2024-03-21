import React from "react";
import { CircleDotIcon, TriangleIcon, PlusCircle } from "lucide-react";

export interface ProjectItemProps {
  label: string;
  icon: JSX.Element;
  isActive?: boolean;
}

const ProjectItem: React.FC<ProjectItemProps> = ({
  icon,
  label,
  isActive = false,
}) => (
  <div
    className={`flex items-center rounded-lg px-3 py-2 text-sm font-medium ${
      isActive
        ? "bg-gray-700 text-white"
        : "text-gray-400 hover:bg-gray-700 hover:text-white"
    }`}
  >
    {icon}
    <span className="ml-3">{label}</span>
  </div>
);

const ProjectsList = () => (
  <aside className="projects-sidebar">
    <div className="projects-container space-y-1">
      <ProjectItem
        icon={<CircleDotIcon size={16} className="text-red-500" />}
        label="Orbital Odyssey"
      />
      <ProjectItem
        icon={<TriangleIcon size={16} className="text-orange-500" />}
        label="Digital Product Launch"
      />
      <ProjectItem
        icon={<CircleDotIcon size={16} className="text-blue-500" />}
        label="Brand Refresh"
      />
      <ProjectItem
        icon={<TriangleIcon size={16} className="text-green-500" />}
        label="Social Media Strategy"
      />
      <div className="flex items-center rounded-lg px-3 py-2 text-sm font-medium text-gray-400 hover:bg-gray-700 hover:text-white">
        <PlusCircle size={16} />
        <span className="ml-3">Add new project</span>
      </div>
    </div>
  </aside>
);

export default ProjectsList;
