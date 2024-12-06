"use client"

import { GenralToolsData } from "@/db/db";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function GenralTools() {

    const pathname = usePathname();

    return (
        <div>
            <div className={`lg:text-xl text-lg ${pathname === '/productDiscription' ? 'hidden' : 'block'}`}>General Tools</div>
            <div className="grid lg:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-4 mt-4">
                {GenralToolsData.map((data, index) => (
                    <Link href="#" key={index} className="border-2 rounded-md text-sm text-paraColor py-2 text-center px-2 bg-whiteColor">
                        <Image src={data.img} alt={data.name} className="block size-14 mx-auto" />

                        <div>{data.name}</div>
                    </Link>
                ))}
            </div>
        </div>
    )
}