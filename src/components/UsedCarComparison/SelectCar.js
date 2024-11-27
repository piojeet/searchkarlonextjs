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
        <div className="w-[15rem] h-[11rem] mx-auto">
          <Image alt="Selected IMG" className="w-full" src={selectedImage} />
        </div>

        <div className="relative">
          <div className="w-52 mx-auto">
            <Swiper
              slidesPerView={3}
              spaceBetween={15}
              navigation={{
                nextEl: `.swiper-button-next-${uniqueId}`,
                prevEl: `.swiper-button-prev-${uniqueId}`,
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
                  className="border-2 rounded-md cursor-pointer"
                  onClick={() => handleImageClick(item.url)} // Handle click
                >
                  <div className="h-16 content-center">
                    <Image
                      alt={`IMG ${index}`}
                      src={item.url}
                      className="w-full"
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* Navigation Buttons */}
          <button
            className={`swiper-button-next-${uniqueId} absolute right-0 top-1/2 -translate-y-1/2 border-2 size-10 rounded-md flex items-center justify-center bg-lightOrange text-whiteColor ${
              isEnd ? "opacity-50" : ""
            }`}
          >
            <ChevronRight />
          </button>
          <button
            className={`swiper-button-prev-${uniqueId} absolute top-1/2 left-0 -translate-y-1/2 border-2 size-10 rounded-md flex items-center justify-center bg-lightOrange text-whiteColor ${
              isBeginning ? "opacity-50" : ""
            }`}
          >
            <ChevronLeft />
          </button>
        </div>
      </div>
    </div>
  );
}
