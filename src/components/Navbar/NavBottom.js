'use client'

import { NavCategoriesHoverLinks, NavCategoriesLinks } from "@/db/db"
import { ChevronDown, PartyPopper } from "lucide-react"
import Link from "next/link"
import { Fragment } from "react"
import Marque from "./Marque"

export default function NavBottom() {



    return (
        <div>
            <div className="hidden h-10 items-center bg-buttonColor px-1 xl:flex 3xl:px-4 3xl:pl-0 relative z-50">
                <div className="flex w-full items-center justify-between pr-2 text-xs font-medium 3xl:text-sm">

                    {NavCategoriesLinks.map((links, index) => (
                        <Fragment key={links.id}>
                            <div className="relative group">
                                <Link href={links.link || "#"} className="flex h-10 items-center justify-center gap-1 px-1 py-1 font-medium text-white">
                                    {links.label}
                                    <ChevronDown className="size-4" />
                                </Link>

                                {/* Hover Links */}
                                <div className="absolute top-[100%] bg-whiteColor flex-col gap-2 text-blackColor whitespace-nowrap py-1 left-0 rounded-md rounded-t-none hidden group-hover:flex">
                                    {NavCategoriesHoverLinks.find((hoverLink) => hoverLink.id === links.id)?.labels.map((label, idx) => (
                                        <Link key={idx} href={NavCategoriesHoverLinks.find((hoverLink) => hoverLink.id === links.id)?.links[idx] || "#"} className="px-2">
                                            {label}
                                        </Link>
                                    ))}
                                </div>
                            </div>

                            {/* Separator */}
                            <div
                                className={`h-4 w-px bg-white/40 mx-1 ${index !== NavCategoriesLinks.length - 1 ? 'block' : 'hidden'}`}
                            />
                        </Fragment>
                    ))}



                </div>

                <div className="ml-auto hidden w-fit items-center justify-center text-xs lg:flex 3xl:text-sm">
                    <div className="relative group">
                        <Link href="#" className="flex h-10 items-center justify-center bg-[#DC4F45] px-2 py-1 font-medium text-white">
                            <p>Compare</p>
                            <ChevronDown className="size-4" />
                        </Link>

                        <div className="absolute top-[100%] bg-whiteColor flex-col gap-2 text-blackColor whitespace-nowrap py-1 left-0 rounded-md rounded-t-none hidden group-hover:flex">
                            <Link href="#" className="px-2">demo 1</Link>
                            <Link href="#" className="px-2">demo 1</Link>
                            <Link href="#" className="px-2">demo 1</Link>
                        </div>

                    </div>
                    <div className="relative group">
                        <Link href="#" className="flex h-10 items-center justify-center bg-[#C8DD16] px-2 py-1 font-medium text-black">
                            <p>Coupons</p>
                            <ChevronDown className="size-4" />
                        </Link>

                        <div className="absolute top-[100%] bg-whiteColor flex-col gap-2 text-blackColor whitespace-nowrap py-1 left-0 rounded-md rounded-t-none hidden group-hover:flex">
                            <Link href="#" className="px-2">demo 1</Link>
                            <Link href="#" className="px-2">demo 1</Link>
                            <Link href="#" className="px-2">demo 1</Link>
                        </div>

                    </div>
                    <div>
                        <Link href="#" className="flex h-10 items-center justify-center gap-2 px-2 py-1 font-medium text-white">
                            <PartyPopper className="size-4 text-lightOrange lg:size-5" />
                            <p className="text-nowrap">Best Offers</p>
                        </Link>
                    </div>
                </div>

            </div>

            {/* marquee  */}
            <div>
                <Marque />
            </div>
        </div>
    )
}


