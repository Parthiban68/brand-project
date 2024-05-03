import React from 'react'
import { brand } from '../details'

const BrandCard = ({ image }) => {
    return (
        <div className='p-5 rounded-2xl sm:w-[360px] w-full'>
            <div className='relative w-full h-[100px] '>
                <img src={image} alt={name} className='w-[300px] h-full object-contain rounded-2xl ' />
            </div>
        </div>
    )
}

const Brand = () => {
    return (
        <div>
            <h1>Brands</h1>
            <div>
                {brand.map((brand, index) => (
                    <BrandCard index={index} {...brand} />
                ))}
            </div>
        </div>
    )
}

export default Brand