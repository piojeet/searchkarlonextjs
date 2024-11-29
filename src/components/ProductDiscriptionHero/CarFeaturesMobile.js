import Image from "next/image";
import Turbo from "../../../public/share/simple-icons_turbo.svg";
import Drive from "../../../public/share/Group.svg";
import Engine from "../../../public/share/mdi_engine.svg";
import Warranty from "../../../public/share/flat-color-icons_rating.svg";
import Fuel from "../../../public/share/Vector.svg";
import Cell from "../../../public/share/mdi_fuel-cell.svg";
import Petrol from "../../../public/carlist/Fuel Station.png";

export default function CarFeaturesMobile() {
  return (
    <div>
        <div className="flex justify-between p-2 text-xs lg:flex-row flex-col sm:hidden mt-4 h-full">



            <div className="space-y-2">
                <div className="flex items-center gap-4">
                    <div className=""><Image src={Engine} alt="Img" className="size-4" /></div>
                    <div className="bg-gray-200 px-2">2000cc</div>
                </div>
                <div className="flex items-center gap-4">
                    <div className=""><Image src={Petrol} alt="Img" className="size-4" /></div>
                    <div className="bg-gray-200 px-2">Petrol</div>
                </div>
                <div className="flex items-center gap-4">
                    <div className=""><Image src={Drive} alt="Img" className="size-4" /></div>
                    <div className="bg-gray-200 px-2">RED</div>
                </div>

                <div className="flex items-center gap-4">
                    <div className=""><Image src={Turbo} alt="Img" className="size-4" /></div>
                    <div className="bg-gray-200 px-2">300Nm</div>
                </div>

                <div className="flex items-center gap-4">
                    <div className=""><Image src={Warranty} alt="Img" className="size-4" /></div>
                    <div className="bg-gray-200 px-2">5Years</div>
                </div>
                <div className="flex items-center gap-4">
                    <div className=""><Image src={Fuel} alt="Img" className="size-4" /></div>
                    <div className="bg-gray-200 px-2">67 Liter</div>
                </div>

                <div className="flex items-center gap-4">
                    <div className=""><Image src={Cell} alt="Img" className="size-4" /></div>
                    <div className="bg-gray-200 px-2">9/10</div>
                </div>
            </div>
        </div>

    </div>
  )
}