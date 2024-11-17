"use client"

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Grid, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/grid";
import { CategoriesData } from "@/db/db";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef, useState } from "react";

export default function Categories() {

    const swiperRef = useRef(null);
    const [isAtStart, setIsAtStart] = useState(true);
    const [isAtEnd, setIsAtEnd] = useState(false);

    const handleSlideChange = (swiper) => {
        setIsAtStart(swiper.isBeginning);
        setIsAtEnd(swiper.isEnd);
    };

    return (
        <div className="relative select-none bg-white lg:p-6 p-4">
            <Swiper
                modules={[Grid, Navigation]}
                pagination={{ clickable: true, dynamicBullets: true }}
                slidesPerView="auto"
                spaceBetween={1}
                ref={swiperRef}
                onSlideChange={handleSlideChange}
                className="pb-5 lg:pb-0"
                grabCursor={true}
                touchRatio={1.5}
                breakpoints={{
                    1024: {
                        slidesPerView: "auto",
                        spaceBetween: 20,
                        pagination: {
                            enabled: false,
                        },
                    },
                }}
                navigation={{
                    nextEl: ".custom-next-category",
                    prevEl: ".custom-prev-category",
                }}
                speed={500}
            >
                {CategoriesData.map((slide, i) => (
                    <SwiperSlide
                        key={i}
                        className="flex !w-fit items-center justify-center lg:w-fit"
                    >
                        <div className="flex h-full w-20 flex-col items-center justify-center gap-2">
                            <div className="size-10 md:size-12 sm:size-14 xl:size-16">
                            <Image
                                className="w-auto h-auto object-contain"
                                src={slide.icon}
                                alt="img"
                            />
                            </div>
                            <p className="text-center text-sm font-medium lg:text-base">
                                {slide.label}
                            </p>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            {/* Swiper Navigation Buttons */}
            <button
                className={`swiper-button-next-category py-3 rounded-md text-white bg-lightOrange absolute lg:right-6 right-4 top-[40%] -translate-y-1/2 z-50 cursor-pointer ${isAtEnd ? "opacity-0 pointer-events-none" : ""
                    }`}
            >
                <ChevronRight />
            </button>
            <button
                className={`swiper-button-prev-category py-3 rounded-md text-white bg-lightOrange absolute lg:left-6 left-4 top-[40%] -translate-y-1/2 z-50 cursor-pointer ${isAtStart ? "opacity-0 pointer-events-none" : ""
                    }`}
            >
                <ChevronLeft />
            </button>
        </div>
    )
}