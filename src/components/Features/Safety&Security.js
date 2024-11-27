"use client"

import { safetyData } from "@/db/db";
import { Check, Minus, PlusIcon, X } from "lucide-react";
import { useState } from "react";

export default function SafetyAndSecurity() {
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
      {/* Header Section */}
      <div className="py-2 bg-buttonColor text-whiteColor my-4 px-4 rounded-md">
        Specifications
      </div>

      <div className="overflow-hidden">
        <div className="overflow-auto">
          <div className="min-w-[600px] w-full whitespace-nowrap">
            {/* Header Row */}
            <div>
              {headData.map((row, rowIndex) => (
                <div
                  key={rowIndex}
                  className="flex items-center justify-between py-3 bg-gray-400 text-whiteColor px-4 rounded-md gap-4 w-full"
                >
                  {row.map((cell, cellIndex) => (
                    <div
                      key={cellIndex}
                      className={`text-sm whitespace-nowrap ${cellIndex === 0
                          ? "flex items-center gap-2 w-[200px] flex-shrink-0"
                          : "text-center"
                        }`}
                    >
                      {cell}
                      {cellIndex === 0 && (
                        <div onClick={toggleDropdown} className="p-0.5 bg-whiteColor rounded-full text-blackColor">{isOpen ? <Minus className="size-4" /> : <PlusIcon className="size-4" />}</div>
                      )}
                    </div>
                  ))}
                </div>
              ))}
            </div>

            {/* Safety Data Rows */}
            <div className={`overflow-hidden transition-[max-height] duration-300 ${
          isOpen ? "max-h-[2000px]" : "max-h-0"
        }`}>
              {safetyData.map((item, rowIndex) => (
                <div
                  key={rowIndex}
                  className="flex items-center justify-between py-3 border-b border-gray-300 px-4"
                >
                  {/* Title */}
                  <div className="text-sm font-medium w-[200px] flex-shrink-0">{item.title}</div>

                  {/* Icons */}

                  {item.icons.map((icon, iconIndex) => (
                    <div
                      key={iconIndex}
                      className="text-center text-lg flex items-center justify-end w-full"
                    >
                      {renderIcon(icon)}
                    </div>
                  ))}

                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
