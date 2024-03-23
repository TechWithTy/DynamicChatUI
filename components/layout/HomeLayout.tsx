import React, { ReactNode, useState } from "react";
import ProjectHeader from "../ProjectHeader";
import Sidebar from "../Sidebar";
import { SquareKanban } from "lucide-react";
import { Bot, File, MessageSquare } from "lucide-react";
import ChatHistoryPanel from "../ChatHistoryPanel";
interface LayoutProps {
  children: ReactNode; // This is the type for children prop
}

const HomeLayout: React.FC<LayoutProps> = ({ children }) => {
  const tabs = ["Intellicore", "Chat", "Library"];

  const icons = [
    <Bot size={20} key={0} />,
    <File size={20} key={1} />,
    <MessageSquare size={20} key={2} />,
  ];

  return (
    <div className="relative flex h-full gap-1">
      {/* Toggle Button for Side Panel */}

      {/* Side Panel */}
      <Sidebar organizationName="test-orgranisation" />

      {/* Main Content */}
      <div className="flex flex-1 flex-col overflow-hidden">
        <ProjectHeader
          title="Orbital Odyssey"
          description="Marketing Campaign for a new TV series launch"
          tabs={tabs}
          icons={icons} // Pass the icons array here
        />

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
