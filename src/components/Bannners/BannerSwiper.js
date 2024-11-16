"use client"

import Image from "next/image"
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import Banner1 from "../../../public/banner/1.png"
import Banner2 from "../../../public/banner/2.png"
import Banner3 from "../../../public/banner/3.png"
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef, useState } from "react";

export default function BannerSwiper() {

    const dataImg = [
        {img: Banner1},
        {img: Banner2},
        {img: Banner3},
        {img: Banner1},
        {img: Banner2},
        {img: Banner3},
    ];

    const swiperRef = useRef(null);
    const [isAtStart, setIsAtStart] = useState(true);
    const [isAtEnd, setIsAtEnd] = useState(false);

    const handleSlideChange = (swiper) => {
        setIsAtStart(swiper.isBeginning);
        setIsAtEnd(swiper.isEnd);
    };

    return (
        <div className="lg:p-6 p-4 lg:block hidden">
            <div className="relative select-none bg-white">
            <Swiper
				modules={[Navigation]}
				slidesPerView={3}
				spaceBetween={10}
                ref={swiperRef}
                onSlideChange={handleSlideChange}
				grabCursor={true}
				navigation={{
					nextEl: ".banner-next-banner",
					prevEl: ".banner-prev-banner",
				}}
			>
                {dataImg.map((img, i) => (
                    <SwiperSlide key={i} className="flex items-center justify-center">
					<Image
						className="h-36 w-full rounded-lg xl:h-48"
						src={img.img}
						alt="Banner 1"
					/>
				</SwiperSlide>
                ))}
            </Swiper>

            {/* Swiper Navigation Buttons */}
            <button
                className={`swiper-button-next-banner py-3 rounded-md text-white bg-lightOrange absolute right-0 top-[50%] -translate-y-1/2 z-50 cursor-pointer ${isAtEnd ? "opacity-0 pointer-events-none" : ""
                    }`}
            >
                <ChevronRight />
            </button>
            <button
                className={`swiper-button-prev-banner py-3 rounded-md text-white bg-lightOrange absolute left-0 top-[50%] -translate-y-1/2 z-50 cursor-pointer ${isAtStart ? "opacity-0 pointer-events-none" : ""
                    }`}
            >
                <ChevronLeft />
            </button>
            </div>
        </div>
    )
}