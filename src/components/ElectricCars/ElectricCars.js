"use client";
import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react';
import car from '../../../public/demo.jpg';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function ElectricCars() {

        const swipereRef = useRef(null);
        const [isAtStart, setIsAtStart] = useState(true);
        const [isAtEnd, setIsAtEnd] = useState(false);
      
        const handleSlideChange = () => {
          if (swipereRef.current) {
            setIsAtStart(swipereRef.current.swiper.isBeginning);
            setIsAtEnd(swipereRef.current.swiper.isEnd);
          }
        };
      
        useEffect(() => {
          // Initialize Swiper events after component mounts
          if (swipereRef.current) {
            swipereRef.current.swiper.on('slideChange', handleSlideChange);
            swipereRef.current.swiper.on('reachEnd', handleSlideChange);
            swipereRef.current.swiper.on('reachBeginning', handleSlideChange);
          }
          return () => {
            if (swipereRef.current) {
              swipereRef.current.swiper.off('slideChange', handleSlideChange);
              swipereRef.current.swiper.off('reachEnd', handleSlideChange);
              swipereRef.current.swiper.off('reachBeginning', handleSlideChange);
            }
          };
        }, []);


  const [selectedCategory, setSelectedCategory] = useState('Cars');
  const [selectedTab, setSelectedTab] = useState('Popular'); // New state for tabs

  const cars = {
    Popular: [
      { name: 'Tata Punch EV', price: '₹9.99 - 14.29 Lakhs', image: car },
      { name: 'Tata Nexon EV', price: '₹12.49 - 17.19 Lakhs', image: car },
      { name: 'Tata Indica EV', price: '��14.79 - 20.39 Lakhs', image: car },
      { name: 'Tata Indica Altis', price: '��19.79 - 25.39 Lakhs', image: car },
      { name: 'Tata Nexon Altis', price: '��22.79 - 28.39 Lakhs', image: car },
    ],
    Latest: [
      { name: 'MG ZS EV', price: '₹22.00 Lakhs', image: car },
      { name: 'Hyundai Kona', price: '₹23.79 Lakhs', image: car },
      { name: 'Hyundai Creta', price: '��25.29 Lakhs', image: car },
      { name: 'Hyundai Verna', price: '��26.29 Lakhs', image: car },
      { name: 'Hyundai i10', price: '��28.00 Lakhs', image: car },
    ],
    Upcoming: [
      { name: 'Tesla Model 3', price: '₹50.00 Lakhs', image: car },
      { name: 'Kia EV6', price: '₹60.00 Lakhs', image: car },
      { name: 'Tesla Model X', price: '��60.00 Lakhs', image: car },
      { name: 'Tesla Model Y', price: '��60.00 Lakhs', image: car },
      { name: 'Tesla Model Z', price: '��60.00 Lakhs', image: car },
    ],
  };

  const bikes = {
    Popular: [
      { name: 'Revolt RV400', price: '₹1.24 Lakhs', image: car },
      { name: 'Ultraviolette F77', price: '₹3.8 Lakhs', image: car },
      { name: 'Harley-Davidson Hurricane', price: '��1.8 Lakhs', image: car },
      { name: 'Harley-Davidson Eagle', price: '��1.4 Lakhs', image: car },
      { name: 'Harley-Davidson Viper', price: '��1.1 Lakhs', image: car },
    ],
    Latest: [
      { name: 'Ola S1 Pro', price: '₹1.4 Lakhs', image: car },
      { name: 'Ather 450X', price: '₹1.3 Lakhs', image: car },
      { name: 'Harley-Davidson Fox', price: '��1.2 Lakhs', image: car },
      { name: 'Harley-Davidson Hurricane XL', price: '��1.3 Lakhs', image: car },
      { name: 'Harley-Davidson Eagle XL', price: '��1.3 Lakhs', image: car },
    ],
    Upcoming: [
      { name: 'Tork Kratos', price: '₹1.25 Lakhs', image: car },
      { name: 'Hero Electric AE-47', price: '₹1.5 Lakhs', image: car },
      { name: 'Hero Electric AE-55', price: '��1.7 Lakhs', image: car },
      { name: 'Hero Electric AE-60', price: '��2.0 Lakhs', image: car },
      { name: 'Hero Electric AE-70', price: '��2.2 Lakhs', image: car },
    ],
  };

  const itemsToDisplay =
    selectedCategory === 'Cars' ? cars[selectedTab] : bikes[selectedTab];

  return (
    <div className="lg:p-6 p-4 bg-gray-100">
      <div className='flex flex-wrap justify-between'>
        {/* Header */}
      <div className="text-center mb-4">
        <h3 className="sm:text-2xl text-lg font-bold">Top Electric Automobiles</h3>
      </div>



      {/* Cars/Bikes Toggle */}
      <div className="flex justify-center mb-4 border border-gray-600 rounded-md p-1">
        <button
          onClick={() => setSelectedCategory('Cars')}
          className={`px-6 py-2 font-medium sm:text-sm text-xs ${
            selectedCategory === 'Cars' ? 'text-white bg-darkOrange' : 'bg-gray-200'
          } rounded-l`}
        >
          Cars
        </button>
        <button
          onClick={() => setSelectedCategory('Bikes')}
          className={`px-6 py-2 font-medium sm:text-sm text-xs ${
            selectedCategory === 'Bikes' ? 'text-white bg-darkOrange' : 'bg-gray-200'
          } rounded-r`}
        >
          Bikes
        </button>
      </div>
      </div>

            {/* Navigation Tabs */}
            <div className="flex justify-center mb-6">
        {['Popular', 'Latest', 'Upcoming'].map((tab) => (
          <button
            key={tab}
            onClick={() => setSelectedTab(tab)}
            className={`px-4 py-2 font-medium sm:text-sm text-xs ${
              selectedTab === tab
                ? 'border-b-2 border-red-500 text-black'
                : 'text-gray-500'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Electric Vehicles List */}
      <div className="relative">
      <Swiper
            slidesPerView={1}
            spaceBetween={15}
            ref={swipereRef}
            navigation={{
                nextEl: '.swiper-button-next-electro',
                prevEl: '.swiper-button-prev-electro',
              }}
            modules={[Navigation]}
            className="mySwiper mt-4"

            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 4 },
            }}
          >
        {itemsToDisplay.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="bg-white shadow rounded-lg p-2">
            <Image
              src={item.image}
              alt={item.name}
              className="w-full rounded-t-lg"
            />
            <div className="p-4">
              <h2 className="sm:text-lg text-sm font-semibold">{item.name}</h2>
              <p className="text-gray-600 sm:text-sm text-xs">{item.price}</p>
              <button className="mt-4 px-4 py-2 sm:text-sm text-xs hover:text-white hover:bg-darkOrange rounded w-full border-2 border-darkOrange text-darkOrange">
                Check Latest Offers
              </button>
            </div>
          </div>
          </SwiperSlide>
        ))}
        </Swiper>

        <button className={`swiper-button-next-electro py-3 rounded-md text-whiteColor bg-lightOrange absolute right-0 top-[40%] -translate-y-1/2 z-50 cursor-pointer ${isAtEnd ? 'hidden' : ''}`}><ChevronRight /></button>
          <button className={`swiper-button-prev-electro py-3 rounded-md text-whiteColor bg-lightOrange absolute left-0 top-[40%] -translate-y-1/2 z-50 cursor-pointer ${isAtStart ? 'hidden' : ''}`}><ChevronLeft /></button>
      </div>

      {/* View All Link */}
      <div className="text-center mt-6">
        <a
          href="#"
          className="text-blue-500 underline sm:text-sm text-xs"
        >{`View all ${selectedTab} Electric ${selectedCategory} >>`}</a>
      </div>
    </div>
  );
}
