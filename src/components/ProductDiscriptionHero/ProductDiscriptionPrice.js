import { CircleAlert, CircleChevronDown, IndianRupee } from "lucide-react";
import SelectYourLocationPopup from "./SelectYourLocationPopup";

export default function ProductDiscriptionPrice() {
    return (
        <div className="space-y-4 my-4">
            <div className="flex items-center gap-2 flex-wrap">
                <div className="font-semibold text-lg">Price  ₹6.3 - 8.8 Lakh</div>
                <div className="flex items-center gap-1 text-sm relative">*Ex-showroom Price in <span className="flex items-center gap-1 text-sm"><SelectYourLocationPopup /></span></div>
                <div className="text-sm">Get On-Road Price</div>
                <IndianRupee size={16} className="border-2 border-lightOrange rounded-full p-0.5 text-lightOrange" />
                <div className="text-sm">Price Break-up</div>
                <button className="block w-fit px-4 py-2 bg-[#2F88FF] text-whiteColor rounded-md">Get The Deal</button>
            </div>

            <div className="flex items-center gap-2 flex-wrap text-sm">
                <div className="font-semibold text-lg flex items-center gap-1 text-[#4B51A7]">Change Variant <CircleChevronDown size={16} /></div>
                <div className="">EMI</div>
                <div className="flex items-center gap-1"><IndianRupee size={16} className="border-2 border-lightOrange rounded-full p-0.5 text-lightOrange" /> 11,699</div>
                <div className="flex items-center gap-1"><CircleAlert size={16} className="text-gray-400" />For 7 Years</div>

                <button className="block w-fit py-0.5 px-2 border border-gray-500 bg-gray-200 rounded-full">EMI Calculator</button>
                <button className="block w-fit py-0.5 px-2 border border-gray-500 bg-gray-200 rounded-full">Get EMI Offer</button>
                
                <button className="block w-fit px-4 py-2 bg-lightOrange text-whiteColor rounded-md">Download Brochure</button>
            </div>
        </div>
    )
}

