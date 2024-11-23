"use  client"

import { useState } from "react";
import { PlusCircle } from "lucide-react";

export default function SchedulerEMIDate() {
  const [expandedYear, setExpandedYear] = useState(null); // Track the currently expanded year

  const yearData = [
    { id: 1, year: "2024", principle: "54,614", intrest: "40,405", balance: "445,386" },
    { id: 2, year: "2025", principle: "60,000", intrest: "35,000", balance: "400,000" },
    { id: 3, year: "2026", principle: "65,000", intrest: "30,000", balance: "350,000" },
    { id: 4, year: "2027", principle: "70,000", intrest: "25,000", balance: "300,000" },
    { id: 5, year: "2028", principle: "75,000", intrest: "20,000", balance: "250,000" },
    { id: 6, year: "2029", principle: "80,000", intrest: "15,000", balance: "200,000" },
    { id: 7, year: "2030", principle: "85,000", intrest: "10,000", balance: "150,000" },
    { id: 8, year: "2031", principle: "90,000", intrest: "5,000", balance: "100,000" },
    { id: 9, year: "2032", principle: "95,000", intrest: "2,000", balance: "50,000" },
    { id: 10, year: "2033", principle: "100,000", intrest: "1,000", balance: "0" },
    { id: 11, year: "2034", principle: "110,000", intrest: "500", balance: "0" },
    { id: 12, year: "2035", principle: "120,000", intrest: "300", balance: "0" },
  ];

  const monthData = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

  // Handle toggle functionality
  const toggleExpand = (id) => {
    setExpandedYear((prev) => (prev === id ? null : id)); // Toggle if the same, otherwise set new
  };

  return (
    <div className="lg:border-2 rounded-md lg:p-4">
      <div className="border-2 rounded-md">
        {/* Table Header */}
        <div className="grid grid-cols-4 text-right text-sm font-semibold bg-lightOrange text-whiteColor">
          <div className="border-r-2 px-1 py-1">Year</div>
          <div className="border-r-2 px-1 py-1">Principle</div>
          <div className="border-r-2 px-1 py-1">Interest</div>
          <div className="px-1 py-1">Balance</div>
        </div>

        {/* Year Data Rows */}
        {yearData.map((item) => (
          <div key={item.id} className="text-sm">
            {/* Year Row */}
            <div className="grid grid-cols-4">
              <div className="flex items-center justify-between border-r-2 px-1 py-1">
                <div
                  className="text-lightOrange cursor-pointer"
                  onClick={() => toggleExpand(item.id)} // Toggle visibility on click
                >
                  <PlusCircle />
                </div>
                <div>{item.year}</div>
              </div>
              <div className="text-end px-1 py-1 border-r-2">{item.principle}</div>
              <div className="text-end px-1 py-1 border-r-2">{item.intrest}</div>
              <div className="text-end px-1 py-1">{item.balance}</div>
            </div>

            {/* Month Data Rows */}
            <div
              className={`overflow-hidden transition-all duration-300 ${
                expandedYear === item.id ? "max-h-44" : "max-h-0"
              }`}
            >
              <div className="grid grid-cols-4 text-center bg-gray-100">
                {monthData.map((month) => (
                  <div key={month} className="px-1 py-1 border">
                    {month}
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
