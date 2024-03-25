"use client"
import ChatUI from "@/components/ChatUi";
import Intellicore from "@/components/Intellicore";
import LibraryTab from "@/components/LibraryTab";
import ProjectHeader from "@/components/ProjectHeader";
import { testProjectData, testUsers } from "@/data/testData";
import { Bot, Component, File, MessageSquare } from "lucide-react";
import { redirect } from "next/navigation";
import { useState } from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";

function ProjectPage({ params }: { params: { name: string } }) {

    
    const data = testProjectData.find((project) => project.id === params.name);

    console.log(testProjectData);
    if(!data) redirect('/404');
    const [currentTab, setCurrentTab] = useState(0);
    const tabs = [{

        name: "Intellicore",
        icon: <Bot size={20} key={0} />,

    }, {

        name: "Chat",
        icon: <File size={20} key={1} />,

    }, {

        name: "Library",
        icon: <MessageSquare size={20} key={2} />,


    },

        // {

        //     name: "Theme",
        //     icon:         <Component size={20} key={3} />,


        // }
    ];


    return (<div className="flex-col">
        {<ProjectHeader
            title={data?.name as string}
            description={data?.description as string}
            users={data?.users}
        />}

        <Tabs className={'pr-2'} selectedIndex={currentTab} onSelect={(index) => setCurrentTab(index)}>
            <TabList className={'dark:bg-black px-2'}>
                <div className="flex py-4 items-center">
                    {tabs.map((tab, index) => (
                        <Tab
                            key={index}
                            className={`mr-4 cursor-pointer bg-transparent flex items-center last:mr-0 aria-selected:text-green-500 aria-selected:bg-transparent`}

                        >
                            {tab.icon} {/* Render the passed-in icon */}
                            <span className="p-4">{tab.name}</span>
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

    </div>);
}

export default ProjectPage;