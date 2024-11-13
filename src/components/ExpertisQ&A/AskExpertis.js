'use client'

import RecentQandA from "./RecentQ&A"

export default function AskExpertis() {
    return (
        <div className="lg:p-6 p-4 flex items-stretch gap-6 lg:flex-row flex-col">
            <div className="bg-slate-100 rounded-md lg:p-6 p-4 w-full">
                <div className="font-semibold lg:text-xl text-center">Ask the Expert?</div>

                <form action="#" className="text-sm space-y-5 mt-4">
                    <div className="space-y-2">
                        <div>Expert</div>
                        <select defaultValue="Select Expert for Asking Question" name="" id="" className="border-2 px-2 outline-none rounded-md py-2 w-full bg-whiteColor">
                            <option value="Select Expert for Asking Question" >Select Expert for Asking Question</option>
                            <option value="demo1" >demo1</option>
                            <option value="demo2" >demo2</option>
                            <option value="demo2" >demo3</option>
                        </select>
                    </div>

                    <div className="space-y-2">
                        <div>Your Question?</div>
                        <textarea name="" id="" placeholder="Write your Question...." cols="30" rows="7" className="border-2 px-2 outline-none  py-1 w-full bg-whiteColor resize-y rounded-md"></textarea>
                    </div>
                    <div className="space-y-2">
                        <div>Name</div>
                        <input placeholder="Enter your Name" type="text" name="name" id="" className="border-2 px-2 outline-none rounded-md py-2 w-full bg-whiteColor" required />
                    </div>
                    <div className="space-y-2">
                        <div>Email</div>
                        <input placeholder="Enter your Email Address" type="email" name="name" id="" className="border-2 px-2 outline-none rounded-md py-2 w-full bg-whiteColor" required />
                    </div>

                    <button type="submit" className="bg-darkOrange text-whiteColor block py-3 max-w-[400px] w-full text-center hover:bg-darkOrange/95 rounded-md mx-auto">Ask Now</button>
                </form>
            </div>

            <RecentQandA />
        </div>
    )
}