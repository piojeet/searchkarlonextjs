"use client"

import { useAuthContext } from "@/context/AuthContext"

export default function TabBtns() {

    const { tcoCalculatorAffordabilityActiveTab, setTcoCalculatorAffordabilityActiveTab } = useAuthContext(); // Ensure correct spelling here

    return (
        <div className="flex text-sm gap-2 p-4">
            <button onClick={()=> setTcoCalculatorAffordabilityActiveTab('emi-calculator')} className={`py-2 px-2 border-2 rounded-md w-full ${tcoCalculatorAffordabilityActiveTab === 'emi-calculator' ? 'bg-lightOrange text-whiteColor' : 'bg-whiteColor'}`}>Loan EMI</button>
            <button onClick={()=> setTcoCalculatorAffordabilityActiveTab('card-affordability')} className={`py-2 px-2 border-2 rounded-md w-full ${tcoCalculatorAffordabilityActiveTab === 'card-affordability' ? 'bg-lightOrange text-whiteColor' : 'bg-whiteColor'}`}>Affordability</button>
            <button onClick={()=> setTcoCalculatorAffordabilityActiveTab('car-tco')} className={`py-2 px-2 border-2 rounded-md w-full ${tcoCalculatorAffordabilityActiveTab === 'car-tco' ? 'bg-lightOrange text-whiteColor' : 'bg-whiteColor'}`}>Car TCO</button>
        </div>
    )
}