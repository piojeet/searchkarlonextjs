"use client"

import Link from "next/link";
import { useState } from "react";
import Instagram from "../../../public/share/Instagram_white.svg";
import Pinterest from "../../../public/share/Pinterest_white.svg";
import Linkedin from "../../../public/share/LinkedIN_white.svg";
import Twitter from "../../../public/share/Twitter_white.svg";
import Facebook from "../../../public/share/Facebook.svg";
import Image from "next/image";
import { ThumbsDown, ThumbsUp } from "lucide-react";
import ProductDiscriptionPrice from "./ProductDiscriptionPrice";
import ProductDiscriptionFetures from "./ProductDiscriptionFetures";

export default function ProductDiscriptionScore() {

    const Star = ({ filled, onClick }) => (
        <svg
            onClick={onClick}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill={filled ? "#FFA500" : "gray"}
            className="sm:size-5 size-3"
            style={{ cursor: "pointer" }}
        >
            <path d="M12 .587l3.668 7.568L24 9.748l-6 5.832L19.335 24 12 20.201 4.665 24 6 15.58 0 9.748l8.332-1.593L12 .587z" />
        </svg>
    );

    const [rating, setRating] = useState(3); // Default 3 stars filled

    return (
        <div className="xl:p-0 p-4 pt-0">

            <div className="text-xs flex items-stretch justify-between gap-2 font-semibold  overflow-hidden xl:flex-row flex-col sm:border-2 sm:rounded-md">
                <div className="bg-buttonColor text-whiteColor content-center whitespace-nowrap p-4 sm:block hidden">Score 89</div>

                <div className="flex items-center justify-between gap-2 py-2 w-full flex-wrap sm:flex-col xl:flex-row xl:flex-nowrap">
                    <div className="sm:block flex text-xs">
                        <div className="flex items-center sm:gap-2 gap-1 text-xs">
                            <div className="flex items-center">
                                {Array.from({ length: 5 }, (_, index) => (
                                    <Star
                                        key={index}
                                        filled={index < rating}
                                    // onClick={() => setRating(index + 1)}
                                    />
                                ))}
                            </div>
                            <div className="leading-none">3.0 / 5</div>
                        </div>
                        <div>based on 104 Reviews</div>
                    </div>
                    <span className="xl:h-10 xl:w-px h-px w-full bg-gray-400 sm:block hidden"></span>

                    <div>Write a Review</div>
                    <span className="xl:h-10 xl:w-px h-px w-full bg-gray-400 sm:block hidden"></span>

                    <div className="sm:block hidden">Confused?</div>
                    <span className="xl:h-10 xl:w-px h-px w-full bg-gray-400 sm:block hidden"></span>

                    <div className="sm:block hidden">Add to Wishlist</div>
                    <span className="xl:h-10 xl:w-px h-px w-full bg-gray-400 sm:block hidden"></span>

                    <div className="sm:flex hidden items-center gap-2">
                        <div>Share</div>
                        {/* SOCIAL LINKS */}
                        <div className="flex items-center gap-1 lg:border-r-2 border-white py-[5px] pr-3">
                            <Link href="/">
                                <Image src={Facebook} alt="Img" className="size-5 3xl:size-6" />
                            </Link>
                            <Link href="/">
                                <Image src={Twitter} alt="Img" className="size-5 3xl:size-6" />
                            </Link>
                            <Link href="/">
                                <Image src={Linkedin} alt="Img" className="size-5 3xl:size-6" />
                            </Link>

                            <Link href="/">
                                <Image src={Pinterest} alt="Img" className="size-5 3xl:size-6" />
                            </Link>
                            <Link href="/">
                                <Image src={Instagram} alt="Img" className="size-5 3xl:size-6" />
                            </Link>

                        </div>
                    </div>
                    <span className="xl:h-10 xl:w-px h-px w-full bg-gray-400 sm:block hidden"></span>

                    <div className="py-2 px-4 bg-[#5DB506] text-whiteColor rounded-md sm:block hidden">Compare Features</div>
                    <span className="xl:h-10 xl:w-px h-px w-full bg-gray-400 sm:block hidden"></span>
                    <div className="sm:flex hidden items-center gap-2 pr-2">
                        <div><ThumbsUp size={16} /></div>
                        <div><ThumbsDown size={16} /></div>
                    </div>
                </div>

            </div>

            <ProductDiscriptionPrice />

            <ProductDiscriptionFetures />
        </div>
    )
}

