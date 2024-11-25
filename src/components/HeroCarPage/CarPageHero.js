"use client"

import { useAuthContext } from "@/context/AuthContext";
import SelectbyPrice from "../SelectPriceAndSelectFuel/SelectbyPrice";
import COMPARECARS from "./COMPARECARS";
import FreeCarListing from "./FreeCarListing";
import GetOnRoadPrice from "./GetOnRoadPrice";
import SearchProduct from "./SeachProduct";
import TabBtns from "./TabBtns";
import SelectbyFuelType from "../SelectPriceAndSelectFuel/SelectbyFuelType";

export default function CarPageHero() {

    const { priceFuelActiveTab } = useAuthContext(); // Ensure correct spelling here

    return (
        <div className="p-2 bg-buttonColor">
            <div className="grid xl:grid-cols-[1fr_300px_1fr] mb-2 gap-2">
                <SearchProduct />
                <div className="lg:hidden">
                    <TabBtns />
                </div>
                <div className="lg:block hidden">
                    <FreeCarListing />
                </div>

                
                    {/* <div className="lg:hidden"> */}
                        {priceFuelActiveTab === "select-price" && (
                           <div className="lg:hidden">
                             <SelectbyPrice />
                           </div>
                        )}
                    {/* </div> */}



                    {priceFuelActiveTab === "select-fuel" && (
                        <div className="lg:hidden">
                            <SelectbyFuelType />
                        </div>
                    )}


                <div className="lg:block hidden">
                    <COMPARECARS />
                </div>
            </div>
            <GetOnRoadPrice />
        </div>
    )
}