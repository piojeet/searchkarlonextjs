import BookTestDrive from "@/components/BookTestDriveRightTyre/BookTestDrive";
import ComparePriceandFeatures from "@/components/ComparePriceandFeatures/ComparePriceandFeatures";
import FeaturesMain from "@/components/Features/FeaturesMain";
import FindCarbyBrand from "@/components/FindCarbyBrand/FindCarbyBrand";
import Review from "@/components/Review/Review";
// import Footer from "@/components/Footer/Footer";
// import NavTop from "@/components/Navbar/NavbarTop";
// import NavBottom from "@/components/Navbar/NavBottom";
// import NavMiddle from "@/components/Navbar/NavMiddle";
import SelectbyPrice from "@/components/SelectPriceAndSelectFuel/SelectbyPrice";
import SpecificationsMain from "@/components/Specifications/SpecificationsMain";

export default function ProductDiscriptionHome() {
    return (
        <>
        {/* <NavTop />
        <NavMiddle />
        <NavBottom /> */}
        <SpecificationsMain />
        <FeaturesMain />
        <ComparePriceandFeatures />
        <BookTestDrive />
        <SelectbyPrice />
        <FindCarbyBrand />
        <Review />
        {/* <Footer /> */}
        </>
    )
}