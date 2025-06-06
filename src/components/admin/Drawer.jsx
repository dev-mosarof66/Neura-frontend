import React from 'react'
import logo from '../../assets/logo.png'
import { RiMenu2Line } from "react-icons/ri";
import SearchComp from './Search';

const Drawer = ({input,setInput}) => {
    
    return (
        <div className='w-full'>
            <div className="drawer w-full">
                <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    {/* Navbar */}
                    <div className="navbar w-full">
                        <div className="flex-none lg:hidden">
                            <label htmlFor="my-drawer-3" aria-label="open sidebar" >
                                <div className="cursor-pointer duration-300 p-1 hover:bg-gray-500/50 active:bg-gray-500/50 hover:text-secondary active:text-secondary">
                                    <RiMenu2Line size={25} />
                                </div>
                            </label>
                        </div>

                    </div>
                </div>

                <div className="drawer-side">
                    <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label>
                    <ul className="menu gradient-bg min-h-full w-60 p-4">
                        <div className='w-full h-[92vh] flex flex-col justify-between p-1'>
                            <div className='space-y-4'>
                                <div className='flex items-center gap-3'>
                                    <img className='size-8' src={logo} />
                                    <h1 className='text-xl font-bold text-amber-600'>Neura</h1>
                                </div>
                                <div>
                                    <SearchComp input={input} setInput={setInput} />
                                </div>
                                <div className='w-full h-[1px] bg-gray-600' />
                                <div className='flex flex-col gap-2'>
                                    <li className=' p-1  hover:bg-blue-400 active:bg-blue-400 cursor-pointer duration-300 font-semibold text-base'>Dashboard</li>
                                    <li className=' p-1  hover:bg-blue-400 active:bg-blue-400 cursor-pointer duration-300 font-semibold text-base'>Create Blog</li>
                                    <li className=' p-1 hover:bg-blue-400 active:bg-blue-400 cursor-pointer duration-300 font-semibold text-base'>Payment History</li>
                                    <li className=' p-1  hover:bg-blue-400 active:bg-blue-400 cursor-pointer duration-300 font-semibold text-base'>Manage User</li>
                                </div>
                            </div>

                        </div>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Drawer