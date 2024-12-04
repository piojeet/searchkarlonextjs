// AuthContext.js
'use client';

import React, { createContext, useContext, useEffect, useRef, useState } from 'react';

const AuthContext = createContext();

export function AuthProvider({ children }) {

    const [open, setOpen] = useState(false);

    const handleOpenMenu = () => {
        setOpen(true);
    };
    
    const handleCloseMenu = () => {
        setOpen(false);
    };

    const [priceFuelActiveTab, setPriceFuelActiveTab] = useState('select-price');

    
    const [tcoCalculatorAffordabilityActiveTab, setTcoCalculatorAffordabilityActiveTab] = useState('emi-calculator');
    

    const scrollToDiv = (id) => {
        const target = document.getElementById(id);
        if (target) {
          target.scrollIntoView({ behavior: "smooth" });
        }
      };

// select city 
const [dropdownOpen, setDropdownOpen] = useState(false);
const [selectedCity, setSelectedCity] = useState("New Delhi");
const [searchTerm, setSearchTerm] = useState("");

const dropdownRef = useRef(null);

const allCities = [
    "Mumbai",
    "Delhi",
    "Bangalore",
    "Kolkata",
    "Chennai",
    "Hyderabad",
    "Bhopal",
    "Rajasthan",
  ];

      const handleCurrentLocation = () => {
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(async (position) => {
            const { latitude, longitude } = position.coords;
    
            try {
              // Use a reverse geocoding API to get the city name
              const response = await fetch(
                `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en`
              );
              const data = await response.json();
    
              if (data.city) {
                setSelectedCity(data.city);
              } else {
                setSelectedCity("Location not found");
              }
            } catch (error) {
              console.error("Error fetching location:", error);
              setSelectedCity("Error fetching location");
            }
    
            setDropdownOpen(false); // Close dropdown after selection
          });
        } else {
          alert("Geolocation is not supported by your browser.");
        }
      };
    
      const filteredCities = searchTerm
        ? allCities.filter((city) =>
            city.toLowerCase().includes(searchTerm.toLowerCase())
          )
        : allCities;
    
      // Close dropdown when clicking outside
      useEffect(() => {
        const handleClickOutside = (event) => {
          if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            setDropdownOpen(false);
          }
        };
    
        document.addEventListener("mousedown", handleClickOutside);
    
        return () => {
          document.removeEventListener("mousedown", handleClickOutside);
        };
      }, []);
    

    return (
        <AuthContext.Provider 
        value={{ 
            open, 
            setOpen,
            handleCloseMenu, 
            handleOpenMenu,
            priceFuelActiveTab,
            setPriceFuelActiveTab,
            tcoCalculatorAffordabilityActiveTab,
            setTcoCalculatorAffordabilityActiveTab,
            scrollToDiv,
            handleCurrentLocation,
            dropdownOpen,
            setDropdownOpen,
            selectedCity,
            setSearchTerm,
            filteredCities,
            searchTerm ,
            setSelectedCity,
            dropdownRef // Added for search functionality
            }}>
            {children}
        </AuthContext.Provider>
    );
}

export const useAuthContext = () => useContext(AuthContext);
