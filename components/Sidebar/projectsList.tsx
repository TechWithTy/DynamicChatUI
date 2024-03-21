import React from "react";
import { CircleDotIcon, TriangleIcon, PlusCircle } from "lucide-react";

export interface ProjectItemProps {
  label: string;
  icon: JSX.Element;
  isActive?: boolean;
}

export interface ProjectListProps {

  list: ProjectItemProps[];
}

const ProjectItem: React.FC<ProjectItemProps> = ({
  icon,
  label,
  isActive = false,
}) => (
  <div
    className={`flex items-center rounded-lg px-3 py-2 text-sm font-medium ${isActive
        ? "bg-gray-700 text-white"
        : "text-gray-400 hover:bg-gray-700 hover:text-white"
      }`}
  >
    {icon}
    <span className="ml-3">{label}</span>
  </div>
);

const ProjectsList: React.FC<ProjectListProps> = ({ list }) => (
  <aside className="projects-sidebar">
    <div className="projects-container space-y-1">
      {list.map((project, index) => (
        <ProjectItem
          key={index}
          icon={project.icon}
          label={project.label}
          isActive={project.isActive}
        />
      ))}
    </div>
  </aside>
);

export default ProjectsList;
