import CarList from "./CarList";

export default function CarValidation() {
    return (
        <div className="lg:p-6 p-4 grid grid-cols-1 gap-4 lg:grid-cols-2">
            <div className="w-full p-4 border-2 rounded-md">
                <div className="text-[1.2rem]">Used Car Valuation</div>

                <form action="#">
                    <div className="">
                        <div className="">
                            <div>

                                <div className="grid grid-cols-2 py-4 text-sm">
                                    <div>
                                        <div>Are you looking to:</div>
                                        <div className="flex items-center gap-[4vw] mt-2">
                                            <label htmlFor="brand-one" className="flex gap-2 items-center">
                                                <input type="radio" name="brand-select" className="accent-darkOrange" id="brand-one" />
                                                <span>Buy</span>
                                            </label>

                                            <label htmlFor="brand-two" className="flex gap-2 items-center">
                                                <input type="radio" name="brand-select" className="accent-darkOrange" id="brand-two" />
                                                <span>Sell</span>
                                            </label>
                                        </div>
                                    </div>

                                    <div>
                                        <div>Are you looking to:</div>
                                        <div className="flex items-center gap-[4vw] mt-2">
                                            <label htmlFor="sell-one" className="flex gap-2 items-center">
                                                <input type="radio" name="sell-select" className="accent-darkOrange" id="sell-one" />
                                                <span>Buy</span>
                                            </label>

                                            <label htmlFor="sell-two" className="flex gap-2 items-center">
                                                <input type="radio" name="sell-select" className="accent-darkOrange" id="sell-two" />
                                                <span>Sell</span>
                                            </label>
                                        </div>
                                    </div>
                                </div>

                                <div className="sm:flex gap-4 grid grid-cols-2 justify-between flex-wrap text-sm">
                                    <select name="" id="" className="border-2 px-2 outline-none rounded-md py-2 bg-whiteColor sm:w-[30%] flex-shrink-0">
                                        <option value="Select Brand">Select Brand</option>
                                        <option value="demo1">demo1</option>
                                        <option value="demo2">demo2</option>
                                        <option value="demo3">demo3</option>
                                    </select>
                                    <select name="" id="" className="border-2 px-2 outline-none rounded-md py-2 sm:w-[30%] bg-whiteColor flex-shrink-0">
                                        <option value="Select Brand">Select Brand</option>
                                        <option value="demo1">demo1</option>
                                        <option value="demo2">demo2</option>
                                        <option value="demo3">demo3</option>
                                    </select>
                                    <select name="" id="" className="border-2 px-2 outline-none rounded-md py-2 sm:w-[30%] bg-whiteColor flex-shrink-0">
                                        <option value="Select Brand">Select Brand</option>
                                        <option value="demo1">demo1</option>
                                        <option value="demo2">demo2</option>
                                        <option value="demo3">demo3</option>
                                    </select>
                                    <select name="" id="" className="border-2 px-2 outline-none rounded-md py-2 sm:w-[30%] bg-whiteColor flex-shrink-0">
                                        <option value="Select Brand">Select Brand</option>
                                        <option value="demo1">demo1</option>
                                        <option value="demo2">demo2</option>
                                        <option value="demo3">demo3</option>
                                    </select>
                                    <select name="" id="" className="border-2 px-2 outline-none rounded-md py-2 sm:w-[30%] bg-whiteColor flex-shrink-0">
                                        <option value="Select Brand">Select Brand</option>
                                        <option value="demo1">demo1</option>
                                        <option value="demo2">demo2</option>
                                        <option value="demo3">demo3</option>
                                    </select>
                                    <select name="" id="" className="border-2 px-2 outline-none rounded-md py-2 sm:w-[30%] bg-whiteColor flex-shrink-0">
                                        <option value="Select Brand">Select Brand</option>
                                        <option value="demo1">demo1</option>
                                        <option value="demo2">demo2</option>
                                        <option value="demo3">demo3</option>
                                    </select>
                                    <select name="" id="" className="border-2 px-2 outline-none rounded-md py-2 sm:w-[30%] bg-whiteColor flex-shrink-0">
                                        <option value="Select Brand">Select Brand</option>
                                        <option value="demo1">demo1</option>
                                        <option value="demo2">demo2</option>
                                        <option value="demo3">demo3</option>
                                    </select>
                                    <select name="" id="" className="border-2 px-2 outline-none rounded-md py-2 sm:w-[30%] bg-whiteColor flex-shrink-0">
                                        <option value="Select Brand">Select Brand</option>
                                        <option value="demo1">demo1</option>
                                        <option value="demo2">demo2</option>
                                        <option value="demo3">demo3</option>
                                    </select>
                                    <select name="" id="" className="border-2 px-2 outline-none rounded-md py-2 sm:w-[30%] bg-whiteColor flex-shrink-0">
                                        <option value="Select Brand">Select Brand</option>
                                        <option value="demo1">demo1</option>
                                        <option value="demo2">demo2</option>
                                        <option value="demo3">demo3</option>
                                    </select>
                                    <select name="" id="" className="border-2 px-2 outline-none rounded-md py-2 sm:w-[30%] bg-whiteColor flex-shrink-0">
                                        <option value="Select Brand">Select Brand</option>
                                        <option value="demo1">demo1</option>
                                        <option value="demo2">demo2</option>
                                        <option value="demo3">demo3</option>
                                    </select>

                                    <button type="submit" className="py-2 sm:w-[64%] bg-darkOrange hover:bg-darkOrange/95 flex-shrink-0 text-sm text-whiteColor rounded-md">Search</button>
                                </div>
                            </div>
                        </div>

                    </div>
                </form>
            </div>

            <CarList />
        </div>
    )
}