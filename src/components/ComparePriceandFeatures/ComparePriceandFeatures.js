"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import mobile from "../../../public/mobile.png";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Grid, Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { ChevronLeft, ChevronRight, } from "lucide-react";
import { ComparePriceandFeaturesData } from "@/db/db";

export default function ComparePriceandFeatures() {
    const data = [
        { id: 1, name: "Mobiles", img: mobile },
        { id: 2, name: "Cars", img: mobile },
        { id: 3, name: "Flight", img: mobile },
        { id: 4, name: "Bikes", img: mobile },
        { id: 5, name: "Laptops", img: mobile },
        { id: 6, name: "Hotels", img: mobile },
        { id: 7, name: "Washing Machines", img: mobile },
        { id: 8, name: "Tablets", img: mobile },
    ];

    const [selectedCategory, setSelectedCategory] = useState(null); // Default: No category selected

    const handleCategoryChange = (category) => {
        setSelectedCategory(category); // Update selected category
    };

    const swiperRef = useRef(null);
    const [isAtStart, setIsAtStart] = useState(true);
    const [isAtEnd, setIsAtEnd] = useState(false);

    const handleSlideChange = (swiper) => {
        setIsAtStart(swiper.isBeginning);
        setIsAtEnd(swiper.isEnd);
    };

    return (
        <div className="lg:p-6 p-4">
            <div className="lg:text-xl text-lg font-semibold">For You Quick Look</div>
            {/* Category Selection */}
            <div className="text-sm mt-4 overflow-hidden">
                <div className="overflow-auto whitespace-nowrap">
                <Swiper
                modules={[Grid]}
                pagination={{ clickable: true, dynamicBullets: true }}
                slidesPerView="auto"
                spaceBetween={10}
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
                >
                    {data.map((category) => (
                    <SwiperSlide key={category.id} className="flex !w-fit items-center justify-center lg:w-fit">
                    <div>
                        <input
                            type="radio"
                            id={category.id}
                            name="check-category"
                            className="hidden peer"
                            onChange={() => handleCategoryChange(category)}
                            checked={selectedCategory?.id === category.id}
                        />
                        <label
                            htmlFor={category.id}
                            className="transition-colors duration-200 peer-checked:bg-lightOrange border-2 p-2 rounded-md cursor-pointer bg-gray-50 peer-checked:text-white inline-flex items-center gap-2 text-sm"
                        >
                            <Image src={category.img} alt={category.name} className="w-3" />
                            <div>{category.name}</div>
                        </label>
                    </div>
                    </SwiperSlide>
                ))}
                </Swiper>
                </div>
            </div>

            {/* Swiper Slider */}
            <div className="mt-4 relative">
                <Swiper
                    slidesPerView={1}
                    spaceBetween={15}
                    ref={swiperRef}
                    onSlideChange={handleSlideChange}
                    navigation={{
                        nextEl: ".swiper-button-next-compare",
                        prevEl: ".swiper-button-prev-compare",
                    }}
                    modules={[Navigation]}
                    breakpoints={{
                        640: { slidesPerView: 1 },
                        768: { slidesPerView: 2 },
                        1024: { slidesPerView: 4 },
                    }}
                    className="mySwiper"
                >
                    {ComparePriceandFeaturesData.filter(
                        (item) =>
                            !selectedCategory || item.dataVisible === selectedCategory.name
                    ).map((item) => (
                        <SwiperSlide key={item.id}>
                            <div className="border-2 rounded-md relative">
                                <div className="flex items-center gap-2 justify-between border-b-2 p-4">
                                    <Image
                                        src={item.imgTop}
                                        alt={item.titleTop}
                                        className="lg:w-[8vw] w-[40vw]"
                                    />
                                    <div className="text-sm font-semibold">
                                        <div>{item.titleTop}</div>
                                        <div>{item.titlebTop}</div>
                                        <div className="text-paraColor">{item.priceTop}</div>
                                    </div>
                                </div>

                                <div className="absolute size-7 text-xs font-semibold bg-white border-2 rounded-full text-center content-center top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                                    VS
                                </div>

                                <div className="flex items-center gap-2 justify-between p-4">
                                    <div className="text-sm font-semibold">
                                        <div>{item.titleBottom}</div>
                                        <div>{item.titlebBottom}</div>
                                        <div className="text-paraColor">{item.priceBottom}</div>
                                    </div>
                                    <Image
                                        src={item.imgBottom}
                                        alt={item.titleBottom}
                                        className="lg:w-[8vw] w-[40vw]"
                                    />
                                </div>
                            </div>

                            <Link
                                href="#"
                                className="border-2 rounded-md mt-2 block py-2 text-sm text-black text-center hover:bg-lightOrange hover:text-white"
                            >
                                {item.button}
                            </Link>
                        </SwiperSlide>
                    ))}
                </Swiper>

                {/* Swiper Navigation Buttons */}
                <button
                    className={`swiper-button-next-compare py-3 rounded-md text-white bg-lightOrange absolute right-0 top-[40%] -translate-y-1/2 z-50 cursor-pointer ${
                        isAtEnd ? "opacity-0 pointer-events-none" : ""
                    }`}
                >
                    <ChevronRight />
                </button>
                <button
                    className={`swiper-button-prev-compare py-3 rounded-md text-white bg-lightOrange absolute lg:left-0 top-[40%] -translate-y-1/2 z-50 cursor-pointer ${
                        isAtStart ? "opacity-0 pointer-events-none" : ""
                    }`}
                >
                    <ChevronLeft />
                </button>
            </div>
        </div>
    );
}
