import React from "react";
// Import your icons from wherever they are located. Placeholder icons used here:
import { PenTool, Code, Feather, Lightbulb } from "lucide-react";
import GlowSvg from "../shared/icons/GlowSvg";
import Image from "next/image";

const categories = [
  {
    title: "Creative Assets",
    icon: <><GlowSvg svgSize={24} ><PenTool size={24} className="text-emerald-400 " /></GlowSvg></>,
    items: [
      "UI wireframe",
      "Brochure design",
      "Social media",
      "Brand guidelines",
    ],
  },
  {
    title: "Developer Tools",
    icon:<GlowSvg svgSize={24} ><Code size={24} className="text-blue-500" /></GlowSvg>,
    items: [
      "API Integration",
      "Test automation",
      "DB optimization",
      "Code review",
    ],
  },
  {
    title: "Content Creation",
    icon: <><GlowSvg svgSize={24} ><Feather size={24} className="text-violet-500" /></GlowSvg></>,
    items: [
      "Product description",
      "E-mail copy",
      "Whitepaper",
      "Press release",
    ],
  },
  {
    title: "Idea Generation",
    icon: <><GlowSvg svgSize={24} ><Lightbulb size={24} className="text-yellow-500" /></GlowSvg></>,
    items: [
      "Hashtag ideas",
      "Brainstorming",
      "Trend analysis",
      "Social media posts",
    ],
  },
];

const StarterPackComponent = () => {
  return (
    <div className="h-full w-full p-3 lg:p-10 dark:bg-neutral-900 dark:text-white">
      <h2 className="mb-4 text-3xl font-bold">Innovation Starter Pack</h2>
      <p className="mb-10">
        Kickstart your innovation process with our comprehensive selection of
        predefined prompts.
      </p>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4 max-h-full overflow-y-auto">
        {categories.map((category) => (
          <div key={category.title} className="rounded-lg  p-6">
            <div className="mb-4 flex flex-col items-center justify-center ">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-neutral-100 p-1 shadow-lg dark:bg-gradient-to-br dark:from-gray-800/50 dark:to-neutral-900 dark:shadow-inner dark:shadow-neutral-700">
                {category.icon}
              </div>
              <h3 className="text-xl font-semibold">{category.title}</h3>
            </div>
            <ul>
              {category.items.map((item) => (
                <li
                  key={item}
                  className="my-2 flex cursor-pointer items-center justify-between rounded-lg bg-gradient-to-r from-gray-50/40 to-gray-300/0 px-4 py-2 shadow-sm transition-colors duration-150 hover:bg-blue-500 hover:text-white dark:bg-gradient-to-r dark:from-[#D7EDED29] dark:to-gray-800/0 dark:text-white dark:shadow-inner dark:shadow-gray-700 dark:hover:bg-gray-600"
                >
                  <span>{item}</span>
                  <span className="">➔</span>
                </li>
              ))}
            </ul>
            <span className="mt-5 text-center text-sky-600">View all</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StarterPackComponent;
