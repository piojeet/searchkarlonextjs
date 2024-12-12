import Image from 'next/image';
import calculate from '../../../public/calculator.svg';
import rupee from '../../../public/currency-rupee.svg';
import mark from '../../../public/exclamation-circle.svg';
export default function MonthlyAndPriceBreakUp() {
    return (
        <div>
            <div>
                {/* <div className='flex border-2 rounded-md p-1 border-gray-500 bg-whiteColor gap-2'>
                <div className='flex items-center gap-1 text-sm bg-gray-500 rounded-md py-1.5 px-2 text-white w-full cursor-pointer'><Image src={calculate} alt='img' className='invert' /> Monthly EMI</div>
                <div className='flex items-center gap-1 text-sm bg-gray-500 rounded-md py-1.5 px-2 text-white w-full cursor-pointer'><Image src={rupee} alt='img' className='invert' /> Price Break-up</div>
            </div> */}

                <div className='space-y-4'>
                    <div className='flex items-center justify-between text-sm'>
                        <div>Ex-Showrom Price <Image src={mark} alt='img' className='inline-block rotate-180' /></div>

                        <div className='font-semibold text-sm'>₹ 0</div>
                    </div>
                    <div className='flex items-center justify-between text-sm'>
                        <div>Registration Charges <Image src={mark} alt='img' className='inline-block rotate-180' /></div>

                        <div className='font-semibold text-sm'>₹ 0</div>
                    </div>
                    <div className='flex items-center justify-between text-sm'>
                        <div>Insurance <Image src={mark} alt='img' className='inline-block rotate-180' /></div>

                        <div className='font-semibold text-sm'>₹ 0</div>
                    </div>
                    <div className='flex items-center justify-between text-sm'>
                        <div>Other Charges</div>

                        <div className='font-semibold text-sm'>₹ 0</div>
                    </div>

                    <div className='flex items-center justify-between text-sm border-t-2 py-2'>
                        <div>On-Road price <Image src={mark} alt='img' className='inline-block rotate-180' /></div>

                        <div className='font-semibold text-sm'>₹ 0</div>
                    </div>

                    <div className='w-fit mx-auto'>
                        <button className='py-2 text-sm bg-whiteColor px-4 rounded-sm'>Check On-Road Price</button>
                        <button className='py-2 text-sm bg-darkOrange px-4 rounded-sm text-white'>Get December Offers</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
