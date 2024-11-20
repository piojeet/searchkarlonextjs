"use client";

import { useState, useEffect, useRef } from "react";

const LoanTimePeriod = ({
  minMonth = 1,
  maxMonth = 12,
  minYear = 1,
  maxYear = 10,
  defaultValue = 6,
  step = 1,
  onChange = () => {},
}) => {
  const [value, setValue] = useState(defaultValue);
  const [inputValue, setInputValue] = useState(defaultValue); // Temporary input value
  const [isYearMode, setIsYearMode] = useState(true); // Toggle between year and month
  const [isDragging, setIsDragging] = useState(false);
  const sliderRef = useRef(null);

  // Calculate percentage based on mode
  const percentage = isYearMode
    ? ((value - minYear) / (maxYear - minYear)) * 100
    : ((value - minMonth) / (maxMonth - minMonth)) * 100;

  const handleMove = (event) => {
    if (!isDragging) return;

    const rect = sliderRef.current.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const percentage = Math.min(Math.max(x / rect.width, 0), 1);

    const newValue = isYearMode
      ? Math.round((percentage * (maxYear - minYear) + minYear) / step) * step
      : Math.round((percentage * (maxMonth - minMonth) + minMonth) / step) * step;

    setValue(newValue);
    setInputValue(newValue);
    onChange(newValue);
  };

  const handleMouseDown = () => setIsDragging(true);
  const handleMouseUp = () => setIsDragging(false);

  useEffect(() => {
    document.addEventListener("mousemove", handleMove);
    document.addEventListener("mouseup", handleMouseUp);

    return () => {
      document.removeEventListener("mousemove", handleMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isDragging, isYearMode]);

  // Handle manual input change
  const handleInputChange = (e) => {
    const inputValue = e.target.value;
    setInputValue(inputValue); // Allow free text input temporarily
  };

  const handleInputBlur = () => {
    const parsedValue = parseInt(inputValue, 10);

    if (isYearMode) {
      if (parsedValue >= minYear && parsedValue <= maxYear) {
        setValue(parsedValue);
        onChange(parsedValue);
      } else {
        setInputValue(value); // Revert to valid value
      }
    } else {
      if (parsedValue >= minMonth && parsedValue <= maxMonth) {
        setValue(parsedValue);
        onChange(parsedValue);
      } else {
        setInputValue(value); // Revert to valid value
      }
    }
  };

  return (
    <div className="w-full max-w-md select-none">
      <div className="text-sm flex items-center justify-between pb-4">
        <div>Loan Tenure</div>
        <div className="flex items-center gap-2">
          <input
            type="number"
            value={inputValue}
            onChange={handleInputChange}
            onBlur={handleInputBlur} // Validate on blur
            className="outline-none border-b-2 border-gray-400 bg-transparent w-10 text-center"
          />
          <div className="flex items-center gap-1 border-2 py-1 px-2 rounded-md">
            <label
              className={`px-2 py-1 rounded ${
                isYearMode ? "bg-lightOrange text-white" : "bg-transparent"
              }`}
            >
              <input
                type="radio"
                name="mode"
                checked={isYearMode}
                onChange={() => setIsYearMode(true)}
                className="mr-1 hidden"
              />
              Yr
            </label>
            <label
              className={`px-2 py-1 rounded ${
                !isYearMode ? "bg-lightOrange text-white" : "bg-transparent"
              }`}
            >
              <input
                type="radio"
                name="mode"
                checked={!isYearMode}
                onChange={() => setIsYearMode(false)}
                className="mr-1 hidden"
              />
              Mo
            </label>
          </div>
        </div>
      </div>

      <div className="relative">
        {/* Slider Track */}
        <div
          ref={sliderRef}
          className="w-full h-1.5 bg-gray-400 rounded-full cursor-pointer"
          onClick={(e) => {
            const rect = sliderRef.current.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const percentage = Math.min(Math.max(x / rect.width, 0), 1);

            const newValue = isYearMode
              ? Math.round((percentage * (maxYear - minYear) + minYear) / step) * step
              : Math.round((percentage * (maxMonth - minMonth) + minMonth) / step) * step;

            setValue(newValue);
            setInputValue(newValue);
            onChange(newValue);
          }}
        >
          {/* Filled track */}
          <div
            className="absolute h-1.5 bg-lightOrange rounded-full transition-all duration-150"
            style={{ width: `${percentage}%` }}
          />

          {/* Slider Thumb */}
          <div
            className={`absolute w-5 h-5 bg-white border-2 border-lightOrange rounded-full -mt-2 transform -translate-x-1/2 cursor-grab transition-shadow duration-150 hover:shadow-lg ${
              isDragging ? "cursor-grabbing shadow-lg scale-110" : ""
            }`}
            style={{ left: `${percentage}%` }}
            onMouseDown={handleMouseDown}
          />
        </div>
      </div>

      <div className="text-sm flex items-center justify-between pt-2">
        <div>{isYearMode ? `Min: ${minYear} Yr` : `Min: ${minMonth} Mo`}</div>
        <div>{isYearMode ? `Max: ${maxYear} Yr` : `Max: ${maxMonth} Mo`}</div>
      </div>
    </div>
  );
};

export default LoanTimePeriod;
