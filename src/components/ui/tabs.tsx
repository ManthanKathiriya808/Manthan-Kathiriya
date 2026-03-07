"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export interface Tab {
    id: string;
    label: string;
    content: React.ReactNode;
    activeColor?: string;
}

interface TabsProps {
    tabs: Tab[];
    containerClassName?: string;
    tabClassName?: string;
    activeTabClassName?: string;
    contentClassName?: string;
}

export function Tabs({
    tabs,
    containerClassName = "",
    tabClassName = "",
    activeTabClassName = "",
    contentClassName = "",
}: TabsProps) {
    const [activeTab, setActiveTab] = useState(tabs[0].id);

    return (
        <div className="flex flex-col w-full">
            {/* Tab Headers */}
            <div
                className={`flex flex-row items-center justify-start gap-2 overflow-x-auto no-scrollbar pb-2 ${containerClassName}`}
            >
                {tabs.map((tab) => {
                    const isActive = activeTab === tab.id;
                    return (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={`relative px-6 py-3 rounded-full text-sm font-medium transition-colors whitespace-nowrap outline-none ${isActive
                                ? "text-white"
                                : "text-white/60 hover:text-white"
                                } ${tabClassName}`}
                        >
                            {isActive && (
                                <motion.div
                                    layoutId="active-tab-indicator"
                                    className={`absolute inset-0 rounded-full -z-10 ${tab.activeColor || "bg-primary"} ${activeTabClassName}`}
                                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                />
                            )}
                            <span className="relative z-10">{tab.label}</span>
                        </button>
                    );
                })}
            </div>

            {/* Tab Content */}
            <div className={`mt-6 relative ${contentClassName}`}>
                <AnimatePresence mode="wait">
                    {tabs.map((tab) => {
                        if (tab.id === activeTab) {
                            return (
                                <motion.div
                                    key={tab.id}
                                    initial={{ opacity: 0, scale: 0.95, y: 10 }}
                                    animate={{ opacity: 1, scale: 1, y: 0 }}
                                    exit={{ opacity: 0, scale: 0.95, y: -10 }}
                                    transition={{ duration: 0.3, ease: "easeOut" }}
                                >
                                    {tab.content}
                                </motion.div>
                            );
                        }
                        return null;
                    })}
                </AnimatePresence>
            </div>
        </div>
    );
}
