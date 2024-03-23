import React from "react";
import { ChevronDown, Plus, Search } from "lucide-react";

interface Message {
  name: string;
  time: string;
  message: string;
  tags?: string[];
}

interface SidebarProps {
  messages: Message[];
}

const CustomerMessagesSidebar: React.FC<SidebarProps> = ({ messages }) => {
  return (
    <aside className="h-screen w-64 bg-gray-800 text-white">
      {/* Rounded search bar container */}
      <div className="flex items-center justify-center p-4">
        <div className="flex w-full items-center rounded-full bg-gray-700">
          <Search size={20} className="ml-4 text-gray-400" />
          <input
            className="flex-grow rounded-full border-none bg-transparent px-4 py-2 text-sm text-white placeholder-gray-400 focus:outline-none"
            placeholder="Search messages"
          />
        </div>
      </div>
      {/* Header container */}
      <div className="flex items-center justify-between border-b border-gray-700 px-4 py-2">
        <div className="flex items-center space-x-1">
          <h2 className="text-lg font-bold">Messages</h2>
          <ChevronDown size={16} />
          <span className="rounded-full bg-green-600 px-2 py-1 text-xs font-semibold">
            12
          </span>
        </div>
        <button>
          <Plus size={20} />
        </button>
      </div>
      <div className="p-4">
        <div className="flex items-center rounded-md bg-gray-700">
          <Search size={16} className="ml-3 text-gray-400" />
          <input
            className="w-full border-none bg-transparent p-2 text-sm text-white placeholder-gray-400"
            placeholder="Search messages"
          />
        </div>
      </div>
      <ul>
        {messages.map((message, index) => (
          <li
            key={index}
            className="flex items-center border-b border-gray-700 p-3 hover:bg-gray-700"
          >
            {message.avatarUrl ? (
              <img
                src={message.avatarUrl}
                alt={`${message.name}`}
                className="mr-3 h-10 w-10 rounded-full object-cover"
              />
            ) : (
              <div className="mr-3 h-10 w-10 rounded-full bg-gray-700" />
            )}
            <div className="flex flex-grow flex-col">
              <div className="flex justify-between">
                <span className="font-semibold">{message.name}</span>
                <span className="text-xs text-gray-400">{message.time}</span>
              </div>
              <p className="text-sm text-gray-400">{message.message}</p>
              <div className="mt-2 flex space-x-1">
                {message.tags?.map((tag, idx) => (
                  <span
                    key={idx}
                    className="rounded-full bg-red-600 px-2 py-1 text-xs font-semibold"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default CustomerMessagesSidebar;
