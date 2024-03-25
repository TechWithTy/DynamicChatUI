import React from "react";
// Import your icons from wherever they are located. Placeholder icons used here:
import { PenTool, Code, Feather, Lightbulb } from "lucide-react";

const categories = [
  {
    title: "Creative Assets",
    icon: <PenTool size={24} />,
    items: [
      "UI wireframe",
      "Brochure design",
      "Social media",
      "Brand guidelines",
    ],
  },
  {
    title: "Developer Tools",
    icon: <Code size={24} />,
    items: [
      "API Integration",
      "Test automation",
      "DB optimization",
      "Code review",
    ],
  },
  {
    title: "Content Creation",
    icon: <Feather size={24} />,
    items: [
      "Product description",
      "E-mail copy",
      "Whitepaper",
      "Press release",
    ],
  },
  {
    title: "Idea Generation",
    icon: <Lightbulb size={24} />,
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
    <div className="dark:bg-black p-3 lg:p-10 dark:text-white">
      <h2 className="mb-4 text-3xl font-bold">Innovation Starter Pack</h2>
      <p className="mb-10">
        Kickstart your innovation process with our comprehensive selection of
        predefined prompts.
      </p>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
        {categories.map((category) => (
          <div key={category.title} className="rounded-lg  dark:bg-gray-800 p-6">
            <div className="mb-4 flex items-center space-x-2">
              {category.icon}
              <h3 className="text-xl font-semibold">{category.title}</h3>
            </div>
            <ul>
              {category.items.map((item) => (
                <li
                  key={item}
                  className="my-2 flex cursor-pointer items-center justify-between rounded-lg dark:bg-gray-700 px-4 py-2 dark:text-white transition-colors duration-150 dark:hover:bg-gray-600 hover:text-white hover:bg-blue-300"
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
