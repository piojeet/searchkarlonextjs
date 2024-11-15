"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import carquick from "../../../public/carquick.png";
import Calendar from "../../../public/Calendar.png";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { QuickLookData } from "@/db/db";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function QuickLook() {
  const [selectedCategory, setSelectedCategory] = useState(null); // No category selected by default

  const handleCategoryChange = (category) => {
    setSelectedCategory(category); // Update the selected category
  };


  const swiperRef = useRef(null);
  const [isAtStart, setIsAtStart] = useState(true);
  const [isAtEnd, setIsAtEnd] = useState(false);

  const handleSlideChange = () => {
    if (swiperRef.current) {
      setIsAtStart(swiperRef.current.swiper.isBeginning);
      setIsAtEnd(swiperRef.current.swiper.isEnd);
    }
  };

  useEffect(() => {
    // Initialize Swiper events after component mounts
    if (swiperRef.current) {
      swiperRef.current.swiper.on('slideChange', handleSlideChange);
      swiperRef.current.swiper.on('reachEnd', handleSlideChange);
      swiperRef.current.swiper.on('reachBeginning', handleSlideChange);
    }
    return () => {
      if (swiperRef.current) {
        swiperRef.current.swiper.off('slideChange', handleSlideChange);
        swiperRef.current.swiper.off('reachEnd', handleSlideChange);
        swiperRef.current.swiper.off('reachBeginning', handleSlideChange);
      }
    };
  }, []);

  return (
    <div className="lg:p-6 p-4">
      <div>
        <div className="lg:text-xl text-lg font-semibold">For You Quick Look</div>
        <div className="flex items-center gap-2 text-sm mt-4">
          {["Upcoming", "Popular", "Latest"].map((category) => (
            <div key={category}>
              <input
                type="radio"
                id={category}
                name="check-category"
                className="hidden peer"
                onChange={() => handleCategoryChange(category)}
                checked={selectedCategory === category}
              />
              <label
                data-checked={category}
                htmlFor={category}
                className="transition-colors duration-200 peer-checked:bg-lightOrange border-2 p-2 py-2 rounded-md cursor-pointer bg-gray-50 peer-checked:text-whiteColor block"
              >
                {category}
              </label>
            </div>
          ))}
        </div>

        <div className="relative">
          <Swiper
            slidesPerView={1}
            spaceBetween={15}
            ref={swiperRef}
            navigation={{
                nextEl: '.swiper-button-next-poplar',
                prevEl: '.swiper-button-prev-poplar',
              }}
            modules={[Navigation]}
            className="mySwiper mt-4"

            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 4 },
            }}
          >
            {QuickLookData.map(
              (item) =>
                (!selectedCategory || item.dataVisible === selectedCategory) && (
                  <SwiperSlide key={item.id}>
                    <div className="text-sm">
                      <div className="border-2 py-2 rounded-md">
                        <Image
                          src={carquick}
                          alt="Car"
                          className="lg:w-[8vw] w-28 block mx-auto"
                        />
                        <div className="border-2 flex items-center justify-between py-2 px-2 border-r-0 border-l-0">
                          <div>{item.carName}</div>
                          <div>{item.price}</div>
                        </div>
                        <div className="flex gap-2 items-center justify-between px-2 py-2">
                          <div className="flex items-center gap-1">
                            <Image src={item.tankImg} alt="Fuel Icon" className="size-4" />
                            <div>{item.patrol}</div>
                          </div>
                          <div className="flex items-center gap-1">
                            <Image src={item.tankImg} alt="Fuel Icon" className="size-4" />
                            <div>{item.diesel}</div>
                          </div>
                          <div className="flex items-center gap-1">
                            <Image src={item.tankImg} alt="Fuel Icon" className="size-4" />
                            <div>{item.CNG}</div>
                          </div>
                        </div>
                        <div className="flex items-center gap-1 px-2">
                          <Image src={Calendar} alt="Calendar" className="size-4" />
                          <div>{item.date}</div>
                        </div>
                      </div>
                      <Link
                        href="#"
                        className="border-2 border-darkOrange rounded-md mt-2 block py-2 text-sm text-darkOrange text-center hover:bg-darkOrange hover:text-whiteColor"
                      >
                        {item.button}
                      </Link>
                    </div>
                  </SwiperSlide>
                )
            )}
          </Swiper>

          <button className={`swiper-button-next-poplar lg:py-6 lg:px-1 py-4 rounded-md text-whiteColor bg-lightOrange absolute lg:right-6 right-4 top-1/2 -translate-y-1/2 z-50 cursor-pointer ${isAtEnd ? 'hidden' : ''}`}><ChevronRight /></button>
          <button className={`swiper-button-prev-poplar lg:py-6 lg:px-1 py-4 rounded-md text-whiteColor bg-lightOrange absolute lg:left-6 left-4 top-1/2 -translate-y-1/2 z-50 cursor-pointer ${isAtStart ? 'hidden' : ''}`}><ChevronLeft /></button>
        </div>
      </div>
    </div>
  );
}
