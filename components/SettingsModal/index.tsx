"use client";

import React, { Dispatch, SetStateAction, useState } from "react";
import Modal from "../shared/modal";
import { X } from "lucide-react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import useTheme from "@/lib/hooks/use-theme";
import ToggleSwitch from "../shared/ToggleSwitch";
interface SettingsModalProp {
    show: boolean;
    setShow: Dispatch<SetStateAction<boolean>>;
}

const PreferenceSettings = () => {
    const { theme, setTheme } = useTheme();

    function changeTheme(value: boolean) {
        if (value) {
            setTheme("dark");
        } else {
            setTheme("light");
        }
    }
    return (
        <div className="flex flex-col">
            <div className="flex flex-row w-full justify-between items-center">
                <div>DarkMode : </div>
                <div>
                    <ToggleSwitch defaultValue={theme==='dark'} onChange={changeTheme} />
                </div>
            </div>
        </div>
    );
};

const SettingsModal: React.FC<SettingsModalProp> = ({ show, setShow }) => {
    return (
        <Modal showModal={show} setShowModal={setShow}>
            <div className="relative rounded bg-gray-50 p-5 dark:bg-slate-700 ">
                <div className="flex">
                    <h2>Settings</h2>
                    <button
                        onClick={() => setShow(false)}
                        className="absolute right-5 top-5"
                    >
                        <X />
                    </button>
                </div>

                <div>
                    <Tabs>
                        <TabList>
                            <Tab>Preferences</Tab>
                            <Tab>Title 2</Tab>
                        </TabList>

                        <TabPanel>
                            <PreferenceSettings />
                        </TabPanel>
                        <TabPanel>
                            <h2>Any content 2</h2>
                        </TabPanel>
                    </Tabs>
                </div>
            </div>
        </Modal>
    );
};

export default SettingsModal;
