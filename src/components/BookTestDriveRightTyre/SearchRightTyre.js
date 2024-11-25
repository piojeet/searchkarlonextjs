import { cityData } from "@/db/db";
import { Fragment } from "react";

export default function SearchRightTyre() {

    const vehicle = [
        "car",
        "bus",
        "truck",
        "motorcycle",
        "bicycle",
    ];

    const Variant = [
        "small",
        "medium",
        "large",
        "extra-large",
        "hybrid",
        "sports",
        "super-sports",
        "custom",
    ]

    return (
        <>
            <div className="border-2">
                <div>
                    <form action="#">
                        <div className="py-2 text-center bg-gray-200">Search the Right Tyre</div>

                        <div className="md:max-w-[70%] mx-auto p-4 lg:pt-12 space-y-4 text-sm">
                            <div className="flex items-center gap-4">
                                <div className="w-full">
                                    <input type="radio" name="type" id="vehicle" defaultChecked className="accent-white border-white hidden tyrechecked" />
                                    <label htmlFor="vehicle" className="bg-darkOrange py-2 w-full rounded-md">
                                        By vehicle</label>
                                </div>
                                <div className="w-full">
                                    <input type="radio" name="type" id="size" className="tyrechecked" />
                                    <label htmlFor="size" className="bg-darkOrange py-2 w-full rounded-md">By Size</label>
                                </div>
                            </div>

                            <select name="" id="" className="w-full px-2 py-2 rounded-md border-2">
                                <option value="">Select Vehicle</option>
                                {vehicle.map((item, index) => (
                                    <option key={index} value={item}>{item}</option>
                                ))}
                            </select>

                            <select name="" id="" className="w-full px-2 py-2 rounded-md border-2">
                                <option value="">Select Variant</option>
                                {Variant.map((item, index) => (
                                    <option key={index} value={item}>{item}</option>
                                ))}
                            </select>

                            {cityData.map((item, index) => (
                                <select key={index} name="" id="" className="w-full px-2 py-2 rounded-md border-2">

                                    {item.city.map((i) => (
                                        <Fragment key={i}>
                                            <option value="city">City</option>
                                            <option value={i}>{i}</option>
                                        </Fragment>
                                    ))}
                                </select>
                            ))}

                            <button className="w-fit mx-auto block py-2 px-14 bg-darkOrange text-whiteColor rounded-md">Search</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}