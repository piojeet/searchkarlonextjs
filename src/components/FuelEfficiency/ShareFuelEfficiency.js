"use client"

export default function ShareFuelEfficiency() {
    const data = [
        ["Select Make", "demo1", "demo2", "demo3"],
        ["Select Make", "demo4", "demo5", "demo6"],
        ["Select Make", "demo7", "demo8", "demo9"],
        ["Select Make", "demo7", "demo8", "demo9"],
        ["Select Make", "demo7", "demo8", "demo9"],
        ["Select Make", "demo7", "demo8", "demo9"],
    ];

    return (
        <div>
            <form action="#">
            <div className="p-4 border-2 rounded-md">
                <div className="lg:text-xl text-lg">Find Fuel Efficiency of Car in India</div>
                <div className="sm:flex items-end justify-between text-sm mt-4 gap-4 space-y-4 sm:space-y-0">
                    <div className="grid sm:grid-cols-2 gap-y-2 gap-x-4">
                        {data.map((item, index) => (
                            <select name="" id="" key={index} className="py-2 border-2 px-2 outline-none rounded-md">
                                {item.map((value, subIndex) => (
                                    <option key={subIndex} value={value}>
                                        {value}
                                    </option>
                                ))}
                            </select>
                        ))}
                    </div>

                    <button type="submit" className="py-2 px-8 bg-darkOrange text-whiteColor rounded-md">Search</button>
                </div>
            </div>
            </form>
        </div>
    );
}
