import React, { ReactNode, useMemo } from "react";
import dynamic from "next/dynamic";
import { ChevronDown, ChevronUp, Edit, Share2 } from "lucide-react";
import Dropdown from "../shared/Dropdown";



const OptionsDropDown: React.FC = () => {
    const dropDownOptions = [
        {
            id: "1",

            component: (
                <button
                    key={1}
                    className="flex gap-2 rounded-md bg-blue-600 p-2 text-white hover:bg-blue-700 lg:hidden dark:bg-gray-600 dark:hover:bg-slate-700 "
                >
                    <Share2 size={20} className="" />
                    Share
                </button>
            ) as ReactNode,
        },
        {
            id: "2",
            component: (
                <button key={2}>
                    <Edit />
                </button>
            ) as ReactNode,
        },
    ]
    return (
        <div className="lg:hidden">
            <Dropdown
                iconClose={<ChevronUp/>}
                iconOpen={<ChevronDown />}
                options={dropDownOptions}
            ></Dropdown>
        </div>
    );
}

export default OptionsDropDown;
