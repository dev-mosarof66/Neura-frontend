import React, { useContext } from 'react'
import { FaUser } from 'react-icons/fa'
import { Link } from 'react-router'
import Context from '../../context/context'

const Profile = () => {

    const {setLogoutPopup } = useContext(Context)

    return (
        <div>
            <div className="dropdown dropdown-end">
                <div tabIndex={0} role="button">
                    <div className='p-2 bg-green-800 rounded-full ring-2 ring-blue-400 hover:bg-green-900 hover:ring-yellow-800 cursor-pointer transition duration-300 delay-75'>
                        <FaUser size={20} />
                    </div>
                </div>
                <ul tabIndex={0} className="dropdown-content menu bg-[#003e84] rounded-box z-1 w-52 p-2 shadow-md shadow-black">
                    <Link to='/view-profile' className="w-full p-1 hover:bg-blue-300/10 cursor-pointer transition duration-500">View Profile</Link>
                    <Link onClick={()=> setLogoutPopup(true)} className="w-full p-1 hover:bg-blue-300/10 cursor-pointer transition duration-500">Logout</Link>
                </ul>
            </div>
        </div>
    )
}




export default Profile