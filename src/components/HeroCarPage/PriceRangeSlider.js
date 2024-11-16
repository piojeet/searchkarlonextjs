"use client"

import { useCallback, useEffect, useRef, useState } from "react";

const PriceRangeSlider = ({
	min,
	max,
	onChange,
	externalMinVal,
	externalMaxVal,
}) => {
	const [minVal, setMinVal] = useState(min || externalMinVal);
	const [maxVal, setMaxVal] = useState(max || externalMaxVal);
	const minValRef = useRef(min || externalMinVal);
	const maxValRef = useRef(max || externalMaxVal);
	const range = useRef(null);

	// Convert to percentage
	const getPercent = useCallback(
		(value) => Math.round(((value - min) / (max - min)) * 100),
		[min, max],
	);

	// Set width of the range to decrease from the left side
	useEffect(() => {
		const minPercent = getPercent(minVal);
		const maxPercent = getPercent(maxValRef.current);

		if (range.current) {
			range.current.style.left = `${minPercent}%`;
			range.current.style.width = `${maxPercent - minPercent}%`;
		}
	}, [minVal, getPercent]);

	// Set width of the range to decrease from the right side
	useEffect(() => {
		const minPercent = getPercent(minValRef.current);
		const maxPercent = getPercent(maxVal);

		if (range.current) {
			range.current.style.width = `${maxPercent - minPercent}%`;
		}
	}, [maxVal, getPercent]);

	// Get min and max values when their state changes
	useEffect(() => {
		onChange({ min: minVal, max: maxVal });
	}, [minVal, maxVal]);

	// Update local state when external values change
	useEffect(() => {
		if (externalMinVal !== undefined) {
			setMinVal(externalMinVal);
			minValRef.current = externalMinVal;
		}
		if (externalMaxVal !== undefined) {
			if (externalMaxVal <= externalMinVal) {
				maxValRef.current = 45000;
			} else {
				setMaxVal(externalMaxVal);
				maxValRef.current = externalMaxVal;
			}
		}
	}, [externalMinVal, externalMaxVal]);

	return (
		<div>
			<input
				type="range"
				min={min}
				max={max}
				value={minVal}
				onChange={(event) => {
					const value = Math.min(Number(event.target.value), maxVal);
					setMinVal(value);
					minValRef.current = value;
				}}
				className="thumb thumb--left"
				style={{ zIndex: minVal > max - 100 && "5" }}
			/>
			<input
				type="range"
				min={min}
				max={max}
				value={maxVal}
				onChange={(event) => {
					const value = Math.max(Number(event.target.value), minVal);
					setMaxVal(value);
					maxValRef.current = value;
				}}
				className="thumb thumb--right"
			/>

			<div className="slider">
				<div className="slider__track" />
				<div ref={range} className="slider__range" />
			</div>
		</div>
	);
};

export default PriceRangeSlider;
