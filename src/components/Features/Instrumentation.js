"use client"

import { InstrumentationData } from "@/db/db";
import { Check, PlusIcon, X } from "lucide-react";

export default function Instrumentation() {
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

  

  const renderIcon = (icon) => {
    switch (icon) {
      case "X":
        return <X className="bg-red-500 p-1 text-whiteColor rounded-md" />;
      case "Check":
        return <Check className="bg-green-500 p-1 text-whiteColor rounded-md" />;
      default:
        return null;
    }
  };

  return (
    <div>


      {/* Header Row */}
      <div>
        {headData.map((row, rowIndex) => (
          <div
            key={rowIndex}
            className="flex items-center justify-between py-3 bg-gray-400 text-whiteColor px-4 rounded-md"
          >
            {row.map((cell, cellIndex) => (
              <div
                key={cellIndex}
                className={`text-sm whitespace-nowrap w-full ${
                  cellIndex === 0
                    ? "flex items-center gap-2"
                    : "text-center"
                }`}
              >
                {cell}
                {cellIndex === 0 && (
                  <div className="p-0.5 bg-whiteColor rounded-full text-blackColor">
                    <PlusIcon className="size-4" />
                  </div>
                )}
              </div>
            ))}
          </div>
        ))}
      </div>

      {/* Safety Data Rows */}
      <div>
        {InstrumentationData.map((item, rowIndex) => (
          <div
            key={rowIndex}
            className="flex items-center justify-between py-3 border-b border-gray-300 px-4"
          >
            {/* Title */}
            <div className="text-sm font-medium w-full">{item.title}</div>

            {/* Icons */}
            
              {item.icons.map((icon, iconIndex) => (
                <div
                  key={iconIndex}
                  className="text-center text-lg flex items-center justify-center w-full"
                >
                  {renderIcon(icon)}
                </div>
              ))}

          </div>
        ))}
      </div>
    </div>
  );
}
