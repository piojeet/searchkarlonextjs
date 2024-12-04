import { useAuthContext } from "@/context/AuthContext";
import EMITabBtns from "./EMITabBtns";
import CarEMIForm from "./CarEMIForm";
import CarForTco from "../CarForTco/CarForTco";
import SchedulerEMIDate from "./SchedulerEMIDate";
import Dashboard from "./EMIGraph";
import CarLoanAmountCalculator from "./CarLoanAmountCalculator";
export default function EMICalCulateMAin() {

    const { tcoCalculatorAffordabilityActiveTab } = useAuthContext();

    return (
        <>
            <EMITabBtns />
            {tcoCalculatorAffordabilityActiveTab === "emi-calculator" && (
                <div className="w-full lg:p-6 p-4 grid lg:grid-cols-3 gap-4">
                    <CarLoanAmountCalculator />
                    <Dashboard />
                    <SchedulerEMIDate />
                </div>
            )}

            {tcoCalculatorAffordabilityActiveTab === "card-affordability" && (
                <div className="lg:hidden">
                    <CarEMIForm />
                </div>
            )}

            <div className="lg:block hidden">
                <CarEMIForm />
            </div>

            {tcoCalculatorAffordabilityActiveTab === 'car-tco' && (
                <div className="lg:hidden">
                    <CarForTco />
                </div>
            )}
        </>
    )
}
