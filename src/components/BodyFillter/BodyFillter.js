"use client"

import Image from "next/image";
import car from "../../../public/redcar.png";
import React, { useState } from "react";

const BodyFillter = () => {
  const [selectedBodyType, setSelectedBodyType] = useState(null); // To track selected body type
  const [selectedBudget, setSelectedBudget] = useState(null); // To track selected budget

  const bodyTypes = [
    { type: "Sedan", count: 15, color: "blue", img: car },
    { type: "Coupe", count: 31, color: "gray", img: car },
    { type: "Compact Suv", count: 11, color: "black", img: car },
    { type: "Hatchback", count: 26, color: "orange", img: car},
  ];

  const budgets = ["5 Lakh - 10 Lakh", "10 Lakh - 15 Lakh", "15 Lakh - 20 Lakh"];

  const handleBodyTypeClick = (type) => {
    setSelectedBodyType(type === selectedBodyType ? null : type); // Toggle selection
  };

  const handleBudgetClick = (budget) => {
    setSelectedBudget(budget === selectedBudget ? null : budget); // Toggle selection
  };

  return (
    <div className="space-y-6 p-4 lg:p-6">
      {/* Body Type Filter */}
      <div>
        <h2 className="sm:text-xl text-base font-semibold mb-2">Body Type</h2>
        <div className="flex gap-4 overflow-x-auto">
          {bodyTypes.map((item) => (
            <div
              key={item.type}
              onClick={() => handleBodyTypeClick(item.type)}
              className={`flex-shrink-0 sm:w-40 w-36 shadow-md border rounded-lg flex items-center justify-center flex-col cursor-pointer p-4 ${
                selectedBodyType === item.type
                  ? "border-blue-500 bg-blue-100"
                  : "bg-white"
              }`}
            >
              <div
                className={`h-12`}
              ><Image src={item.img} alt="img" className="h-full object-contain" /></div>
              <p className="mt-2 text-sm">{item.type}</p>
              <p className="text-xs text-gray-500">{item.count} CARS</p>
            </div>
          ))}
        </div>
      </div>

      {/* Budget Filter */}
      <div>
        <h2 className="sm:text-xl text-base font-semibold mb-2">Budget</h2>
        <div className="flex gap-4 overflow-x-auto">
          {budgets.map((budget) => (
            <div
              key={budget}
              onClick={() => handleBudgetClick(budget)}
              className={`flex-shrink-0 w-40 h-12 shadow-md border rounded-lg flex items-center justify-center sm:text-sm text-xs cursor-pointer ${
                selectedBudget === budget
                  ? "border-blue-500 bg-blue-100"
                  : "bg-white"
              }`}
            >
              {budget}
            </div>
          ))}
        </div>
      </div>

      {/* Display Selected Filters */}
      <div className="p-4 pt-0 bg-white shadow-md rounded-lg">
        <h3 className="sm:text-lg text-sm font-semibold">Selected Filters</h3>
        <p className="sm:text-sm text-xs text-gray-700">
          <span className="font-bold">Body Type:</span>{" "}
          {selectedBodyType || "None"}
        </p>
        <p className="sm:text-sm text-xs text-gray-700">
          <span className="font-bold">Budget:</span> {selectedBudget || "None"}
        </p>
      </div>
    </div>
  );
};

export default BodyFillter;
