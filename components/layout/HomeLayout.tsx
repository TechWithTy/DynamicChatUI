import React, { ReactNode, useState } from 'react';
import ProjectHeader from "../ProjectHeader";
import Sidebar from "../Sidebar";
import { ChevronLeft, SquareKanban } from "lucide-react";
import ChatHistoryPanel from "../ChatHistoryPanel";
import ChatSidePanel from "../ChatSidePanel";
import { Role } from "@prisma/client";
interface LayoutProps {
    children: ReactNode; // This is the type for children prop
}

const testUser = {
    firstName: 'Ray',
    lastName: 'user',
    email: 'test@user',
    image: 'https://picsum.photos/200/300'
}

const testMembers = [
    {
        id: "",
        role: 'USER' as Role,
        firstName: 'Ray',
        lastName: 'user',
        email: 'test@user',
        image: 'https://picsum.photos/200/300',
        isOnline: true
    },

    {
        id: "",
        role: 'USER' as Role,
        firstName: 'Ray',
        lastName: 'user',
        email: 'test@user',
        image: 'https://picsum.photos/200/300',
        isOnline: true

    },
    {
        id: "",
        role: 'USER' as Role,
        firstName: 'Ray',
        lastName: 'user',
        email: 'test@user',
        image: 'https://picsum.photos/200/300',
        isOnline: true

    }

]

const HomeLayout: React.FC<LayoutProps> = ({ children }) => {

    return (
        <div className="flex h-full relative gap-1">
            {/* Toggle Button for Side Panel */}


            {/* Side Panel */}
            <Sidebar organizationName="test-orgranisation" memberCount={12} user={testUser} />

            {/* Main Content */}
            <div className="flex-1 flex flex-col overflow-hidden">
                <ProjectHeader users={testMembers} title="Orbital Odyssey" description="Marketing Campaign for a new TV series launch" tabs={['Artificium', 'Chat', 'Library']} />

                {/* Chat Window & Rest of the content */}
                <div className="flex flex-1">
                    <main className="flex-1 overflow-y-auto">
                        {children}
                    </main>
                    <ChatSidePanel />
                </div>
            </div>
        </div>
    );
};

export default HomeLayout;
