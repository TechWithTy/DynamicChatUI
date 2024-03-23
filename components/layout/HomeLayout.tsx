import React, { ReactNode, useState } from "react";
import ProjectHeader from "../ProjectHeader";
import Sidebar from "../Sidebar";
import { SquareKanban } from "lucide-react";
import { Bot, File, MessageSquare, Component } from "lucide-react";
import ChatHistoryPanel from "../ChatHistoryPanel";
import StarterPackComponent from "../Intellicore/StarterPrompts";
import HorizontalMenu from "../Intellicore/Actions";
import DynamicGrid from "../Library/home";
import CustomerMessagesSidebar from "../Sidebar/customerMessages";
interface Item {
    title: string;
    description: string;
}

interface CardRowProps {
    rowName: string;
    items: Item[];
}
interface Row {
    name: string;
    items: Item[];
}

interface Message {
    name: string;
    time: string;
    message: string;
    image:string;
    tags?: string[];
}

const testUsers = [
    {
        firstName: "Elmer",
        lastName: 'Laverty',
        image: "https://via.placeholder.com/40",
        isOnline: true
    },
    {
        firstName: "Elmer",
        lastName: 'Laverty',
        image: "https://via.placeholder.com/40",
        isOnline: true
    },
    {
        firstName: "Elmer",
        lastName: 'Laverty',
        image: "https://via.placeholder.com/40",
        isOnline: false
    },
]

const messages: Message[] = [
    {
        name: "Elmer Laverty",
        time: "12m",
        message: "Haha oh man 😂",
        image: "https://via.placeholder.com/40", // Replace with actual image URL
        tags: ["Question", "Help wanted"],
    },
    // ... other messages
];
const data: Row[] = [
    {
        name: "Images",
        items: [
            {
                title: "Captain Drake",
                description:
                    "Natural born leader with years of experience in space exploration.",
            },
            // More items...
        ],
    },
    {
        name: "Documents",
        items: [
            { title: "Character bios", description: "3 documents, 43832 words" },
            // More items...
        ],
    },
    // More rows...
];
interface LayoutProps {
    children: ReactNode; // This is the type for children prop
}

const HomeLayout: React.FC<LayoutProps> = ({ children }) => {
    const tabs = ["Intellicore", "Chat", "Library", "Theme"];

    const icons = [
        <Bot size={20} key={0} />,
        <File size={20} key={1} />,
        <MessageSquare size={20} key={2} />,
        <Component size={20} key={3} />,
    ];

    return (
        <div className="relative flex h-full gap-1">
            {/* Toggle Button for Side Panel */}

            {/* Side Panel */}
            <Sidebar memberCount={12} user={{ firstName: "John", lastName: "Doe", email: "jdoe@me.com", image: "https://via.placeholder.com/40" }} organizationName="test-orgranisation" />

            {/* Main Content */}
            <div className="flex flex-1 flex-col overflow-hidden">
                <ProjectHeader
                    title="Orbital Odyssey"
                    description="Marketing Campaign for a new TV series launch"
                    tabs={tabs}
                    icons={icons} // Pass the icons array here
                    users={testUsers}
                />
                {/* <StarterPackComponent />
        <HorizontalMenu /> */}
                {/* <DynamicGrid data={data} /> */}
                <CustomerMessagesSidebar messages={messages} />
                {/* Chat Window & Rest of the content */}

                <div className="flex flex-1">
                    <main className="flex-1 overflow-y-auto">{children}</main>
                    <aside>
                        <ChatHistoryPanel />
                    </aside>
                </div>
            </div>
        </div>
    );
};

export default HomeLayout;
