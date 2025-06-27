import { IoIosMail } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";
import { NavLink } from 'react-router';
import { FaTwitter, FaYoutube, FaFacebookF } from "react-icons/fa";

const Footer = () => {

    const link = <div className='flex flex-col md:flex-row gap-5 text-base font-bold'>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/Plants'>All Plants</NavLink></li>
        <li><NavLink to='/dashboard/addPlant'>Add Plant</NavLink></li>
        <li><NavLink to='/dashboard/myPlants'>My Plants</NavLink></li>
    </div>

    return (
        <footer className="bg-[#43d58552] text-base-content px-4 md:px-0 py-10">
            <div className="w-full md:w-11/12 max-w-7xl mx-auto flex flex-col items-center gap-12">
                {/* Logo */}
                <div className='flex justify-center items-center gap-1'>
                    <img src="https://i.ibb.co/7NvMPFQp/logo2.png" className='w-16' alt="logo" />
                    <h1 className='text-[#006838] font-bold text-xl -ml-[15px]'>Plenture</h1>
                </div>

                {/* Navigation */}
                <nav className="grid grid-flow-col gap-4 -mt-7">
                    <ul>
                        {link}
                    </ul>
                </nav>

                {/* Contact Info */}
                <nav>
                    <div>
                        <div className="flex justify-center items-center gap-2 -mt-6 mb-4">
                            <IoIosMail size={25} />
                            <h1 className="font-normal text-base"><strong>Email</strong>: abc@gmail.com</h1>
                        </div>
                        <div className="flex justify-center items-center gap-2 mb-4">
                            <FaPhoneAlt size={18} />
                            <h1 className="font-normal text-base"><strong>Phone</strong>: +880187723218</h1>
                        </div>
                    </div>

                    {/* Social Icons */}
                    <div className="flex justify-center gap-4 text-xl text-[#000000] -mb-5">
                        {/* Twitter */}
                        <a href="https://x.com/" target="_blank" rel="noopener noreferrer">
                            <FaTwitter className="hover:text-[#1DA1F2] transition-colors duration-200" />
                        </a>

                        {/* YouTube */}
                        <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer">
                            <FaYoutube className="hover:text-[#FF0000] transition-colors duration-200" />
                        </a>

                        {/* Facebook */}
                        <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                            <FaFacebookF className="hover:text-[#1877F2] transition-colors duration-200" />
                        </a>
                    </div>
                </nav>

                {/* Copyright */}
                <aside>
                    <p>
                        Copyright © {new Date().getFullYear()} - All right reserved by <strong>Plenture Ltd.</strong>
                    </p>
                </aside>
            </div>
        </footer>
    );
};

export default Footer;