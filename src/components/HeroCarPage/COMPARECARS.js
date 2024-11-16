export default function COMPARECARS() {

    const car1 = [
        ["Make", "demo1", "demo2", "demo3"],
        ["Model", "demo1", "demo2", "demo3"],
        ["Variant", "demo1", "demo2", "demo3"],
        ["Body Type", "demo1", "demo2", "demo3"],
    ];
    const car2 = [
        ["Make", "demo1", "demo2", "demo3"],
        ["Model", "demo1", "demo2", "demo3"],
        ["Variant", "demo1", "demo2", "demo3"],
        ["Body Type", "demo1", "demo2", "demo3"],
    ];
    const car3 = [
        ["Make", "demo1", "demo2", "demo3"],
        ["Model", "demo1", "demo2", "demo3"],
        ["Variant", "demo1", "demo2", "demo3"],
        ["Body Type", "demo1", "demo2", "demo3"],
    ];

    return (
        <div className="p-4 bg-whiteColor rounded-md">
            <div className="h-full flex flex-col justify-between gap-2">
                <div className="text-center text-base font-semibold">COMPARE CARS</div>

                <div className="flex items-start gap-2 text-sm whitespace-nowrap">
                    <div>Car 1</div>
                    <div className="flex items-center gap-2 text-sm flex-wrap">
                    {car1.map((car, i) => (
                        <select name="" id="" key={i} className="py-1 px-1 border-2 rounded-md">
                            {car.map((value, subIndex) => (
                                <option key={subIndex} value={value}>
                                    {value}
                                </option>
                            ))}
                        </select>
                    ))}
                    </div>
                </div>
                <div className="flex items-start gap-2 text-sm whitespace-nowrap">
                    <div>Car 1</div>
                    <div className="flex items-center gap-2 text-sm flex-wrap">
                    {car2.map((car, i) => (
                        <select name="" id="" key={i} className="py-1 px-1 border-2 rounded-md">
                            {car.map((value, subIndex) => (
                                <option key={subIndex} value={value}>
                                    {value}
                                </option>
                            ))}
                        </select>
                    ))}
                    </div>
                </div>
                <div className="flex items-start gap-2 text-sm whitespace-nowrap">
                    <div>Car 1</div>
                    <div className="flex items-center gap-2 text-sm flex-wrap">
                    {car3.map((car, i) => (
                        <select name="" id="" key={i} className="py-1 px-1 border-2 rounded-md">
                            {car.map((value, subIndex) => (
                                <option key={subIndex} value={value}>
                                    {value}
                                </option>
                            ))}
                        </select>
                    ))}
                    </div>
                </div>

                <div className="flex items-center justify-center gap-4">
                    <button className="border-2 bg-lightOrange transition-colors duration-300 hover:bg-orange lg:w-28 px-4 lg:border-[#5DB506] lg:bg-[#5DB506] lg:hover:bg-[#5DB506] py-1 text-sm rounded-md text-whiteColor">
                        Search
                    </button>
                </div>

            </div>
        </div>
    )
}