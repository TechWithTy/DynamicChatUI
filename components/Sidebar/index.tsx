'use client'
import React, { useState } from "react";
import {
  Home,
  FileText,
  Monitor,
  Coffee,
  MessageCircle,
  PlusCircle,
  User,
  SquareKanban,
  XCircle,
  ChevronRight,
} from "lucide-react";
import { CircleDotIcon, TriangleIcon } from "lucide-react";
import ProjectsList from "./projectsList";
import Image from "next/image";
interface SidebarProps {
  // Add any props here if needed
  organizationLogo?: string;
  organizationName: string;
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
    className={`flex items-center rounded-lg px-3 py-2 text-sm font-medium ${isActive
      ? "bg-slate-500 dark:bg-gray-700 text-white"
      : "text-gray-400 hover:bg-gray-700 hover:text-white"
      }`}
  >
    {icon}
    <span className="ml-3">{label}</span>
  </a>
);

const Sidebar: React.FC<SidebarProps> = (props) => {

  const [isSidePanelOpen, setIsSidePanelOpen] = useState(false);

  return (

    <div className="relative lg:text-sm xl:text-base">
      <button onClick={() => setIsSidePanelOpen(!isSidePanelOpen)} className={`lg:hidden z-30  ${isSidePanelOpen ? ' absolute left-64' : 'absolute top-1/2 left-0 hover:animate-float'}`}>
        {isSidePanelOpen ? <XCircle /> : <ChevronRight />}
      </button>
      <aside className={`transform top-0 left-0 w-64 fixed h-full lg:relative lg:flex overflow-auto ease-in-out transition-all duration-300 z-10 ${isSidePanelOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'} flex h-full lg:w-full flex-col bg-slate-300 dark:bg-gray-800 mt-16 lg:mt-0`}>
        {/* Logo or Brand Name */}
        <div className="flex h-16 shrink-0 items-center justify-center gap-3 px-4">
          {/* You can replace this with an actual logo image if you have one */}
          {
            <Image
              src={
                props.organizationLogo ??
                `https://api.dicebear.com/7.x/initials/svg?seed=${props.organizationName}`
              }
              alt="Organization Logo"
              className="aspect-square h-6 w-auto rounded-full"
              width={50}
              height={50}
            />
          }
          <span>{props.organizationName}</span>
        </div>
        <div className="flex flex-col overflow-y-auto px-2">
          <span>General</span>
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
        <div className="flex-grow px-2">
          <span>Projects</span>
          <ProjectsList list={projectData} />
          <SidebarItem
            icon={<PlusCircle size={20} className="text-gray-400" />}
            label="Add new project"
          />
        </div>
        {/* Bottom part of the sidebar for additional actions or profile */}
        <div className="mt-auto px-2 pb-4 pt-4">
          {/* Profile Section */}
          <div className="mt-4 flex items-center px-3 py-2">
            <User size={20} className="text-gray-400" />
            <span className="ml-3 text-sm font-medium text-gray-400">Ryan Lee</span>
          </div>
        </div>
      </aside>
    </div>
  )
};

export default Sidebar;
