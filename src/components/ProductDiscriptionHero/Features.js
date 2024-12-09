import { useAuthContext } from "@/context/AuthContext";
import { ChevronDown } from "lucide-react";

const Transmission = [
  { id: 1, name: "Engine Type", description: "2.2 Turbo With CRDi" },
  { id: 2, name: "Transmission", description: "Automatic (TC) - 6 Gears, Manual Override, Sport Mode" },
  { id: 3, name: "Transmission", description: "Automatic (TC) - 6 Gears, Manual Override, Sport Mode" },
  { id: 4, name: "Transmission", description: "Automatic (TC) - 6 Gears, Manual Override, Sport Mode" },
  { id: 5, name: "Transmission", description: "Automatic (TC) - 6 Gears, Manual Override, Sport Mode" },
  { id: 6, name: "Transmission", description: "Automatic (TC) - 6 Gears, Manual Override, Sport Mode" },
  { id: 7, name: "Transmission", description: "Automatic (TC) - 6 Gears, Manual Override, Sport Mode" },
];

const Suspensions = [
  { id: 1, name: "Suspension Type", description: "Independent Suspension" },
  { id: 2, name: "Brakes", description: "ABS with EBD" },
  { id: 3, name: "Steering", description: "Power Steering" },
  { id: 4, name: "Tyres", description: "All-Terrain Radials" },
  { id: 5, name: "Shock Absorbers", description: "Hydraulic Shock Absorbers" },
];
export default function Features() {
    const { activeAccordion, toggleAccordion } = useAuthContext();

    return (
        <div className="space-y-4 pt-4">
        {/* Accordion 1 */}
        <div className="border rounded-md">
          <div
            className="flex items-center justify-between cursor-pointer py-3 sm:text-sm text-xs px-4"
            onClick={() => toggleAccordion("accordionOne")}
          >
            Engine & Transmission <ChevronDown className={` ${activeAccordion.includes("accordionOne") ? "rotate-180" : ''}`} />
          </div>
          <div
            className={`overflow-hidden ${
              activeAccordion.includes("accordionOne") ? "max-h-screen" : "max-h-0"
            }`}
          >
            <div className="">
              <div className="grid lg:grid-cols-2 gap-x-4 even:bg-gray-100">
                {Transmission.map((transmission, index) => (
                  <div
                    key={transmission.id}
                    className={`flex justify-between p-4 gap-4 ${
                      index  === 0 || index === 1 || index === 4 || index === 5 ? "lg:bg-gray-100" : ""
                    } ${
                      index %2 === 0 ? "bg-gray-100" : ""
                    }`}
                  >
                    <div className="sm:text-sm text-xs">{transmission.name}</div>
                    <div className="font-semibold text-xs sm:text-base text-right">{transmission.description}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
  
        {/* Accordion 2 */}
        <div className="border rounded-md">
          <div
            className="flex items-center justify-between cursor-pointer py-2 sm:text-sm text-xs px-4"
            onClick={() => toggleAccordion("accordionTwo")}
          >
            Suspensions, Brakes, Steering & Tyres<ChevronDown className={` ${activeAccordion.includes("accordionTwo") ? "rotate-180" : ''}`} />
          </div>
          <div
            className={`overflow-hidden ${
              activeAccordion.includes("accordionTwo") ? "max-h-screen" : "max-h-0"
            }`}
          >
            <div>
              <div className="grid lg:grid-cols-2 gap-x-4">
                {Suspensions.map((suspension, index) => (
                  <div
                    key={suspension.id}
                    className={`flex justify-between p-4 gap-4 ${
                      index  === 0 || index === 1 || index === 4 || index === 5 ? "lg:bg-gray-100" : ""
                    } ${
                      index %2 === 0 ? "bg-gray-100" : ""
                    }`}
                  >
                    <div className="text-smsm:text-sm text-xs">{suspension.name}</div>
                    <div className="font-semibold text-xs sm:text-base text-right">{suspension.description}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
  
        {/* Accordion 2 */}
        <div className="border rounded-md">
          <div
            className="flex items-center justify-between cursor-pointer py-2 sm:text-sm text-xs px-4"
            onClick={() => toggleAccordion("accordionThree")}
          >
            Suspensions, Brakes, Steering & Tyres <ChevronDown className={` ${activeAccordion.includes("accordionThree") ? "rotate-180" : ''}`} />
          </div>
          <div
            className={`overflow-hidden ${
              activeAccordion.includes("accordionThree") ? "max-h-screen" : "max-h-0"
            }`}
          >
            <div>
              <div className="grid lg:grid-cols-2 gap-x-4">
                {Suspensions.map((suspension, index) => (
                  <div
                    key={suspension.id}
                    className={`flex justify-between p-4 gap-4 ${
                      index  === 0 || index === 1 || index === 4 || index === 5 ? "lg:bg-gray-100" : ""
                    } ${
                      index %2 === 0 ? "bg-gray-100" : ""
                    }`}
                  >
                    <div className="text-smsm:text-sm text-xs">{suspension.name}</div>
                    <div className="font-semibold text-xs sm:text-base text-right">{suspension.description}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
  
        {/* Accordion 2 */}
        <div className="border rounded-md">
          <div
            className="flex items-center justify-between cursor-pointer py-2 sm:text-sm text-xs px-4"
            onClick={() => toggleAccordion("accordionFour")}
          >
            Suspensions, Brakes, Steering & Tyres <ChevronDown className={` ${activeAccordion.includes("accordionFour") ? "rotate-180" : ''}`} />
          </div>
          <div
            className={`overflow-hidden ${
              activeAccordion.includes("accordionFour") ? "max-h-screen" : "max-h-0"
            }`}
          >
            <div>
              <div className="grid lg:grid-cols-2 gap-x-4">
                {Suspensions.map((suspension, index) => (
                  <div
                    key={suspension.id}
                    className={`flex justify-between p-4 gap-4 ${
                      index  === 0 || index === 1 || index === 4 || index === 5 ? "lg:bg-gray-100" : ""
                    } ${
                      index %2 === 0 ? "bg-gray-100" : ""
                    }`}
                  >
                    <div className="text-smsm:text-sm text-xs">{suspension.name}</div>
                    <div className="font-semibold text-xs sm:text-base text-right">{suspension.description}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>


        {/* Accordion 2 */}
        <div className="border rounded-md">
          <div
            className="flex items-center justify-between cursor-pointer py-2 sm:text-sm text-xs px-4"
            onClick={() => toggleAccordion("accordionFive")}
          >
            Suspensions, Brakes, Steering & Tyres <ChevronDown className={` ${activeAccordion.includes("accordionFive") ? "rotate-180" : ''}`} />
          </div>
          <div
            className={`overflow-hidden ${
              activeAccordion.includes("accordionFive") ? "max-h-screen" : "max-h-0"
            }`}
          >
            <div>
              <div className="grid lg:grid-cols-2 gap-x-4">
                {Suspensions.map((suspension, index) => (
                  <div
                    key={suspension.id}
                    className={`flex justify-between p-4 gap-4 ${
                      index  === 0 || index === 1 || index === 4 || index === 5 ? "lg:bg-gray-100" : ""
                    } ${
                      index %2 === 0 ? "bg-gray-100" : ""
                    }`}
                  >
                    <div className="text-smsm:text-sm text-xs">{suspension.name}</div>
                    <div className="font-semibold text-xs sm:text-base text-right">{suspension.description}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
  
  
      </div>
    );
}
