"use client";

import { useId } from "react";
import SelectbyFuelType from "./SelectbyFuelType";
import { usePathname } from "next/navigation";

export default function SelectbyPrice() {
    // Generate a unique ID for this component instance
    const uniqueId = useId();

    const priceData = [
        { id: "priceOne", price: "Upto ₹ 3 Lakh" },
        { id: "priceTwo", price: "₹ 3 - ₹ 5 Lakh" },
        { id: "priceThree", price: "₹ 5 - ₹ 10 Lakh" },
        { id: "priceFour", price: "₹ 10 - ₹ 20 Lakh" },
        { id: "priceFive", price: "₹ 20 - ₹ 50 Lakh" },
        { id: "priceSix", price: "₹ 50 Lakh & Above" },
    ];

    // Create a unique group name for radio inputs
    const uniqueGroupName = `SelectPrice_${uniqueId}`;

    const pathname = usePathname()
    const car = "/car";

    return (
        <div className="lg:grid lg:grid-cols-2 lg:p-6 lg:gap-4">
            <div className="bg-whiteColor p-4 lg:p-0 rounded-md lg:rounded-none">
                <div className="lg:text-xl font-semibold text-lg">Select by Price</div>
                <div className="grid xs:grid-cols-2 md:gap-4 gap-2 border-2 md:p-4 p-2 rounded-md mt-4">
                    {priceData.map((item) => (
                        <div key={item.id} className="md:text-sm text-xs select-none">
                            <input
                                type="radio"
                                name={uniqueGroupName} // Unique name for this group
                                id={`${uniqueGroupName}_${item.id}`} // Unique ID for the input
                                className="peer hidden"
                            />
                            <label
                                htmlFor={`${uniqueGroupName}_${item.id}`}
                                className="block md:p-2 p-1 py-4 rounded-md cursor-pointer bg-gray-50 transition-colors duration-200 peer-checked:bg-lightOrange peer-checked:text-whiteColor border-2"
                            >
                                {item.price}
                            </label>
                        </div>
                    ))}
                </div>
            </div>

            <div className={`${pathname === car ? 'lg:block hidden' : ''}`}>
                <SelectbyFuelType />
            </div>
        </div>
    );
}
