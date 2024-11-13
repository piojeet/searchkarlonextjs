import Image from "next/image";
import Logo from "../../../public/logo.png"
import Telegram from "../../../public/telegram.svg"
import Whatsapp from "../Icons/Whatsapp";
import Link from "next/link";

export default function WpCard() {
    return (
        <div className="w-full border border-[#70bc47] bg-[#E6FCDA] sm:h-24 rounded-xl">
			<div className="h-full p-0 px-1 lg:px-4">
				<div className="flex h-full items-center justify-between gap-3 p-2 2xl:gap-10">
					<Image
						className="h-9 w-28 object-contain xl:w-36"
						src={Logo}
						alt="logo"
					/>
					<div orientation="vertical" className="hidden sm:block" />
					<div className="hidden sm:block">
						<h1 className="text-wrap text-xs font-semibold 2xl:text-sm">
							join now for cashback, coupon and price drop alerts
						</h1>
					</div>
					<div orientation="vertical" className="hidden sm:block" />
					<div className="flex items-center justify-center max-ssm:gap-2 ssm:gap-4">
						<Link href="https://wa.me/+1234567890" target="_blank">
							<div className="flex flex-col items-center gap-2 text-center">
								<Whatsapp className="size-7 xl:size-8" />
								<p className="text-xs font-semibold 2xl:text-sm">Whatsapp</p>
							</div>
						</Link>
						<Link href="https://t.me/yourtelegramusername" target="_blank">
							<div className="flex flex-col items-center gap-2 text-center">
								<Image
									className="size-7 xl:size-8"
									src={Telegram}
									alt="telegram"
								/>
								<p className="text-xs font-semibold 2xl:text-sm">Telegram</p>
							</div>
						</Link>
					</div>
				</div>
				<div orientation="horizontal" className="sm:hidden" />
				<div className="p-2 text-center sm:hidden">
					<h1 className="text-xs font-semibold lg:text-sm">
						join now for cashback, coupon and price drop alerts
					</h1>
				</div>
			</div>
		</div>
    )
}