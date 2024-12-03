"use client";

import { BadgePercent, Filter } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function CarVariant() {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleContent = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <div className="lg:p-6 sm:p-4" id="variants">
            <div className="sm:border rounded-md py-4">
            <div className="sm:px-4 space-y-4">
                <div className="w-full mx-auto px-4">
                    <div className="font-bold text-lg mb-2">Maruti Suzuki Wagonr Variants</div>
                    <div>
                        <div className="sm:text-sm text-xs">
                            Find a list of all 1 electric variants of Mahindra XEV 9e. This
                            table includes Mahindra XEV 9e on-road price which covers all costs
                            like RTO and Insurance.
                        </div>
                        <ul className="pl-4 list-disc mt-2 sm:text-sm text-xs">
                            <li>
                                XEV 9e Electric price in India is ₹ 23.17 Lakh
                                {!isExpanded && "..."}
                            </li>
                            {isExpanded && (
                                <li>XEV 9e Electric price in India is ₹ 23.17 Lakh.</li>
                            )}
                        </ul>
                    </div>
                    <button
                        onClick={toggleContent}
                        className="text-black block w-fit ml-auto cursor-pointer text-sm"
                    >
                        {isExpanded ? "View Less" : "+More"}
                    </button>
                </div>

                <div className="p-4 bg-gray-100 rounded-md space-y-4">
                    <div className="flex items-center gap-1 text-gray-500"><Filter size={16} /><span className="sm:text-sm text-xs">Filter By</span> <span className="sm:text-sm text-[0.5rem]">Fuel type, Transmission and Seating Capacity</span></div>
                    <div className="flex sm:gap-4 gap-2 sm:text-sm text-xs">
                        <button className="py-1.5 border border-black sm:px-4 px-3 uppercase rounded-md bg-whiteColor hover:text-darkOrange hover:border-darkOrange">electric</button>
                        <div className="w-px bg-gray-500"></div>
                        <button className="py-1.5 border border-black sm:px-4 px-3 uppercase rounded-md bg-whiteColor hover:text-darkOrange hover:border-darkOrange">automatic</button>
                        <div className="w-px bg-gray-500"></div>
                        <button className="py-1.5 border border-black sm:px-4 px-3 uppercase rounded-md bg-whiteColor hover:text-darkOrange hover:border-darkOrange">5 seater</button>
                    </div>
                </div>
            </div>

            <div className="border-b pb-2 mb-2 flex items-center justify-between px-4 mt-4 sm:text-sm text-gray-500 text-xs">
                <div>Wagonr Variants</div>
                <div>Price in current location</div>
                <div className="sm:block hidden">Compare</div>
            </div>

            <div className="px-4 space-y-4">
                <div className="flex items-start justify-between">
                    <div className="space-y-2">
                        <Link href="#" className="border-b border-black sm:text-base text-sm">Maruti Suzuki Pack One</Link>
                        <div className="text-sm text-gray-500">Electric</div>
                    </div>
                    <div className="sm:text-sm space-y-2 text-xs">
                        <div>₹ 23.17 Lakh</div>
                        <div className="sm:flex hidden text-[#0288D1]">
                            <Link href="#" className="flex items-center pr-1"><BadgePercent size={18} fill="#0288D1" stroke="#fff" /> Get Offers</Link>
                            <Link href="#" className="pl-1 border-l">Price & EMI Details</Link>
                        </div>
                    </div>

                    <div className="text-sm sm:block hidden">
                        <label htmlFor="addcompare" className="cursor-pointer flex items-center gap-1 select-none text-gray-500">Add to Compare<input type="checkbox" name="" id="addcompare" className="accent-darkOrange size-4 cursor-pointer" /></label>
                        
                    </div>
                </div>

                <div className="flex sm:hidden justify-between">
                <div className="sm:text-sm text-xs block sm:hidden">
                        <label htmlFor="addcompare-mobile" className="cursor-pointer flex items-center gap-1 select-none text-gray-500"><input type="checkbox" name="" id="addcompare-mobile" className="accent-darkOrange size-3 cursor-pointer" />Compare</label>
                        
                    </div>
                <div className="flex sm:hidden text-[#0288D1] text-xs">
                            <Link href="#" className="flex items-center pr-1"><BadgePercent size={15} fill="#0288D1" stroke="#fff" /> Get Offers</Link>
                            <Link href="#" className="pl-1 border-l">Price & EMI Details</Link>
                        </div>
                </div>

                <div className="bg-gray-100 px-4 py-2 sm:text-sm text-xs text-gray-500">Key Features : 7 Airbags</div>
            </div>
        </div>
        </div>
    );
}
