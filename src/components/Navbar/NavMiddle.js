"use client"

import Image from "next/image"
import Logo from "../../../public/logo.png"
import { ChevronDown, Menu, Search } from "lucide-react"
import SearchIcon from "../Icons/Search"
import Apple from "../../../public/apple.svg"
import Android from "../../../public/android.svg"
import Chrome from "../../../public/chrome.svg"
import Firefox from "../../../public/firefox.svg"
import Link from "next/link"
import NavSideBar from "./NavSideBar"
import { useAuthContext } from "@/context/AuthContext"
export default function NavMiddle() {

    const { handleOpenMenu} = useAuthContext();
    
    return (
        <>
        <NavSideBar />

        <div className="bg-buttonColor p-2 xl:p-0">
            <div className="flex w-full items-center justify-between bg-darkBlue bg-white lg:px-2 xl:py-2 py-1.5 px-2 rounded-lg xl:rounded-none">

                <div  onClick={handleOpenMenu} className="xl:hidden block w-fit cursor-pointer">
                    <Menu className="size-7" />
                </div>

                <div className="w-fit bg-whiteColor xl:py-1 py-0.5 rounded-sm">
                    <Image className="w-40" src={Logo} alt="logo" />
                </div>

                <form action="#" className="xl:block hidden">
                    <div className="border border-[#d8e0eb] flex items-stretch rounded-md">
                        <div className="relative w-[145px] text-sm font-medium lg:w-[160px] bg-buttonColor px-3 rounded-ee-none rounded-se-none rounded-md">
                            <div className="flex items-center justify-between h-full text-whiteColor text-sm">
                                <div>All Categories</div>
                                <div><ChevronDown className="size-4" /></div>
                            </div>
                        </div>
                        <input type="text"
                            className="h-10 w-[15rem] rounded-none border-l-0 shadow-sm focus-visible:ring-0 xl:w-[30rem] outline-none px-2 text-sm"
                            placeholder="Search..."
                            required
                        />
                        <button type="submit"
                            className="h-10 rounded-none rounded-ee-md rounded-se-md bg-buttonColor px-3 hover:bg-buttonHover">
                            <SearchIcon className="size-5" />
                        </button>
                    </div>
                </form>

                {/* MOBILE SEARCH  */}
                <div>
                    <Search />
                </div>

                <div className="hidden xl:block">
                    <div className="flex h-10 items-center gap-3 rounded-md border-2 px-5 py-1 text-xs font-semibold 3xl:text-sm">
                        <div className="flex items-center gap-2">
                            <div>Mobile App</div>

                            <Link href="#">
                                <Image src={Apple} alt="apple" className="size-5 object-cover" />
                            </Link>
                            <Link href="#">
                                <Image src={Android} alt="apple" className="size-5 object-cover" />
                            </Link>
                        </div>
                        <div className="flex items-center gap-2">
                            <div>Mobile App</div>

                            <Link href="#">
                                <Image src={Chrome} alt="apple" className="size-5 object-cover" />
                            </Link>
                            <Link href="#">
                                <Image src={Firefox} alt="apple" className="size-5 object-cover" />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}