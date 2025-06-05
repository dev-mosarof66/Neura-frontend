import React from 'react'
import Drawer from '../../components/admin/Drawer'
import Profile from '../../components/admin/Profile'
import Sidebar from '../../components/admin/Sidebar'


const Dashboard = () => {
    return (
        <div className='w-full h-screen gradient-overlay flex flex-col gap-2'>
            <section className='sm:hidden w-[95%] mx-auto flex items-center justify-between mt-4 '>
                <Drawer />
                <Profile />
            </section>
            <div className='flex flex-row gap-3'>
                <section>
                    <Sidebar />
                </section>
                <section className='flex-1'>02</section>
            </div>
        </div>
    )
}

export default Dashboard