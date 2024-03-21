// components/ChatHistoryPanel.tsx
'use client'
import React, { useState } from 'react';
import { MessageSquare, ChevronDown, ChevronUp } from 'lucide-react';

interface ChatItemProps {
  title: string;
  date: string;
}

const ChatItem: React.FC<ChatItemProps> = ({ title, date }) => {
  return (
    <div className="flex items-center gap-2 justify-between p-2 my-1 rounded-md">
      <MessageSquare className="text-gray-400" size={20} />
      <div>
        <div className="font-semibold ">{title}</div>
        <div className="text-xs text-gray-400">{date}</div>
      </div>
    </div>
  );
};

const ChatHistoryPanel: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(true);

  // Dummy chat history data
  const chatHistory = [
    { title: 'Developing Side Panel Components', date: 'Today' },
    { title: 'Game Type and Mechanics', date: 'Yesterday' },
    { title: 'User Request: Summarize conversation', date: 'Yesterday' },
    // ... add more items as needed
  ];

  return (
    <aside className="w-64 dark:bg-gray-900 h-full flex flex-col">
      <button
        className="flex items-center justify-between p-4"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <span>Chat History</span>
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
