import { Star } from "lucide-react";
import QuoteImage from "../../../public/quetse.png"; // Ensure the path and casing are correct
import ClientOne from "../../../public/review/Ellipse 6.png"; // Ensure the path and casing are correct
import Image from "next/image";

export default function Review() {
    const reviewData = [
        {
            name: "John Eelly",
            date: "Sep 18, 2019",
            stars: Array(5)
                .fill(0)
                .map((_, index) => <Star key={`star-${index}`} fill="#F1A469" strokeWidth={0} size={20} />), // Add unique key to each Star
            rating: "5.0",
            description:
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
            img: ClientOne,
        },
        {
            name: "John Eelly",
            date: "Sep 18, 2019",
            stars: Array(5)
                .fill(0)
                .map((_, index) => <Star key={`star-${index}`} fill="#F1A469" strokeWidth={0} size={20} />), // Add unique key to each Star
            rating: "5.0",
            description:
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
            img: ClientOne,
        },
        {
            name: "John Eelly",
            date: "Sep 18, 2019",
            stars: Array(5)
                .fill(0)
                .map((_, index) => <Star key={`star-${index}`} fill="#F1A469" strokeWidth={0} size={20} />), // Add unique key to each Star
            rating: "5.0",
            description:
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
            img: ClientOne,
        },
        {
            name: "John Eelly",
            date: "Sep 18, 2019",
            stars: Array(5)
                .fill(0)
                .map((_, index) => <Star key={`star-${index}`} fill="#F1A469" strokeWidth={0} size={20} />), // Add unique key to each Star
            rating: "5.0",
            description:
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
            img: ClientOne,
        },
        {
            name: "John Eelly",
            date: "Sep 18, 2019",
            stars: Array(5)
                .fill(0)
                .map((_, index) => <Star key={`star-${index}`} fill="#F1A469" strokeWidth={0} size={20} />), // Add unique key to each Star
            rating: "5.0",
            description:
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
            img: ClientOne,
        },
        {
            name: "John Eelly",
            date: "Sep 18, 2019",
            stars: Array(5)
                .fill(0)
                .map((_, index) => <Star key={`star-${index}`} fill="#F1A469" strokeWidth={0} size={20} />), // Add unique key to each Star
            rating: "5.0",
            description:
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
            img: ClientOne,
        },
    ];

    return (
        <div className="lg:p-6 p-4 space-y-4">
            <div className="py-2 bg-buttonColor text-whiteColor px-4 rounded-md">Review</div>
            <div className="review-container grid lg:grid-cols-3 sm:grid-cols-2 gap-4"> {/* Add styling classes */}
        
        {reviewData.map((review, index) => (
            <div key={`review-${index}`} className="review-card border p-4 hover:shadow-[0px_0px_15px_#ddd] transition-shadow duration-200"> {/* Unique key for each review */}
                <div className="flex items-center gap-4">
                    <div className="size-14">
                        <Image src={review.img} alt={`${review.name}'s profile`} className="client-image w-full h-full object-cover" />
                    </div>

                    <div>
                        <h3 className="review-name font-semibold">{review.name}</h3>
                        <p className="review-date text-sm">{review.date}</p>
                        <div className="flex gap-2 items-center text-xs">
                            <div className="review-stars flex">{review.stars}</div>
                            <p className="review-rating">{review.rating}</p>
                        </div>
                    </div>
                </div>
                <div className="review-details text-sm pt-4">

                    <p className="review-description">{review.description}</p>
                </div>
            </div>
        ))}
    </div>
        </div>
    );
}
