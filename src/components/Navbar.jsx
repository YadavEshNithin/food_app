import React, { useState } from 'react'
import { AiFillTag, AiOutlineClose, AiOutlineMenu, AiOutlineSearch } from "react-icons/ai"
import { BsFillCartFill, BsFillSaveFill } from "react-icons/bs"
import { TbTruckDelivery } from 'react-icons/tb'
import { MdFavorite, MdHelp } from 'react-icons/md'
import { FaWallet, FaUserFriends } from 'react-icons/fa'

const Navbar = () => {
    const [nav, setNav] = useState(false)
    return (
        <div className="max-w-[1640px] mx-auto flex items-center justify-between p-4">
            <div className="flex items-center">
                <div onClick={()=>setNav(!nav)} className="cursor-pointer">
                    <AiOutlineMenu size={30} />
                </div>
                <h1 className="text-2xl sm:text-3xl lg:text-4xl px-2">Best <span className="font-bold">Eats</span></h1>
                <div className="hidden lg:flex items-center bg-gray-200 rounded-full p-1 text-[14px]">
                    <p className="bg-black text-white rounded-full p-2">Delivery</p>
                    <p className="p-2">Pickup</p>
                </div>
            </div>

            <div className="flex items-center px-2 bg-gray-200 rounded-full w-[200px] sm:w-[400px] lg:w-[500px]">
                <AiOutlineSearch size={25} />
                <input className="bg-transparent focus:outline-none p-2 w-full" type="text" placeholder="Search foods" />
            </div>

            <button className="bg-black text-white  items-center py-2 hidden md:flex rounded-full">
                <BsFillCartFill size={20} className=
                    "mr-2" /> Cart
            </button>


            {
                nav ? <div className="bg-black/80 fixed w-full h-screen left-0 top-0 z-10"></div> : " "
            }

                <div className={nav ? "bg-white w-[300px] fixed h-screen left-0 top-0 duration-300 z-10" : "bg-white w-[300px] fixed h-screen left-[-100%] top-0 duration-300 z-10"}>

                    <AiOutlineClose size={30} onClick={()=>setNav(!nav)} className="absolute right-4 top-4 cursor-pointer" />
                    <h2 className="text-2xl p-4">Best <span className="font-bold">Eats</span></h2>
                    <nav>
                        <ul className="flex flex-col p-4 text-gray-800">
                            <li className="text-xl py-4 flex"><TbTruckDelivery size={25} className="mr-4" /> Orders</li>
                            <li className="text-xl py-4 flex"><MdFavorite size={25} className="mr-4" /> Favorites</li>
                            <li className="text-xl py-4 flex"><FaWallet size={25} className="mr-4" /> Wallet</li>
                            <li className="text-xl py-4 flex"><MdHelp size={25} className="mr-4" /> Help</li>
                            <li className="text-xl py-4 flex"><AiFillTag size={25} className="mr-4" /> Promotions</li>
                            <li className="text-xl py-4 flex"><BsFillSaveFill size={25} className="mr-4" /> Best Ones</li>
                            <li className="text-xl py-4 flex"><FaUserFriends size={25} className="mr-4" /> Invite Friends</li>
                        </ul>
                    </nav>

            </div>
        </div>
    )
}

export default Navbar