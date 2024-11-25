"use client"

import { cityData, pinCodeData } from "@/db/db";
import { Fragment } from "react";
import SearchRightTyre from "./SearchRightTyre";

export default function BookTestDrive() {

    return (
        <>
            <div className="lg:p-6 p-4 grid lg:grid-cols-2 gap-4">
                <div>
                    <form action="#" className="bg-buttonColor">
                        <div className="py-2 bg-[#074D93] text-center text-whiteColor">Book a Test Drive </div>
                        <div className="md:max-w-[70%] w-full mx-auto p-4 space-y-4 text-sm">
                            <input type="text" placeholder="Full Name" className="w-full py-2 px-2 rounded-md outline-none" />
                            <input type="email" placeholder="E-mail" className="w-full py-2 px-2 rounded-md outline-none" />
                            <input type="tel" placeholder="Mobile Number" className="w-full py-2 px-2 rounded-md outline-none" />

                            {cityData.map((item, index) => (
                                <select key={index} name="" id="" className="block w-full py-2 outline-none rounded-md px-2">

                                    {item.city.map((i) => (
                                        <Fragment key={i}>
                                            <option value="city">City</option>
                                            <option value={i}>{i}</option>
                                        </Fragment>
                                    ))}
                                </select>
                            ))}

                            {pinCodeData.map((item, index) => (
                                <select key={index} name="" id="" className="block w-full py-2 outline-none rounded-md px-2">

                                    {item.pincode.map((i) => (
                                        <Fragment key={i}>
                                            <option value="pincode">Pincode</option>
                                            <option value={i}>{i}</option>
                                        </Fragment>
                                    ))}
                                </select>
                            ))}

                            <button className="w-fit mx-auto block py-2 px-14 bg-darkOrange text-whiteColor rounded-md">Search</button>
                        </div>
                    </form>
                </div>
                <SearchRightTyre />
            </div>
        </>
    )
}