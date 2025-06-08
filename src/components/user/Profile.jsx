import React from 'react'
import { FaUser } from 'react-icons/fa'

const Profile = () => {
    return (
        <div>
            <div className="dropdown dropdown-end">
                <div tabIndex={0} role="button">
                    <div className='p-2 bg-green-800 rounded-full ring-2 ring-blue-400 hover:bg-green-900 hover:ring-yellow-800 cursor-pointer transition duration-300 delay-75'>
                        <FaUser size={20} />
                    </div>
                </div>
                <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                    <li><a>Item 1</a></li>
                    <li><a>Item 2</a></li>
                </ul>
            </div>
        </div>
    )
}

export default Profile