"use client"

import { BestAppliancesData } from "@/db/db"
import { ChevronRight } from "lucide-react"
import Link from "next/link"

export default function BestAppliancesList() {
    return (
        <div className="my-5 px-4 lg:px-6">
			<h1 className="font-semibold lg:text-xl">Best Appliances Price List</h1>
			<div className="mt-4 grid gap-2 gap-x-10 sm:grid-cols-2 lg:grid-cols-3">
				{BestAppliancesData.map((item) => (
					<Link
						key={item.id}
						href="/hh"
						className="flex items-center justify-start gap-1 text-xs font-semibold text-[#23262FCC] lg:gap-2 lg:text-sm"
					>
						<ChevronRight className="size-5" />{" "}
						<h1 className="line-clamp-1">{item.title}</h1>
					</Link>
				))}
			</div>
		</div>
    )
}