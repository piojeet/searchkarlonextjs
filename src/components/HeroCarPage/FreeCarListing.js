"use client"

import Image from "next/image";
import Subtract from "../../../public/Subtract.png";
import redcar from "../../../public/redcar.png";

export default function FreeCarListing() {
    return (
        <div className="bg-whiteColor p-4 rounded-md">
            <div className="h-full flex flex-col justify-between">
                <div className="text-base font-semibold flex gap-2 items-center justify-center">
                    <Image src={Subtract} alt="Subtract" />
                    <span>Sell Your Car</span>
                </div>

                <Image src={redcar} alt="car" className="w-full mt-4" />

                <div className="flex items-center justify-center gap-4">
				<button className="border-2 border-orange bg-lightOrange transition-colors duration-300 hover:bg-orange lg:w-28 px-4 lg:border-[#5DB506] lg:bg-[#5DB506] lg:hover:bg-[#5DB506] py-1 text-sm rounded-md text-whiteColor">
					Search
				</button>
			</div>
            </div>
        </div>
    )
}