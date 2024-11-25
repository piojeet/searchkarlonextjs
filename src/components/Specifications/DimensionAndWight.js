"use client"

import { DimensionAndWeightData } from "@/db/db";
import { PlusIcon } from "lucide-react";

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

    return (
        <>
            <div>
                <div>
                    {headData.map((row, rowIndex) => (
                        <div key={rowIndex} className="flex items-center justify-between py-3 bg-gray-400 text-whiteColor px-4 rounded-md">
                            {row.map((cell, cellIndex) => (
                                <div key={cellIndex} className={`text-sm whitespace-nowrap w-full ${
                                    cellIndex === 0 ? 'flex items-center gap-2' : 'text-center'
                                }`}>
                                    {cell}
                                    {cellIndex === 0 && (
                                        <div className="p-0.5 bg-whiteColor rounded-full text-blackColor"><PlusIcon className="size-4" /></div>
                                    )}
                                </div>
                            ))}
                        </div>
                    ))}

<div>
    <div>
    {DimensionAndWeightData.map((item, index) => (
    <div key={index} className="flex items-center justify-between py-2 even:bg-gray-100 rounded-md px-4">
        {item.dimensions.map((highlight, cellIndex) => (
            <div
                key={cellIndex}
                className={`text-sm whitespace-nowrap w-full leading-none py-2 ${
                    cellIndex === 0 ? '' : 'text-center'
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
        </>
    );
}
