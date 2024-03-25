"use client";
import React, { useEffect, useState } from "react";
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
  Settings,
  ChevronUp,
  ChevronDown,
} from "lucide-react";
import { CircleDotIcon, TriangleIcon } from "lucide-react";
import ProjectsList from "./projectsList";
import Image from "next/image";
import Link from "next/link";
import UserIcon from "../shared/UserIcon";
import Dropdown from "../shared/Dropdown";
import SettingsModal from "../SettingsModal";
import useWindowSize from "@/lib/hooks/use-window-size";
import { testProjectData } from "@/data/testData";
import Polygon from "../shared/icons/Polygon";
import { randomColorFromSeed } from "@/lib/utils";
interface SidebarProps {
  // Add any props here if needed
  organizationLogo?: string;
  organizationName: string;
  memberCount: number;
  user: {
    firstName: string;
    lastName: string;
    email: string;
    image?: string;
  };
}
interface ProjectItemProps {
  id: string;
  label: string;
  icon: JSX.Element;
  isActive?: boolean;
}

// Provide the array with the correct type
const projectData: ProjectItemProps[] = [
  {
    id: "Orbital-Odyssey",
    label: "Orbital Odyssey",
    icon: <CircleDotIcon size={20} className="text-red-500" />,
    isActive: false,
  },
  {
    id: "Digital-Product-Launch",
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
    <span className="px-3 w-30 overflow-hidden whitespace-nowrap truncate">{label}</span>
  </a>
);

const Sidebar: React.FC<SidebarProps> = (props) => {
  const { isDesktop, windowSize } = useWindowSize();
  const [isSidePanelOpen, setIsSidePanelOpen] = useState(isDesktop);
  const [showSettings, setShowSettings] = useState(false);

  useEffect(() => {
    if (isDesktop) setIsSidePanelOpen(true);
  }, [isDesktop]);

  return (
    <div className="relative w-fit lg:text-sm xl:text-base">
      <button
        onClick={() => setIsSidePanelOpen(!isSidePanelOpen)}
        className={` z-30  ${isSidePanelOpen
          ? " absolute left-64 top-1/2 lg:left-full"
          : "absolute left-0 top-1/2"
          }  hover:animate-ping`}
      >
        {isSidePanelOpen ? <ChevronLeft /> : <ChevronRight />}
      </button>
      <aside
        className={` z-10 
        flex h-full  transform flex-col overflow-auto
        rounded-r-lg bg-slate-300 transition-all  duration-300 ease-in-out lg:mt-0 lg:flex  dark:bg-gray-800 
        ${
          isSidePanelOpen
            ? "fixed  left-0 top-0 w-64 lg:relative lg:w-64"
            : "relative hidden w-0 -translate-x-full"
          }    `}
      >
        {/* Logo or Brand Name */}
        <div className="flex h-16 shrink-0 items-center justify-center gap-4 px-4 py-4">
          {/* You can replace this with an actual logo image if you have one */}
          {
            <Image
              src={
                props.organizationLogo ??
                `https://api.dicebear.com/7.x/initials/svg?seed=${props.organizationName}&backgroundColor=7cb342,c0aede,b6e3f4,8e24aa,d81b60,d1d4f9&backgroundType=gradientLinear`
              }
              alt="Organization Logo"
              className="aspect-square h-10 w-auto rounded-full"
              width={50}
              height={50}
            />
          }
          <div className="flex flex-col items-start justify-center">
            <span className="w-36 overflow-hidden truncate whitespace-nowrap text-base font-semibold">
              {props.organizationName}
            </span>
            <span className="text-emerald-400 dark:text-emerald-300">
              {props.memberCount} Members
            </span>
          </div>
          <div>
            <Dropdown
              options={[]}
              iconClose={<ChevronUp />}
              iconOpen={<ChevronDown />}
            />
          </div>
        </div>
        <hr className="my-5 h-[1px] border-gray-100 dark:border-gray-700 dark:text-gray-700" />
        <div className="mt-5">
          <div className="my-5 flex flex-col overflow-y-auto px-2">
            <span>General</span>
            <nav className="mt-5 space-y-1 px-2">
              {/* The actual navigation items */}
              <SidebarItem
                icon={<Home size={20} className="text-gray-400" />}
                label="Search"
              />
              <SidebarItem
                icon={<FileText size={20} className="text-gray-400" />}
                label="Billing"
              />
              {/* Add more nav items as needed */}
            </nav>
          </div>
          <hr className="my-5 h-[1px] border-gray-100 dark:border-gray-700 dark:text-gray-700" />

          <div className="my-5 flex-grow  px-2">
            <span>Projects</span>
            <ProjectsList
              list={testProjectData.map((project, index) => ({
                id: project.id,
                icon: project.image ? (
                  <Image
                    className="rounded-full"
                    src={project.image}
                    alt={project.name}
                    width={24}
                    height={24}
                  />
                ) : (
                  <Polygon rounded={true} strokeColor={randomColorFromSeed(project.id)} sides={index + 3} radius={9} />
                ),
                label: project.name,
              }))}
            />
            <SidebarItem
              icon={<PlusCircle size={20} className="text-gray-400" />}
              label="Add new project"
            />
          </div>
        </div>
        <hr className="my-5 h-[1px] border-gray-100 dark:border-gray-700 dark:text-gray-700" />

        {/* Bottom part of the sidebar for additional actions or profile */}
        <div className="m-2 mt-auto rounded-lg bg-gray-300 p-2 px-2 pb-4 pt-4 shadow-lg dark:bg-gray-700">
          {/* Profile Section */}
          <div className=" flex items-center justify-around px-3 py-2">
            <UserIcon user={props.user} isOnline={true} />
            <span className="ml-3 text-sm font-medium first-letter:uppercase">
              {props.user.firstName + " " + props.user.lastName}
            </span>

            <div>
              <button onClick={() => setShowSettings(true)}>
                <Settings />
              </button>
            </div>
          </div>
        </div>
      </aside>
      <SettingsModal setShow={setShowSettings} show={showSettings} />
    </div>
  );
};

export default Sidebar;
