import Link from "next/link";
import Facebook from "../Icons/Facebook";
import Twitter from "../Icons/Twitter";
import Linkedin from "../Icons/Linkedin";
import GooglePlus from "../Icons/GooglePlus";
import Pinterest from "../Icons/Pinterest";
import Instagram from "../Icons/Instagram";
import Rss from "../Icons/Rss";
import Whatsapp from "../Icons/Whatsapp";
import Telegram from "../Icons/Telegram";
import User from "../Icons/User";
import Key from "../Icons/Key";

export default function NavTop() {
    return (
        <>
            <div className="hidden w-full justify-between overflow-hidden bg-[#003366] px-2 text-white xl:flex">
                {/* SOCIAL LINKS */}
                <div className="flex items-center gap-3 border-r-2 border-white py-[5px] pr-3">
                    <Link href="/">
                        <Facebook className="size-4 3xl:size-6" />
                    </Link>
                    <Link href="/">
                        <Twitter className="size-4 3xl:size-6" />
                    </Link>
                    <Link href="/">
                        <Linkedin className="size-4 3xl:size-6" />
                    </Link>
                    <Link href="/">
                        <GooglePlus className="size-4 3xl:size-6" />
                    </Link>
                    <Link href="/">
                        <Pinterest className="size-4 3xl:size-6" />
                    </Link>
                    <Link href="/">
                        <Instagram className="size-4 3xl:size-6" />
                    </Link>
                    <Link href="/">
                        <Rss className="size-4 3xl:size-6" />
                    </Link>
                </div>

                {/* WHATSAPP & TELEGRAM SECTION  */}
                <div className="flex w-fit items-center gap-3 px-2 py-[5px]">
                    <p className="text-xs font-medium xl:text-sm">
                        Join Whatsapp & Telegram Channel for Cashback & PriceDrop Alerts
                    </p>

                    <div className="flex items-center gap-2">
                        <Link href="#">
                        <Whatsapp className="size-4 3xl:size-6" />
                        </Link>
                        <Link href="#">
                        <Telegram className="size-4 3xl:size-6" />
                        </Link>
                    </div>
                </div>

                {/* Right Side Links */}
			<div className="flex border-l-2 border-white text-xs font-medium 3xl:text-sm">
				<Link href="#" className="flex items-center border-r-2 border-white px-2 text-center hover:text-white">
					Refer & Earn
				</Link>

				<Link href="#" className="flex items-center gap-1 border-r-2 border-white px-2 text-center text-[#FFA500]">
					<Key className="size-4" /> <span>Login</span>
				</Link>

				<Link href="#" className="flex items-center gap-1 border-r-2 border-white px-2 text-center text-[#FFA500]">
					<User className="size-4" /> <span>Register</span>
				</Link>

				<Link href="#" className="flex items-center border-r-2 border-white px-2 text-center">
					Become a Partner
				</Link>

				<Link href="#" className="flex items-center justify-center px-2 text-center">
					Dealer Inquiry
				</Link>
			</div>
            </div>
        </>
    )
}