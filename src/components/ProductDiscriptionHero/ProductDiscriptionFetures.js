import Image from "next/image";
import Power from "../../../public/share/Power.svg";
import Car from "../../../public/share/Car.svg";
import Turbo from "../../../public/share/simple-icons_turbo.svg";
import Drive from "../../../public/share/Group.svg";
import Engine from "../../../public/share/mdi_engine.svg";
import Warranty from "../../../public/share/flat-color-icons_rating.svg";
import Fuel from "../../../public/share/Vector.svg";
import Cell from "../../../public/share/mdi_fuel-cell.svg";
import Rupee from "../../../public/share/Rupee.svg";
import Percent from "../../../public/share/percent.svg";
import Insurance from "../../../public/share/insurance.svg";

import { Play, ThumbsDown, ThumbsUp } from "lucide-react";

export default function ProductDiscriptionFetures() {
  return (
    <div>
        <div className="sm:flex justify-between border border-black p-2 text-sm lg:flex-row flex-col hidden">
            <div className="space-y-2 p-4">
                <div className="flex items-center gap-4">
                    <div>Fuel Type</div>
                    <div className="bg-gray-200 px-2">Petrol</div>
                </div>
                <div className="flex items-center gap-4">
                    <div>Mileage</div>
                    <div className="bg-gray-200 px-2">13-16 Km/L</div>
                </div>

                <div className="flex items-center gap-4">
                    <div>Transmission</div>
                    <div className="bg-gray-200 px-2">Automatic</div>
                </div>
            </div>
            <span className="block lg:w-px lg:h-auto h-px bg-slate-950"></span>
            <div className="space-y-2 p-4">
                <div className="flex items-center justify-start gap-4">
                    <div className="flex items-center gap-2"><Image src={Power} alt="Img" className="size-6" /> Power</div>
                    <div className="bg-gray-200 px-2">135 bhp</div>
                </div>
                <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2"> <Image src={Car} alt="Img" className="size-6" />Seating Capacity</div>
                    <div className="bg-gray-200 px-2">5,7</div>
                </div>

                <div className="flex items-center gap-4">
                    <div>Ground
                    Clearance (mm)</div>
                    <div className="bg-gray-200 px-2">254mm</div>
                </div>
            </div>

            <span className="block lg:w-px lg:h-auto h-px bg-slate-950"></span>

            <div className="space-y-2 p-4">
                <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2"><Image src={Engine} alt="Img" className="size-6" /> Engine</div>
                    <div className="bg-gray-200 px-2">2000cc</div>
                </div>
                <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2"><Image src={Drive} alt="Img" className="size-6" />Drive Type</div>
                    <div className="bg-gray-200 px-2">RED</div>
                </div>

                <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2"><Image src={Turbo} alt="Img" className="size-6" />Torque</div>
                    <div className="bg-gray-200 px-2">300Nm</div>
                </div>
            </div>

            <span className="block lg:w-px lg:h-auto h-px bg-slate-950"></span>

            <div className="space-y-2 p-4">
                <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2"><Image src={Warranty} alt="Img" className="size-6" />Warranty</div>
                    <div className="bg-gray-200 px-2">7Year</div>
                </div>

                <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2"><Image src={Fuel} alt="Img" className="size-6" />Fuel Tank</div>
                    <div className="bg-gray-200 px-2">67 Liter</div>
                </div>

                <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2"><Image src={Cell} alt="Img" className="size-6" />Safety</div>
                    <div className="bg-gray-200 px-2">9/10</div>
                </div>
            </div>
        </div>

<div className="sm:flex hidden w-fit items-center gap-2 lg:ml-auto my-4">View All Spaces & Features <Play stroke="#fff" fill="#fff" size={35} className="bg-[#C82222] rounded-full p-2 cursor-pointer" /></div>

<div className="flex justify-between lg:p-4 pt-0 flex-wrap lg:gap-0 gap-4 mt-4 sm:mt-0">
    <div>
        <div className="flex items-center gap-2 font-bold text-lg"><ThumbsUp size={20} fill="#5DB506" className="text-[#5DB506]" /> Pros</div>
        <ul className="list-disc pl-4 sm:text-sm text-xs">
            <li>Long list of features.</li>
            <li>Engine & gearbox options.</li>
            <li>Expected to have high safety</li>
        </ul>
    </div>
    <div>
        <div className="flex items-center gap-2 font-bold text-lg"><ThumbsDown size={20} fill="#C82222" className="text-[#C82222]" /> Cons</div>
        <ul className="list-disc pl-4 sm:text-sm text-xs">
            <li>Long list of features.</li>
            <li>Engine & gearbox options.</li>
            <li>Expected to have high safety</li>
        </ul>
    </div>

    <div className="flex gap-4">
        <div className="flex flex-col justify-between sm:text-sm text-xs">
            <div className="flex items-center gap-2"><Image src={Car} alt="Img" className="size-6" /> Test drive</div>
            <div className="flex items-center gap-2"><Image src={Rupee} alt="Img" className="size-6" /> EMI Option</div>
            <div className="flex items-center gap-2"><Image src={Rupee} alt="Img" className="size-6" /> Bank Financing</div>
           
        </div>
        <div className="flex flex-col justify-between sm:text-sm text-xs">
        <div className="flex items-center gap-2"><Image src={Percent} alt="Img" className="size-6" /> Discount</div>
        <div className="flex items-center gap-2"><Image src={Insurance} alt="Img" className="size-6" /> Insurance</div>
        <div className="flex items-center gap-2"><Image src={Insurance} alt="Img" className="size-6" /> Insurance</div>
        </div>
    </div>
</div>

    </div>
  )
}

