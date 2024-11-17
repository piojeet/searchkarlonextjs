"use client"

import { useAuthContext } from "@/context/AuthContext";
import { ChevronDown, ChevronRight, X } from "lucide-react";
import Link from "next/link";
import Login from "../Icons/Login";
import { NavSidebarAbout, NavSidebarCategory } from "@/db/db";
import Image from "next/image";
import { Fragment, useEffect, useState, useCallback } from "react";
import UserMobile from "../Icons/UserMobile";
import Compare from "../Icons/Compare";
import Cashback from "../Icons/Cashback";

export default function NavSideBar() {
  const [activeTab, setActiveTab] = useState("allCategories");
  
  const { open, handleCloseMenu } = useAuthContext();
  
  const [showDropdown, setShowDropdown] = useState(null);
  // Memoize the toggleAccordion function to prevent unnecessary re-renders
  const toggleAccordion = useCallback((index) => {
    setShowDropdown((prevIndex) => (prevIndex === index ? null : index));
  }, []);

  useEffect(() => {
    // Any necessary side-effects can go here
  }, []);

  return (
    <>
      <div
        className={`w-full h-screen bg-black/50 fixed z-[1000] top-0 ${open ? 'left-[0]' : 'left-[-100%]'}`}
      ></div>
      <div className={`h-screen bg-white fixed transition-all duration-500 top-0 max-w-96 w-[90%] p-3 overflow-y-auto pb-0 z-[1001] ${open ? 'left-0' : '-left-[100%]'}`}>
        <div>
          <button onClick={handleCloseMenu} className="block w-fit ml-auto border border-blackColor rounded-md"><X /></button>

          <nav className="flex items-center justify-between gap-3 px-1 pt-5 font-medium text-xs">
            <Link href="#" className="inline-flex flex-col justify-center items-center gap-1 whitespace-nowrap">
              <div className="p-2 bg-[#F1F6FC] rounded-full w-fit"><Login className="size-6" /></div>
              <div>Login</div>
            </Link>
            <Link href="#" className="inline-flex flex-col justify-center items-center gap-1 whitespace-nowrap">
              <div className="p-2 bg-[#F1F6FC] rounded-full w-fit"><UserMobile className="size-6" /></div>
              <div>Sign Up</div>
            </Link>
            <Link href="#" className="inline-flex flex-col justify-center items-center gap-1 whitespace-nowrap">
              <div className="p-2 bg-[#F1F6FC] rounded-full"><Compare className="size-6" /></div>
              <div>Compare</div>
            </Link>
            <Link href="#" className="inline-flex flex-col justify-center items-center gap-1 whitespace-nowrap">
              <div className="p-2 bg-[#F1F6FC] rounded-full"><Cashback className="size-6" /></div>
              <div>Cashback</div>
            </Link>
          </nav>

          {/* TAB */}
          <div className="mt-5">
            <div className="flex items-center text-sm font-medium">
              <div
                className={`w-full text-center py-2 border border-[#cbd1da] rounded-md rounded-r-none ${activeTab === "allCategories" ? 'bg-lightOrange text-whiteColor' : 'text-black/50'}`}
                onClick={() => setActiveTab("allCategories")}
              >
                All Categories
              </div>
              <div
                className={`w-full text-center py-2 border border-[#cbd1da] rounded-md rounded-l-none ${activeTab === "about" ? 'bg-lightOrange text-whiteColor' : 'text-black/50'}`}
                onClick={() => setActiveTab("about")}
              >
                About us
              </div>
            </div>

            {activeTab === "allCategories" && (
              <div className="w-full space-y-3 py-3">
                {NavSidebarCategory.map((item, index) => (
                  <div key={index} className="border-b rounded-lg border-none bg-[#F1F6FC] px-2 font-medium">
                    <div onClick={() => toggleAccordion(index)}>
                      <div className="px-2 py-2 flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div><Image src={item.icon} alt={item.label} className="mr-2 size-6" /></div>
                          <div className="!text-sm sm:text-lg">{item.label}</div>
                        </div>
                        <ChevronDown className="size-4" />
                      </div>
                    </div>

                    <div className={`overflow-hidden transition-all duration-300 ${showDropdown === index ? 'max-h-40' : 'max-h-0'}`}>
                      <div className="px-2 text-sm space-y-2 py-3">
                        {item.options.map((option, i) => (
                          <Fragment key={i}>
                            <Link href="#" className="block">
                              <div>{option.name}</div>
                            </Link>
                            <div className={`h-px w-full bg-black/20 ${i !== item.options.length - 1 ? 'block' : 'hidden'}`} />
                          </Fragment>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* ABOUT TAB */}
            {activeTab === "about" && (
              <div className="w-full space-y-3 py-3">
                {NavSidebarAbout.map((item, index) => (
                  <Link href="#" key={index} className="border-b rounded-lg border-none bg-[#F1F6FC] px-2 font-medium block">
                    <div className="px-2 py-2 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div><Image src={item.icon} alt={item.name} className="mr-2 size-6" /></div>
                        <div className="!text-sm sm:text-lg">{item.name}</div>
                      </div>
                      <ChevronRight className="size-4" />
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
