import React, { useEffect, useState } from 'react'
import Drawer from '../../components/admin/Drawer'
import Profile from '../../components/admin/Profile'
import Sidebar from '../../components/admin/Sidebar'
import Search from '../../components/admin/Search'
import { Outlet } from 'react-router'
import axiosInstance from '../../utils/axios'


const DashboardLayout = () => {
    const [input, setInput] = useState('')

    useEffect(() => {
        axiosInstance.get('/admin/get-profile').then((res) => {
            console.log(res.data);

        }).catch((error) => {
            console.log(error.response.data);
        })
    }, [])

    return (
        <div className='w-full h-screen gradient-overlay flex flex-col gap-2 relative'>
            <section className='md:hidden w-full mx-auto flex items-center justify-between mt-4 '>
                <Drawer input={input} setInput={setInput} />
                <div className='w-full hidden xs:block'>
                    <Search input={input} setInput={setInput} />

                </div>
                <Profile />
            </section>
            <div className='flex flex-row w-full'>
                <section>
                    <Sidebar />
                </section>
                <section className='flex-1 flex flex-col'>
                    <div className='w-full hidden md:flex items-center justify-end pt-3 gap-2'>
                        <Search input={input} setInput={setInput} />
                        <Profile />
                    </div>
                    <div className='w-full hidden sm:block h-[1px] bg-secondary/40' />
                    <div className='w-[100%] sm:w-[100%] mx-auto h-[89vh] overflow-y-auto py-2'>
                        <Outlet />
                    </div>
                </section>
            </div>
        </div>
    )
}

export default DashboardLayout