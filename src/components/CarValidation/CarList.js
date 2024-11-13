"use client"

import { Check } from "lucide-react";

export default function CarList() {

    const carListData = [
        { text: "Pricing information of 1203 Maruti Ertiga sold through us" },
        { text: "Real time transactional data of 2587 similar car purchases in Mumbai" },
        { text: "Maruti Ertiga Cars within our suggested price range got sold in less than 2 weeks" },
        { text: "Recommended price for a good condition car is 5.72 Lakh - 5.97 Lakh" },
        { text: "Save Rs. 2000 by listing your car for FREE at our suggested price" },
    ];

    return (
        <div className="w-full">
            <div className="text-sm w-full border-2 h-full rounded-md">
                <div className="py-3 border-b-2 bg-gray-100 text-center whitespace-nowrap overflow-hidden text-ellipsis px-2">{`Selling >Maruti SHVS LDI Option > 2015 Model > 50000 kms > Blue Color > 1st Owner > Mumbai`}</div>

                <div className="p-4">
                    <div className="text-blackColor">A few facts about similar cars that we processed</div>

                    <div className="space-y-4 mt-5">
                        {carListData.map((Car, index) => (
                            <div key={index} className="flex items-center gap-4">
                                <div className="size-5 rounded-full text-whiteColor bg-darkOrange flex-shrink-0 flex items-center justify-center"><Check className="size-3" /></div>
                                <div>{Car.text}</div>
                            </div>
                        ))}
                    </div>

                    <button type="submit" className="py-2 w-[65%] bg-darkOrange hover:bg-darkOrange/95 flex-shrink-0 text-sm text-whiteColor rounded-md mx-auto block mt-4">Search</button>
                </div>
            </div>
        </div>
    )
}