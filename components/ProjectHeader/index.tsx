import React from "react";
import { CircleEllipsis, LucideShieldEllipsis, Share2, ShareIcon, } from "lucide-react";

interface HeaderProps {
    title: string;
    description: string;
    tabs: string[];
}

const ProjectHeader: React.FC<HeaderProps> = ({ title, description, tabs }) => {
    return (
        <header className="p-4  dark:bg-gray-800  rounded-md">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-xl font-bold">{title}</h1>
                    <p className="text-gray-400">{description}</p>
                    <div className="mt-2 flex">
                        {tabs.map((tab, index) => (
                            <div
                                key={index}
                                className={`mr-4 last:mr-0 ${index === 1 ? "text-green-500" : "text-gray-300"
                                    }`}
                            >
                                {tab}
                            </div>
                        ))}
                    </div>
                </div>
                <button className=" hidden gap-2 rounded-md bg-blue-600 text-white p-2 hover:bg-blue-700 lg:flex dark:bg-gray-600 dark:hover:bg-slate-700 ">
                    <Share2 size={20} className="" />
                    Share
                </button>
                <button className=" rotate-90 flex gap-2 rounded-md  lg:hidden ">
                    <CircleEllipsis />
                </button>
            </div>
            <hr className="my-2 border-gray-700" />
        </header>
    );
};

export default ProjectHeader;
