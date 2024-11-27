import SelectCarPrice from "./SelectCarPrice";
import UsedCars from "./UsedCars";


export default function UsedCarComparisonMain() {
    return (
        <>
        <div className="grid lg:grid-cols-[30vw_1fr] gap-4 lg:p-6 p-4">
            
<UsedCars />
<SelectCarPrice />
        </div>
        </>
    )
}