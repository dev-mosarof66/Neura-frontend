import React, { useState } from 'react'
import Drawer from '../../components/admin/Drawer'
import Profile from '../../components/admin/Profile'
import Sidebar from '../../components/admin/Sidebar'
import Search from '../../components/admin/Search'
import { Outlet } from 'react-router'


const DashboardLayout = () => {
    const [input, setInput] = useState('')
    return (
        <div className='w-full h-screen gradient-overlay flex flex-col gap-2 relative'>
            <section className='sm:hidden w-[95%] mx-auto flex items-center justify-between mt-4 '>
                <Drawer input={input} setInput={setInput} />
                <Profile />
            </section>
            <div className='flex flex-row gap-3'>
                <section>
                    <Sidebar />
                </section>
                <section className='flex-1 flex flex-col'>
                    <div className='hidden sm:flex items-center justify-end pt-3 md:pr-8 gap-2'>
                        <Search input={input} setInput={setInput} />
                        <Profile />
                    </div>
                    <div className='w-full h-[1px] bg-secondary/40' />
                    <div>
                       <Outlet/>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default DashboardLayout