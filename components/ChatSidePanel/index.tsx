"use client"

import { ChevronLeft, ChevronRight } from "lucide-react";
import ChatHistoryPanel from "../ChatHistoryPanel";
import { useState } from "react";

function ChatSidePanel() {
    const [panelOpen, setPanelOpen] = useState(true);
    return (
        <div className="relative h-full overflow-visible">
            <button className={`z-30 absolute -left-5  top-1/2  `} onClick={() => setPanelOpen(prev => !prev)}>{panelOpen ? <ChevronRight /> : <ChevronLeft />}</button>

            <aside className={` lg:relative left-0 top-0 z-10
            flex h-full  transform flex-col overflow-auto
            rounded-r-lg transition-all  duration-300 ease-in-out lg:mt-0 lg:flex  
            ${panelOpen
                    ? "fixed w-64 lg:relative lg:w-64"
                    : "relative hidden w-0 -translate-x-full"
                } mt-16 `}>
                <>
                    <ChatHistoryPanel />
                </>
            </aside>
        </div>);
}

export default ChatSidePanel;