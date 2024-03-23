'use client'
import { Moon, Sun } from "lucide-react";
import React, { ReactNode, useState } from "react";

interface ToggleSwitchProps {
    defaultValue?: boolean;
    onChange: (value: boolean) => void;
    onIcon?: ReactNode;
    offIcon?: ReactNode;
}
const ToggleSwitch: React.FC<ToggleSwitchProps> = ({ onChange, offIcon, onIcon, defaultValue }) => {

    const [isToggled, setIsToggled] = useState(defaultValue ?? false);

    function handleToggle() {
        setIsToggled(!isToggled);
        onChange(!isToggled);
    }
    return (
        <div className={"container flex justify-center items-center  xl:mx-auto xl:w-12 "}>
            <label className="flex items-center cursor-pointer">
                <div className="relative">
                    <input
                        type="checkbox"
                        className="hidden"
                        checked={isToggled}
                        onChange={handleToggle}
                    />
                    <div className={` w-12 h-6 ${isToggled ? 'bg-blue-300' : 'bg-gray-400'} rounded-full shadow-inner`}></div>
                    <div
                        className={`absolute w-6 h-6  flex justify-center items-center rounded-full shadow inset-y-0 left-0 transition-transform duration-100 ease-in  ${isToggled ? 'transform translate-x-full bg-blue-500 ' : 'bg-white   '}`}
                    >
                        {isToggled && offIcon ? offIcon : !isToggled && onIcon ? onIcon : null}

                    </div>
                </div>
            </label>
        </div>);
}

export default ToggleSwitch;