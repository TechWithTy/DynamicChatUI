'use client'
import React, { ReactNode, useState } from "react";
import ProjectHeader from "../ProjectHeader";
import Sidebar from "../Sidebar";
import { SquareKanban } from "lucide-react";
import { Bot, File, MessageSquare, Component } from "lucide-react";
import ChatHistoryPanel from "../ChatHistoryPanel";
import StarterPackComponent from "../Intellicore/StarterPrompts";
import HorizontalMenu from "../Intellicore/Actions";
import LibraryTab from "../LibraryTab";
import CustomerMessagesSidebar from "../Sidebar/customerMessages";
import Intellicore from "../Intellicore";

import { Tab, Tabs, TabList, TabPanel } from "react-tabs";


import ChatUI from "../ChatUi";
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
    image: string;
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

const HomeLayout: React.FC = () => {
    const [currentTab, setCurrentTab] = useState(0);
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

                <div className="flex">
                    <main className="flex-grow overflow-y-auto">
                        <Tabs selectedIndex={currentTab} onSelect={(index) => setCurrentTab(index)}>
                            <TabList className={'dark:bg-gray-800'}>
                                <div className="flex py-4 items-center">
                                    {tabs.map((tab, index) => (
                                        <Tab
                                            key={index}
                                            className={`mr-4 cursor-pointer bg-transparent flex items-center last:mr-0 aria-selected:text-green-500 aria-selected:bg-transparent`}

                                        >
                                            {icons[index]} {/* Render the passed-in icon */}
                                            <span className="p-4">{tab}</span>
                                        </Tab>
                                    ))}
                                </div>
                            </TabList>
                            <TabPanel >
                                <Intellicore />
                            </TabPanel>
                            <TabPanel>
                                <ChatUI />
                            </TabPanel>
                            <TabPanel >
                                <LibraryTab data={[]} />
                            </TabPanel>
                        </Tabs>
                    </main>
                    <ChatHistoryPanel />
                </div>
            </div>
        </div>
    );
};

export default HomeLayout;
