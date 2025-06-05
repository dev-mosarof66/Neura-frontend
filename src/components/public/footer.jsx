import React from 'react'
import { FaFacebookF, FaTwitter, FaYoutube } from 'react-icons/fa6'

const Footer = () => {
    return (
        <div className='mt-5 w-full flex flex-col items-center justify-center pb-20 sm:pb-5'>
            <div className='w-full h-[1px] bg-gray-400'></div>

            <footer className="footer grid grid-cols-2 sm:footer-horizontal text-base-content p-10">
                <nav>
                    <h6 className="footer-title">Services</h6>
                    <a className="link link-hover">Branding</a>
                    <a className="link link-hover">Design</a>
                    <a className="link link-hover">Marketing</a>
                    <a className="link link-hover">Advertisement</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Company</h6>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Social</h6>
                    <div className="grid grid-flow-col gap-4">
                        <a href='https://youtube.com/@mathcrushers-bs7hy?si=6wAFu4SC4_gYzOtQ' className='hover:bg-white/50 cursor-pointer transition duration-300 delay-75 p-2 hover:text-accent' target='_blank'>
                            <FaTwitter size={20} />
                        </a>
                        <a href='https://youtube.com/@mathcrushers-bs7hy?si=6wAFu4SC4_gYzOtQ' target='_blank' className='hover:bg-white/50 cursor-pointer transition duration-300 delay-75 p-2 hover:text-accent'>
                            <FaYoutube size={20} />
                        </a>
                        <a href='https://youtube.com/@mathcrushers-bs7hy?si=6wAFu4SC4_gYzOtQ' target='_blank' className='hover:bg-white/50 cursor-pointer transition duration-300 delay-75 p-2 hover:text-accent'>
                            <FaFacebookF size={20} />
                        </a>
                    </div>
                </nav>
            </footer>
            <footer className="footer sm:footer-horizontal footer-center text-base-content p-4">
                <p className='flex items-center'>Copyright © {new Date().getFullYear()} - All right reserved by <span className='font-bold text-base text-secondary'>Neura</span></p>
            </footer>
        </div>
    )
}

export default Footer