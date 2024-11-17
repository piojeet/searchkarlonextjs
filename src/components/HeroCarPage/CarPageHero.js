"use client"

import COMPARECARS from "./COMPARECARS";
import FreeCarListing from "./FreeCarListing";
import GetOnRoadPrice from "./GetOnRoadPrice";
import SearchProduct from "./SeachProduct";

export default function CarPageHero() {
    return (
        <div className="p-2 bg-buttonColor">
            <div className="grid xl:grid-cols-[1fr_300px_1fr] gap-2 mb-2">
            <SearchProduct />
            <FreeCarListing />
            <COMPARECARS />
            </div>
            <GetOnRoadPrice />
        </div>
    )
}