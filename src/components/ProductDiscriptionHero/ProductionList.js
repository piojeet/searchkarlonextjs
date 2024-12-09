"use client"

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";

export default function ProductionList() {

    const data = [
        {id: 1, name: "XUV700"},
        {id: 2, name: "XUV700"},
        {id: 3, name: "XUV700"},
        {id: 4, name: "XUV700"},
        {id: 5, name: "XUV700"},
        {id: 6, name: "XUV700"},
        {id: 7, name: "XUV700"},
        {id: 8, name: "XUV700"},
        {id: 9, name: "XUV700"},
        {id: 10, name: "XUV700"},
        {id: 11, name: "XUV700"},
        {id: 12, name: "XUV700"},
    ]

  return (
    <div className="bg-buttonColor lg:px-6 px-4 py-3 mb-2 text-whiteColor text-sm sticky top-0 z-[100]">
        <Swiper
				modules={[Navigation]}
				slidesPerView="auto"
				spaceBetween={40}
			>
                {data.map((item, i) => (
                    <SwiperSlide key={i} className="flex items-center justify-center !w-fit cursor-pointer">
                        <div>{item.name}</div>
				</SwiperSlide>
                ))}
            </Swiper>
    </div>
  )
}
