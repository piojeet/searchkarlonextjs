'use client'

import { ChevronRight } from "lucide-react";
import { useCallback, useState } from "react";

export default function SpecialPageAccordion() {
    const [showDropdown, setShowDropdown] = useState(false);

    const toggleAccordion = useCallback(() => {
        setShowDropdown((prev) => !prev);
    }, []);

    return (
        <div>
            <div>
                <div className="flex items-center justify-between" onClick={toggleAccordion}>
                    <span className="font-semibold">Special Pages</span>
                    <ChevronRight className={`transition-transform size-5 ${showDropdown ? 'rotate-90' : ''}`} />
                </div>

                <div className={`overflow-hidden transition-all duration-300 ${showDropdown ? 'max-h-60' : 'max-h-0'}`}>
                    <ul className="mt-2 space-y-2 text-sm font-medium text-[#FCFCFDCC]">
                        <li>Invite Friends</li>
                        <li>Corporate Gifting</li>
                        <li>Deals Near Me</li>
                        <li>Citywise Directory</li>
                        <li>Alphabetical Directory</li>
                        <li>Refer & Earn</li>
                        <li>Careers</li>
                        <li>Donate Cashback</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
