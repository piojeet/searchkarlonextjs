import ComfortAndConvenience from "./Comfort&Convenience";
import Instrumentation from "./Instrumentation";
import Lights from "./Lights";
import SafetyAndSecurity from "./Safety&Security";

export default function FeaturesMain() {
    return (
        <>
            <div className="lg:p-6 p-4 overflow-hidden">
                {/* <div className="overflow-auto"> */}
                <SafetyAndSecurity />
                <ComfortAndConvenience />
                <Lights />
                <Instrumentation />
                {/* </div> */}
            </div>
        </>
    )
}