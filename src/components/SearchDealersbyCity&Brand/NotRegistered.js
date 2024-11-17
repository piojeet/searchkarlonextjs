"use client"

import Image from "next/image"
import RegisterdCar from "../../../public/registerdcar.png"

export default function NotRegistered() {
    return (
        <div className="border-2 rounded-md p-4">
            <div className="relative">
            <div className="lg:text-xl font-medium text-lg">Search Dealers by City & Brand</div>

            <button type="submit" className="py-2 bg-darkOrange hover:bg-darkOrange/90 px-4 rounded-md text-whiteColor outline-none mt-4 text-sm">Request Now</button>

            <Image src={RegisterdCar} alt="car" className="lg:w-[13vw] sm:w-[25vw] w-[8rem] absolute right-0 bottom-0" />
            </div>
        </div>
    )
}