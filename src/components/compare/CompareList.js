"use client";

import Image from "next/image";
import car from "../../../public/redcar.png";
import { ChevronLeft, ChevronRight, MinusCircle, PlusCircle, Search } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

export default function CompareList() {

  
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

  const carsData = [
    { id: 1, img: car, name: "Mahindra", price: "₹ 30,000" },
    { id: 2, img: car, name: "Mahindra", price: "₹ 30,000" },
    { id: 3, img: car, name: "Mahindra", price: "₹ 30,000" },
    { id: 4, img: car, name: "Mahindra", price: "₹ 30,000" },
    { id: 5, img: car, name: "Mahindra", price: "�� 30,000" },
    { id: 6, img: car, name: "Mahindra", price: "�� 30,000" },
    { id: 7, img: car, name: "Mahindra", price: "�� 30,000" },
  ];

  const [compareItems, setCompareItems] = useState([]);

  const toggleCompare = (car) => {
    setCompareItems((prev) => {
      if (prev.some((item) => item.id === car.id)) {
        return prev.filter((item) => item.id !== car.id);
      } else if (prev.length < 4) {
        return [...prev, car];
      } else {
        alert("You can compare up to 4 cars only.");
        return prev;
      }
    });
  };

  const renderCompareItems = () => {
    const defaultSlots = Array(4).fill(null); // Default 4 slots
    return (
      <div className="grid sm:grid-cols-4 grid-cols-2 gap-4">
        {defaultSlots.map((_, index) => {
          const item = compareItems[index];
          return (
            <div
              key={index}
              className="bg-white p-4 rounded-lg flex flex-col items-center sm:gap-4 gap-2 border border-gray-200 h-[150px] justify-center"
            >
              {item ? (
                <>
                  <div className="p-0 flex items-center justify-center">
                    <Image
                      src={item.img}
                      alt={item.name}
                      className="w-20 object-contain"
                    />
                  </div>
                  <div className="text-center">
                    <div className="font-semibold sm:text-lg text-sm">{item.name}</div>
                    <div className="font-semibold text-orange-600 sm:text-base text-xs">
                      {item.price}
                    </div>
                  </div>
                </>
              ) : (
                <div className="flex items-center justify-center w-full text-gray-400 h-full">
                  <span><PlusCircle className="sm:size-16 size-10" /></span>
                </div>
              )}
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <div className="lg:p-6 p-4 bg-gray-100">
      {/* Title */}
      <div className="sm:text-lg text-base font-semibold">
        Mahindra XUV700 Specifications and Features
      </div>

      {/* Car List */}
      <div className="mt-4 relative">
      <Swiper
            slidesPerView={2}
            spaceBetween={15}
            ref={swiperRef}
            navigation={{
                nextEl: '.swiper-button-next-listc',
                prevEl: '.swiper-button-prev-listc',
              }}
            modules={[Navigation]}
            className="mySwiper mt-4"

            breakpoints={{
              640: { slidesPerView: 2 },
              768: { slidesPerView: 3 },
              1024: { slidesPerView: 4 },
            }}
          >
        {carsData.map((car) => {
          const isCompared = compareItems.some((item) => item.id === car.id);
          return (
            <SwiperSlide
              key={car.id}
              className="bg-white p-4 rounded-lg !flex sm:justify-between justify-center items-center sm:gap-4 gap-2 sm:!flex-row !flex-col"
            >
              {/* Car Image */}
              <div className="p-0 flex items-center justify-center">
                <Image
                  src={car.img}
                  alt={car.name}
                  className="w-20 object-contain"
                />
              </div>
              {/* Car Details */}
              <div className="space-y-4">
                <div className="text-center">
                  <div className="font-semibold sm:text-lg text-sm">{car.name}</div>
                  <div className="font-semibold text-orange-600 sm:text-base text-xs">{car.price}</div>
                </div>
                {/* Compare Button */}
                <button
                  className={`${
                    isCompared ? "bg-orange-600" : "bg-gray-500"
                  } text-white px-3 py-2 rounded-full inline-flex gap-1 sm:text-sm text-xs`}
                  onClick={() => toggleCompare(car)}
                >
                  {isCompared ? <MinusCircle className="size-4 sm:size-5" /> : <PlusCircle className="size-4 sm:size-5" />}
                  {isCompared ? "Remove" : "Compare"}
                </button>
              </div>
            </SwiperSlide>
          );
        })}
        </Swiper>

        <button className={`swiper-button-next-listc py-3 rounded-md text-whiteColor bg-lightOrange absolute right-0 top-[40%] -translate-y-1/2 z-50 cursor-pointer ${isAtEnd ? 'hidden' : ''}`}><ChevronRight /></button>
          <button className={`swiper-button-prev-listc py-3 rounded-md text-whiteColor bg-lightOrange absolute left-0 top-[40%] -translate-y-1/2 z-50 cursor-pointer ${isAtStart ? 'hidden' : ''}`}><ChevronLeft /></button>
      </div>

      <div className="sm:size-8 size-6 sm:text-sm text-xs bg-black text-whiteColor rounded-full content-center text-center mx-auto mt-2">OR</div>

      {/* Compare Section */}
      <div>
        <form onSubmit={(e) => e.preventDefault()} className="mt-2">
          {/* Search Bar */}
          <div className="max-w-[400px] mx-auto flex items-center rounded-full overflow-hidden bg-white">
            <input
              type="text"
              placeholder="Search Mahindra XUV700"
              className="outline-none border-none w-full py-2 px-3 sm:text-sm text-xs"
            />
            <Search className="mx-2 text-gray-500" />
          </div>

          {/* Compared Items */}
          <div className="bg-white mt-2 sm:p-4 p-2 rounded-md">
            {renderCompareItems()}
          </div>

          <button className="block w-fit mx-auto mt-2 py-2 px-4 bg-darkOrange rounded-full text-whiteColor sm:text-sm text-xs">Compare</button>
        </form>
      </div>
    </div>
  );
}
