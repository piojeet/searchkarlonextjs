import RoadPriceForm from "./RoadPriceForm";
import RoadPriceLink from "./RoadPriceLink";
import RoadVideo from "./RoadVideo";

export default function RoadPriceVideosMain() {
  return (
    <div>
        <RoadPriceLink />
        <div className="grid lg:grid-cols-[1fr_450px] lg:gap-8 lg:p-6 p-4">
            <RoadVideo />
            <RoadPriceForm />
        </div>
    </div>
  )
}

