"use client"

import { Bell, Play, Plus, Search } from "lucide-react";
import SelectCar from "./SelectCar";


export default function UsedCars() {



    return (
        <>
            <div className="border-2 rounded-md">
                <div className="p-4">
                    <form action="#" className="w-full">
                        <div className="border-2 flex items-center px-2 rounded-md">
                            <Search className="text-gray-400" />
                            <input type="text" className="py-2 w-full px-2 outline-none" placeholder="Search here" />
                        </div>
                    </form>
                    <SelectCar />

                    <div className="space-y-4 mt-4">
                    <div className="text-sm space-y-2">
                        <div className="text-center">Mumbai, Maharashtra </div>
                        <div className="flex items-center justify-between">
                            <div className="text-blue-800">Inspected Listing </div>
                            <div>Inspected Listing </div>
                        </div>
                    </div>

                    <div className="flex items-center gap-2 whitespace-nowrap">
                        <button className="bg-lightOrange block w-full py-2 text-sm px-4 rounded-md text-whiteColor">All Used Cars </button>
                        <button className="bg-lightOrange block w-2/3 py-2 text-sm px-4 rounded-md text-whiteColor">Certified Cars </button>
                    </div>

                   
                    <button className="bg-buttonColor block w-full py-2 text-sm px-4 rounded-md text-whiteColor">Sell Your Car</button>
                   

                    
                    </div>


                </div>
            </div>
        </>
    )
}