// import BestAppliancesList from "@/components/BestAppliancesList/BestAppliancesList";
// import BestCashback from "@/components/BestCashbackOffers/BestCashback";
import CarForTco from "@/components/CarForTco/CarForTco";
import CarValidation from "@/components/CarValidation/CarValidation";
import AskExpertis from "@/components/ExpertisQ&A/AskExpertis";
import Footer from "@/components/Footer/Footer";
import GenralTools from "@/components/GenralTools/GenralTools";
import Insight from "@/components/Insight/Insight";
import NavTop from "@/components/Navbar/NavbarTop";
import NavBottom from "@/components/Navbar/NavBottom";
import NavMiddle from "@/components/Navbar/NavMiddle";
import LatestNews from "@/components/News/LatestNews";
import PopularPriceList from "@/components/PopularPriceList/PopularPriceList";

export default function CarHome() {
  return (
    <div>
        <NavTop />
        <NavMiddle />
        <NavBottom />
        <LatestNews />
        {/* <BestCashback /> */}
        {/* <BestAppliancesList /> */}
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