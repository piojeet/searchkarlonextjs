import { CircleAlert, CircleChevronDown, IndianRupee } from "lucide-react";
import SelectYourLocationPopup from "./SelectYourLocationPopup";
import { useAuthContext } from "@/context/AuthContext";

export default function ProductDiscriptionPrice() {

    const {scrollToDiv} = useAuthContext();

    return (
        <div className="sm:space-y-4 sm:my-4">
            <div className="flex items-center gap-2 flex-wrap">
                <div className="font-semibold lg:text-lg">Price  ₹6.3 - 8.8 Lakh</div>
                <div className="font-semibold lg:text-lg flex sm:hidden items-center gap-1 text-[#4B51A7]" onClick={()=> scrollToDiv("variants")}>Change Variant <CircleChevronDown size={16} /></div>
                <div className="flex items-center sm:gap-2 gap-1 flex-wrap">
                    <div className="sm:text-sm text-xs">*Ex-showroom Price in </div>
                    <div className="flex items-center gap-1 text-sm relative"><span className="flex items-center gap-1 sm:text-sm text-xs"><SelectYourLocationPopup /></span></div>
                    <div className="text-sm sm:block hidden">Get On-Road Price</div>
                    <button className="block sm:hidden w-fit py-0.5 px-2 border border-gray-500 bg-gray-200 rounded-full text-xs">EMI Calculator</button>
                </div>

                <div className="text-sm sm:flex items-center gap-1 hidden"><IndianRupee size={16} className="border-2 border-lightOrange rounded-full p-0.5 text-lightOrange" />Price Break-up</div>
                <button className="sm:block hidden w-fit px-4 py-2 bg-[#2F88FF] text-whiteColor rounded-md">Get The Deal</button>
            </div>

            <div className="sm:flex items-center gap-2 flex-wrap text-sm space-y-2 sm:space-y-0">
                <div className="font-semibold text-lg sm:flex hidden items-center gap-1 text-[#4B51A7] cursor-pointer" onClick={()=> scrollToDiv("variants")}>Change Variant <CircleChevronDown size={16} /></div>
                <div className="flex items-center gap-2 flex-wrap text-sm">
                    <div className="text-sm flex items-center gap-1 sm:hidden"><IndianRupee size={16} className="border-2 border-lightOrange rounded-full p-0.5 text-lightOrange" />Price Break-up</div>
                    <div className="">EMI</div>
                    <div className="flex items-center gap-1"><IndianRupee size={16} className="border-2 border-lightOrange rounded-full p-0.5 text-lightOrange" /> 11,699</div>
                    <div className="flex items-center gap-1"><CircleAlert size={16} className="text-gray-400" />For 7 Years</div>
                </div>

                <div className="flex items-center sm:gap-2 gap-1 flex-wrap sm:text-sm text-xs">
                    <button className="block w-fit py-0.5 px-2 border border-gray-500 bg-gray-200 rounded-full">EMI Calculator</button>
                    <button className="block w-fit py-0.5 px-2 border border-gray-500 bg-gray-200 rounded-full">Get EMI Offer</button>
                    <button className="block sm:hidden w-fit py-0.5 px-2 border border-gray-500 bg-gray-200 rounded-full">Get EMI Offer</button>
                    <button className="block sm:hidden w-fit py-0.5 px-2 border border-gray-500 bg-gray-200 rounded-full">Get EMI Offer</button>
                </div>

                <button className="sm:block hidden w-fit px-4 py-2 bg-lightOrange text-whiteColor rounded-md">Download Brochure</button>
            </div>
        </div>
    )
}

