"use client";

import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react';
import car from '../../../public/demo.jpg';
import { ChevronLeft, ChevronRight, ChevronsRight } from 'lucide-react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

const CarComparison = () => {

  const swiperRefs = useRef([]); // Array of Swiper references
  const [isAtStart, setIsAtStart] = useState({});
  const [isAtEnd, setIsAtEnd] = useState({});

  const handleSlideChange = (index) => {
    const swiper = swiperRefs.current[index];
    if (swiper) {
      setIsAtStart((prev) => ({ ...prev, [index]: swiper.isBeginning }));
      setIsAtEnd((prev) => ({ ...prev, [index]: swiper.isEnd }));
    }
  };

  useEffect(() => {
    swiperRefs.current.forEach((swiper, index) => {
      if (swiper) {
        swiper.on('slideChange', () => handleSlideChange(index));
        swiper.on('reachEnd', () => handleSlideChange(index));
        swiper.on('reachBeginning', () => handleSlideChange(index));
      }
    });

    return () => {
      swiperRefs.current.forEach((swiper) => {
        if (swiper) {
          swiper.off('slideChange', handleSlideChange);
          swiper.off('reachEnd', handleSlideChange);
          swiper.off('reachBeginning', handleSlideChange);
        }
      });
    };
  }, []);




  const [activeTab, setActiveTab] = useState('cars');

  const cars = [
    { name: 'Hyundai Creta', price: '₹11 - 20.3 Lakhs*', img: car, alt: 'Hyundai Creta' },
    { name: 'Kia Seltos', price: '₹10.9 - 20.45 Lakhs*', img: car, alt: 'Kia Seltos' },
    { name: 'Hyundai Exter', price: '₹6.13 - 10.43 Lakhs*', img: car, alt: 'Hyundai Exter' },
    { name: 'Tata Harrier', price: '₹14.8 - 25 Lakhs*', img: car, alt: 'Tata Harrier' },
    { name: 'Toyota Fortuner', price: '₹32 - 50 Lakhs*', img: car, alt: 'Toyota Fortuner' },
    { name: 'Mahindra XUV700', price: '₹13.9 - 24.8 Lakhs*', img: car, alt: 'Mahindra XUV700' },
    { name: 'Toyota Fortuner', price: '₹32 - 50 Lakhs*', img: car, alt: 'Toyota Fortuner' },
    { name: 'Mahindra XUV700', price: '₹13.9 - 24.8 Lakhs*', img: car, alt: 'Mahindra XUV700' },
  ];

  const bikes = [
    { name: 'Royal Enfield Classic 350', price: '₹1.90 - 2.21 Lakhs*', img: car, alt: 'Royal Enfield Classic 350' },
    { name: 'Honda CB350RS', price: '₹2.14 Lakhs*', img: car, alt: 'Honda CB350RS' },
    { name: 'TVS Apache RR 310', price: '₹2.72 Lakhs*', img: car, alt: 'TVS Apache RR 310' },
    { name: 'Bajaj Dominar 400', price: '₹2.3 Lakhs*', img: car, alt: 'Bajaj Dominar 400' },
    { name: 'TVS Apache RR 310', price: '₹2.72 Lakhs*', img: car, alt: 'TVS Apache RR 310' },
    { name: 'Bajaj Dominar 400', price: '₹2.3 Lakhs*', img: car, alt: 'Bajaj Dominar 400' },
    { name: 'TVS Apache RR 310', price: '₹2.72 Lakhs*', img: car, alt: 'TVS Apache RR 310' },
    { name: 'Bajaj Dominar 400', price: '₹2.3 Lakhs*', img: car, alt: 'Bajaj Dominar 400' },
  ];

  // Group items in pairs
  const groupItemsInPairs = (items) => {
    const pairs = [];
    for (let i = 0; i < items.length; i += 2) {
      pairs.push({
        left: items[i],
        right: items[i + 1] || null, // Handle odd number of items
      });
    }
    return pairs;
  };

  const carComparisonData = groupItemsInPairs(cars);
  const bikeComparisonData = groupItemsInPairs(bikes);

  return (
    <div className="lg:p-6 p-4 bg-gray-100">
      <h3 className="sm:text-2xl text-lg font-bold sm:mb-6 mb-2">Top Comparisons</h3>

      {/* Tab Buttons */}
      <div className="flex mb-6 border border-gray-800 w-fit p-1 rounded-md">
        <button
          className={`px-4 py-2 font-medium text-sm rounded-md ${activeTab === 'cars' ? 'bg-darkOrange text-whiteColor' : 'text-gray-600'
            }`}
          onClick={() => setActiveTab('cars')}
        >
          Cars
        </button>
        <button
          className={`px-4 py-2 font-medium text-sm rounded-md ${activeTab === 'bikes' ? 'text-whiteColor bg-darkOrange' : 'text-gray-600'
            }`}
          onClick={() => setActiveTab('bikes')}
        >
          Bikes
        </button>
      </div>

      {/* Car Comparisons */}
      {activeTab === 'cars' && (
        <div className="mb-6 relative">
          <Swiper
            slidesPerView={1}
            spaceBetween={15}
            onSwiper={(swiper) => {
              swiperRefs.current[0] = swiper;
              handleSlideChange(0); // Initialize state on mount
            }}
            navigation={{
              nextEl: '.swiper-button-next-compa1',
              prevEl: '.swiper-button-prev-compa2',
            }}
            onSlideChange={() => handleSlideChange(0)} // Update state on slide change
            onReachEnd={() => handleSlideChange(0)}   // Update state when reaching the end
            onReachBeginning={() => handleSlideChange(0)} // Update state when reaching the beginning
            modules={[Navigation]}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
          >
            {carComparisonData.map((pair, index) => (
              <SwiperSlide key={index} className="bg-white rounded-lg shadow-md overflow-hidden !h-auto !flex !flex-col !justify-between">
                <div className="flex p-4 gap-1 relative">
                  {/* Left side - Car 1 */}
                  <div className="flex-1">
                    {pair.left && (
                      <>
                        <Image
                          src={pair.left.img}
                          alt={pair.left.alt}
                          className="w-full h-28 object-cover"
                        />
                        <h2 className="sm:text-base text-sm font-semibold">{pair.left.name}</h2>
                        <p className="sm:text-sm text-xs text-gray-600">{pair.left.price}</p>
                        <p className="text-xs text-gray-500">*Ex-showroom price</p>
                      </>
                    )}
                  </div>

                  {/* Right side - Car 2 */}
                  <div className="flex-1">
                    {pair.right && (
                      <>
                        <Image
                          src={pair.right.img}
                          alt={pair.right.alt}
                          className="w-full h-28 object-cover"
                        />
                        <h2 className="sm:text-base text-sm font-semibold">{pair.right.name}</h2>
                        <p className="sm:text-sm text-xs text-gray-600">{pair.right.price}</p>
                        <p className="text-xs text-gray-500">*Ex-showroom price</p>
                      </>
                    )}
                  </div>
                  <div className='absolute top-1/3 left-1/2 -translate-y-1/2 -translate-x-1/2 size-6 bg-darkOrange text-whiteColor text-xs rounded-full text-center content-center'>VS</div>
                </div>
                <button className="text-center block w-full border-t py-2 text-sm font-semibold text-darkOrange">
                  {pair.left.name.split(' ')[1] || pair.left.name}{' '}
                  {pair.right ? `vs ${pair.right.name.split(' ')[1] || pair.right.name} >>` : ''}
                </button>
              </SwiperSlide>
            ))}
          </Swiper>

          <button className={`swiper-button-next-compa1 py-3 rounded-md text-whiteColor bg-lightOrange absolute right-0 top-[40%] -translate-y-1/2 z-50 cursor-pointer ${isAtEnd[0] ? 'hidden' : ''}`}><ChevronRight /></button>
          <button className={`swiper-button-prev-compa2 py-3 rounded-md text-whiteColor bg-lightOrange absolute left-0 top-[40%] -translate-y-1/2 z-50 cursor-pointer ${isAtStart[0] ? 'hidden' : ''}`}><ChevronLeft /></button>
        </div>
      )}

      {/* Bike Comparisons */}
      {activeTab === 'bikes' && (
        <div className="relative">
          <Swiper
            slidesPerView={1}
            spaceBetween={15}
            onSwiper={(swiper) => {
              swiperRefs.current[1] = swiper;
              handleSlideChange(1); // Initialize state on mount
            }}
            navigation={{
              nextEl: '.swiper-button-next-compa3',
              prevEl: '.swiper-button-prev-compa4',
            }}
            onSlideChange={() => handleSlideChange(1)} // Update state on slide change
            onReachEnd={() => handleSlideChange(1)}   // Update state when reaching the end
            onReachBeginning={() => handleSlideChange(1)} // Update state when reaching the beginning
            modules={[Navigation]}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
          >
          {bikeComparisonData.map((pair, index) => (
            <SwiperSlide key={index} className="bg-white rounded-lg shadow-md overflow-hidden !h-auto !flex !justify-between !flex-col">
              <div className="flex p-4 gap-1 relative">
                {/* Left side - Bike 1 */}
                <div className="flex-1 ">
                  {pair.left && (
                    <>
                      <Image
                        src={pair.left.img}
                        alt={pair.left.alt}
                        className="w-full h-28 object-cover"
                      />
                      <h2 className="sm:text-base text-sm font-semibold">{pair.left.name}</h2>
                      <p className="sm:text-sm text-xs text-gray-600">{pair.left.price}</p>
                      <p className="text-xs text-gray-500">*Ex-showroom price</p>
                    </>
                  )}
                </div>

                {/* Right side - Bike 2 */}
                <div className="flex-1">
                  {pair.right && (
                    <>
                      <Image
                        src={pair.right.img}
                        alt={pair.right.alt}
                        className="w-full h-28 object-cover"
                      />
                      <h2 className="sm:text-base text-sm font-semibold">{pair.right.name}</h2>
                      <p className="sm:text-sm text-xs text-gray-600">{pair.right.price}</p>
                      <p className="text-xs text-gray-500">*Ex-showroom price</p>
                    </>
                  )}
                </div>
                <div className='absolute top-1/3 left-1/2 -translate-y-1/2 -translate-x-1/2 size-6 bg-darkOrange text-whiteColor text-xs rounded-full text-center content-center'>VS</div>
              </div>
              <button className="text-center block w-full border-t py-2 text-sm font-semibold text-darkOrange">
                {pair.left.name.split(' ')[1] || pair.left.name}{' '}
                {pair.right ? `vs ${pair.right.name.split(' ')[1] || pair.right.name} >>` : ''}
              </button>
            </SwiperSlide>
          ))}
          </Swiper>

          <button className={`swiper-button-next-compa3 py-3 rounded-md text-whiteColor bg-lightOrange absolute right-0 top-[40%] -translate-y-1/2 z-50 cursor-pointer ${isAtEnd[1] ? 'hidden' : ''}`}><ChevronRight /></button>
          <button className={`swiper-button-prev-compa4 py-3 rounded-md text-whiteColor bg-lightOrange absolute left-0 top-[40%] -translate-y-1/2 z-50 cursor-pointer ${isAtStart[1] ? 'hidden' : ''}`}><ChevronLeft /></button>
        </div>
      )}

      <div className="mt-6 w-fit mx-auto">
        <button className="text-blue-600 font-medium hover:underline inline-flex w-fit mx-auto sm:text-sm text-xs">
          View all {activeTab === 'cars' ? 'Car' : 'Bike'} Comparisons <ChevronsRight />
        </button>
      </div>
    </div>
  );
};

export default CarComparison;
