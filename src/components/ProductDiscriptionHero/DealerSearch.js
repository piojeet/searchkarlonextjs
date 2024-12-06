import { Search } from 'lucide-react'
import React from 'react'
import GenralTools from '../GenralTools/GenralTools'

export default function DealerSearch() {

    const selectModel = [
        "demo",
        "demo",
        "demo"
    ]

    const avrage = [
        "demo",
        "demo",
        "demo"
    ]

    return (
        <div>
            <div className='space-y-2'>
                <div className='font-semibold'>Find a Hyundai dealership near to you</div>
                <p className='text-sm'>Active your current location or search through Pincode, City or location</p>
                <form action="">
                    <div className='space-y-1'>
                        <div>Select Dealership</div>
                        <div className='lg:text-sm text-xs flex items-center gap-8'>
                            <label htmlFor="sealect-dla" className='flex items-center gap-1 cursor-pointer'>
                                <input type="radio" id='sealect-dla' name='dealership' defaultChecked />
                                <span>Shoroom</span>
                            </label>
                            <label htmlFor="sealect-dlb" className='flex items-center gap-1 cursor-pointer'>
                                <input type="radio" id='sealect-dlb' name='dealership' />
                                <span>Service</span>
                            </label>
                        </div>
                    </div>

                    <div className='flex items-center justify-between sm:gap-4 gap-2 sm:flex-row flex-col mt-4'>
                        <select name="" id="" className='w-full py-2 text-sm rounded-md outline-none'>
                            <option value="" defaultChecked>Select Model</option>
                            {selectModel.map((item, index) => (
                                <option key={index}>{item}</option>
                            ))}
                        </select>

                        <div className='w-full flex items-center border rounded-md text-sm'>
                            <input type="text" className='w-full py-2 bg-whiteColor rounded-md outline-none border-none px-2' placeholder='Search by Pincode/location/city' />
                            <button className='px-2'><Search className='size-5' /></button>
                        </div>

                        <select name="" id="" className='w-full py-2 text-sm rounded-md outline-none'>
                            <option value="" defaultChecked>Select Model</option>
                            {avrage.map((item, index) => (
                                <option key={index}>{item}</option>
                            ))}
                        </select>
                    </div>


                </form>

                <div>
                    <div className='font-semibold'>Connect to the right car dealers</div>
                    <GenralTools />
                </div>
            </div>
        </div>
    )
}
