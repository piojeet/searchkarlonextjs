"use client"

import SelectbyPrice from "../SelectPriceAndSelectFuel/SelectbyPrice";
import COMPARECARS from "./COMPARECARS";
import FreeCarListing from "./FreeCarListing";
import GetOnRoadPrice from "./GetOnRoadPrice";
import SearchProduct from "./SeachProduct";

export default function CarPageHero() {
    return (
        <div className="p-2 bg-buttonColor">
            <div className="grid xl:grid-cols-[1fr_300px_1fr] gap-2 mb-2">
            <SearchProduct />
            <div className="lg:block hidden">
            <FreeCarListing />
            </div>
            <div className="lg:hidden">
                <SelectbyPrice />
            </div>
            <div className="lg:block hidden">
            <COMPARECARS />
            </div>
            </div>
            <GetOnRoadPrice />
        </div>
    )
}