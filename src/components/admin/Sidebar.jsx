import { NavLink, useNavigate } from 'react-router'
import logo from '../../assets/logo.png'

const Sidebar = () => {
    const navigate = useNavigate()
    return (
        <div className='p-3 py-8 w-52 md:w-64 h-screen gradient-bg hidden md:flex flex-col justify-between'>

            <div className='space-y-4'>
                <div className='flex items-center gap-3'>
                    <img className='size-8' src={logo} />
                    <h1 className='text-xl font-bold text-amber-600'>Neura</h1>
                </div>
                <div className='w-full h-[1px] bg-gray-600' />
                <div className='flex flex-col gap-2 list-none'>
                    <li className=' p-1  hover:bg-blue-400 active:bg-blue-400 cursor-pointer duration-300 font-semibold text-base'>Dashboard</li>
                    <NavLink to={'/admin/create-blog'}  className=' p-1  hover:bg-blue-400 active:bg-blue-400 cursor-pointer duration-300 font-semibold text-base'>Create Blog</NavLink>
                    <li className=' p-1 hover:bg-blue-400 active:bg-blue-400 cursor-pointer duration-300 font-semibold text-base'>Payment History</li>
                    <li className=' p-1  hover:bg-blue-400 active:bg-blue-400 cursor-pointer duration-300 font-semibold text-base'>Manage User</li>
                </div>
            </div>
        </div>
    )
}

export default Sidebar