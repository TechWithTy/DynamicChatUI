'use client';

import React, { useState, useRef, useEffect, ReactNode } from 'react';

type DropdownOption = {
    id: string;
    component: ReactNode;
};

type DropdownProps = {
    iconOpen: ReactNode;
    iconClose: ReactNode;
    options: DropdownOption[];
};

const Dropdown: React.FC<DropdownProps> = ({ iconOpen, iconClose, options }) => {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);
    const buttonRef = useRef<HTMLButtonElement>(null);
    const [dropdownStyle, setDropdownStyle] = useState<React.CSSProperties>({});

    const toggleDropdown = () => setIsOpen(!isOpen);

    useEffect(() => {
        if (!dropdownRef.current || !buttonRef.current) return;

        const buttonRect = buttonRef.current.getBoundingClientRect();
        const dropdownRect = dropdownRef.current.getBoundingClientRect();
        const viewportWidth = window.innerWidth;
        const viewportHeight = window.innerHeight;

        const overflowRight = dropdownRect.right > viewportWidth;
        const overflowBottom = dropdownRect.bottom > viewportHeight;

        console.log(overflowRight, dropdownRect, viewportWidth, dropdownRect.right - viewportWidth);
        let newStyles: React.CSSProperties = {};

        if (overflowRight) {
            const rightOffset = dropdownRect.right - viewportWidth;
            newStyles.inset = `auto auto  auto -${rightOffset + 5}px`;
            setDropdownStyle(newStyles);

        }

        if (overflowBottom) {
            newStyles.bottom = '100%'; // Adjust so it opens upwards
            newStyles.top = 'auto';
            setDropdownStyle(newStyles);

        }

    }, [isOpen]);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {

        }



    }, []);

    return (
        <div className="relative" >
            <button ref={buttonRef} onClick={toggleDropdown} className="flex items-center justify-center w-10 h-10 ">
                {isOpen ? iconClose : iconOpen}
            </button>
            {isOpen && (
                <div ref={dropdownRef} className="absolute mt-2 w-48 bg-white dark:bg-gray-700 shadow-lg z-50 rounded" style={dropdownStyle}>
                    {options.map((option) => (
                        <div key={option.id} className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700">
                            {option.component}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Dropdown;
