import BookTestDrive from "@/components/BookTestDriveRightTyre/BookTestDrive";
import ComparePriceandFeatures from "@/components/ComparePriceandFeatures/ComparePriceandFeatures";
import FeaturesMain from "@/components/Features/FeaturesMain";
import FindCarbyBrand from "@/components/FindCarbyBrand/FindCarbyBrand";
import ProductDiscriptionHeroMain from "@/components/ProductDiscriptionHero/ProductDiscriptionHeroMain";
import ProductionList from "@/components/ProductDiscriptionHero/ProductionList";
import Review from "@/components/Review/Review";
import RoadPriceVideosMain from "@/components/RoadPriceVideos/RoadPriceVideosMain";
// import Footer from "@/components/Footer/Footer";
// import NavTop from "@/components/Navbar/NavbarTop";
// import NavBottom from "@/components/Navbar/NavBottom";
// import NavMiddle from "@/components/Navbar/NavMiddle";
import SelectbyPrice from "@/components/SelectPriceAndSelectFuel/SelectbyPrice";
import SpecificationsMain from "@/components/Specifications/SpecificationsMain";
import UsedCarComparisonMain from "@/components/UsedCarComparison/UsedCarComparisonMain";

export default function ProductDiscriptionHome() {
    return (
        <>
        {/* <NavTop />
        <NavMiddle />
        <NavBottom /> */}
        <ProductionList />
        <ProductDiscriptionHeroMain />
        <RoadPriceVideosMain />
        <SpecificationsMain />
        <FeaturesMain />
        <ComparePriceandFeatures />
        <BookTestDrive />
        <SelectbyPrice />
        <FindCarbyBrand />
        <UsedCarComparisonMain />
        <Review />
        {/* <Footer /> */}
        </>
    )
}