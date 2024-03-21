// components/ChatHistoryPanel.tsx
import React from 'react';
import { MessageSquare } from 'lucide-react';

interface ChatItemProps {
    title: string;
    date: string;
}

const ChatItem: React.FC<ChatItemProps> = ({ title, date }) => {
    return (
        <div className="flex items-center gap-2 justify-between bg-gray-800 text-white p-2 my-1 rounded-md">
            <MessageSquare className="text-gray-400" size={20} />
            <div>
                <div className="font-semibold">{title}</div>
                <div className="text-xs text-gray-400">{date}</div>
            </div>
        </div>
    );
};

const ChatHistoryPanel: React.FC = () => {
    // Dummy chat history data
    const chatHistory = [
        { title: 'Developing Side Panel Components', date: 'Today' },
        { title: 'Game Type and Mechanics', date: 'Yesterday' },
        { title: 'User Request: Summarize conversation', date: 'Yesterday' },
        // ... add more items as needed
    ];

    return (
        <aside className="w-64 bg-gray-900">

            <div className="overflow-y-auto">
                {chatHistory.map((chat, index) => (
                    <ChatItem key={index} title={chat.title} date={chat.date} />
                ))}
            </div>
        </aside>
    );
};

export default ChatHistoryPanel;
