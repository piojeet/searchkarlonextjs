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
            width="18"
            height="18"
            style={{ cursor: "pointer" }}
        >
            <path d="M12 .587l3.668 7.568L24 9.748l-6 5.832L19.335 24 12 20.201 4.665 24 6 15.58 0 9.748l8.332-1.593L12 .587z" />
        </svg>
    );

    const [rating, setRating] = useState(3); // Default 3 stars filled

    return (
        <div className="xl:p-0 p-4 pt-0">

            <div className="text-xs flex items-stretch justify-between gap-2 font-semibold border-2 rounded-md overflow-hidden lg:flex-row flex-col">
                <div className="bg-buttonColor text-whiteColor content-center whitespace-nowrap p-4">Score 89</div>
                
                <div className="flex items-center justify-between gap-2 py-2 w-full lg:flex-row flex-col">
                <div>
                    <div className="flex items-center gap-2 text-xs">
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
                <span className="lg:h-10 lg:w-px h-px w-full bg-gray-400"></span>

                <div>Write a Review</div>
                <span className="lg:h-10 lg:w-px h-px w-full bg-gray-400"></span>

                <div>Confused?</div>
                <span className="lg:h-10 lg:w-px h-px w-full bg-gray-400"></span>

                <div>Add to Wishlist</div>
                <span className="lg:h-10 lg:w-px h-px w-full bg-gray-400"></span>

                <div className="flex items-center gap-2">
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
                <span className="lg:h-10 lg:w-px h-px w-full bg-gray-400"></span>

                <div className="py-2 px-4 bg-[#5DB506] text-whiteColor rounded-md">Compare Features</div>
                <span className="lg:h-10 lg:w-px h-px w-full bg-gray-400"></span>
                <div className="flex items-center gap-2 pr-2">
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

