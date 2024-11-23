"use client"

export default function EMICalculate() {

    const dataCalculate =[
        ["Maruti", "Demo1", "Demo2", "Demo"],
        ["Baleno", "Demo1", "Demo2", "Demo"],
        ["Sigma Regal Edition (Petrol) 8.17 Lakh", "Demo1", "Demo2", "Demo"],
    ]

    return (
        <div>
            <div className="space-y-2 mb-4">
      <h2>Calculate your Loan EMI for Baleno</h2>
      {dataCalculate.map((item, index) => (
        <div key={index}>
          {/* Label for each select */}
          <select id={`dropdown-${index}`} className="w-full px-4 py-2 border-2 rounded-md text-sm outline-none">
            {item.map((value, subIndex) => (
              <option key={value} value={value}>
                {value}
              </option>
            ))}
          </select>
        </div>
      ))}
    </div>
        </div>
    )
}