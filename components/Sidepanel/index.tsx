import React from "react";
import {
  Home,
  FileText,
  Monitor,
  Coffee,
  MessageCircle,
  PlusCircle,
  User,
} from "lucide-react";
import { CircleDotIcon, TriangleIcon } from "lucide-react";
import ProjectsList from "./projectsList";
interface SidebarProps {
  // Add any props here if needed
}
interface ProjectItemProps {
  label: string;
  icon: JSX.Element;
  isActive?: boolean;
}

// Provide the array with the correct type
const projectData: ProjectItemProps[] = [
  {
    label: "Orbital Odyssey",
    icon: <CircleDotIcon size={20} className="text-red-500" />,
    isActive: false,
  },
  {
    label: "Digital Product Launch",
    icon: <TriangleIcon size={20} className="text-orange-500" />,
    isActive: true,
  },
  // ... more project items
];

const ProjectsListDynamic = () => (
  <aside className="projects-sidebar">
    <div className="projects-container space-y-1">
      {projectData.map((project, index) => (
        <ProjectsList
          key={index}
          icon={project.icon}
          label={project.label}
          isActive={project.isActive}
        />
      ))}
      {/* Assuming PlusCircle is for adding a new project */}
    </div>
  </aside>
);

const SidebarItem = ({
  icon,
  label,
  isActive = false,
}: {
  icon: React.ReactNode;
  label: string;
  isActive?: boolean;
}) => (
  <a
    href="#"
    className={`flex items-center rounded-lg px-3 py-2 text-sm font-medium ${
      isActive
        ? "bg-gray-700 text-white"
        : "text-gray-400 hover:bg-gray-700 hover:text-white"
    }`}
  >
    {icon}
    <span className="ml-3">{label}</span>
  </a>
);

const Sidebar: React.FC<SidebarProps> = () => (
  <aside className="flex h-full min-h-screen w-16 flex-col bg-gray-800 md:w-64">
    {/* Logo or Brand Name */}
    <div className="flex h-16 shrink-0 items-center justify-center px-4">
      {/* You can replace this with an actual logo image if you have one */}
      <img
        src="path-to-your-logo.png"
        alt="Organization Logo"
        className="h-12 w-auto"
      />
    </div>

    <div className="flex-grow overflow-y-auto">
      <nav className="mt-5 space-y-1 px-2">
        {/* The actual navigation items */}
        <SidebarItem
          icon={<Home size={20} className="text-gray-400" />}
          label="Search"
          isActive
        />
        <SidebarItem
          icon={<FileText size={20} className="text-gray-400" />}
          label="Billing"
        />
        {/* Add more nav items as needed */}
      </nav>
    </div>

    {/* Bottom part of the sidebar for additional actions or profile */}
    <div className="mt-auto px-2 pb-4 pt-4">
      <SidebarItem
        icon={<PlusCircle size={20} className="text-gray-400" />}
        label="Add new project"
      />
      {/* Profile Section */}
      <div className="mt-4 flex items-center px-3 py-2">
        <User size={20} className="text-gray-400" />
        <span className="ml-3 text-sm font-medium text-gray-400">Ryan Lee</span>
      </div>
    </div>
  </aside>
);

export default Sidebar;
