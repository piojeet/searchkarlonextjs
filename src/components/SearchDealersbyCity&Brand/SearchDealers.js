"use client"

import NotRegistered from "./NotRegistered";

export default function SearchDealers() {

    const data = [
        ["Select Make", "demo1", "demo2", "demo3"],
        ["Select Make", "demo4", "demo5", "demo6"],
    ];

    return (
        <div className="lg:p-6 p-4 grid lg:grid-cols-2 gap-4">
            <form action="#">
            <div className="p-4 border-2 rounded-md">
                <div className="lg:text-xl font-medium text-lg">Search Dealers by City & Brand</div>

                <div className="grid sm:grid-cols-3 gap-4 mt-4 text-sm">
                    {data.map((item, index) => (
                        <select name="" id="" key={index} className="py-2 border-2 px-2 outline-none rounded-md">
                            {item.map((value, subIndex) => (
                                <option key={subIndex} value={value}>
                                    {value}
                                </option>
                            ))}
                        </select>
                    ))}

                    <button type="submit" className="py-2 bg-darkOrange hover:bg-darkOrange/90 px-4 rounded-md text-whiteColor outline-none">Find Dealers</button>
                </div>
            </div>
            </form>

            <NotRegistered />
        </div>
    )
}