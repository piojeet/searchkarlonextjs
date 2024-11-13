"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules"; // Import Navigation module
import 'swiper/css';
import 'swiper/css/navigation';
import { ChevronLeft, ChevronRight } from "lucide-react";
import { qaDataRcent } from "@/db/db";

export default function RecentQandA() {
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
    <div className="w-full">
      <div className="bg-slate-100 rounded-md lg:p-6 p-4 w-full h-full">
        <div className="font-semibold lg:text-xl text-center">Ask the Expert?</div>
        <div className="w-full">
          <Swiper
            className="mySwiper"
            modules={[Navigation]}
            navigation={{
              nextEl: '.swiper-button-next-q',
              prevEl: '.swiper-button-prev-q',
            }}
            ref={swiperRef}
          >
            {qaDataRcent.map((slideData) => (
              <SwiperSlide key={slideData.id} className="!w-full">
                {slideData.questions.map((item, index) => (
                  <div key={index} className="text-sm mt-5 space-y-4">
                    <div className="space-y-2">
                      <div className="px-2 py-3 border-2 bg-whiteColor rounded-md text-paraColor">
                        <span className="font-bold">Q:</span> {item.question}
                      </div>
                      <div className="px-2 py-3 border-2 bg-whiteColor rounded-md">
                        <div className="flex gap-2 items-center">
                          <div className="size-10 rounded-full">
                            <Image src={item.img} alt="sidhart" className="w-full h-full object-cover" />
                          </div>
                          <div>
                            <div className="text-black text-base">{item.expertName}</div>
                            <div className="text-paraColor">{item.expertTitle}</div>
                          </div>
                        </div>
                        <div className="text-paraColor text-base pt-3">
                          <span className="font-bold">Ans:</span> {item.answer}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Navigation Buttons with Dynamic Background Color */}
          <div className="flex items-center justify-center pt-5 gap-8">
            <button
              className={`swiper-button-prev-q flex-shrink-0 size-10 rounded-full bg-gray-400 border-2 flex items-center justify-center text-whiteColor ${isAtStart ? 'bg-gray-300' : ''}`}
              disabled={isAtStart}
            >
              <ChevronLeft strokeWidth={3} className="size-6" />
            </button>
            <button
              className={`swiper-button-next-q flex-shrink-0 size-10 rounded-full bg-gray-400 border-2 flex items-center justify-center text-whiteColor ${isAtEnd ? 'bg-gray-300' : ''}`}
              disabled={isAtEnd}
            >
              <ChevronRight strokeWidth={3} className="size-6" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
