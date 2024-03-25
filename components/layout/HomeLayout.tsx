"use client";
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


interface LayoutProps {
    children: ReactNode; // This is the type for children prop
    params?: {

    }
}
const testLibraryData = [
    {
        name: 'Images',
        items: [
            {
                title: 'Image-1',
                description: 'This is an image'
            }
        ]
    }
]

const HomeLayout: React.FC<LayoutProps> = ({children, params}) => {
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
            <Sidebar
                memberCount={12}
                user={{
                    firstName: "John",
                    lastName: "Doe",
                    email: "jdoe@me.com",
                    image: "https://via.placeholder.com/40",
                }}
                organizationName="test-orgranisation-long-organisation"
            />

            {/* Main Content */}
            <div className="flex flex-1 flex-col overflow-hidden">
                

                <div className="flex h-full">
                    <main className="h-full flex-grow">
                        {children}
                       
                    </main>
                    <ChatHistoryPanel />
                </div>
            </div>
        </div>
    );
};

export default HomeLayout;
