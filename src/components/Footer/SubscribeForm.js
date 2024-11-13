export default function SubscribeForm() {
    return (
        <div className="relative flex flex-col gap-3 my-4 border-t border-b border-gray-400 py-3">
			<h1 className="font-semibold">Subscribe</h1>
			<p className="text-sm font-medium text-[#FFFFFFCC]">
				Sign up to receive Latest Offers, Cashback & Pricedrop Alerts.
			</p>
			<form action="">
				<div className="relative h-10 w-full max-w-[20rem] flex items-stretch rounded-md overflow-hidden">
					<input
						type="email"
						id="email"
						name="email"
						autoComplete="on"
						placeholder="Enter Your Email.."
						className=" h-full w-full border-none bg-white px-4 py-3 text-black placeholder:text-gray-400 focus-visible:outline-none"
						required
					/>
					<button className=" right-0 h-full bg-lightOrange text-white hover:bg-lightOrange/90 px-2">
						Subscribe
					</button>
				</div>
			</form>
		</div>
    )
}