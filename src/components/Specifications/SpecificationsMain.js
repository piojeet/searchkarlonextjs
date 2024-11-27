import Brake from "./Brake";
import Capacity from "./Capacity";
import DimensionAndWeight from "./DimensionAndWight";
import Engine from "./Engine";
import FuelEfficiency from "./FuelEfficiency";
import Steering from "./Steering";
import Suspension from "./Suspension";
import Transmission from "./Transmission";
import WheelTyre from "./Wheel&Tyre";

export default function SpecificationsMain() {
    return (
        <div className="lg:p-6 p-4 overflow-hidden">
            <div>
            <DimensionAndWeight />
            <Engine />
            <Transmission />
            <WheelTyre />
            <Brake />
            <Suspension />
            <FuelEfficiency />
            <Steering />
            <Capacity />
            </div>
        </div>
    )
}