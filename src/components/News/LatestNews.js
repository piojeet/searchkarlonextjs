"use client"

import { News, Stories } from "@/db/db";
import NewsCard from "./NewsCard";
import TopStories from "./TopStories";
import WpCard from "./WpCard";

export default function LatestNews() {
    return (
        <div className="w-full h-fit gap-5 px-4 lg:flex lg:px-6 my-8">
			<div className="flex w-full flex-col gap-4 lg:w-1/2 lg:h-[23rem] ">
				<WpCard />
				<NewsCard item={News} />
			</div>
			<div className="flex mt-4 lg:mt-0 w-full flex-col gap-4 lg:w-1/2 lg:h-96">
				<TopStories stories={Stories} />
			</div>
		</div>
    )
}