"use client"

import { ArrowRight } from "lucide-react";
import Image from "next/image";

export default function NewsCard({item}) {
    return (
        <div>
			<div className="w-full lg:border-2 border-[#e5e7eb] max-lg:shadow-none rounded-xl">
				<div className="flex flex-row items-center justify-between p-3 lg:p-6">
					<div className="font-semibold lg:text-lg">
						Latest News
					</div>
					<button
						variant="outline"
						className="hidden text-xs font-semibold lg:inline-flex lg:border-2 border-[#e5e7eb] gap-2 py-[8px] px-4 rounded-md"
					>
						View All <ArrowRight size={15} strokeWidth={2.4} />
					</button>
				</div>
				<div className="flex flex-col gap-3 p-3 lg:p-6 pt-0 lg:pt-0">
					{item.map((item, index) => (
						<div
							key={item.id}
							className={`${
								(index >= 4 ? "hidden lg:flex" : "") ||
								(index >= 1 && "lg:hidden")
							} flex flex-row gap-2`}
						>
							<div className="shrink-0">
								<Image
									className="h-[4.5rem] w-[4.5rem] rounded-md object-cover"
									src={item.image}
									alt={item.title}
								/>
							</div>
							<div className="flex flex-col">
								<h1 className="line-clamp-1 text-sm font-semibold">
									{item.title}
								</h1>
								<p className="line-clamp-3 text-xs font-medium text-[#23262F99] lg:font-semibold">
									{item.description}
								</p>
							</div>
						</div>
					))}
				</div>
			</div>
			<div className="flex items-center justify-center">
				<button className="w-fit bg-orange hover:bg-orange/90 lg:hidden">
					See All
				</button>
			</div>
		</div>
    )
}