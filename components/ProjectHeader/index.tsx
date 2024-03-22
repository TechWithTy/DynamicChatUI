import React from "react";
import { CircleEllipsis, Edit, LucideShieldEllipsis, Share2, ShareIcon, } from "lucide-react";
import { DisplayUserDTO } from "@/crud/DTOs";
import MembersIndicator from "./MemberIndicator";

interface HeaderProps {
    title: string;
    description: string;
    tabs: string[];
    users:  {  firstName?: string;
        lastName?: string;
        image?: string;
        isOnline: boolean}[]
}

const ProjectHeader: React.FC<HeaderProps> = ({ title, description, tabs, users }) => {
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
                <div>
                    <MembersIndicator additionalCount={5} users={users} />
                </div>
                <div className="hidden lg:flex lg:gap-2 lg:justify-center lg:items-center">
                    <button className=" hidden gap-2 rounded-md bg-blue-600 text-white p-2 hover:bg-blue-700 lg:flex justify-center items-center dark:bg-transparent  dark:hover:bg-slate-700 ">
                        <Share2 size={20} className="" />
                        <span>Share</span>
                    </button>
                    <button className=" hidden gap-2 p-2 rounded-md  hover:text-white hover:bg-blue-700 lg:flex  dark:bg-gray-600 dark:hover:bg-slate-700 ">
                        <Edit size={20} className="" />
                    </button>
                </div>
                <button className=" rotate-90 flex gap-2 rounded-md  lg:hidden ">
                    <CircleEllipsis />
                </button>

                <div className="lg:hidden">
                    <button className="flex gap-2 rounded-md bg-blue-600 text-white p-2 hover:bg-blue-700 lg:hidden dark:bg-gray-600 dark:hover:bg-slate-700 ">
                        <Share2 size={20} className="" />
                        Share
                    </button>
                    <button>
                        <Edit />
                    </button>
                </div>
            </div>
            <hr className="my-2 border-gray-700" />
        </header>
    );
};

export default ProjectHeader;
