"use client"

import Bag from '../../public/categories/Bag.svg'
import Clock from '../../public/categories/Clock.svg'
import Calendar from '../../public/categories/Calendar.svg'
import hotels from '../../public/categories/hotels.svg'
import OnlinePayment from '../../public/categories/OnlinePayment.svg'
import cars from '../../public/categories/cars.svg'
import bikes from '../../public/categories/bikes.svg'
import laptops from '../../public/categories/laptops.svg'
import machines from '../../public/categories/machines.svg'
import tabs from '../../public/categories/tabs.svg'

import Info from '../../public/sidebar/Info Circle.svg'
import Letter from '../../public/sidebar/Letter.svg'
import Faq from '../../public/sidebar/Question Circle.svg'
import UseGroup from '../../public/sidebar/Users Group Two Rounded.svg'
import Download from '../../public/sidebar/Download-Square.svg'
import Help from '../../public/sidebar/Help.svg'

import Ajio from '../../public/brands-logo/ajio.png'
import Amazone from '../../public/brands-logo/amazon.png'
import Caffe from '../../public/brands-logo/caffe.png'
import Flipkart from '../../public/brands-logo/flipkart.png'
import Myntra from '../../public/brands-logo/myntra.png'
import Shyaway from '../../public/brands-logo/shyaway.png'
import Oneplus from '../../public/brands-logo/oneplus.png'
import Foxtale from '../../public/brands-logo/foxtale.png'
import Wow from '../../public/brands-logo/wow.png'
import Sbi from '../../public/brands-logo/sbi.png'
import Puma from '../../public/brands-logo/puma.png'
import Nike from '../../public/brands-logo/nike.png'
import Hdfc from '../../public/brands-logo/hdfc.png'
import Dell from '../../public/brands-logo/dell.png'
import Cleartrip from '../../public/brands-logo/cleartrip.png'


import news1 from "../../public/glob.png"

import stories1 from "../../public/glob.png"


import Motrola from "../../public/motrola.png"
import Mi from "../../public/mi.png"
import Huawei from "../../public/huawei.png"
import Apple from "../../public/apple.png"
import Hp from "../../public/hp.png"
import Lg from "../../public/lg.png"
import ben from "../../public/ben.png"


export const NavCategoriesLinks = [
	{ id: 1, label: "Car", link: "/car" },
	{ id: 2, label: "Bikes" },
	{ id: 3, label: "Insurance" },
	{ id: 4, label: "Mobiles" },
	{ id: 5, label: "Tablets" },
	{ id: 6, label: "TVs" },
	{ id: 7, label: "ACs" },
	{ id: 8, label: "Laptops" },
	{ id: 9, label: "Cameras" },
	{ id: 10, label: "Refrigerators" },
	{ id: 11, label: "Electronics & More" },
];

export const NavCategoriesHoverLinks = [
	{
		id: 1,
		labels: ["demo 1", "demo 2", "demo 3"],
		links: ["#", "#", "#"]
	},
	{
		id: 2,
		labels: ["demo 1", "demo 2", "demo 3"],
		links: ["#", "#", "#"]
	},
	{
		id: 3,
		labels: ["demo 1", "demo 2", "demo 3"],
		links: ["#", "#", "#"]
	},
	{
		id: 4,
		labels: ["demo 1", "demo 2", "demo 3"],
		links: ["#", "#", "#"]
	},
	{
		id: 5,
		labels: ["demo 1", "demo 2", "demo 3"],
		links: ["#", "#", "#"]
	},
	{
		id: 6,
		labels: ["demo 1", "demo 2", "demo 3"],
		links: ["#", "#", "#"]
	},
	{
		id: 7,
		labels: ["demo 1", "demo 2", "demo 3"],
		links: ["#", "#", "#"]
	},
	{
		id: 8,
		labels: ["demo 1", "demo 2", "demo 3"],
		links: ["#", "#", "#"]
	},
	{
		id: 9,
		labels: ["demo 1", "demo 2", "demo 3"],
		links: ["#", "#", "#"]
	},
	{
		id: 10,
		labels: ["demo 1", "demo 2", "demo 3"],
		links: ["#", "#", "#"]
	},
	{
		id: 11,
		labels: ["demo 1", "demo 2", "demo 3"],
		links: ["#", "#", "#"]
	},
];


export const NavSidebarCategory = [
	{
		icon: Bag,
		label: "Deals",
		options: [
			{ name: "Option 1", link: "/deals/option1" },
			{ name: "Option 2", link: "/deals/option2" },
			{ name: "Option 3", link: "/deals/option3" },
		],
	},
	{
		icon: Clock,
		label: "News",
		options: [
			{ name: "Option 1", link: "/news/option1" },
			{ name: "Option 2", link: "/news/option2" },
			{ name: "Option 3", link: "/news/option3" },
		],
	},
	{
		icon: Calendar,
		label: "Flights",
		options: [
			{ name: "Option 1", link: "/flights/option1" },
			{ name: "Option 2", link: "/flights/option2" },
			{ name: "Option 3", link: "/flights/option3" },
		],
	},
	{
		icon: hotels,
		label: "Hotels",
		options: [
			{ name: "Option 1", link: "/hotels/option1" },
			{ name: "Option 2", link: "/hotels/option2" },
			{ name: "Option 3", link: "/hotels/option3" },
		],
	},
	{
		icon: OnlinePayment,
		label: "Mobiles",
		options: [
			{ name: "Option 1", link: "/mobiles/option1" },
			{ name: "Option 2", link: "/mobiles/option2" },
			{ name: "Option 3", link: "/mobiles/option3" },
		],
	},
	{
		icon: cars,
		label: "Cars",
		options: [
			{ name: "Option 1", link: "/cars/option1" },
			{ name: "Option 2", link: "/cars/option2" },
			{ name: "Option 3", link: "/cars/option3" },
		],
	},
	{
		icon: bikes,
		label: "Bikes",
		options: [
			{ name: "Option 1", link: "/bikes/option1" },
			{ name: "Option 2", link: "/bikes/option2" },
			{ name: "Option 3", link: "/bikes/option3" },
		],
	},
	{
		icon: laptops,
		label: "Laptops",
		options: [
			{ name: "Option 1", link: "/laptops/option1" },
			{ name: "Option 2", link: "/laptops/option2" },
			{ name: "Option 3", link: "/laptops/option3" },
		],
	},
	{
		icon: machines,
		label: "Washing Machines",
		options: [
			{ name: "Option 1", link: "/machines/option1" },
			{ name: "Option 2", link: "/machines/option2" },
			{ name: "Option 3", link: "/machines/option3" },
		],
	},
	{
		icon: tabs,
		label: "Tablets",
		options: [
			{ name: "Option 1", link: "/tablets/option1" },
			{ name: "Option 2", link: "/tablets/option2" },
			{ name: "Option 3", link: "/tablets/option3" },
		],
	},
];

export const NavSidebarAbout = [
	{ name: "About", link: "/About", icon: Info },
	{ name: "Contact us", link: "/Contact", icon: Letter },
	{ name: "FAQs", link: "/FAQs/", icon: Faq },
	{ name: "Testimonial", link: "/Testimonial/", icon: UseGroup },
	{ name: "Download Mobile App", link: "/Mobile/", icon: Download },
	{ name: "Download Browser Extention", link: "/Extention/", icon: Help }
]


export const brandsMarquee = [
	{ img: Ajio, alt: "amazon" },
	{ img: Amazone, alt: "flipkart" },
	{ img: Caffe, alt: "myntra" },
	{ img: Flipkart, alt: "oneplus" },
	{ img: Myntra, alt: "ajio" },
	{ img: Shyaway, alt: "shyaway" },
	{ img: Oneplus, alt: "foxtale" },
	{ img: Foxtale, alt: "caffe" },
];


export const BestAppliancesData = [
	{
		id: 1,
		title: "Best Air Purifiers Under 15,000 In India",
	},
	{
		id: 2,
		title: "Best Air Purifiers in India",
	},
	{
		id: 3,
		title: "Best Side by Side Refrigerators in India",
	},
	{
		id: 4,
		title: "Best Single Door Refrigerators in India",
	},
	{
		id: 5,
		title: "Best 2 Ton Split ACs in India",
	},
	{
		id: 6,
		title: "Best Refrigerators Under 40,000 In India",
	},
	{
		id: 7,
		title: "Best Mini Washing Machines In India",
	},
	{
		id: 8,
		title: "Best Fully Automatic Washing Machines In",
	},
	{
		id: 9,
		title: "Best Refrigerators Under 25,000 in India",
	},
	{
		id: 10,
		title: "Best Air Purifiers Under 10,000 In India",
	},
	{
		id: 11,
		title: "Best Window ACs in India",
	},
	{
		id: 12,
		title: "Best Refrigerators Under 20,000 in India",
	},
	{
		id: 13,
		title: "Best Double Door Refrigerators in India",
	},
	{
		id: 14,
		title: "Best Front Load Washing Machines In India",
	},
	{
		id: 15,
		title: "Best Refrigerators Under 10,000 In India",
	},
	{
		id: 16,
		title: "Best Refrigerators in India",
	},
	{
		id: 17,
		title: "Best Semi Automatic Washing Machines In...",
	},
	{
		id: 18,
		title: "Best 5 Star Single Door Refrigerators in India",
	},
	{
		id: 19,
		title: "Best 8kg Washing Machines In India",
	},
	{
		id: 20,
		title: "Best Top Load Washing Machines In India",
	},
	{
		id: 21,
		title: "Best Washing Machines In India",
	},
	{
		id: 22,
		title: "Best Top Load Washing Machines 9kg In India",
	},
	{
		id: 23,
		title: "Best Washing Machines Under 10.000 in India",
	},
	{
		id: 24,
		title: "Best 1 Ton ACs in India",
	},
	{
		id: 25,
		title: "Best Washing Machines Under 40,000 In India",
	},
	{
		id: 26,
		title: "Best Washing Machines Under 30,000 In India",
	},
	{
		id: 27,
		title: "Best Split ACs in India",
	},
	{
		id: 28,
		title: "Best Washing Machines Under 12,000 in India",
	},
	{
		id: 29,
		title: "Best Washing Machines Under 25,000 In India",
	},
	{
		id: 30,
		title: "Best ACs in India",
	},
	{
		id: 31,
		title: "Best Washing Machines In India",
	},
	{
		id: 32,
		title: "Best Washing Machines with Dryer In India",
	},
	{
		id: 33,
		title: "Best 1.5 Ton ACs in India",
	},
	{
		id: 34,
		title: "Best 1 Ton ACs in India",
	},
	{
		id: 35,
		title: "Best Refrigerators Under 30,000 In India",
	},
	{
		id: 36,
		title: "Best Window ACs in India",
	},
	{
		id: 37,
		title: "Best Split ACS in India",
	},
	{
		id: 38,
		title: "Best Refrigerators Under 15,000 in India",
	},
	{
		id: 39,
		title: "Best Air Purifiers in India",
	},
	{
		id: 40,
		title: "Best ACs in India",
	},
	{
		id: 41,
		title: "Best Washing Machines Under 20,000 In India",
	},
	{
		id: 42,
		title: "Best 2 Ton Split ACs in India",
	},
	{
		id: 43,
		title: "Best 1.5 Ton ACs in India",
	},
	{
		id: 44,
		title: "Best Washing Machines Under 15,000 In India",
	},
	{
		id: 45,
		title: "Best ACs in India",
	},
];


export const OffersCashbackData = [
	{
		id: 1,
		img: Foxtale,
		alt: "amazon",
		cashback: "10% Rewards",
	},
	{
		id: 2,
		img: Ajio,
		alt: "flipkart",
		cashback: "7% Rewards",
	},
	{
		id: 3,
		img: Amazone,
		alt: "myntra",
		cashback: "6.5% Cashback",
	},
	{
		id: 4,
		img: Caffe,
		alt: "oneplus",
		cashback: "5% Cashback",
	},
	{
		id: 5,
		img: Flipkart,
		alt: "ajio",
		cashback: "3% Cashback"
	},
	{
		id: 6,
		img: Myntra,
		alt: "shyaway",
		cashback: "6.5% Cashback",
	},
	{
		id: 7,
		img: Shyaway,
		alt: "HDFC Bank",
		cashback: "8% Cashback",
	},
	{
		id: 8,
		img: Oneplus,
		alt: "Flights",
		cashback: "2.3% Cashback",
	},
	{
		id: 9,
		img: Wow,
		alt: "Puma",
		cashback: "1.9% Cashback",
	},
	{
		id: 10,
		img: Sbi,
		alt: "WOW",
		cashback: "10% Cashback"
	},
	{
		id: 11,
		img: Puma,
		alt: "Caffe",
		cashback: "4.9% Cashback",
	},
	{
		id: 12,
		img: Nike,
		alt: "SBI Card",
		cashback: "3.1% Cashback",
	},
	{
		id: 13,
		img: Hdfc,
		alt: "Dell Technologies",
		cashback: "4.5% Cashback",
	},
	{
		id: 14,
		img: Dell,
		alt: "Foxtale",
		cashback: "8% Cashback",
	},
	{
		id: 15,
		img: Cleartrip,
		alt: "nike",
		cashback: "8% Cashback",
	},
];


export const News = [
	{
		id: 1,
		title: "MediaTek Dimensity 9400 SoC Supports Multimodal Gemini Nano",
		description:
			"The newly-launched Dimensity 9400 SoC comes with a lot of improvements in its processing and graphical prowess. However, the most exciting development seems to be the inclusion of on-device, multimodal.The newly-launched Dimensity 9400 SoC comes with a lot of improvements in its processing and graphical prowess. However, the most exciting development seems to be the inclusion of on-device, multimodal.The newly-launched Dimensity 9400 SoC comes with a lot of improvements in its processing and graphical prowess. However, the most exciting development seems to be the inclusion of on-device, multimodal.",
		image:
			news1,
	},
	{
		id: 2,
		title:
			"UPI वालों के लिए खुशखबरी! नयी UPI लिमिट की हुई घोषणा, जानें किसे मिलेगा फायदा",
		description:
			"The newly-launched Dimensity 9400 SoC comes with a lot of improvements in its processing and graphical prowess. However, the most exciting development seems to be the inclusion of on-device, multimodal.The newly-launched Dimensity 9400 SoC comes with a lot of improvements in its processing and graphical prowess. However, the most exciting development seems to be the inclusion of on-device, multimodal.The newly-launched Dimensity 9400 SoC comes with a lot of improvements in its processing and graphical prowess. However, the most exciting development seems to be the inclusion of on-device, multimodal.",
		image:
			news1,
	},
	{
		id: 3,
		title:
			"UPI वालों के लिए खुशखबरी! नयी UPI लिमिट की हुई घोषणा, जानें किसे मिलेगा फायदा",
		description:
			"The newly-launched Dimensity 9400 SoC comes with a lot of improvements in its processing and graphical prowess. However, the most exciting development seems to be the inclusion of on-device, multimodal.The newly-launched Dimensity 9400 SoC comes with a lot of improvements in its processing and graphical prowess. However, the most exciting development seems to be the inclusion of on-device, multimodal.The newly-launched Dimensity 9400 SoC comes with a lot of improvements in its processing and graphical prowess. However, the most exciting development seems to be the inclusion of on-device, multimodal.",
		image:
			news1,
	},
	{
		id: 4,
		title:
			"UPI वालों के लिए खुशखबरी! नयी UPI लिमिट की हुई घोषणा, जानें किसे मिलेगा फायदा",
		description:
			"The newly-launched Dimensity 9400 SoC comes with a lot of improvements in its processing and graphical prowess. However, the most exciting development seems to be the inclusion of on-device, multimodal.The newly-launched Dimensity 9400 SoC comes with a lot of improvements in its processing and graphical prowess. However, the most exciting development seems to be the inclusion of on-device, multimodal.The newly-launched Dimensity 9400 SoC comes with a lot of improvements in its processing and graphical prowess. However, the most exciting development seems to be the inclusion of on-device, multimodal.",
		image:
			news1,
	},
	{
		id: 5,
		title:
			"UPI वालों के लिए खुशखबरी! नयी UPI लिमिट की हुई घोषणा, जानें किसे मिलेगा फायदा",
		description:
			"The newly-launched Dimensity 9400 SoC comes with a lot of improvements in its processing and graphical prowess. However, the most exciting development seems to be the inclusion of on-device, multimodal.The newly-launched Dimensity 9400 SoC comes with a lot of improvements in its processing and graphical prowess. However, the most exciting development seems to be the inclusion of on-device, multimodal.The newly-launched Dimensity 9400 SoC comes with a lot of improvements in its processing and graphical prowess. However, the most exciting development seems to be the inclusion of on-device, multimodal.",
		image:
			news1,
	},
];

export const Stories = [
	{
		title: "12 Best Optical Zoom Camera Phones To Buy in 2023",
		image: stories1,
	},
	{
		title: "Apple iPhone 16 Review: Feels And Handles Like A Pro",
		image: stories1,
	},
	{
		title: "Apple iPhone 16 Pro Review: Still the King?",
		image: stories1,
	},
	{
		title: "12 Best Optical Zoom Camera Phones To Buy in 2023",
		image: stories1,
	},
	{
		title: "12 Best Optical Zoom Camera Phones To Buy in 2023",
		image: stories1,
	},
	{
		title: "12 Best Optical Zoom Camera Phones To Buy in 2023",
		image: stories1,
	},
	{
		title: "12 Best Optical Zoom Camera Phones To Buy in 2023",
		image: stories1,
	},
];

export const PopularPriceLiseData = [
	{
		title: "Motorola Price List",
		image: Motrola,
	},
	{
		title: "Xiaomi Price List",
		image: Mi,
	},
	{
		title: "Huawei Price List",
		image: Huawei,
	},
	{
		title: "Apple Price List",
		image: Apple,
	},
	{
		title: "Huawei Price List",
		image: Hp,
	},
	{
		title: "Xiaomi Price List",
		image: Lg,
	},
	{
		title: "Apple Price List",
		image: ben,
	},
	{
		title: "Motorola Price List",
		image: Motrola,
	},
	{
		title: "Xiaomi Price List",
		image: Mi,
	},
	{
		title: "Huawei Price List",
		image: Huawei,
	},
	{
		title: "Apple Price List",
		image: Apple,
	},
	{
		title: "Huawei Price List",
		image: Hp,
	},
];


import Sidhart from "../../public/sidhart.jpg";
export const qaDataRcent = [
	{
		id: 1,
		questions: [
			{
				question: "Honda Civic is a Gare or Automatic?",
				answer: "Honda Civic is both Automatic & Manual.",
				expertName: "Siddharth Patankar",
				expertTitle: "Auto Expert",
				img: Sidhart
			},
			{
				question: "What is the mileage of Honda City?",
				answer: "The Honda City gives a mileage of 18 km/l.",
				expertName: "Siddharth Patankar",
				expertTitle: "Auto Expert",
				img: Sidhart
			},
			{
				question: "Is Honda Accord a luxury car?",
				answer: "Yes, Honda Accord is considered a luxury car.",
				expertName: "Siddharth Patankar",
				expertTitle: "Auto Expert",
				img: Sidhart
			}
		]
	},
	{
		id: 2,
		questions: [
			{
				question: "What is the top speed of Honda Civic?",
				answer: "The top speed of Honda Civic is 200 km/h.",
				expertName: "John Doe",
				expertTitle: "Car Specialist",
				img: Sidhart
			},
			{
				question: "Does Honda City come with a sunroof?",
				answer: "Yes, the higher variants of Honda City come with.",
				expertName: "John Doe",
				expertTitle: "Car Specialist",
				img: Sidhart
			},
			{
				question: "Is Honda Accord fuel-efficient?",
				answer: "Yes, Honda Accord has a fuel efficiency of 15 km/l.",
				expertName: "John Doe",
				expertTitle: "Car Specialist",
				img: Sidhart
			}
		]
	}
];


export const insightData = [
	{
		id: 1,
		head: "Compare Cars",
		text: ["• Vitara Brezza Vs Ecosport Vs T...", "• Honda BR-V vs Hyundai Creta...", "• Mahindra TUV300 vs Chevrolet E...", "• Mahindra XUV500 vs Tata Aria..."]
	},
	{
		id: 2,
		head: "Research",
		text: ["• Vitara Brezza Vs Ecosport Vs T...", "• Honda BR-V vs Hyundai Creta...", "• Mahindra TUV300 vs Chevrolet E...", "• Mahindra XUV500 vs Tata Aria..."]
	},
	{
		id: 3,
		head: "Compare Cars",
		text: ["• Vitara Brezza Vs Ecosport Vs T...", "• Honda BR-V vs Hyundai Creta...", "• Mahindra TUV300 vs Chevrolet E...", "• Mahindra XUV500 vs Tata Aria..."]
	},
	{
		id: 4,
		head: "Compare Cars",
		text: ["• Vitara Brezza Vs Ecosport Vs T...", "• Honda BR-V vs Hyundai Creta...", "• Mahindra TUV300 vs Chevrolet E...", "• Mahindra XUV500 vs Tata Aria..."]
	},
	{
		id: 5,
		head: "Compare Cars",
		text: ["• Vitara Brezza Vs Ecosport Vs T...", "• Honda BR-V vs Hyundai Creta...", "• Mahindra TUV300 vs Chevrolet E...", "• Mahindra XUV500 vs Tata Aria..."]
	},
	{
		id: 6,
		head: "Compare Cars",
		text: ["• Vitara Brezza Vs Ecosport Vs T...", "• Honda BR-V vs Hyundai Creta...", "• Mahindra TUV300 vs Chevrolet E...", "• Mahindra XUV500 vs Tata Aria..."]
	}
];


import ImageGenral1 from "../../public/genraltools/carname1.png"
import ImageGenral2 from "../../public/genraltools/carname2.png"
import ImageGenral3 from "../../public/genraltools/carname3.png"
import ImageGenral4 from "../../public/genraltools/carname4.png"
import ImageGenral5 from "../../public/genraltools/carname5.png"
import ImageGenral6 from "../../public/genraltools/carname6.png"
import ImageGenral7 from "../../public/genraltools/carname7.png"
import ImageGenral8 from "../../public/genraltools/carname8.png"
import ImageGenral9 from "../../public/genraltools/carname9.png"
import ImageGenral10 from "../../public/genraltools/carname10.png"
export const GenralToolsData = [
	{
		img: ImageGenral1,
		name: "New Car Research"
	},
	{
		img: ImageGenral2,
		name: "Get on Road Car Price"
	},
	{
		img: ImageGenral3,
		name: "Car Offers"
	},
	{
		img: ImageGenral4,
		name: "Car Finder"
	},
	{
		img: ImageGenral5,
		name: "Compare Cars"
	},
	{
		img: ImageGenral6,
		name: "Upcoming Cars"
	},
	{
		img: ImageGenral7,
		name: "Car Dealers"
	},
	{
		img: ImageGenral8,
		name: "Car News"
	},
	{
		img: ImageGenral9,
		name: "Car Expert Reviews"
	},
	{
		img: ImageGenral10,
		name: "Car Insurance"
	},
	{
		img: ImageGenral1,
		name: "Car Services"
	},
	{
		img: ImageGenral2,
		name: "Download Mobile App"
	},
	{
		img: ImageGenral3,
		name: "Sell Car"
	},
	{
		img: ImageGenral4,
		name: "Buy Car"
	},
	{
		img: ImageGenral5,
		name: "Articles & Guides"
	},
	{
		img: ImageGenral6,
		name: "Car Videos"
	},

]


export const FindCarbyBrandData = [
	{
		img: ImageGenral1,
		name: "Hyundai"
	},
	{
		img: ImageGenral2,
		name: "Mercedes-Benz"
	},
	{
		img: ImageGenral3,
		name: "Toyota"
	},
	{
		img: ImageGenral4,
		name: "Tata"
	},
	{
		img: ImageGenral5,
		name: "Mahindra"
	},
	{
		img: ImageGenral6,
		name: "Renault"
	},
	{
		img: ImageGenral7,
		name: "Nissan"
	},
	{
		img: ImageGenral8,
		name: "Kia"
	},
	{
		img: ImageGenral9,
		name: "Maruti"
	},
	{
		img: ImageGenral10,
		name: "MG"
	},
	{
		img: ImageGenral1,
		name: "Mahindra"
	},
	{
		img: ImageGenral2,
		name: "Nissan"
	},
]



import Petrol from "../../public/Gas Station.svg"
import carquick from "../../public/carquick.png";
export const QuickLookData = [
	{
		id: 1,
		carName: "Jeep Wrangler",
		price: "₹15.98 - ₹24.50",
		date: "Launch Date Nov 2024",
		button: "Alert me when Launch",
		patrol: "Petrol",
		tankImg: Petrol,
		diesel: "Diesel",
		CNG: "CNG",
		dataVisible: "Upcoming",
		img: carquick
	},
	{
		id: 2,
		carName: "Jeep Wrangler",
		price: "₹15.98 - ₹24.50",
		date: "Launch Date Nov 2024",
		button: "Alert me when Launch",
		patrol: "Petrol",
		tankImg: Petrol,
		diesel: "Diesel",
		CNG: "CNG",
		dataVisible: "Popular",
		img: carquick
	},
	{
		id: 3,
		carName: "Jeep Wrangler",
		price: "₹15.98 - ₹24.50",
		date: "Launch Date Nov 2024",
		button: "Alert me when Launch",
		patrol: "Petrol",
		tankImg: Petrol,
		diesel: "Diesel",
		CNG: "CNG",
		dataVisible: "Latest",
		img: carquick
	},
	{
		id: 4,
		carName: "Jeep Wrangler",
		price: "₹15.98 - ₹24.50",
		date: "Launch Date Nov 2024",
		button: "Alert me when Launch",
		patrol: "Petrol",
		tankImg: Petrol,
		diesel: "Diesel",
		CNG: "CNG",
		img: carquick
	},
	{
		id: 5,
		carName: "Jeep Wrangler",
		price: "₹15.98 - ₹24.50",
		date: "Launch Date Nov 2024",
		button: "Alert me when Launch",
		patrol: "Petrol",
		tankImg: Petrol,
		diesel: "Diesel",
		CNG: "CNG",
		img: carquick
	},
];


import compareCarOne from "../../public/carquick.png";
import Car from '@/app/car/page'
export const ComparePriceandFeaturesData = [
	{
		id: 1,
		titleTop: "Proton X70",
		titlebTop: "Executive AWD",
		priceTop: "Rs. 87.99 lacs",
		titleBottom: "MG HS",
		titlebBottom: "1.5 Turbo",
		priceBottom: "Rs. 89 lacs",
		imgTop: compareCarOne,
		imgBottom: compareCarOne,
		dataVisible: "Mobiles",
		button: "Compare Now"
	},
	{
		id: 2,
		titleTop: "Proton X70",
		titlebTop: "Executive AWD",
		priceTop: "Rs. 87.99 lacs",
		titleBottom: "MG HS",
		titlebBottom: "1.5 Turbo",
		priceBottom: "Rs. 89 lacs",
		imgTop: compareCarOne,
		imgBottom: compareCarOne,
		dataVisible: "Mobiles",
		button: "Compare Now"
	},
	{
		id: 3,
		titleTop: "Proton X70",
		titlebTop: "Executive AWD",
		priceTop: "Rs. 87.99 lacs",
		titleBottom: "MG HS",
		titlebBottom: "1.5 Turbo",
		priceBottom: "Rs. 89 lacs",
		imgTop: compareCarOne,
		imgBottom: compareCarOne,
		dataVisible: "Mobiles",
		button: "Compare Now"
	},
	{
		id: 4,
		titleTop: "Proton X70",
		titlebTop: "Executive AWD",
		priceTop: "Rs. 87.99 lacs",
		titleBottom: "MG HS",
		titlebBottom: "1.5 Turbo",
		priceBottom: "Rs. 89 lacs",
		imgTop: compareCarOne,
		imgBottom: compareCarOne,
		dataVisible: "Mobiles",
		button: "Compare Now"
	},
	{
		id: 5,
		titleTop: "Proton X70",
		titlebTop: "Executive AWD",
		priceTop: "Rs. 87.99 lacs",
		titleBottom: "MG HS",
		titlebBottom: "1.5 Turbo",
		priceBottom: "Rs. 89 lacs",
		imgTop: compareCarOne,
		imgBottom: compareCarOne,
		dataVisible: "Mobiles",
		button: "Compare Now"
	},
];



export const CategoriesData = [
	{ icon: Bag, label: "Deals" },
	{ icon: Clock, label: "News" },
	{ icon: Calendar, label: "Flights" },
	{ icon: hotels, label: "Hotels" },
	{ icon: OnlinePayment, label: "Mobiles" },
	{ icon: cars, label: "Cars" },
	{ icon: bikes, label: "Bikes" },
	{ icon: laptops, label: "Laptops" },
	{ icon: machines, label: "Washing Machines" },
	{ icon: tabs, label: "Tablets" },
	{ icon: Bag, label: "Deals" },
	{ icon: Clock, label: "News" },
	{ icon: Calendar, label: "Flights" },
	{ icon: hotels, label: "Hotels" },
	{ icon: OnlinePayment, label: "Mobiles" },
	{ icon: cars, label: "Cars" },
	{ icon: bikes, label: "Bikes" },
	{ icon: laptops, label: "Laptops" },
	{ icon: machines, label: "Washing Machines" },
	{ icon: tabs, label: "Tablets" },
];


export const Features = [
	{ label: "Apple" },
	{ label: "Dual SIM" },
	{ label: "Fingerprint" },
	{ label: "Bluetooth" },
	{ label: "Android" },
	{ label: "MicroSD" },
];

export const Items = [
	{ name: "Mobiles", icon: OnlinePayment },
	{ name: "Cars", icon: cars },
	{ name: "Flight", icon: Calendar },
	{ name: "Bikes", icon: bikes },
	{ name: "Laptops", icon: laptops },
	{ name: "Hotels", icon: hotels },
];


import cc from "../../public/carlist/charging meter.png"
import fuel from "../../public/carlist/Fuel Station.png"
import Seat from "../../public/carlist/Seat.png"
import Transmission from "../../public/carlist/transmission.png"
import redcar from "../../public/redcar.png"
export const CarListCategroiesData = [
	{
		id: 1,
		carName: "Brezza VXL Petrol",
		rating: "4.5",
		carPirice: "390,000",
		savePrice: "3400",
		saveTitle: "*T&C Applicable",
		cc: "2200cc",
		ccImg: cc,
		fuel: "Petrol",
		fuelImg: fuel,
		seat: "7 Seat",
		seatImg: Seat,
		transmission: "Automation",
		transmissionImg: Transmission,
		lastInDay: "13%",
		successScure: "79",
		dadCard: "Add Component",
		button: "See Details",
		carImg: redcar
	},
	{
		id: 2,
		carName: "Brezza VXL Petrol",
		rating: "4.5",
		carPirice: "390,000",
		savePrice: "3400",
		saveTitle: "*T&C Applicable",
		cc: "2200cc",
		ccImg: cc,
		fuel: "Petrol",
		fuelImg: fuel,
		seat: "7 Seat",
		seatImg: Seat,
		transmission: "Automation",
		transmissionImg: Transmission,
		lastInDay: "13%",
		successScure: "79",
		dadCard: "Add Component",
		button: "See Details",
		carImg: redcar
	},
	{
		id: 3,
		carName: "Brezza VXL Petrol",
		rating: "4.5",
		carPirice: "390,000",
		savePrice: "3400",
		saveTitle: "*T&C Applicable",
		cc: "2200cc",
		ccImg: cc,
		fuel: "Petrol",
		fuelImg: fuel,
		seat: "7 Seat",
		seatImg: Seat,
		transmission: "Automation",
		transmissionImg: Transmission,
		lastInDay: "13%",
		successScure: "79",
		dadCard: "Add Component",
		button: "See Details",
		carImg: redcar
	},
	{
		id: 4,
		carName: "Brezza VXL Petrol",
		rating: "4.5",
		carPirice: "390,000",
		savePrice: "3400",
		saveTitle: "*T&C Applicable",
		cc: "2200cc",
		ccImg: cc,
		fuel: "Petrol",
		fuelImg: fuel,
		seat: "7 Seat",
		seatImg: Seat,
		transmission: "Automation",
		transmissionImg: Transmission,
		lastInDay: "13%",
		successScure: "79",
		dadCard: "Add Component",
		button: "See Details",
		carImg: redcar
	},
	{
		id: 5,
		carName: "Brezza VXL Petrol",
		rating: "4.5",
		carPirice: "390,000",
		savePrice: "3400",
		saveTitle: "*T&C Applicable",
		cc: "2200cc",
		ccImg: cc,
		fuel: "Petrol",
		fuelImg: fuel,
		seat: "7 Seat",
		seatImg: Seat,
		transmission: "Automation",
		transmissionImg: Transmission,
		lastInDay: "13%",
		successScure: "79",
		dadCard: "Add Component",
		button: "See Details",
		carImg: redcar
	},

];

export const DimensionAndWeightData = [
	{
		dimensions: [
			"Overall Length",
			"4456mm",
			"3995mm",
			"4456mm",
			"3995mm",
			"4456mm",
			"3995mm",
		],
	},
	{
		dimensions: [
			"Overall Length",
			"4456mm",
			"3995mm",
			"4456mm",
			"3995mm",
			"4456mm",
			"3995mm",
		],
	},
	{
		dimensions: [
			"Overall Length",
			"4456mm",
			"3995mm",
			"4456mm",
			"3995mm",
			"4456mm",
			"3995mm",
		],
	},
	{
		dimensions: [
			"Overall Length",
			"4456mm",
			"3995mm",
			"4456mm",
			"3995mm",
			"4456mm",
			"3995mm",
		],
	},
	{
		dimensions: [
			"Overall Length",
			"4456mm",
			"3995mm",
			"4456mm",
			"3995mm",
			"4456mm",
			"3995mm",
		],
	},
	{
		dimensions: [
			"Overall Length",
			"4456mm",
			"3995mm",
			"4456mm",
			"3995mm",
			"4456mm",
			"3995mm",
		],
	},
	{
		dimensions: [
			"Overall Length",
			"4456mm",
			"3995mm",
			"4456mm",
			"3995mm",
			"4456mm",
			"3995mm",
		],
	},
	{
		dimensions: [
			"Overall Length",
			"4456mm",
			"3995mm",
			"4456mm",
			"3995mm",
			"4456mm",
			"3995mm",
		],
	},
	{
		dimensions: [
			"Overall Length",
			"4456mm",
			"3995mm",
			"4456mm",
			"3995mm",
			"4456mm",
			"3995mm",
		],
	},
	{
		dimensions: [
			"Overall Length",
			"4456mm",
			"3995mm",
			"4456mm",
			"3995mm",
			"4456mm",
			"3995mm",
		],
	},
	{
		dimensions: [
			"Overall Length",
			"4456mm",
			"3995mm",
			"4456mm",
			"3995mm",
			"4456mm",
			"3995mm",
		],
	},
	{
		dimensions: [
			"Overall Length",
			"4456mm",
			"3995mm",
			"4456mm",
			"3995mm",
			"4456mm",
			"3995mm",
		],
	},
	{
		dimensions: [
			"Overall Length",
			"4456mm",
			"3995mm",
			"4456mm",
			"3995mm",
			"4456mm",
			"3995mm",
		],
	},
];


export const EngineData = [
	{
		engine: [
			"Overall Length",
			"4456mm",
			"3995mm",
			"4456mm",
			"3995mm",
			"4456mm",
			"3995mm",
		],
	},
	{
		engine: [
			"Overall Length",
			"4456mm",
			"3995mm",
			"4456mm",
			"3995mm",
			"4456mm",
			"3995mm",
		],
	},
	{
		engine: [
			"Overall Length",
			"4456mm",
			"3995mm",
			"4456mm",
			"3995mm",
			"4456mm",
			"3995mm",
		],
	},
	{
		engine: [
			"Overall Length",
			"4456mm",
			"3995mm",
			"4456mm",
			"3995mm",
			"4456mm",
			"3995mm",
		],
	},
	{
		engine: [
			"Overall Length",
			"4456mm",
			"3995mm",
			"4456mm",
			"3995mm",
			"4456mm",
			"3995mm",
		],
	},
	{
		engine: [
			"Overall Length",
			"4456mm",
			"3995mm",
			"4456mm",
			"3995mm",
			"4456mm",
			"3995mm",
		],
	},
];


export const TransmissionData = [
	{
		transmission: [
			"Overall Length",
			"4456mm",
			"3995mm",
			"4456mm",
			"3995mm",
			"4456mm",
			"3995mm",
		],
	},
	{
		transmission: [
			"Overall Length",
			"4456mm",
			"3995mm",
			"4456mm",
			"3995mm",
			"4456mm",
			"3995mm",
		],
	},
];


export const WheelTyreData = [
	{
		wheelTyre: [
			"Overall Length",
			"4456mm",
			"3995mm",
			"4456mm",
			"3995mm",
			"4456mm",
			"3995mm",
		],
	},
	{
		wheelTyre: [
			"Overall Length",
			"4456mm",
			"3995mm",
			"4456mm",
			"3995mm",
			"4456mm",
			"3995mm",
		],
	},
	{
		wheelTyre: [
			"Overall Length",
			"4456mm",
			"3995mm",
			"4456mm",
			"3995mm",
			"4456mm",
			"3995mm",
		],
	},
	{
		wheelTyre: [
			"Overall Length",
			"4456mm",
			"3995mm",
			"4456mm",
			"3995mm",
			"4456mm",
			"3995mm",
		],
	},
];


export const BrakeData = [
	{
		brake: [
			"Overall Length",
			"4456mm",
			"3995mm",
			"4456mm",
			"3995mm",
			"4456mm",
			"3995mm",
		],
	},
	{
		brake: [
			"Overall Length",
			"4456mm",
			"3995mm",
			"4456mm",
			"3995mm",
			"4456mm",
			"3995mm",
		],
	},

];


export const SuspensionData = [
	{
		suspension: [
			"Overall Length",
			"4456mm",
			"3995mm",
			"4456mm",
			"3995mm",
			"4456mm",
			"3995mm",
		],
	},
	{
		suspension: [
			"Overall Length",
			"4456mm",
			"3995mm",
			"4456mm",
			"3995mm",
			"4456mm",
			"3995mm",
		],
	},

];


export const FuelEfficiencyData = [
	{
		fuelEfficiency: [
			"Overall Length",
			"4456mm",
			"3995mm",
			"4456mm",
			"3995mm",
			"4456mm",
			"3995mm",
		],
	},
	{
		fuelEfficiency: [
			"Overall Length",
			"4456mm",
			"3995mm",
			"4456mm",
			"3995mm",
			"4456mm",
			"3995mm",
		],
	},
	{
		fuelEfficiency: [
			"Overall Length",
			"4456mm",
			"3995mm",
			"4456mm",
			"3995mm",
			"4456mm",
			"3995mm",
		],
	},
	{
		fuelEfficiency: [
			"Overall Length",
			"4456mm",
			"3995mm",
			"4456mm",
			"3995mm",
			"4456mm",
			"3995mm",
		],
	},

];


export const SteeringData = [
	{
		steering: [
			"Overall Length",
			"4456mm",
			"3995mm",
			"4456mm",
			"3995mm",
			"4456mm",
			"3995mm",
		],
	},
	{
		steering: [
			"Overall Length",
			"4456mm",
			"3995mm",
			"4456mm",
			"3995mm",
			"4456mm",
			"3995mm",
		],
	},
	{
		steering: [
			"Overall Length",
			"4456mm",
			"3995mm",
			"4456mm",
			"3995mm",
			"4456mm",
			"3995mm",
		],
	},
];


export const CapacityData = [
	{
		capacity: [
			"Overall Length",
			"4456mm",
			"3995mm",
			"4456mm",
			"3995mm",
			"4456mm",
			"3995mm",
		],
	},
	{
		capacity: [
			"Overall Length",
			"4456mm",
			"3995mm",
			"4456mm",
			"3995mm",
			"4456mm",
			"3995mm",
		],
	},
];



export const cityData = [
	{
		city: [
			"Bangalore",
			"Mumbai",
			"Chennai",
			"Delhi",
			"Kolkata",
			"Hyderabad",
			"Pune",
			"Noida",
			"Jaipur",
			"Lucknow",
			"Ahmedabad",
			"Gurugram",
			"Surat",
			"Vadodara",
			"Rajkot",
			"Bhopal",
			"Indore",
			"Nagpur",
			"Visakhapatnam",
			"Vijayawada",
			"Patna",
			"Agra",
			"Ludhiana",
			"Faridabad",
			"Meerut",
			"Amritsar",
			"Srinagar",
			"Guwahati",
			"Bhubaneswar",
			"Chandigarh"
		]
	}
];

export const pinCodeData = [
	{
		pincode: [
			"123456",
			"123457",
			"123458",
			"123459",
			"123460",
			"123461",
			"123462",
			"123463",
			"123464",
			"123465",
			"123466",
			"123467",
			"123468",
			"123469",
			"123470",
			"123471",
			"123472",
			"123473",
			"123474",
			"123475",
			"123476",
			"123477"
		]
	}
];


export const safetyData = [
	{
		title: "Overall Length",
		icons: ["X", "X", "Check", "X", "Check", "Check"],
	},
	{
		title: "Overall Length",
		icons: ["X", "X", "X", "X", "X", "X"],
	},
	{
		title: "Overall Length",
		icons: ["X", "X", "X", "X", "X", "X"],
	},
	{
		title: "Overall Length",
		icons: ["X", "X", "X", "X", "X", "X"],
	},
	{
		title: "Overall Length",
		icons: ["X", "X", "X", "X", "X", "X"],
	},
	{
		title: "Overall Length",
		icons: ["X", "X", "X", "X", "X", "X"],
	},
	{
		title: "Overall Length",
		icons: ["X", "X", "X", "X", "X", "X"],
	},
	{
		title: "Overall Length",
		icons: ["X", "X", "X", "X", "X", "X"],
	},
	{
		title: "Overall Length",
		icons: ["X", "Check", "Check", "Check", "Check", "Check"],
	},
	{
		title: "Overall Length",
		icons: ["X", "X", "X", "Check", "Check", "Check"],
	},
	{
		title: "Overall Length",
		icons: ["Check", "Check", "Check", "Check", "Check", "Check"],
	},
	{
		title: "Overall Length",
		icons: ["X", "X", "X", "Check", "Check", "Check"],
	},
	{
		title: "Overall Length",
		icons: ["X", "X", "X", "X", "X", "X"],
	},
	{
		title: "Overall Length",
		icons: ["X", "X", "X", "X", "X", "X"],
	},
	{
		title: "Overall Length",
		icons: ["X", "X", "X", "X", "X", "X"],
	},
	{
		title: "Overall Length",
		icons: ["X", "X", "X", "X", "X", "X"],
	},
	{
		title: "Overall Length",
		icons: ["X", "X", "X", "X", "X", "X"],
	},
	{
		title: "Overall Length",
		icons: ["X", "X", "X", "X", "X", "X"],
	},
	{
		title: "Overall Length",
		icons: ["Check", "Check", "Check", "Check", "Check", "Check"],
	},
];


export const ComfortAndConvenienceData = [
	{
		title: "Overall Length",
		icons: ["X", "X", "Check", "X", "Check", "Check"],
	},
	{
		title: "Overall Length",
		icons: ["X", "X", "X", "X", "X", "X"],
	},
	{
		title: "Overall Length",
		icons: ["X", "X", "X", "X", "X", "X"],
	},
	{
		title: "Overall Length",
		icons: ["X", "X", "X", "X", "X", "X"],
	},
	{
		title: "Overall Length",
		icons: ["X", "X", "X", "X", "X", "X"],
	},
	{
		title: "Overall Length",
		icons: ["X", "X", "X", "X", "X", "X"],
	},
	{
		title: "Overall Length",
		icons: ["X", "X", "X", "X", "X", "X"],
	},
	{
		title: "Overall Length",
		icons: ["X", "X", "X", "X", "X", "X"],
	},
	{
		title: "Overall Length",
		icons: ["X", "Check", "Check", "Check", "Check", "Check"],
	},
	{
		title: "Overall Length",
		icons: ["X", "X", "X", "Check", "Check", "Check"],
	},
	{
		title: "Overall Length",
		icons: ["Check", "Check", "Check", "Check", "Check", "Check"],
	},
	{
		title: "Overall Length",
		icons: ["X", "X", "X", "Check", "Check", "Check"],
	},
	{
		title: "Overall Length",
		icons: ["X", "X", "X", "X", "X", "X"],
	},
	{
		title: "Overall Length",
		icons: ["X", "X", "X", "X", "X", "X"],
	},
	{
		title: "Overall Length",
		icons: ["X", "X", "X", "X", "X", "X"],
	},
	{
		title: "Overall Length",
		icons: ["X", "X", "X", "X", "X", "X"],
	},
	{
		title: "Overall Length",
		icons: ["X", "X", "X", "X", "X", "X"],
	},
	{
		title: "Overall Length",
		icons: ["X", "X", "X", "X", "X", "X"],
	},
	{
		title: "Overall Length",
		icons: ["Check", "Check", "Check", "Check", "Check", "Check"],
	},
];


export const LightsData = [
	{
		title: "Overall Length",
		icons: ["X", "X", "Check", "X", "Check", "Check"],
	},
	{
		title: "Overall Length",
		icons: ["X", "X", "X", "X", "X", "X"],
	},
	{
		title: "Overall Length",
		icons: ["X", "X", "X", "X", "X", "X"],
	},

];


export const InstrumentationData = [
	{
		title: "Overall Length",
		icons: ["X", "X", "Check", "X", "Check", "Check"],
	},
	{
		title: "Overall Length",
		icons: ["X", "X", "X", "X", "X", "X"],
	},
	{
		title: "Overall Length",
		icons: ["X", "X", "X", "X", "X", "X"],
	},
	{
		title: "Overall Length",
		icons: ["X", "X", "Check", "X", "Check", "Check"],
	},
	{
		title: "Overall Length",
		icons: ["X", "X", "X", "X", "X", "X"],
	},
	{
		title: "Overall Length",
		icons: ["X", "X", "X", "X", "X", "X"],
	},

];


import SelectCar1 from "../../public/selectcar/carname1.png";
import SelectKm from "../../public/selectcar/km.svg";
import SelectPetrol from "../../public/selectcar/petrol.svg";
import SelectOwner from "../../public/selectcar/owner.svg";
import SelectManual from "../../public/selectcar/manual.svg";
export const SelectCarPriceData = [
	{
		carLogo: SelectCar1,
		title: "Hyundai",
		price: "Rs. 5,00,0000",
		newPrice: "1.5 L less than new car price",
		kmImg: SelectKm,
		kmTitle: "19,757kms",
		petrolImg: SelectPetrol,
		petrolTitle: "petrol",
		ownerImg: SelectOwner,
		ownerTitle: "2nd owner",
		manualImg: SelectManual,
		manualTitle: "Manual",
		selectBtn: "GO TO Store",
		selectBtnUrl: "/about"
	},
	{
		carLogo: SelectCar1,
		title: "Hyundai",
		price: "Rs. 5,00,0000",
		newPrice: "1.5 L less than new car price",
		kmImg: SelectKm,
		kmTitle: "19,757kms",
		petrolImg: SelectPetrol,
		petrolTitle: "petrol",
		ownerImg: SelectOwner,
		ownerTitle: "2nd owner",
		manualImg: SelectManual,
		manualTitle: "Manual",
		selectBtn: "GO TO Store",
		selectBtnUrl: "/about"
	},
	{
		carLogo: SelectCar1,
		title: "Hyundai",
		price: "Rs. 5,00,0000",
		newPrice: "1.5 L less than new car price",
		kmImg: SelectKm,
		kmTitle: "19,757kms",
		petrolImg: SelectPetrol,
		petrolTitle: "petrol",
		ownerImg: SelectOwner,
		ownerTitle: "2nd owner",
		manualImg: SelectManual,
		manualTitle: "Manual",
		selectBtn: "GO TO Store",
		selectBtnUrl: "/about"
	},
	{
		carLogo: SelectCar1,
		title: "Hyundai",
		price: "Rs. 5,00,0000",
		newPrice: "1.5 L less than new car price",
		kmImg: SelectKm,
		kmTitle: "19,757kms",
		petrolImg: SelectPetrol,
		petrolTitle: "petrol",
		ownerImg: SelectOwner,
		ownerTitle: "2nd owner",
		manualImg: SelectManual,
		manualTitle: "Manual",
		selectBtn: "GO TO Store",
		selectBtnUrl: "/about"
	},
	{
		carLogo: SelectCar1,
		title: "Hyundai",
		price: "Rs. 5,00,0000",
		newPrice: "1.5 L less than new car price",
		kmImg: SelectKm,
		kmTitle: "19,757kms",
		petrolImg: SelectPetrol,
		petrolTitle: "petrol",
		ownerImg: SelectOwner,
		ownerTitle: "2nd owner",
		manualImg: SelectManual,
		manualTitle: "Manual",
		selectBtn: "GO TO Store",
		selectBtnUrl: "/about"
	},
	{
		carLogo: SelectCar1,
		title: "Hyundai",
		price: "Rs. 5,00,0000",
		newPrice: "1.5 L less than new car price",
		kmImg: SelectKm,
		kmTitle: "19,757kms",
		petrolImg: SelectPetrol,
		petrolTitle: "petrol",
		ownerImg: SelectOwner,
		ownerTitle: "2nd owner",
		manualImg: SelectManual,
		manualTitle: "Manual",
		selectBtn: "GO TO Store",
		selectBtnUrl: "/about"
	},
];


export const RoadPriceCarData = [
	{
		car: [
			"demo",
			"demo",
			"demo",
			"demo",
			"demo",
			"demo",
			"demo",
		]
	}
];


export const RoadPriceCarVitraData = [
	{
		vitra: [
			"demo",
			"demo",
			"demo",
			"demo",
			"demo",
			"demo",
			"demo",
		]
	}
];


export const RoadPriceCarLDIData = [
	{
		ldi: [
			"demo",
			"demo",
			"demo",
			"demo",
			"demo",
			"demo",
			"demo",
		]
	}
];