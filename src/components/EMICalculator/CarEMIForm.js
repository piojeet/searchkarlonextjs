"use client"

import React, { useState } from "react";

export default function CarEMIForm() {
    const [formData, setFormData] = useState({
        emi: "",
        downpayment: "",
        resale: "",
        interestRate: "",
        timePeriod: "",
    });

    const [carPrice, setCarPrice] = useState(null);

    // Handle input changes
    const handleInputChange = (event, field) => {
        setFormData({ ...formData, [field]: event.target.value });
    };

    // Handle form submission and calculate car price
    const handleSubmit = (e) => {
        e.preventDefault();
        const { emi, downpayment, resale, interestRate, timePeriod } = formData;

        // Convert inputs to numbers
        const emiNum = parseFloat(emi);
        const downpaymentNum = parseFloat(downpayment);
        const resaleNum = parseFloat(resale);
        const interestRateNum = parseFloat(interestRate);
        const timePeriodNum = parseFloat(timePeriod);

        if (
            isNaN(emiNum) ||
            isNaN(downpaymentNum) ||
            isNaN(resaleNum) ||
            isNaN(interestRateNum) ||
            isNaN(timePeriodNum)
        ) {
            alert("Please fill all fields with valid numbers.");
            return;
        }

        // Calculate total loan amount
        const loanTimeInMonths = timePeriodNum * 12;
        const loanAmount = emiNum * loanTimeInMonths;

        // Calculate total car price
        const totalCarPrice = loanAmount + downpaymentNum + resaleNum;

        setCarPrice(totalCarPrice.toFixed(2));
    };

    return (
        <div className="lg:p-6 p-4 space-y-4 grid lg:grid-cols-3">
            <div className="border-2 rounded-md p-4 space-y-4">
                <div className="text-lg text-center">Car EMI</div>
                <form className="text-sm space-y-4" onSubmit={handleSubmit}>
                    <div className="space-y-2">
                        <div>Maximum Monthly Car EMI (₹)</div>
                        <input
                            type="text"
                            placeholder="Enter monthly EMI"
                            className="py-2 focus:outline-lightOrange border-2 rounded-md px-2 block w-full"
                            value={formData.emi}
                            onChange={(e) => handleInputChange(e, "emi")}
                        />
                    </div>
                    <div className="space-y-2">
                        <div>Downpayment (₹)</div>
                        <input
                            type="text"
                            placeholder="Enter downpayment"
                            className="py-2 focus:outline-lightOrange border-2 rounded-md px-2 block w-full"
                            value={formData.downpayment}
                            onChange={(e) => handleInputChange(e, "downpayment")}
                        />
                    </div>
                    <div className="space-y-2">
                        <div>Resale of current Car (₹)</div>
                        <input
                            type="text"
                            placeholder="Enter amount you expect resale"
                            className="py-2 focus:outline-lightOrange border-2 rounded-md px-2 block w-full"
                            value={formData.resale}
                            onChange={(e) => handleInputChange(e, "resale")}
                        />
                    </div>
                    <div className="space-y-2">
                        <div>Car Loan Intrest Rate (%)</div>
                        <input
                            type="text"
                            placeholder="Enter you intrest rate"
                            className="py-2 focus:outline-lightOrange border-2 rounded-md px-2 block w-full"
                            value={formData.interestRate}
                            onChange={(e) => handleInputChange(e, "interestRate")}
                        />
                    </div>
                    <div className="space-y-2">
                        <div>Loan Time Period (Years)</div>
                        <input
                            type="text"
                            placeholder="Enter you loan time period"
                            className="py-2 focus:outline-lightOrange border-2 rounded-md px-2 block w-full"
                            value={formData.timePeriod}
                            onChange={(e) => handleInputChange(e, "timePeriod")}
                        />
                    </div>
                    <button
                        type="submit"
                        className="py-2 bg-lightOrange text-whiteColor block w-full rounded-md"
                    >
                        Submit
                    </button>
                </form>

                <div className="space-y-4">
                    <div>
                        <div>Maximum Monthly Car EMI <span className="font-semibold">₹ {formData.emi || "--"}</span></div>
                        <div>Car Downpayment <span className="font-semibold">₹ {formData.downpayment || "--"}</span></div>
                        <div>Resale of current Car <span className="font-semibold">₹ {formData.resale || "--"}</span></div>
                        <div>Car Loan Intrest Rate <span className="font-semibold">% {formData.interestRate || "--"}</span></div>
                        <div>Loan Time Period <span className="font-semibold">{formData.timePeriod || "--"}</span> Years</div>
                    </div>

                    {carPrice && (
                        <div className="text-center">
                            You can afford a Car Worth <span className="font-semibold">₹ {carPrice}</span> today
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
