// components/ChatHistoryPanel.tsx
"use client";
import React, { useState } from "react";
import { MessageSquare, ChevronDown, ChevronUp, Trash } from "lucide-react";
import useWindowSize from "@/lib/hooks/use-window-size";

interface ChatItemProps {
    title: string;
    date: string;
}

const ChatItem: React.FC<ChatItemProps> = ({ title, date }) => {
    return (
        <div className="my-1 flex items-center justify-between rounded-md p-2">
            <div className="mr-3 w-full">
                <div className="flex justify-between w-full">
                    <span className="line-clamp-1 text-sm ">{title}</span>

                    <button className="hover:text-red-500">
                        <Trash size={20} />
                    </button>
                </div>
                <div className="text-xs text-gray-400">{date}</div>
            </div>
        </div>
    );
};

const ChatHistoryPanel: React.FC = () => {
    const { isDesktop } = useWindowSize()
    const [isExpanded, setIsExpanded] = useState(isDesktop);

    // Dummy chat history data
    const chatHistory = [
        { title: "Developing Side Panel Components", date: "Today" },
        { title: "Game Type and Mechanics", date: "Yesterday" },
        { title: "User Request: Summarize conversation", date: "Yesterday" },
        // ... add more items as needed
    ];

    return (
        <aside className="fixed bottom-0 right-0 lg:flex self-end h-fit w-64 flex-col bg-white  dark:bg-gray-800">
            <button
                className="flex w-full items-center justify-between p-4 bg-gray-200 rounded-md dark:bg-gray-600"
                onClick={() => setIsExpanded(!isExpanded)}
            >
                <span className="text-lg">Chat History</span>
                {isExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
            </button>

            {isExpanded && (
                <div className="overflow-y-auto">
                    {chatHistory.map((chat, index) => (
                        <ChatItem key={index} title={chat.title} date={chat.date} />
                    ))}
                </div>
            )}
        </aside>
    );
};

export default ChatHistoryPanel;
