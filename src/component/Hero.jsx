import React from 'react';
import { brand1, brand2, brand3 } from '../assets';

function Hero() {
    return (
        <div class="grid grid-cols-2">
            <div className='w-100% h-[545px] mt-[86px]'>
                <div className='mt-[150px] px-[50px]'>
                     <h1 className='text-[40px] font-bold cursor-pointer flex'>Brand Info</h1>
                    <p className='text-[20px]'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis porro est laborum inventore consectetur accusantium voluptates magnam possimus. Dignissimos dicta officia earum autem optio! Mollitia eos explicabo neque optio vitae.</p>
                    <button className='text-white bg-orange-600 p-2 rounded-2xl mt-[7px]'>Explore Now</button>
                </div>
            </div>
            <div className='w-100% h-[545px] bg mt-[86px]'>
                <img src={brand1} alt='brand image' className='w-100% h-[545px] flex justify-center' />
            </div>
        </div>
    )
}

export default Hero