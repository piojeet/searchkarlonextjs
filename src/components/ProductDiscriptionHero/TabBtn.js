"use client"

import React from 'react'
import { useAuthContext } from "@/context/AuthContext";
import InterestRateCalculator from "../EMICalculator/InterestRateCalculator";
import LoanTimePeriod from "../EMICalculator/LoanTimePeriod";
import CarLoanAmountCalculator from "../EMICalculator/CarLoanAmountCalculator";
import { useState } from "react";
import DealerSearch from "./DealerSearch";
import MonthlyAndPriceBreakUp from "./MonthlyAndPriceBreakUp";
import { ChevronDown, ChevronUp } from 'lucide-react';

export default function TabBtn() {


    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const [activeTab, setActiveTab] = useState("tab1");

    const tabs = [
        { id: "tab1", label: "EMI Calculator", },
        { id: "tab2", label: "Dealer Search", },
        { id: "tab3", label: "Services Center", },
    ];

    const [openTabs, setOpenTabs] = useState({
        tab1: false,
        tab2: false,
        tab3: false,
    });

    const toggleTabDropdown = (tabId) => {
        setOpenTabs((prev) => ({
            ...prev,
            [tabId]: !prev[tabId],
        }));
    };


  return (
    <div>
        <div className="bg-gray-100 w-full rounded-md relative xl:mt-0 mt-2">
                    <div className="flex items-center sm:gap-2 gap-1 flex-wrap sm:text-sm text-xs py-2 px-2">
                        {tabs.map((tab) => (
                            <button key={tab.id} className={`block w-fit py-0.5 px-2 border   rounded-full ${activeTab === tab.id ? 'border-darkOrange text-darkOrange bg-whiteColor' : 'border-gray-500 bg-gray-200'}`} onClick={() => setActiveTab(tab.id)}>{tab.label}</button>
                        ))}

                    </div>
                    {activeTab === "tab1" && (
                        <div id="tab1">

                            <div className={`transition-all duration-300 overflow-hidden ${openTabs.tab1 ? 'max-h-[2000px]' : 'max-h-[200px]'}`}>
                                <CarLoanAmountCalculator />

                                <div className="mb-4">
                                    <div className="flex items-center justify-between py-2 px-4">
                                        <div>Monthly EMI:</div>
                                        <div className="font-semibold">₹ 7,918</div>
                                    </div>

                                    <div className="flex items-center justify-between py-2 px-4">
                                        <div>Principal amount:</div>
                                        <div className="font-semibold">₹ 5,00,000</div>
                                    </div>

                                    <div className="flex items-center justify-between py-2 px-4">
                                        <div>Total Interest:</div>
                                        <div className="font-semibold">1,65,132</div>
                                    </div>

                                    <div className="flex items-center justify-between py-2 border-2 rounded-md px-4">
                                        <div>Total amount</div>
                                        <div className="font-semibold">₹ 6,65,132</div>
                                    </div>
                                </div>

                            </div>

                        </div>
                    )}

                    {activeTab === "tab2" && (
                        <div id="tab2">
                            <div className={`transition-all duration-300 overflow-hidden ${openTabs.tab2 ? 'max-h-[2000px]' : 'sm:max-h-[190px] max-h-[290px]'} p-4`}>
                                <DealerSearch />
                            </div>
                        </div>
                    )}

                    {activeTab === "tab3" && (
                        <div id="tab3">
                            <div className={`transition-all duration-300 overflow-hidden ${openTabs.tab3 ? 'max-h-[2000px]' : 'max-h-[150px]'} p-4`}>
                            <MonthlyAndPriceBreakUp />
                            </div>
                        </div>
                    )}


                    <button
                        onClick={() => toggleTabDropdown(activeTab)}
                        aria-expanded={openTabs[activeTab]}
                        aria-controls={`${activeTab}-content`}
                        className="w-full py-2 px-4 rounded flex items-center justify-center border text-sm"
                    >
                        {openTabs[activeTab] ? (
                            <>
                                Collapse {tabs.find((tab) => tab.id === activeTab).label} <ChevronUp size={18} />
                            </>
                        ) : (
                            <>
                                Expand {tabs.find((tab) => tab.id === activeTab).label} <ChevronDown size={18} />
                            </>
                        )}
                    </button>


                </div>
    </div>
  )
}
