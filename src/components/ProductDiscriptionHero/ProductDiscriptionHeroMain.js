import HeroSelectCar from "./HeroSelectCar";
import ProductDiscriptionScore from "./ProductDiscriptionScore";

export default function ProductDiscriptionHeroMain() {
  return (
    <div className="grid xl:grid-cols-[350px_1fr] sm:gap-4">
        <HeroSelectCar />
        <ProductDiscriptionScore />
    </div>
  )
}

