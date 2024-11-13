import { PopularPriceLiseData } from "@/db/db";
import Image from "next/image";

export default function PopularPriceList() {
    return (
        <div className="lg:p-6 p-4">
            <h1 className="font-semibold lg:text-xl">Popular Price List</h1>

            <div className="grid lg:grid-cols-4 sm:grid-cols-3 xs:grid-cols-2 text-sm gap-6 mt-4">
                {PopularPriceLiseData.map((PopularPriceList, index) => (
                    <div key={index} className="flex items-center gap-2 border-2 p-3 rounded-md flex-col sm:flex-row text-center">
                        <div className="size-10">
                            <Image src={PopularPriceList.image} alt="IMG" className="w-full h-full object-contain" />
                        </div>
                        <p>{PopularPriceList.title}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}