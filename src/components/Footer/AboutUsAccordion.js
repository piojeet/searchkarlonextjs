'use client'

import { ChevronRight } from "lucide-react";
import { useCallback, useState } from "react";

export default function AboutUsAccordion() {
    const [showDropdown, setShowDropdown] = useState(false);

    const toggleAccordion = useCallback(() => {
        setShowDropdown((prev) => !prev);
    }, []);

    return (
        <div className="my-2">
            <div>
                <div className="flex items-center justify-between" onClick={toggleAccordion}>
                    <span className="font-semibold">About Us</span>
                    <ChevronRight className={`transition-transform size-5 ${showDropdown ? 'rotate-90' : ''}`} />
                </div>

                <div className={`overflow-hidden transition-all duration-300 ${showDropdown ? 'max-h-60' : 'max-h-0'}`}>
                    <ul className="mt-2 space-y-2 text-sm font-medium text-[#FCFCFDCC]">
                    <li>About Us</li>
							<li>Contact Us</li>
							<li>Press</li>
							<li>Blog</li>
							<li>Testimonials</li>
							<li>FAQ</li>
							<li>Sitemap</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
