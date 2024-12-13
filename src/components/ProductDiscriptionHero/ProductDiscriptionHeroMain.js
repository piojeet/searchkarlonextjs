import CarSpecsNadFeatures from "./CarSpecsAndFeatures";
import CarVariant from "./CarVariant";
import HeroSelectCar from "./HeroSelectCar";
import ProductDiscriptionScore from "./ProductDiscriptionScore";
import TabBtn from "./TabBtn";

export default function ProductDiscriptionHeroMain() {
  return (
    <>
    <div className="grid xl:grid-cols-[350px_1fr] sm:gap-4">
        <HeroSelectCar />
        <ProductDiscriptionScore />
    </div>
    <TabBtn />
    <CarVariant />
    <CarSpecsNadFeatures />
    </>
  )
}

