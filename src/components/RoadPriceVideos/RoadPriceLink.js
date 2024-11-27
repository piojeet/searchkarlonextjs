import Link from 'next/link'
import React from 'react'

function RoadPriceLink() {
  return (
    <div className='bg-buttonColor py-2 text-sm px-4 text-whiteColor'>
        <div className='flex items-center lg:justify-between flex-wrap gap-4'>
            <Link href="#">Variants</Link>
            <Link href="#">Specifications</Link>
            <Link href="#">Features</Link>
            <Link href="#">Compare</Link>
            <Link href="#">Book Test Drive</Link>
            <Link href="#">Buy & Rent</Link>
            <Link href="#">EMI Calculator</Link>
            <Link href="#">Affordability Calculator</Link>
            <Link href="#">Compare Used Car</Link>
            <Link href="#">Reviews</Link>
        </div>
    </div>
  )
}

export default RoadPriceLink