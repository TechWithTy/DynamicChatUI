// components/ChatUI.tsx
'use client'
import React, { useState } from 'react';
import { PaperclipIcon, SendIcon } from 'lucide-react';
import Image from "next/image";

interface Message {
    id: string;
    author: string;
    avatar?: string;
    timestamp: Date;
    content: string;
}

// Dummy data for the example
const messages: Message[] = [
    {
        id: '1',
        author: 'Lily Patel',
        timestamp: new Date('2023-04-27T13:30:00'),
        content: "Agreed. In the meantime, let's keep pushing forward with this episode. I think it's going to be a real crowd-pleaser.",
    },
    // ... more messages
];

const ChatUI: React.FC = (props) => {
    const [newMessage, setNewMessage] = useState('');

    const handleSendMessage = () => {
        // Here you would handle sending the message
        console.log(newMessage);
        setNewMessage('');
    };

    return (
        <div className="flex flex-col h-full bg-gray-800 text-white">
            <div className="overflow-auto">
                {messages.map((message) => (
                    <div key={message.id} className="p-4 border-b border-gray-700">
                        <div className="flex items-center space-x-3">
                            <Image width={25} height={25} src={message.avatar ??
                                `https://api.dicebear.com/7.x/initials/svg?seed=${message.author}`
                            } alt={message.author} className="h-8 w-8 rounded-full" />
                            <div>
                                <div className="font-bold">{message.author}</div>
                                <div className="text-xs text-gray-400">{message.timestamp.toLocaleTimeString().toUpperCase()}</div>
                            </div>
                        </div>
                        <p className="mt-2">{message.content}</p>
                    </div>
                ))}
            </div>
            <div className="p-4">
                <div className="relative flex items-center">
                    <textarea
                        placeholder="What you want to share today?"
                        className="w-full bg-gray-700 rounded-xl pl-4 pr-24 py-7 overflow-hidden resize-none outline-lime-300 ring-lime-300 ring-offset-lime-400 focus:border-lime-400"
                        style={{ minHeight: '40px' }} // Minimum height before user input
                        rows={1} // Starts with a single line
                        value={newMessage}
                        onChange={(e) => setNewMessage(e.target.value)}
                    />
                    <div className="absolute items-center justify-between h-full top-0 right-2 flex w-20">
                        <button onClick={() => { }} className="4">
                            <PaperclipIcon />
                        </button>
                        <button onClick={handleSendMessage} className="p-3 dark:bg-gray-800 rounded-xl shadow-inner shadow-gray-900">
                            <SendIcon />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChatUI;
