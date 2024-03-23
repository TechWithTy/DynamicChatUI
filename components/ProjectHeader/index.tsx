import React from "react";
// Import only necessary icons here
import { CircleEllipsis, Share2 } from "lucide-react";

interface HeaderProps {
  title: string;
  description: string;
  tabs: string[];
  icons: React.ReactNode[]; // Array of React node elements for icons
}

const ProjectHeader: React.FC<HeaderProps> = ({
  title,
  description,
  tabs,
  icons,
}) => {
  return (
    <header className="rounded-md p-4 dark:bg-gray-800">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-xl font-bold">{title}</h1>
          <p className="text-gray-400">{description}</p>
          <div className="mt-2 flex">
            {tabs.map((tab, index) => (
              <div
                key={index}
                className={`mr-4 flex items-center last:mr-0 ${
                  index === 0 ? "text-green-500" : "text-gray-300"
                }`}
              >
                {icons[index]} {/* Render the passed-in icon */}
                <span className="ml-1">{tab}</span>
              </div>
            ))}
          </div>
        </div>
        <button className="hidden gap-2 rounded-md bg-blue-600 p-2 text-white hover:bg-blue-700 lg:flex dark:bg-gray-600 dark:hover:bg-slate-700">
          <Share2 size={20} />
          Share
        </button>
        <button className="flex rotate-90 gap-2 rounded-md lg:hidden">
          <CircleEllipsis size={20} />
        </button>
      </div>
      <hr className="my-2 border-gray-700" />
    </header>
  );
};

export default ProjectHeader;
