"use client"

import { DimensionAndWeightData } from "@/db/db";
import { Minus, PlusIcon } from "lucide-react";
import { useState } from "react";

export default function DimensionAndWeight() {
    const headData = [
        [
            "Dimension & Weights",
            "LDI",
            "LDI (O)",
            "VDI",
            "VDI (O)",
            "LXI",
            "LXI (O)",
        ],
    ];

    const [isOpen, setIsOpen] = useState(true);

    const toggleDropdown = () => {
      setIsOpen(!isOpen);
    };

    return (
        <>
            <div>
                <div className="py-2 bg-buttonColor text-whiteColor my-4 px-4 rounded-md">Specifications </div>
                <div className="overflow-hidden">
        <div className="overflow-auto">
          <div className="min-w-[700px] w-full whitespace-nowrap">
                <div>
                    {headData.map((row, rowIndex) => (
                        <div key={rowIndex} className="flex items-center justify-between py-3 bg-gray-400 text-whiteColor px-4 rounded-md gap-4">
                            {row.map((cell, cellIndex) => (
                                <div key={cellIndex} className={`text-sm whitespace-nowrap ${
                                    cellIndex === 0 ? 'flex items-center gap-2 w-[200px] flex-shrink-0' : 'text-center'
                                }`}>
                                    {cell}
                                    {cellIndex === 0 && (
                                        <div onClick={toggleDropdown} className="p-0.5 bg-whiteColor rounded-full text-blackColor">{isOpen ? <Minus className="size-4" /> : <PlusIcon className="size-4" />}</div>
                                    )}
                                </div>
                            ))}
                        </div>
                    ))}

<div className={`overflow-hidden transition-[max-height] duration-300 ${
          isOpen ? "max-h-[2000px]" : "max-h-0"
        }`}>
    <div>
    {DimensionAndWeightData.map((item, index) => (
    <div key={index} className="flex items-center justify-between py-2 even:bg-gray-100 rounded-md px-4 gap-4">
        {item.dimensions.map((highlight, cellIndex) => (
            <div
                key={cellIndex}
                className={`text-sm whitespace-nowrap leading-none py-2 ${
                    cellIndex === 0 ? 'w-[200px] flex-shrink-0' : 'text-center'
                }`}
            >
                {highlight}
            </div>
        ))}
    </div>
))}

    </div>
</div>


                    
                </div>
                </div>
        </div>
      </div>
            </div>
        </>
    );
}
