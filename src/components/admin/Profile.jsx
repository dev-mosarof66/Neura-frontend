import React from 'react'
import user from '../../assets/images/user.jpg'
import { FaUserAlt } from "react-icons/fa";
import { User } from 'lucide-react';


const Profile = () => {
    return (
        <div className='pr-3'>
            <div className="dropdown dropdown-end">
                <div tabIndex={0} role="button">
                    <div className='flex flex-row items-center gap-4 p-2 rounded-sm'>
                        <div className='size-10 rounded-full hover:ring-2 hover:ring-secondary active:ring-accent transition duration-300 delay-100 cursor-pointer ring-2 ring-accent group'>
                            <img className='size-10 rounded-full group-hover:opacity-85 transition-transform duration-300 delay-75' src={user} />
                        </div>
                    </div>

                </div>
                <ul tabIndex={0} className="dropdown-content menu gradient-bg rounded-box z-1 w-60 p-2 shadow-sm ">
                    <div className='flex flex-col font-semibold'>
                        <li className=' p-1 hover:bg-blue-400/50 rounded-sm transition duration-300 cursor-pointer'>
                            View Profile
                        </li>
                        <li className='p-1 hover:bg-blue-400/50 rounded-sm transition duration-300 cursor-pointer'>Notifications</li>
                        <li className='p-1 hover:bg-blue-400/50 rounded-sm transition duration-300 cursor-pointer'>Settings</li>
                        <li className='p-1 hover:bg-blue-400/50 rounded-sm transition duration-300 cursor-pointer'>Logout</li>
                    </div>
                </ul>
            </div>
        </div>
    )
}

export default Profile