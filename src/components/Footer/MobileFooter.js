'use client'

import { History, Home, Search, User } from "lucide-react";
import Link from "next/link";
import Heart from "../Icons/Heart";
import { usePathname } from "next/navigation";

export default function MobileFooter() {
    const pathname = usePathname();

    return (
        <div className="fixed bottom-0 z-[99] w-full bg-white px-4 py-2 text-center font-medium text-[#23262FCC] lg:hidden">
            <div className="mx-auto flex items-end justify-between sm:w-[90%]">
                
                <Link href="/" className={`flex flex-col items-center gap-1 ${pathname === '/' ? "text-lightOrange" : ''}`}>
                    <Home width={24} height={24} />
                    <span className="text-xs">Home</span>
                </Link>

                <div className="flex flex-col items-center gap-1">
                    <Search width={24} height={24} />
                    <span className="text-xs">Search</span>
                </div>

                <Link href="/history" className="relative flex flex-col items-center gap-1">
                    <div className="absolute -top-12 flex h-12 w-12 items-center justify-center rounded-full border-[3px] border-white bg-lightOrange">
                        <Heart width={24} height={24} className="text-white" />
                    </div>
                    <span className="text-xs">Saved</span>
                </Link>

                <Link href="/history" className="flex flex-col items-center gap-1">
                    <History width={24} height={24} />
                    <span className="text-xs">History</span>
                </Link>

                <Link href="/profile" className="flex flex-col items-center gap-1">
                    <User width={24} height={24} />
                    <span className="text-xs">Profile</span>
                </Link>
            </div>
        </div>
    );
}
