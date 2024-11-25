"use client";

import Image from "next/image";
import Gas from "../../../public/Gas Station.svg";
import Diesel from "../../../public/desel.svg";
import CNG from "../../../public/cng.svg";
import LPG from "../../../public/lpg.svg";
import { useId } from "react";

export default function SelectbyFuelType() {
    const uniqueId = useId();

    const data = [
        { id: 1, name: "Fuel Type", img: Gas },
        { id: 2, name: "Diesel", img: Diesel },
        { id: 3, name: "CNG", img: CNG },
        { id: 4, name: "LPG", img: LPG },
    ];

    const uniqueGroupName = `SelectPrice_${uniqueId}`;

    return (
        <div className="lg:p-0 p-4 bg-whiteColor rounded-md lg:rounded-none">
            <div className="lg:text-xl font-semibold text-lg">Select by Fuel Type</div>
            <div className="mt-4 border-2 rounded-md md:p-4 p-2 grid grid-cols-2 md:gap-4 gap-2">
                {data.map((item) => (
                    <div key={item.id} className="border-2 rounded-md bg-gray-50 flex flex-col gap-2 justify-center items-center">
                        <input
                            type="radio"
                            name={uniqueGroupName}
                            id={`${uniqueGroupName}_${item.id}`}
                            className="peer hidden"
                        />
                        <label
                            htmlFor={`${uniqueGroupName}_${item.id}`}
                            className="md:p-2 rounded-md cursor-pointer bg-gray-50 transition-colors duration-200 peer-checked:bg-lightOrange peer-checked:text-white p-2 h-full w-full inline-flex flex-col gap-2 justify-center items-center select-none"
                        >
                            <Image src={item.img} alt={`Image of ${item.name}`} className="w-5" />
                            <div className="text-sm font-semibold">{item.name}</div>
                        </label>
                    </div>
                ))}
            </div>
        </div>
    );
}
