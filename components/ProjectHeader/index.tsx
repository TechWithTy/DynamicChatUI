'use client'
import React from "react";
import { CircleEllipsis, Edit, LucideShieldEllipsis, Share2, ShareIcon, } from "lucide-react";
import { DisplayUserDTO } from "@/crud/DTOs";
import MembersIndicator from "./MemberIndicator";
import Dropdown from "../shared/Dropdown";
import OptionsDropDown from "./OptionsDropDown";

interface HeaderProps {
    title: string;
    description: string;
    users: {
        firstName?: string;
        lastName?: string;
        image?: string;
        isOnline: boolean
    }[],
}

const ProjectHeader: React.FC<HeaderProps> = ({ title, description, users, }) => {
    return (
        <header className="p-4  dark:bg-gray-800  rounded-md">
            <div className="flex items-center justify-between">
                <div className="flex-grow">
                    <div className="flex flex-col lg:flex-row lg:justify-between items-center mx-2">
                        <div className="lg:flex-grow">
                            <h1 className="text-xl font-bold">{title}</h1>
                            <p className="text-gray-400">{description}</p>
                        </div>
                        <div className="flex">
                            <div className="">
                                <MembersIndicator users={users} />
                            </div>
                            <div className="flex">
                                <div className="hidden lg:flex lg:gap-2 lg:justify-center lg:items-center">
                                    <button className=" hidden gap-2 rounded-md bg-blue-600 text-white p-2 hover:bg-blue-700 lg:flex justify-center items-center dark:bg-transparent  dark:hover:bg-slate-700 ">
                                        <Share2 size={20} className="" />
                                        <span>Share</span>
                                    </button>
                                    <button className=" hidden gap-2 p-2 rounded-xl  hover:text-white hover:bg-blue-700 lg:flex  dark:bg-gray-600 dark:hover:bg-slate-700 ">
                                        <Edit size={20} className="" />
                                    </button>
                                </div>
                                <OptionsDropDown />
                            </div>
                        </div>
                    </div>
 
                </div>


            </div>
        </header>
    );
};

export default ProjectHeader;
