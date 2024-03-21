import React, { ReactNode, useState } from 'react';
import ProjectHeader from "../ProjectHeader";
import Sidebar from "../Sidebar";
import { SquareKanban } from "lucide-react";
import ChatHistoryPanel from "../ChatHistoryPanel";
interface LayoutProps {
    children: ReactNode; // This is the type for children prop
}

const HomeLayout: React.FC<LayoutProps> = ({ children }) => {

    return (
        <div className="flex h-full relative gap-1">
            {/* Toggle Button for Side Panel */}


            {/* Side Panel */}
            <Sidebar organizationName="test-orgranisation" />

            {/* Main Content */}
            <div className="flex-1 flex flex-col overflow-hidden">
                <ProjectHeader title="Orbital Odyssey" description="Marketing Campaign for a new TV series launch" tabs={['Artificium', 'Chat', 'Library']} />

                {/* Chat Window & Rest of the content */}
                <div className="flex flex-1">
                    <main className="flex-1 overflow-y-auto">
                        {children}
                    </main>
                    <aside>
                        <ChatHistoryPanel />
                    </aside>
                </div>
            </div>
        </div>
    );
};

export default HomeLayout;
