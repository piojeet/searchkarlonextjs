"use client"

import { useAuthContext } from "@/context/AuthContext"

export default function TabBtns() {

    const { priceFuelActiveTab, setPriceFuelActiveTab } = useAuthContext(); // Ensure correct spelling here

    return (
        <div className="flex text-sm gap-2">
            <button onClick={()=> setPriceFuelActiveTab('select-price')} className={`py-2 px-2 border-2 rounded-md w-full ${priceFuelActiveTab === 'select-price' ? 'bg-lightOrange text-whiteColor' : 'bg-whiteColor'}`}>Price</button>
            <button onClick={()=> setPriceFuelActiveTab('select-fuel')} className={`py-2 px-2 border-2 rounded-md w-full ${priceFuelActiveTab === 'select-fuel' ? 'bg-lightOrange text-whiteColor' : 'bg-whiteColor'}`}>Fuel</button>
        </div>
    )
}