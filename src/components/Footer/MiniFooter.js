'use client'

import { ChevronDown, ChevronLeftIcon, ChevronUp } from "lucide-react";

import car from "../../../public/footer/car.png";
import bike from "../../../public/footer/bike.png";
import flight from "../../../public/footer/flight.png";
import hotel from "../../../public/footer/hotel.png";
import laptop from "../../../public/footer/laptop.png";
import mobile from "../../../public/footer/mobile.png";
import tab from "../../../public/footer/tab.png";
import Image from "next/image";
import { useState } from "react";

export default function MiniFooter() {

    const [isOpen, setIsOpen] = useState(true);

    return (
        <div>
            <div
			className={` ${!isOpen ? "w-14 translate-y-0 justify-start rounded-ee-full rounded-se-full transition-all duration-300" : "w-full justify-between px-6 transition-all duration-300"} fixed bottom-0 z-[999] hidden h-12 items-center gap-4 bg-buttonColor lg:flex`}>
                <div>
                <button
				onClick={() => setIsOpen(!isOpen)}
				variant="ghost"
				className={` ${isOpen ? "p-0" : "pl-4"} select-none font-bold text-white hover:bg-transparent hover:text-white flex items-center gap-1`}
			>
				{isOpen && <span>Hide</span>}
				<span className="rounded-full bg-lightOrange p-[2px] text-white">
					<ChevronLeftIcon
						strokeWidth={3}
						className={`${!isOpen ? "rotate-180" : "rotate-0"} transition-all duration-700 size-4`}
					/>
				</span>
			</button>
                </div>
                {isOpen ? (
                    <div className="flex w-full items-center justify-between gap-4 transition-all duration-300">
                    <div className="flex items-center p-0 font-bold text-white hover:bg-transparent hover:text-white text-sm gap-1">Compare <ChevronDown strokeWidth={4} className="size-4" /></div>
                    <div className="flex shrink-0 items-center gap-3">
                        <div className="w-fit"><Image src={car} alt="car" className="size-8 rounded-full border-2 object-cover" /></div>
                        <div className="w-fit"><Image src={bike} alt="car" className="size-8 rounded-full border-2 object-cover" /></div>
                        <div className="w-fit"><Image src={flight} alt="car" className="size-8 rounded-full border-2 object-cover" /></div>
                        <div className="w-fit"><Image src={hotel} alt="car" className="size-8 rounded-full border-2 object-cover" /></div>
                        <div className="w-fit"><Image src={laptop} alt="car" className="size-8 rounded-full border-2 object-cover" /></div>
                        <div className="w-fit"><Image src={mobile} alt="car" className="size-8 rounded-full border-2 object-cover" /></div>
                        <div className="w-fit"><Image src={tab} alt="car" className="size-8 rounded-full border-2 object-cover" /></div>
                    </div>
                    <div className="flex items-center p-0 font-bold text-white hover:bg-transparent hover:text-white text-sm gap-1">Compare <ChevronUp className="size-5" strokeWidth={3} /></div>
                    <div className="flex h-10 w-[30rem] rounded-md overflow-hidden">
                        <button className="h-full rounded-ee-none rounded-se-none bg-lightOrange text-white hover:bg-lightOrange/90 px-2">
                            SUBSCRIBE
                        </button>
                        <form
                            action=""
                            className="flex h-full w-full items-center justify-center"
                        >
                            <div className="flex h-10 w-full items-center justify-center">
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    autoComplete="on"
                                    placeholder="Enter Your Email.."
                                    className="h-full w-full rounded-none border-none bg-white px-4 py-3 text-black placeholder:text-gray-400 focus-visible:outline-none focus-visible:ring-0"
                                    required
                                />
                                <button
                                    type="submit"
                                    className="h-full rounded-es-none rounded-ss-none bg-lightOrange text-white hover:bg-lightOrange/90 px-2"
                                >
                                    Subscribe
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
                ) : (
                    null
                )}
            </div>
        </div>
    )
}