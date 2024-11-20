"use client"

import { useState, useEffect, useRef } from 'react';
import InterestRateCalculator from './InterestRateCalculator';
import LoanTimePeriod from './LoanTimePeriod';
import Dashboard from './EMIGraph';
import EMICalculate from './EMICalculate';
import SchedulerEMIDate from './SchedulerEMIDate';

const CarLoanAmountCalculator = ({
  min = 100000,
  max = 3500000,
  defaultValue = 350000,
  step = 50000,
  onChange = () => {},
}) => {
  const [value, setValue] = useState(defaultValue);
  const [isDragging, setIsDragging] = useState(false);
  const sliderRef = useRef(null);
  
  const percentage = ((value - min) / (max - min)) * 100;
  
  const handleMove = (event) => {
    if (!isDragging) return;
    
    const rect = sliderRef.current.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const percentage = Math.min(Math.max(x / rect.width, 0), 1);
    const newValue = Math.round((percentage * (max - min) + min) / step) * step;
    
    setValue(newValue);
    onChange(newValue);
  };
  
  const handleMouseDown = () => {
    setIsDragging(true);
  };
  
  const handleMouseUp = () => {
    setIsDragging(false);
  };
  
  useEffect(() => {
    document.addEventListener('mousemove', handleMove);
    document.addEventListener('mouseup', handleMouseUp);
    
    return () => {
      document.removeEventListener('mousemove', handleMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging]);

  return (
    <div className="w-full lg:p-6 p-4 grid lg:grid-cols-3 gap-4">
     <div className='border-2 p-4 rounded-md'>
      <EMICalculate />
     <div className='text-sm flex items-center justify-between pb-4'>
            <div>Car Loan Amount</div>
            <div className='py-1 px-2 border-2 rounded-md font-semibold'>₹ <span>{value}</span></div>
        </div>
      <div className="relative">
        {/* Track background */}
        <div
          ref={sliderRef}
          className="w-full h-1.5 bg-gray-400 rounded-full cursor-pointer"
          onClick={(e) => {
            const rect = sliderRef.current.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const percentage = x / rect.width;
            const newValue = Math.round((percentage * (max - min) + min) / step) * step;
            setValue(newValue);
            onChange(newValue);
          }}
        >
          {/* Filled track */}
          <div
            className="absolute h-1.5 bg-lightOrange rounded-full transition-all duration-150"
            style={{ width: `${percentage}%` }}
          />
          
          {/* Thumb */}
          <div
            className={`absolute w-5 h-5 bg-white border-2 border-lightOrange rounded-full -mt-2 transform -translate-x-1/2 cursor-grab transition-shadow duration-150 hover:shadow-lg ${
              isDragging ? 'cursor-grabbing shadow-lg scale-110' : ''
            }`}
            style={{ left: `${percentage}%` }}
            onMouseDown={handleMouseDown}
          />
        </div>
        

      </div>

      <div className='text-sm flex items-center justify-between pt-2'>
        <div>Min: 1,00,000</div>
        <div>Max: 35,00,000</div>
      </div>
      <InterestRateCalculator />
      <LoanTimePeriod />
     </div>

      <Dashboard />
      <SchedulerEMIDate />
    </div>
  );
};

export default CarLoanAmountCalculator;