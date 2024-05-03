import React, { useState } from 'react'
import { link } from '../details'
import { NavLink } from 'react-router-dom'
import Hero from './Hero'

export default function NavBar() {
    const [active, setActive] = useState("")
  return (
    <>
    <nav className=' w-full flex items-center py-3 fixed'>
         <div className=' w-full flex justify-end items-center max-w-7xl mx-auto  p-2 gap-10 '>
            {link.map((link)=>(
                <NavLink key={link.id} to={link.path} className={`${active === link.name ? 'bg-red-300' : ''} text-[20px] text-black hover:bg-green-300 rounded-2xl p-2 hover:text-white `} onClick={()=>setActive(link.name)}>{link.name}</NavLink>
            ))}
         </div>
    </nav>
    </>
    
  )
}
