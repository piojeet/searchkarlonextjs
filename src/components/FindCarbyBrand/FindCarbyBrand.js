"use client"


import { FindCarbyBrandData } from "@/db/db";
import Image from "next/image";

export default function FindCarbyBrand() {
    return (
        <div className="lg:p-6 p-4">
            <div className="lg:text-xl text-lg">Find Car by Brand</div>
            <div className="grid lg:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-4 mt-4">
                {FindCarbyBrandData.map((data, index) => (
                    <div key={index} className="border-2 rounded-md text-sm text-paraColor py-2 text-center px-2">
                        <Image src={data.img} alt={data.name} className="block size-14 mx-auto" />

                        <div>{data.name}</div>
                    </div>
                ))}
            </div>
        </div>
    )
}