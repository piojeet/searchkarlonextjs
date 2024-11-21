"use client";

import { useState, useEffect, useRef } from "react";

const LoanTimePeriod = ({
  minMonth = 1,
  maxMonth = 12,
  minYear = 1,
  maxYear = 10,
  defaultMonthValue = 6,
  defaultYearValue = 2,
  step = 1,
  onChange = () => {},
}) => {
  const [yearValue, setYearValue] = useState(defaultYearValue); // Year-specific value
  const [monthValue, setMonthValue] = useState(defaultMonthValue); // Month-specific value
  const [inputValue, setInputValue] = useState(defaultYearValue); // Displayed input value
  const [isYearMode, setIsYearMode] = useState(true); // Toggle between year and month
  const [isDragging, setIsDragging] = useState(false);
  const sliderRef = useRef(null);

  // Calculate percentage for the slider
  const percentage = isYearMode
    ? ((yearValue - minYear) / (maxYear - minYear)) * 100
    : ((monthValue - minMonth) / (maxMonth - minMonth)) * 100;

  const calculateNewValue = (clientX) => {
    const rect = sliderRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const sliderPercentage = Math.min(Math.max(x / rect.width, 0), 1);

    return isYearMode
      ? Math.round((sliderPercentage * (maxYear - minYear) + minYear) / step) * step
      : Math.round((sliderPercentage * (maxMonth - minMonth) + minMonth) / step) * step;
  };

  const handleMove = (event) => {
    if (!isDragging) return;

    const clientX = event.type === "mousemove" ? event.clientX : event.touches[0].clientX;
    const newValue = calculateNewValue(clientX);

    if (isYearMode) {
      setYearValue(newValue);
      setInputValue(newValue);
      onChange(newValue);
    } else {
      setMonthValue(newValue);
      setInputValue(newValue);
      onChange(newValue);
    }
  };

  const handleMouseDown = () => setIsDragging(true);
  const handleTouchStart = () => setIsDragging(true);
  const handleEnd = () => setIsDragging(false);

  useEffect(() => {
    const moveEvent = isDragging ? ["mousemove", "touchmove"] : [];
    const endEvent = isDragging ? ["mouseup", "touchend"] : [];

    moveEvent.forEach((event) => document.addEventListener(event, handleMove));
    endEvent.forEach((event) => document.addEventListener(event, handleEnd));

    return () => {
      moveEvent.forEach((event) => document.removeEventListener(event, handleMove));
      endEvent.forEach((event) => document.removeEventListener(event, handleEnd));
    };
  }, [isDragging]);

  // Switch inputValue based on mode
  useEffect(() => {
    setInputValue(isYearMode ? yearValue : monthValue);
  }, [isYearMode, yearValue, monthValue]);

  const handleInputChange = (e) => {
    const inputValue = e.target.value;
    setInputValue(inputValue); // Allow free text input temporarily
  };

  const handleInputKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleInputBlur();
    }
  };

  const handleInputBlur = () => {
    const parsedValue = parseInt(inputValue, 10);

    if (isYearMode) {
      if (parsedValue >= minYear && parsedValue <= maxYear) {
        setYearValue(parsedValue);
        onChange(parsedValue);
      } else {
        setInputValue(yearValue); // Revert to valid year value
      }
    } else {
      if (parsedValue >= minMonth && parsedValue <= maxMonth) {
        setMonthValue(parsedValue);
        onChange(parsedValue);
      } else {
        setInputValue(monthValue); // Revert to valid month value
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
            onKeyDown={handleInputKeyDown}
            onBlur={handleInputBlur}
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
        <div
          ref={sliderRef}
          className="w-full h-1.5 bg-gray-400 rounded-full cursor-pointer"
          onClick={(e) => {
            const newValue = calculateNewValue(e.clientX);
            if (isYearMode) {
              setYearValue(newValue);
              setInputValue(newValue);
              onChange(newValue);
            } else {
              setMonthValue(newValue);
              setInputValue(newValue);
              onChange(newValue);
            }
          }}
        >
          <div
            className="absolute h-1.5 bg-lightOrange rounded-full transition-all duration-150"
            style={{ width: `${percentage}%` }}
          />
          <div
            className={`absolute w-5 h-5 bg-white border-2 border-lightOrange rounded-full -mt-2 transform -translate-x-1/2 cursor-grab transition-shadow duration-150 hover:shadow-lg ${
              isDragging ? "cursor-grabbing shadow-lg scale-110" : ""
            }`}
            style={{ left: `${percentage}%` }}
            onMouseDown={handleMouseDown}
            onTouchStart={handleTouchStart}
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
