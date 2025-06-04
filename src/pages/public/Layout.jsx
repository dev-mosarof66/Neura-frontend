import React, { useEffect } from 'react';
import Navbar from '../../components/public/nav';
import Tabs from '../../components/public/tabs';
import '../../css/public/Landing.css'
import Hero from '../../components/public/hero'
import { Outlet } from 'react-router';

const Layout = () => {
    useEffect(() => {
        document.title = `Neura`
    }, [])
    return (
        <div className="gradient-bg relative overflow-hidden h-screen">

            {/* Content */}
            <div className="relative z-10 min-h-screen h-screen flex flex-col">
                <Navbar />
                <div className='w-[93%] sm:w-[85%] mx-auto h-[96vh] py-20 overflow-y-scroll hide '>
                    <Outlet />
                </div>
                <div className='w-full sm:hidden '>
                    <Tabs />
                </div>
            </div>

        </div>
    );
};

export default Layout