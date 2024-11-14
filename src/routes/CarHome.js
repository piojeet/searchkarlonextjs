// import BestAppliancesList from "@/components/BestAppliancesList/BestAppliancesList";
// import BestCashback from "@/components/BestCashbackOffers/BestCashback";
import CarForTco from "@/components/CarForTco/CarForTco";
import CarValidation from "@/components/CarValidation/CarValidation";
import AskExpertis from "@/components/ExpertisQ&A/AskExpertis";
import FindCarbyBrand from "@/components/FindCarbyBrand/FindCarbyBrand";
import Footer from "@/components/Footer/Footer";
import FindFuelEfficiency from "@/components/FuelEfficiency/FindFuelEfficiency";
import GenralTools from "@/components/GenralTools/GenralTools";
import Insight from "@/components/Insight/Insight";
import NavTop from "@/components/Navbar/NavbarTop";
import NavBottom from "@/components/Navbar/NavBottom";
import NavMiddle from "@/components/Navbar/NavMiddle";
import LatestNews from "@/components/News/LatestNews";
import PopularPriceList from "@/components/PopularPriceList/PopularPriceList";
import SearchDealers from "@/components/SearchDealersbyCity&Brand/SearchDealers";
import SelectbyPrice from "@/components/SelectPriceAndSelectFuel/SelectbyPrice";

export default function CarHome() {
  return (
    <div>
        <NavTop />
        <NavMiddle />
        <NavBottom />
        <LatestNews />
        {/* <BestCashback /> */}
        {/* <BestAppliancesList /> */}
        <SelectbyPrice />
        <FindCarbyBrand />
        <SearchDealers />
        <FindFuelEfficiency />
        <CarForTco />
        <GenralTools />
        <CarValidation />
        <Insight />
        <AskExpertis />
        <PopularPriceList />
        <Footer />
    </div>
  )
}