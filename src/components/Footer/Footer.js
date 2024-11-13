import Image from "next/image";
import SocialMediaLinks from "./SocialMediaLinks";
import SpecialPageAccordion from "./SpecialPageAccordion";
import Logo from "../../../public/logo.png";
import Link from "next/link";
import AboutUsAccordion from "./AboutUsAccordion";
import SubscribeForm from "./SubscribeForm";
import MiniFooter from "./MiniFooter";
import MobileFooter from "./MobileFooter";
import CustomerListAccordion from "./CustomerListAccordion";

export default function Footer() {
    return (
        <>
		<footer className="mt-5 flex w-full flex-col justify-between bg-buttonColor p-4 pb-24 text-white xl:flex-row lg:p-6 lg:pb-16">
			<div className="flex flex-col justify-between gap-3 lg:w-[20%]">
				<Link href="#" className="flex w-fit">
					<div className="flex w-fit items-center justify-center gap-6 rounded-md bg-white px-4 py-2">
						<Image
							className="h-9 w-40 object-contain"
							src={Logo}
							alt="logo"
						/>
					</div>
				</Link>
				<div className="hidden text-[#FCFCFDCC] xl:block">
					<p className="text-sm font-medium">
						Our portal combining more than 250 online stores lets you compare
						prices of a wide variety of products, creates price alert, and in
						addition to that give back Munafa points which can be redeemed in
						various forms.
					</p>
				</div>
				<div className="hidden xl:block">
					<SocialMediaLinks />
				</div>
			</div>
			<div className="xl:w-[20%]">
				<div className="xl:hidden block mt-2">
				<SpecialPageAccordion />
				</div>
				<div className="hidden xl:block">
					<h1 className="text-lg font-semibold">Special Pages</h1>
					<ul className="mt-2 space-y-2 text-sm font-medium text-[#FCFCFDCC]">
						<li>Invite Friends</li>
						<li>Corporate Gifting</li>
						<li>Deals Near Me</li>
						<li>Citywise Directory</li>
						<li>Alphabetical Directory</li>
						<li>Refer & Earn</li>
						<li>Careers</li>
						<li>Donate Cashback</li>
					</ul>
				</div>
			</div>
			<div className="xl:w-[20%]">
            <div className="xl:hidden block">
				<AboutUsAccordion />
				</div>
				<div className="hidden xl:block">
					<h1 className="text-lg font-semibold">About</h1>
					<ul className="mt-2 space-y-2 text-sm font-medium text-[#FCFCFDCC]">
						<li>About Us</li>
						<li>Contact Us</li>
						<li>Press</li>
						<li>Blog</li>
						<li>Testimonials</li>
						<li>FAQ</li>
						<li>Sitemap</li>
					</ul>
				</div>
			</div>
			<div className="xl:w-[20%]">
            <div className="xl:hidden block">
				<CustomerListAccordion />
				</div>
				<div className="hidden xl:block">
					<h1 className="text-lg font-semibold">Customer List</h1>
					<ul className="mt-2 space-y-2 text-sm font-medium text-[#FCFCFDCC]">
						<li>User Login</li>
						<li>User Signup</li>
						<li>Dealer Login</li>
						<li>Dealer Signup</li>
						<li>Become a Partner</li>
						<li>Student Program</li>
					</ul>
				</div>
			</div>
			<div className="xl:hidden block">
				<div>
					<SubscribeForm />
				</div>
				<div className="block xl:hidden">
					<SocialMediaLinks />
				</div>
			</div>

		</footer>
			<MiniFooter />
			<MobileFooter />
		</>
    )
}