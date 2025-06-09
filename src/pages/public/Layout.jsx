import React, { useContext, useEffect } from 'react';
import Navbar from '../../components/public/nav';
import Tabs from '../../components/public/tabs';
import '../../css/public/Landing.css'
import { Outlet } from 'react-router';
import Footer from '../../components/public/footer';
import '../../css/public/Landing.css'
import Context from '../../context/context';
import { LogoutPopup } from '../../components/user/popup';
const Layout = () => {

    const { logoutPopup } = useContext(Context)
    useEffect(() => {
        document.title = `Neura`
    }, [])
    return (
        <div className="gradient-bg hide">

            {/* Content */}
            <div className="flex flex-col">
                <Navbar />
                <div className='w-[93%] sm:w-[85%] mx-auto py-20  overflow-y-scroll hide space-y-9 '>
                    <Outlet />
                </div>
                <Footer />
                <div className='w-full fixed bottom-0 sm:hidden '>
                    <Tabs />
                </div>
            </div>

            <div>
                {
                    logoutPopup && <LogoutPopup />
                }
            </div>

        </div>
    );
};

export default Layout