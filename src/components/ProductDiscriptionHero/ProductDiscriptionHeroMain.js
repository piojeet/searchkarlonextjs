import HeroSelectCar from "./HeroSelectCar";
import ProductDiscriptionScore from "./ProductDiscriptionScore";

export default function ProductDiscriptionHeroMain() {
  return (
    <div className="grid lg:grid-cols-[350px_1fr] gap-4">
        <HeroSelectCar />
        <ProductDiscriptionScore />
    </div>
  )
}

