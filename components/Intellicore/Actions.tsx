"use client";
import React from "react";
import {
  ChevronLeft,
  ChevronRight,
  Image,
  Code,
  Edit3,
  Lightbulb,
  Video,
  Info,
} from "lucide-react";

const MenuItems = [
  { name: "Image generation", icon: <Image size={24} /> },
  { name: "Code engineering", icon: <Code size={24} /> },
  { name: "Content creation", icon: <Edit3 size={24} /> },
  { name: "Idea generation", icon: <Lightbulb size={24} /> },
  { name: "Audio/Video creation", icon: <Video size={24} /> },
];

const HorizontalMenu = () => {
  // Placeholder functions for scrolling
  const scrollLeft = () => {
    /* ... */
  };
  const scrollRight = () => {
    /* ... */
  };

  return (
    <div className="relative flex w-full items-center">
      {/* Left arrow */}
      <button
        className="absolute left-0 z-20 rounded-full bg-gray-800 p-2 hover:bg-gray-700"
        onClick={scrollLeft}
      >
        <ChevronLeft className="text-white" size={24} />
      </button>

      {/* Menu items container */}
      <div className="hide-scroll-bar mx-8 flex w-full overflow-x-auto">
        {MenuItems.map((item, index) => (
          <div
            key={index}
            className="relative m-2 flex w-full flex-col items-center justify-center rounded-lg bg-gray-800 p-2 text-sm font-semibold transition duration-150 ease-in-out hover:bg-gray-700"
          >
            <div className="relative mb-2 rounded-full bg-gray-700 p-3">
              {item.icon}
              <div className="absolute right-0 top-0">
                <Info size={16} className="text-blue-500" />
              </div>
            </div>
            <span className="text-white">{item.name}</span>
          </div>
        ))}
      </div>

      {/* Right arrow */}
      <button
        className="absolute right-0 z-20 rounded-full bg-gray-800 p-2 hover:bg-gray-700"
        onClick={scrollRight}
      >
        <ChevronRight className="text-white" size={24} />
      </button>
    </div>
  );
};

export default HorizontalMenu;
