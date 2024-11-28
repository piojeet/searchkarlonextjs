"use client";

import Image from "next/image";
import CarMAin from "../../../public/image 96.png";
import Car2 from "../../../public/image 96.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

export default function SelectCar({ uniqueId }) {
  const [selectedImage, setSelectedImage] = useState(CarMAin); // Default image for main box
  const [isBeginning, setIsBeginning] = useState(true); // Track if at beginning
  const [isEnd, setIsEnd] = useState(false); // Track if at end

  const imageData = [
    { url: CarMAin },
    { url: Car2 },
    { url: CarMAin },
    { url: CarMAin },
  ];

  const handleImageClick = (imageSrc) => {
    setSelectedImage(imageSrc); // Update the selected image
  };

  return (
    <div>
      <div className="sm:p-4">
        {/* Main Image Box */}
        <div className="md:w-[15rem] md:h-[11rem] mx-auto h-[45vw]">
          <Image alt="Selected IMG" className="w-full" src={selectedImage} />
        </div>

        <div className="relative">
          <div className="md:w-52 mx-auto w-[40vw]">
            <Swiper
              slidesPerView="auto"
              spaceBetween={15}
              navigation={{
                nextEl: `.swiper-button-next-${uniqueId}`,
                prevEl: `.swiper-button-prev-${uniqueId}`,
              }}
              breakpoints={{
                320: { slidesPerView: 2, spaceBetween: 10 },
                768: { slidesPerView: 3 },
              }}
              onSlideChange={(swiper) => {
                setIsBeginning(swiper.isBeginning);
                setIsEnd(swiper.isEnd);
              }}
              modules={[Navigation]}
              className="mySwiper"
            >
              {imageData.map((item, index) => (
                <SwiperSlide
                  key={index}
                  className="cursor-pointer"
                  onClick={() => handleImageClick(item.url)} // Handle click
                >
                  <div className="h-16 content-center border-2 rounded-md">
                    <Image
                      alt={`IMG ${index}`}
                      src={item.url}
                      className="w-full h-full object-contain"
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* Navigation Buttons */}
          <button
            className={`swiper-button-next-${uniqueId} absolute md:right-0 md:top-1/2 -translate-y-1/2 border-2 size-10 rounded-md sm:flex items-center justify-center bg-lightOrange text-whiteColor bottom-0 hidden ${isEnd ? "opacity-50" : ""
              }`}
          >
            <ChevronRight />
          </button>
          <button
            className={`swiper-button-prev-${uniqueId} absolute top-1/2 left-0 -translate-y-1/2 border-2 size-10 rounded-md sm:flex items-center justify-center bg-lightOrange text-whiteColor hidden ${isBeginning ? "opacity-50" : ""
              }`}
          >
            <ChevronLeft />
          </button>

          <div className="sm:hidden flex justify-center items-center mt-2">
            {/* Navigation Buttons */}
            <button
              className={`swiper-button-prev-${uniqueId} border-2 size-10 rounded-md flex items-center justify-center bg-lightOrange text-whiteColor ${isBeginning ? "opacity-50" : ""
                }`}
            >
              <ChevronLeft />
            </button>

            <button
              className={`swiper-button-next-${uniqueId} border-2 size-10 rounded-md flex items-center justify-center bg-lightOrange text-whiteColor bottom-0 ${isEnd ? "opacity-50" : ""
                }`}
            >
              <ChevronRight />
            </button>
            
          </div>

        </div>
      </div>
    </div>
  );
}
