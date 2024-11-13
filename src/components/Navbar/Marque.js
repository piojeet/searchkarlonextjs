"use client";

import { brandsMarquee } from "@/db/db";
import { ChevronDownIcon } from "lucide-react";
import Image from "next/image";
import Marquee from "react-fast-marquee";



export default function Marque() {


  return (
    <div className="flex h-12 w-full items-center bg-white">
      <div className="hidden h-10 w-[20%] items-center justify-center bg-lightOrange px-5 text-white xl:flex">
					<h1 className="text-nowrap text-sm font-medium">
						Popular Cashback Stores
					</h1>
				</div>
      <Marquee autoFill={true} speed={20}>
        {brandsMarquee.map((item) => (
          <Image 
          className="mx-3 h-12 w-16 object-contain lg:w-[4rem] xl:w-32"
          key={item.alt} 
          src={item.img} 
          alt={item.alt} />
        ))}
      </Marquee>

      <button className="hidden h-10 w-[10%] items-center justify-center gap-2 bg-lightOrange px-5 text-white xl:flex">
					<span className="text-nowrap text-sm font-medium">More</span>
					<ChevronDownIcon className="size-5 text-white" strokeWidth={3} />
				</button>
    </div>
  );
}
