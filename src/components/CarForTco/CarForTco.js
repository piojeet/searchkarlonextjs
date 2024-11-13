import Image from "next/image";
import Car from "../../../public/car.png"

export default function CarForTco() {

    const data = [
        [
          ["Select Make", "demo1", "demo2", "demo3"],
          ["Select Make", "demo4", "demo5", "demo6"],
          ["Select Make", "demo7", "demo8", "demo9"]
        ],
        [
          ["Select Make", "demo11", "demo12", "demo13"],
          ["Select Make", "demo14", "demo15", "demo16"],
          ["Select Make", "demo17", "demo18", "demo19"]
        ],
        [
          ["Select Make", "demo20", "demo21", "demo22"],
          ["Select Make", "demo23", "demo24", "demo25"],
          ["Select Make", "demo26", "demo27", "demo28"]
        ]
      ];

    return (
        <div className="lg:p-6 p-4">
            <div>
                <form action="#">
                    <div className="grid sm:grid-cols-2">
                        <div>
                            <div className="text-lg text-blackColor font-medium">Select Cars for TCO</div>
                            <div className="text-sm"><span className="text-darkOrange">*</span>Add minimum one Car  <span className="text-darkOrange">*</span>All fields are Mandatory</div>
                        </div>
                        <div className="text-sm mt-2 sm:mt-0">
                            <div className="text-sm"><span className="text-darkOrange">*</span>Monthly Running (in kms)</div>
                            <input type="text" placeholder="Enter" className="py-2 border-2 px-2 rounded-md outline-none" />
                        </div>
                    </div>

                    <div className="grid lg:grid-cols-3 sm:grid-cols-2 gap-4 mt-4">
                        {data.map((selectGroup, index) => (
                            <div key={index} className="text-sm border-2 px-4 py-2 space-y-2 rounded-md">
                                <div className="size-16 mx-auto">
                                    <Image src={Car} alt="car" className="h-full w-full object-contain" />
                                </div>
                                {selectGroup.map((options, idx) => (
                                    <select
                                        key={idx}
                                        name=""
                                        id=""
                                        className="py-2 border-2 rounded-md px-2 w-full outline-none"
                                    >
                                        {options.map((option, i) => (
                                            <option key={i} value={option}>
                                                {option}
                                            </option>
                                        ))}
                                    </select>
                                ))}
                            </div>
                        ))}
                    </div>

                </form>
            </div>
        </div>
    )
}