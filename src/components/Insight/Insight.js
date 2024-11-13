import { insightData } from "@/db/db";

export default function Insight() {
    return (
        <div className="lg:p-6 p-4 my-8">
            <div className="font-semibold lg:text-xl text-lg">Insight</div>
            <div className="insight-list grid lg:grid-cols-4 sm:grid-cols-2 gap-4 mt-5">
                {insightData.map((item) => (
                    <div key={item.id} className="insight-item mb-4">
                        {/* Display the head */}
                        <h3 className="font-semibold lg:text-lg text-base">{item.head}</h3>

                        {/* Map through each text item */}
                        <ul className="mt-2 space-y-1 text-sm list-disc">
                            {item.text.map((textItem, index) => (
                                <li key={index} className="text-sm text-gray-700 whitespace-nowrap overflow-hidden text-ellipsis">
                                    {textItem}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    )
}