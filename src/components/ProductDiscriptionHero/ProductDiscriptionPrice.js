import { ChevronDown, ChevronUp, CircleAlert, CircleChevronDown, IndianRupee } from "lucide-react";
import SelectYourLocationPopup from "./SelectYourLocationPopup";
import { useAuthContext } from "@/context/AuthContext";
import InterestRateCalculator from "../EMICalculator/InterestRateCalculator";
import LoanTimePeriod from "../EMICalculator/LoanTimePeriod";
import CarLoanAmountCalculator from "../EMICalculator/CarLoanAmountCalculator";
import { useState } from "react";

export default function ProductDiscriptionPrice() {

    const { scrollToDiv } = useAuthContext();

    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const [activeTab, setActiveTab] = useState("tab1");

    const tabs = [
        { id: "tab1", label: "EMI Calculator", },
        { id: "tab2", label: "Get EMI Offer", },
        { id: "tab3", label: "Get EMI Offer", },
        { id: "tab4", label: "Get EMI Offer", },
    ];

    return (
        <>
            <div className="sm:space-y-4 sm:my-4">
                <div className="flex items-center gap-2 flex-wrap justify-between sm:justify-start">
                    <div className="font-semibold lg:text-lg">Price  ₹6.3 - 8.8 Lakh</div>
                    <div className="text-xs flex sm:hidden items-center gap-1 text-[#0288D1]" onClick={() => scrollToDiv("variants")}>Change Variant <CircleChevronDown size={16} /></div>
                    <div className="flex items-center sm:gap-2 gap-1 flex-wrap">
                        <div className="sm:text-sm text-xs">*Ex-showroom Price in </div>
                        <div className="flex items-center gap-1 text-sm relative"><span className="flex items-center gap-1 sm:text-sm text-xs"><SelectYourLocationPopup /></span></div>
                        <div className="text-sm sm:block hidden">Get On-Road Price</div>
                        <button className="block sm:hidden w-fit py-0.5 px-2 border border-gray-500 bg-gray-200 rounded-full text-xs">Add to Compare</button>
                    </div>

                    <div className="text-sm sm:flex items-center gap-1 hidden"><IndianRupee size={16} className="border-2 border-lightOrange rounded-full p-0.5 text-lightOrange" />Price Break-up</div>
                    <button className="sm:block hidden w-fit px-4 py-2 bg-[#2F88FF] text-whiteColor rounded-md">Get The Deal</button>
                </div>

                <div className="sm:flex items-center gap-2 flex-wrap text-sm space-y-2 sm:space-y-0">
                    <div className="text-sm sm:flex hidden items-center gap-1 text-[#0288D1] cursor-pointer" onClick={() => scrollToDiv("variants")}>Change Variant <CircleChevronDown size={16} /></div>
                    <div className="flex items-center gap-2 flex-wrap text-sm">
                        <div className="text-sm flex items-center gap-1 sm:hidden"><IndianRupee size={16} className="border-2 border-lightOrange rounded-full p-0.5 text-lightOrange" />Price Break-up</div>
                        <div className="">EMI</div>
                        <div className="flex items-center gap-1"><IndianRupee size={16} className="border-2 border-lightOrange rounded-full p-0.5 text-lightOrange" /> 11,699</div>
                        <div className="flex items-center gap-1"><CircleAlert size={16} className="text-gray-400" />For 7 Years</div>
                    </div>



                    <button className="sm:block hidden w-fit px-4 py-2 bg-lightOrange text-whiteColor rounded-md">Download Brochure</button>
                </div>

                <div className="bg-gray-100 w-full rounded-md relative xl:mt-0 mt-2">
                    <div className="flex items-center sm:gap-2 gap-1 flex-wrap sm:text-sm text-xs py-2 px-2">
                        {tabs.map((tab) => (
                            <button key={tab.id} className={`block w-fit py-0.5 px-2 border   rounded-full ${activeTab === tab.id ? 'border-darkOrange text-darkOrange bg-whiteColor' : 'border-gray-500 bg-gray-200'}`} onClick={() => setActiveTab(tab.id)}>{tab.label}</button>
                        ))}

                    </div>
                    {activeTab === "tab1" && (
                        <div id="tab1">
                            <div className={`transition-all duration-300 overflow-hidden ${isOpen ? 'max-h-[2000px]' : 'max-h-[200px]'}`}>
                                <CarLoanAmountCalculator />

                            </div>
                            <button
                                onClick={toggleDropdown}
                                className="w-full py-2 px-4 rounded flex items-center justify-center border text-sm"
                            >
                                {isOpen ? (
                                    <>
                                        Collapse EMI Calculator <ChevronUp size={18} />
                                    </>
                                ) : (
                                    <>
                                        Expand EMI Calculator <ChevronDown size={18} />
                                    </>
                                )}
                            </button>
                        </div>
                    )}

                    {activeTab === "tab2" && (
                        <div id="tab2">tab2</div>
                    )}

                    {activeTab === "tab3" && (
                        <div id="tab2">tab3</div>
                    )}


                    {activeTab === "tab4" && (
                        <div id="tab2">tab4</div>
                    )}


                </div>
            </div>
        </>
    )
}

