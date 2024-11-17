"use client"

import { GenralToolsData } from "@/db/db";
import Image from "next/image";

export default function GenralTools() {
    return (
        <div className="lg:p-6 p-4">
            <div className="lg:text-xl text-lg">General Tools</div>
            <div className="grid lg:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-4 mt-4">
                {GenralToolsData.map((data, index) => (
                    <div key={index} className="border-2 rounded-md text-sm text-paraColor py-2 text-center px-2">
                        <Image src={data.img} alt={data.name} className="block size-14 mx-auto" />

                        <div>{data.name}</div>
                    </div>
                ))}
            </div>
        </div>
    )
}