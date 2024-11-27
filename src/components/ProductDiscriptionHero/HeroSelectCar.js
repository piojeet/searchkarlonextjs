import { Bell, Play, Plus, Search } from "lucide-react";
import SelectCar from "../UsedCarComparison/SelectCar";

export default function HeroSelectCar() {
  return (
    <div className="p-4">

      <div className="flex items-center justify-between">
        <div className="font-semibold">Maruti Suzuki Wagonr</div>
        <button className="border-2 size-9 rounded-full flex items-center justify-center"><Search size={20} /></button>
      </div>

      <SelectCar />

      <div className="text-sm space-y-4 sm:pt-0 pt-4">
      <button className="block w-fit mx-auto py-2 bg-lightOrange rounded-md px-4 text-whiteColor"><span className="flex items-center gap-1"><Bell stroke="#fff" fill="#fff" /> Set Price Drop Alert</span></button>

      <div className="flex items-center gap-2 md:flex-row flex-col">
      <button className="block w-fit mx-auto py-2 bg-lightOrange rounded-md px-4 text-whiteColor"><span className="flex items-center gap-1"><Plus stroke="#FFA500" fill="#003366" className="bg-whiteColor rounded-full p-1" />Add to Compare</span></button>
      <button className="block w-fit mx-auto py-2 bg-buttonColor rounded-md px-4 text-whiteColor"><span className="flex items-center gap-1"><Play stroke="#003366" fill="#003366" className="bg-whiteColor rounded-full p-1" />Videos</span></button>
      </div>
      </div>

      <div className="space-y-2 mt-4">
        <div className="flex items-center justify-between text-sm">
          <div>Release Date in india:</div>
          <div>19 Jan 2016</div>
        </div>
        <div className="flex items-center justify-between text-sm">
          <div className="text-[#5465FF]">Official Website Link</div>
          <div>315,876 views</div>
        </div>
      </div>
    </div>
  )
}

