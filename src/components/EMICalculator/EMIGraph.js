"use client";

// components/Charts.js
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from "chart.js";
import { Pie } from "react-chartjs-2";

// Register ChartJS components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
);

// Pie Chart Component
export const PieChart = () => {
  // Loan Details
  const principalAmount = 500000; // Principal Amount
  const interestAmount = 165132; // Interest Amount

  // Data for Pie Chart
  const data = {
    datasets: [
      {
        data: [principalAmount, interestAmount], // Loan breakdown
        backgroundColor: [
          "rgb(165, 208, 242)", // Principal Amount
          "rgb(70, 129, 185)", // Interest Amount
        ],
      },
    ],
    labels: ["Principal Amount", "Interest Amount"], // Labels for segments
  };

  // Options for Pie Chart
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "bottom", // Legend position
        labels: {
          usePointStyle: true,
          boxWidth: 10,
          boxHeight: 10,
      }
      },
      tooltip: {
        displayColors: false, // Disable color box next to tooltip text
        callbacks: {
          // Customize tooltip text
          label: function (context) {
            const label = context.label || ""; // Segment label
            const value = context.raw || 0; // Segment value (amount)

            // Tooltip text
            return `${label}: ₹${value.toLocaleString()}`; // Format with commas
          },
        },
      },
    },
  };

  return <Pie data={data} options={options} />;
};

// Example usage in a page:
// pages/dashboard.js
const Dashboard = () => {
  return (
    <div className="p-4 border-2 rounded-md">
      <div className="">
        {/* Pie Chart */}
        <div className="p-4 bg-white rounded-lg md:max-w-80 max-w-64 w-full mx-auto">
          <PieChart />
        </div>

        <div className="flex items-center justify-between py-2 px-4">
          <div>Monthly EMI:</div>
          <div className="font-semibold">₹ 7,918</div>
        </div>

        <div className="flex items-center justify-between py-2 px-4">
          <div>Principal amount:</div>
          <div className="font-semibold">₹ 5,00,000</div>
        </div>

        <div className="flex items-center justify-between py-2 px-4">
          <div>Total Interest:</div>
          <div className="font-semibold">1,65,132</div>
        </div>

        <div className="flex items-center justify-between py-2 border-2 rounded-md px-4">
          <div>Total amount</div>
          <div className="font-semibold">₹ 6,65,132</div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
