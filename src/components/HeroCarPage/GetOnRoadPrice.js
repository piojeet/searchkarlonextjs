"use client";

import Image from "next/image";
import MapIcon from "../../../public/Map Point Wave.png";
// import Car from "../../../public/carquick.png";
import { useState, useRef, useEffect } from "react";
import { ChevronDown } from "lucide-react";
import SearchUsedCars from "./SearchUsedCars";

export default function GetOnRoadPrice() {
    const onRoadPriceData = [
        ["Make", "demo1", "demo2", "demo3"],
        ["Model", "demo4", "demo5", "demo6"],
        ["Variant", "demo4", "demo5", "demo6"],
    ];

    const cityData = [
        [
            "Select your City",
            "Bangalore",
            "Mumbai",
            "Chennai",
            "Delhi",
            "Agra",
            "Hyderabad",
            "Kolkata",
            "Pune",
            "Noida",
            "Jaipur",
        ],
    ];

    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState("Select your City");
    const dropdownRef = useRef(null);

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const selectOption = (option) => {
        setSelectedOption(option);
        setIsOpen(false);
    };

    return (
        <div className="grid lg:grid-cols-2 gap-2">
            <div className="relative bg-whiteColor p-4 rounded-md">
            {/* Original Dropdown Implementation */}
            <div className="md:text-sm text-xs">
                <div className="mb-4 flex items-center gap-2">
                    {onRoadPriceData.map((item, index) => (
                        <select
                            name=""
                            id=""
                            key={index}
                            className="py-2 border-2 md:px-2 px-1 outline-none rounded-md w-full"
                        >
                            {item.map((value, subIndex) => (
                                <option key={subIndex} value={value}>
                                    {value}
                                </option>
                            ))}
                        </select>
                    ))}
                </div>
                
            </div>

            {/* Custom Dropdown */}
            <div className="relative w-fit mx-auto text-sm mb-4" ref={dropdownRef}>
                <button
                    className="flex items-center justify-between w-full px-4 py-2 border rounded-md bg-white cursor-pointer gap-2"
                    onClick={toggleDropdown}
                >
                    <div className="flex items-center gap-2">
                        <Image src={MapIcon} alt="Map Icon" width={20} height={20} />
                        <span>{selectedOption}</span>
                    </div>
                    <span className={`transition-transform ${isOpen ? "rotate-180" : "rotate-0"}`}>
                        <ChevronDown size={15} strokeWidth={3} />
                    </span>
                </button>

                {isOpen && (
                    <ul className="absolute z-10 w-full mt-2 bg-white border rounded-md shadow-lg h-44 overflow-y-auto">
                        {cityData[0].map((city, index) => (
                            <li
                                key={index}
                                className="px-4 py-2 cursor-pointer hover:bg-gray-100"
                                onClick={() => selectOption(city)}
                            >
                                {city}
                            </li>
                        ))}
                    </ul>
                )}
            </div>

            <button className="text-sm outline-none border-none bg-lightOrange hover:bg-lightOrange/90 text-whiteColor py-2 px-4 rounded-md mx-auto block w-fit">Get on Road Price</button>

            {/* <Image src={Car} alt="car" className="absolute right-0 lg:top-1/2 bottom-0 lg:-translate-y-1/2 lg:w-[15vw] w-44 md:block hidden" /> */}
        </div>

        <SearchUsedCars />
        </div>
    );
}
