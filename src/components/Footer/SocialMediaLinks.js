import Link from "next/link";
import Twitter from "../Icons/Twitter";
import Linkedin from "../Icons/Linkedin";
import GooglePlus from "../Icons/GooglePlus";
import Pinterest from "../Icons/Pinterest";
import Instagram from "../Icons/Instagram";
import Rss from "../Icons/Rss";
import Facebook from "../Icons/Facebook";

export default function SocialMediaLinks() {
    return (
		<div className="flex items-center gap-3">
			<Link href="#" target="_blank">
				<Facebook className="size-6" />
			</Link>
			<Link href="#" target="_blank">
				<Twitter className="size-6" />
			</Link>
			<Link href="#" target="_blank">
				<Linkedin className="size-6" />
			</Link>
			<Link href="#" target="_blank">
				<GooglePlus className="size-6" />
			</Link>
			<Link href="#" target="_blank">
				<Pinterest className="size-6" />
			</Link>
			<Link href="#" target="_blank">
				<Instagram className="size-6" />
			</Link>
			<Link href="#" target="_blank">
				<Rss className="size-6" />
			</Link>
		</div>
	);
}