"use client";

import { CarListCategroiesData } from "@/db/db"; // Ensure this data is correctly imported and structured
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import Image from "next/image";
import carCategories from "../../../public/categories/cars.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { useRef, useState } from "react";

export default function CarList() {
    const categoriesImgData = [
        { id: 1, name: "Body Type", img: carCategories, dataTagL: "body type", dataTag: "tag1" },
        { id: 2, name: "SUV", img: carCategories, dataTagL: "suv", dataTag: "tag2" },
        { id: 3, name: "Sedan", img: carCategories, dataTagL: "sedan", dataTag: "tag3" },
    ];

    const selectData = [
        { id: 1, name: "Select", dataTag: "tag1" },
        { id: 2, name: "Year", dataTag: "tag2" },
        { id: 3, name: "Make", dataTag: "tag3" },
        { id: 4, name: "Model", dataTag: "tag4" },
        { id: 5, name: "Price", dataTag: "tag5" },
        { id: 6, name: "Color", dataTag: "tag6" },
        { id: 7, name: "Mileage", dataTag: "tag7" },
        { id: 8, name: "Fuel Type", dataTag: "tag8" },
        { id: 9, name: "Transmission", dataTag: "tag9" },
        { id: 10, name: "View All", dataTag: "tag10" },
    ];

    const [activeTag, setActiveTag] = useState("");

    const handleButtonClick = (tag) => {
        setActiveTag(tag); // Update active tag
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
            {/* Swiper Slider */}
            <Swiper
                modules={[Navigation]}
                slidesPerView="auto"
                spaceBetween={10}
                className="mb-4"
            >
                {categoriesImgData.map((item) => (
                    <SwiperSlide key={item.id} className="!w-24">
                        <div>
                            <input
                                type="radio"
                                name="categories"
                                id={`category-${item.id}`}
                                className="peer hidden"
                            />
                            <label
                                htmlFor={`category-${item.id}`}
                                className="border-2 block p-1 peer-checked:border-lightOrange"
                                onClick={() => handleButtonClick(item.dataTag)}
                            >
                                <Image
                                    src={item.img}
                                    alt={item.name}
                                    width={60}
                                    height={60}
                                    className="block mx-auto"
                                />
                                <p className="text-center">{item.name}</p>
                            </label>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            {/* Buttons */}
            <div className="flex items-center gap-4">
                {selectData.map((data) => (
                    <button key={data.id} className={`text-blue-600`} onClick={() => handleButtonClick(data.dataTag)}>{data.name}</button>
                ))}
            </div>

            {/* Car List Grid */}
            <div className="text-sm mt-6 relative">
                <Swiper
                slidesPerView={1}
                    spaceBetween={15}
                    ref={swiperRef}
                    onSlideChange={handleSlideChange}
                    navigation={{
                        nextEl: ".swiper-button-next-list",
                        prevEl: ".swiper-button-prev-list",
                    }}
                    modules={[Navigation]}
                    breakpoints={{
                        640: { slidesPerView: 1 },
                        768: { slidesPerView: 2 },
                        1024: { slidesPerView: 4 },
                    }}
                    className="mySwiper">
                {CarListCategroiesData.map((item) => (
                    <SwiperSlide key={item.id}>
                    <div
                        className="space-y-2 p-4 border-2 rounded-3xl" data-tag="tag1"
                        style={{ display: activeTag === "tag1" || activeTag === "" ? "block" : "none" }}
                    >
                        {/* Car Image */}
                        <div>
                            <Image src={item.carImg} alt="car" />
                        </div>
                        <div className="w-full h-[1px] bg-gray-300"></div>

                        {/* Car Info */}
                        <div className="flex items-center justify-between">
                            <div>{item.carName}</div>
                            <div className="flex items-center gap-1 text-[#5DB506]">
                                {item.rating}
                                <Star fill="#5DB506" strokeWidth={0} size={16} />
                            </div>
                        </div>

                        <div className="flex items-center gap-2">
                            <div>Starting at ₹</div>
                            <div className="font-semibold">{item.carPirice}</div>
                        </div>

                        <div className="flex items-center justify-center text-whiteColor gap-2 bg-lightOrange py-2 px-4 clip-path-custom text-center">
                            <div>Save upto ₹</div>
                            <div className="font-semibold">{item.savePrice}</div>
                        </div>

                        <div className="text-center">{item.saveTitle}</div>

                        {/* Additional Details */}
                        <div className="flex items-end justify-between">
                            {/* Engine CC */}
                            <div className="flex flex-col justify-center items-center gap-1">
                                <Image
                                    src={item.ccImg}
                                    alt={item.cc}
                                    width={50}
                                    height={50}
                                />
                                <div>{item.cc}</div>
                            </div>

                            {/* Fuel */}
                            <div className="flex flex-col justify-center items-center gap-1">
                                <Image
                                    src={item.fuelImg}
                                    alt={item.fuel}
                                    width={50}
                                    height={50}
                                />
                                <div>{item.fuel}</div>
                            </div>

                            {/* Seating */}
                            <div className="flex flex-col justify-center items-center gap-1">
                                <Image
                                    src={item.seatImg}
                                    alt={item.seat}
                                    width={50}
                                    height={50}
                                />
                                <div>{item.seat}</div>
                            </div>

                            {/* Transmission */}
                            <div className="flex flex-col justify-center items-center gap-1">
                                <Image
                                    src={item.transmissionImg}
                                    alt={item.transmission}
                                    width={50}
                                    height={50}
                                />
                                <div>{item.transmission}</div>
                            </div>
                        </div>

                        {/* Last In Day and Score */}
                        <div className="flex items-center justify-between mt-4">
                            <div className="flex gap-2">
                                <div>{item.lastInDay}</div>
                                <div>In Last 30 Days</div>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="p-2 py-1.5 bg-[#5DB506] text-whiteColor">
                                    {item.successScure}
                                </div>
                                <div>Our Score</div>
                            </div>
                        </div>

                        {/* Checkbox */}
                        <div className="select-none flex items-center justify-center gap-2">
                            <input
                                type="checkbox"
                                id={`checkbox-${item.id}`}
                                className="accent-lightOrange text-whiteColor"
                            />
                            <label htmlFor={`checkbox-${item.id}`}>
                                {item.dadCard}
                            </label>
                        </div>

                        {/* Button */}
                        <button className="block w-3/5 mx-auto rounded-full text-whiteColor hover:bg-lightOrange/90 whitespace-nowrap py-2 bg-lightOrange">
                            {item.button}
                        </button>
                    </div>
                    </SwiperSlide>
                ))}
                </Swiper>

                {/* Swiper Navigation Buttons */}
                <button
                    className={`swiper-button-next-list py-3 rounded-md text-white bg-lightOrange absolute right-0 top-[40%] -translate-y-1/2 z-50 cursor-pointer ${
                        isAtEnd ? "opacity-0 pointer-events-none" : ""
                    }`}
                >
                    <ChevronRight />
                </button>
                <button
                    className={`swiper-button-prev-list py-3 rounded-md text-white bg-lightOrange absolute lg:left-0 top-[40%] -translate-y-1/2 z-50 cursor-pointer ${
                        isAtStart ? "opacity-0 pointer-events-none" : ""
                    }`}
                >
                    <ChevronLeft />
                </button>
            </div>
        </div>
    );
}
