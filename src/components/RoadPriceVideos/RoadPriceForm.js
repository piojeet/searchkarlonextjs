"use client"

import { cityData, RoadPriceCarData, RoadPriceCarLDIData, RoadPriceCarVitraData } from "@/db/db";
import { Fragment } from "react";

export default function RoadPriceForm() {
    return (
        <div className="h-full pt-10">
            <div className="p-4 border-2 h-full rounded-md">
                <form action="#">
                    <input type="text" placeholder="Search here" className="text-center py-2 border-2 rounded-md w-full outline-none text-sm" />

                    <div className="text-lg text-[#DC4F45] font-semibold text-center py-2 pt-4">Get  On Road Price</div>
                    <p className="text-sm text-center">we have the best on the Road price </p>

                    <div className="flex items-center gap-2 my-4 sm:flex-row flex-col">
                        <input type="text" placeholder="Enter your Name" className="text-center py-2 border-2 rounded-md w-full outline-none text-sm" />
                        <input type="text" placeholder="Enter your number" className="text-center py-2 border-2 rounded-md w-full outline-none text-sm" />
                    </div>

                    <input type="email" placeholder="Enter your E-mail" className="text-center py-2 border-2 rounded-md w-full outline-none text-sm" />

                    <div className="flex items-center gap-2 flex-wrap my-2 text-sm">
                        {RoadPriceCarData.map((item, i) => (
                            <select key={`roadprice-${i}`} className="block w-fit py-2 outline-none rounded-md px-2 border-2">
                                <option value="Maruti Suzuk" key="maruti">Maruti Suzuk</option>
                                {item.car.map((carItem, carIndex) => (
                                    <option key={`roadprice-${i}-${carIndex}`} value={carItem}>
                                        {carItem}
                                    </option>
                                ))}
                            </select>
                        ))}

                        {RoadPriceCarVitraData.map((item, m) => (
                            <select key={`vitra-${m}`} className="block w-fit py-2 outline-none rounded-md px-2 border-2">
                                <option value="Vitara Brezza" key="vitara">Vitara Brezza</option>
                                {item.vitra.map((vitraItem, vitraIndex) => (
                                    <option key={`vitra-${m}-${vitraIndex}`} value={vitraItem}>
                                        {vitraItem}
                                    </option>
                                ))}
                            </select>
                        ))}

                        {RoadPriceCarLDIData.map((item, v) => (
                            <select key={`ldi-${v}`} className="block w-fit py-2 outline-none rounded-md px-2 border-2">
                                <option value="Vitara Brezza" key="ldi-brezza">Vitara Brezza</option>
                                {item.ldi.map((ldiItem, ldiIndex) => (
                                    <option key={`ldi-${v}-${ldiIndex}`} value={ldiItem}>
                                        {ldiItem}
                                    </option>
                                ))}
                            </select>
                        ))}

                        {cityData.map((item, index) => (
                            <select key={`city-${index}`} className="block w-fit py-2 outline-none rounded-md px-2 border-2">
                                <option value="city" key="city-option">City</option>
                                {item.city.map((cityItem, cityIndex) => (
                                    <option key={`city-${index}-${cityIndex}`} value={cityItem}>
                                        {cityItem}
                                    </option>
                                ))}
                            </select>
                        ))}
                    </div>

<div className="flex items-center justify-between">
    <div className="text-sm flex items-center gap-1">
        <input type="checkbox" name="" id="agree" className="accent-lightOrange" />
        <label htmlFor="agree">I agree to terms & condition </label>
    </div>

<button className="block py-2 px-2 bg-[#5DB506] rounded-md text-whiteColor">submit</button>

</div>

                </form>
            </div>
        </div>
    )
}