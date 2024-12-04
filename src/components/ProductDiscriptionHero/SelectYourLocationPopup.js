"use client";

import Image from "next/image";
import America from "../../../public/buildings.png";
import { LocateFixed, Pencil, Search } from "lucide-react";
import { useAuthContext } from "@/context/AuthContext";

export default function SelectYourLocationPopup() {

  const { handleCurrentLocation,
    dropdownOpen,
    setDropdownOpen,
    selectedCity,
    setSearchTerm,
    dropdownRef,
    filteredCities,
    searchTerm,
    setSelectedCity } = useAuthContext();

  const popularCities = [
    { name: "Mumbai", image: America },
    { name: "Delhi", image: America },
    { name: "Bhopal", image: America },
    { name: "Bangalore", image: America },
  ];




  return (
    <div>
      <div className="relative" ref={dropdownRef}>
        {/* Trigger Button */}
        <button
          className="flex items-center lg:gap-2 gap-1 text-[#2F88FF] lg:text-sm text-xs"
        >
          <span>{selectedCity}</span>
          <span
            onClick={() => setDropdownOpen(!dropdownOpen)}
            className="text-[#2F88FF]"
          >
            <Pencil size={15} />
          </span>
        </button>

        {/* Dropdown */}
        {dropdownOpen && (
          <div className="absolute top-8 -right-1/2 lg:left-0 bg-white border rounded shadow-lg w-64 z-50">
            {/* Search Bar */}
            <div className="p-2 border-b">
              <div className="border rounded flex items-center pl-2">
                <Search size={18} />
                <input
                  type="text"
                  placeholder="Search City"
                  className="w-full p-2 outline-none"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>

            {/* Current Location */}
            <div
              className="p-2 cursor-pointer bg-gray-200 flex items-center gap-2 text-[#2F88FF] text-sm"
              onClick={handleCurrentLocation}
            >
              <LocateFixed size={16} /> Use Current Location
            </div>

            {/* Popular Cities */}
            {!searchTerm && (
              <div className="p-2">
                <h4 className="text-sm font-bold mb-2">Popular Cities</h4>
                <div className="flex gap-3 py-2">
                  {popularCities.map((city, index) => (
                    <div
                      key={index}
                      className="flex flex-col items-center cursor-pointer"
                      onClick={() => {
                        setSelectedCity(city.name);
                        setDropdownOpen(false); // Close dropdown after selection
                      }}
                    >
                      <Image
                        src={city.image}
                        alt={city.name}
                        className="w-8 h-8"
                      />
                      <span className="text-xs mt-1">{city.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Filtered Cities */}
            <div className="p-2">
              <h4 className="text-sm font-bold mb-2">
                {searchTerm ? "Matching Cities" : "All Cities"}
              </h4>
              <ul className="max-h-40 overflow-y-auto">
                {filteredCities.length > 0 ? (
                  filteredCities.map((city, index) => (
                    <li
                      key={index}
                      className="p-2 hover:bg-gray-100 cursor-pointer text-sm border-b"
                      onClick={() => {
                        setSelectedCity(city);
                        setDropdownOpen(false); // Close dropdown after selection
                        setSearchTerm(""); // Clear search term
                      }}
                    >
                      {city}
                    </li>
                  ))
                ) : (
                  <li className="p-2 text-gray-500">No matching cities</li>
                )}
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
