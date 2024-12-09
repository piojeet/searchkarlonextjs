"use client";

import { ChevronDown } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import Specifications from "./Specifications";
import Features from "./Features";

const variantData = ["Option 1", "Option 2", "Option 3", "Option 4"];

export default function CarSpecsAndFeatures() {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState(null);
    const dropdownRef = useRef(null);

    // Toggle dropdown open/close
    const toggleDropdown = () => setIsOpen((prev) => !prev);

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleOutsideClick = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };
        document.addEventListener("click", handleOutsideClick);
        return () => document.removeEventListener("click", handleOutsideClick);
    }, []);

    // Close dropdown on Escape key press
    useEffect(() => {
        const handleKeydown = (event) => {
            if (event.key === "Escape") {
                setIsOpen(false);
            }
        };
        document.addEventListener("keydown", handleKeydown);
        return () => document.removeEventListener("keydown", handleKeydown);
    }, []);

    // Handle option selection
    const handleSelect = (option) => {
        setSelectedOption(option);
        setIsOpen(false);
    };

    const[activeTab, setActiveTab] = useState("specifications");

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

    return (
        <div className="lg:px-6 px-4 pb-4 mt-4">
            <div className="lg:text-xl font-semibold border-b pb-2">Mahindra XUV700 Specifications and Features</div>

            <div className="mb-4">
                <div className="py-2 text-sm">Select Variant</div>
                <div className="relative sm:w-64 w-full" ref={dropdownRef}>
                    {/* Dropdown Header */}
                    <div
                        className="border rounded px-4 py-2 cursor-pointer bg-white flex items-center justify-between text-xs sm:text-sm"
                        onClick={toggleDropdown}
                    >
                        {selectedOption || "Select an option"}
                        <ChevronDown />
                    </div>

                    {/* Dropdown Options */}
                    {isOpen && (
                        <ul className="absolute top-12 left-0 w-full bg-white border rounded shadow-md z-10 h-44 overflow-y-auto text-xs sm:text-sm">
                            {variantData.map((option, index) => (
                                <li
                                    key={index}
                                    className="px-4 py-2 cursor-pointer hover:bg-gray-200"
                                    onClick={() => handleSelect(option)}
                                >
                                    {option}
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            </div>

            <div>
                <div className="w-full flex items-center justify-between border-b gap-4 px-4">
                    <button className={`w-full text-center uppercase font-semibold py-2 block relative text-xs sm:text-sm ${activeTab === "specifications" ? 'text-darkOrange' : ''}`} onClick={()=> handleTabClick("specifications")}>Specifications {activeTab === "specifications" && <span className="absolute bottom-0 w-full h-[5px] bg-darkOrange left-1/2 -translate-x-1/2 rounded-2xl"></span>}</button>
                    <button className={`w-full text-center uppercase font-semibold py-2 block relative text-xs sm:text-sm ${activeTab === "features" ? 'text-darkOrange' : ''}`} onClick={()=> handleTabClick("features")}>features {activeTab === "features" && <span className="absolute bottom-0 w-full h-[5px] bg-darkOrange left-1/2 -translate-x-1/2 rounded-2xl"></span>}</button>
                </div>
                {activeTab === "specifications" && 
                <div><Specifications /></div>
                }
                {activeTab === "features" && 
                <div><Features /></div>
                }
            </div>
        </div>
    );
}
