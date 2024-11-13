import { OffersCashbackData } from "@/db/db";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export default function BestCashback() {
return (
    <div className="w-full px-4 lg:px-6">
			<div className="flex items-center justify-between">
				<h1 className="font-semibold lg:text-xl">Best Cashback Offers</h1>
				<button variant="ghost" className="hidden lg:inline-flex">
					View All <ArrowRight />
				</button>
			</div>
			<div className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
				{OffersCashbackData.map((item, index) => (
					<div
						key={item.id}
						className={`${index >= 6 && "hidden lg:flex"} flex flex-col justify-center rounded-md border-2`}
					>
						<div className="flex items-center justify-center p-2">
							<Image className="w-24 lg:w-32" src={item.img} alt={item.alt} />
						</div>
						<h1 className="border-t-2 py-2 text-center text-sm font-semibold lg:text-base">
							{item.cashback}
						</h1>
					</div>
				))}
			</div>
			<div className="mt-4 flex items-center justify-center">
				<button className="inline-flex text-whiteColor font-medium bg-lightOrange hover:bg-lightOrange/90 lg:hidden px-4 py-[8px] rounded-md text-sm">
					View All
				</button>
			</div>
		</div>
)
}