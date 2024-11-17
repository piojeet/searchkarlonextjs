"use client"

import Image from "next/image"
import Gas from "../../../public/Gas Station.svg"
import Diesel from "../../../public/desel.svg"
import CNG from "../../../public/cng.svg"
import LPG from "../../../public/lpg.svg"

export default function SelectbyFuelType() {

    const data = [
        { name: "Fuel Type", img: Gas },
        { name: "Diesel", img: Diesel },
        { name: "CNG", img: CNG },
        { name: "LPC", img: LPG },
    ]

    return (
        <div>
            <div className="lg:text-xl font-semibold text-lg">Select by Fuel Type</div>
            <div className="mt-4 border-2 rounded-md md:p-4 p-2 grid grid-cols-2 md:gap-4 gap-2">
                {data.map((item, i) => (
                    <div key={i} className="p-2 border-2 rounded-md bg-gray-50 flex flex-col gap-2 justify-center items-center">
                        <Image src={item.img} alt={item.name} className="w-11" />
                        <div className="text-sm font-semibold">{item.name}</div>
                    </div>
                ))}
            </div>
        </div>
    )
}