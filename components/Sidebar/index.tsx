"use client";
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
  ChevronLeft,
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
      ? "bg-slate-500 text-white dark:bg-gray-700"
      : "text-gray-400 hover:bg-gray-700 hover:text-white"
      }`}
  >
    {icon}
    <span className="ml-3">{label}</span>
  </a>
);

const Sidebar: React.FC<SidebarProps> = (props) => {
  const [isSidePanelOpen, setIsSidePanelOpen] = useState(true);

  return (
    <div className="relative lg:text-sm xl:text-base w-fit">
      <button
        onClick={() => setIsSidePanelOpen(!isSidePanelOpen)}
        className={` z-30  ${isSidePanelOpen
          ? " absolute left-64 lg:left-full top-1/2"
          : "absolute left-0 top-1/2"
          }  hover:animate-ping`}
      >
        {isSidePanelOpen ? <ChevronLeft /> : <ChevronRight />}
      </button>
      <aside
        className={` left-0 top-0 z-10 h-full w-64 
        transform overflow-auto transition-all duration-300 ease-in-out l
        g:relative lg:flex flex  flex-col rounded-r-lg bg-slate-300 lg:mt-0  dark:bg-gray-800 
        ${isSidePanelOpen ? "fixed lg:relative lg:w-64" : "relative -translate-x-full w-0 hidden"
          } mt-16 `}
      >
        {/* Logo or Brand Name */}
        <div className="flex h-16 shrink-0 items-center justify-center gap-3 px-4">
          {/* You can replace this with an actual logo image if you have one */}
          {
            <Image
              src={
                props.organizationLogo ??
                `https://api.dicebear.com/7.x/initials/svg?seed=${props.organizationName}&backgroundColor=7cb342,c0aede,b6e3f4,8e24aa,d81b60,d1d4f9&backgroundType=gradientLinear`
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
            <span className="ml-3 text-sm font-medium text-gray-400">
              Ryan Lee
            </span>
          </div>
        </div>
      </aside>
    </div>
  );
};

export default Sidebar;
