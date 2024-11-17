"use client";

import SelectbyFuelType from "./SelectbyFuelType";

export default function SelectbyPrice() {
    const priceData = [
        { id: "priceOne", price: "Upto ₹ 3 Lakh" },
        { id: "priceTwo", price: "₹ 3 - ₹ 5 Lakh" },
        { id: "priceThree", price: "₹ 5 - ₹ 10 Lakh" },
        { id: "priceFour", price: "₹ 10 - ₹ 20 Lakh" },
        { id: "priceFive", price: "₹ 20 - ₹ 50 Lakh" },
        { id: "priceSix", price: "₹ 50 Lakh & Above" },
    ];

    return (
        <div className="grid lg:grid-cols-2 lg:p-6 p-4 gap-4">
            <div className="h-full">
            <div className="lg:text-xl font-semibold text-lg">Select by Price</div>
            <div className="grid xs:grid-cols-2 md:gap-4 gap-2 border-2 md:p-4 p-2 rounded-md mt-4 h-full">
            {priceData.map((item, index) => (
                <div key={index} className="md:text-sm text-xs">
                    <input
                        type="radio"
                        name="SelectPrice"
                        id={item.id}
                        className="peer hidden"
                    />
                    <label
                    htmlFor={item.id}
                    className="block md:p-2 p-1 py-4 rounded-md cursor-pointer bg-gray-50 transition-colors duration-200 peer-checked:bg-lightOrange peer-checked:text-whiteColor border-2"
                >
                    
                    {item.price}
                </label>
                </div>
            ))}
        </div>
            </div>

        <SelectbyFuelType />
        </div>
    );
}
