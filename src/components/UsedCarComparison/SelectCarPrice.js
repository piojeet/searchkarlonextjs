"use client"

import { SelectCarPriceData } from "@/db/db";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function SelectCarPrice() {

  const colors = [
    "#C82222",
    "#E2E2E2",
    "#C0C0C0",
    "#A77A28",
    "#7F94A5",
    "#C1AF9E",
  ];

  const handleColorSelect = (color) => {
    setSelectedColor(color); // Update selected color
  };
  const [selectedColor, setSelectedColor] = useState(colors[0]); // Track selected color

  return (
    <div>
      <div>
        <div>Maruti Suzuki Wagonr</div>
        <div>Price: 6.3 - 8.8 LAKH</div>
        <div className="flex items-center gap-2">
          <div>Colours</div>
          <div className="flex items-center gap-2 text-sm">
            {colors.map((color, index) => (
              <div
                key={index}
                onClick={() => handleColorSelect(color)} // Handle click
                className={`size-7 rounded-full cursor-pointer border-2 ${selectedColor === color ? "border-lightOrange" : "border-transparent"
                  }`}
                style={{ backgroundColor: color }}
              ></div>
            ))}
          </div>
        </div>
      </div>


      <div className="mt-8 grid sm:grid-cols-3 gap-2">
        {SelectCarPriceData.map((item, index) => (
          <div key={index} className="border-2 rounded-md py-4">
            <div>
              <Image src={item.carLogo} alt={item.title} className="block w-16 mx-auto" />
              <div className="text-center font-semibold">{item.title}</div>
              <div className="text-center font-semibold text-[#5DB506]">{item.price}</div>
              <div className="text-center font-semibold text-[#FFA500] text-xs">{item.newPrice}</div>
            </div>

            <div className="space-y-2 my-6">
              <div className="flex items-center justify-between px-2 py-2 bg-gray-100 text-sm">
                <div className="flex items-center gap-1">
                  <Image src={item.kmImg} alt={item.kmTitle} />
                  <div>{item.kmTitle}</div>
                </div>
                <div className="flex items-center gap-1">
                <Image src={item.petrolImg} alt={item.petrolTitle} />
                  <div>{item.petrolTitle}</div>
                </div>
              </div>

              <div className="flex items-center justify-between px-2 py-2 bg-gray-100 text-sm">
                <div className="flex items-center gap-1">
                  <Image src={item.ownerImg} alt={item.ownerTitle} />
                  <div>{item.ownerTitle}</div>
                </div>
                <div className="flex items-center gap-1">
                <Image src={item.manualImg} alt={item.manualTitle} />
                  <div>{item.manualTitle}</div>
                </div>
              </div>

            </div>

            <Link href={item.selectBtnUrl} className="block w-fit mx-auto text-sm bg-lightOrange py-2 px-8 rounded-md text-whiteColor">{item.selectBtn}</Link>


          </div>
        ))}
      </div>


    </div>
  );
}

