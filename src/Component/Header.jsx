
import { useContext } from 'react';
import { NavLink, Link } from 'react-router';
import AuthContext from '../Context/AuthContext';
import { MdOutlineWbSunny } from "react-icons/md";
import { PiMoonStarsFill } from "react-icons/pi";

const Header = () => {

    const { user, logOut, theme, setTheme } = useContext(AuthContext);

    const link = (
        <>
            <li><NavLink to='/' className="px-4 py-2 hover:bg-[#c4f5d4] hover:text-[#40b93c] text-base font-semibold rounded-md">Home</NavLink></li>
            <li><NavLink to='/Plants' className="px-4 py-2 hover:bg-[#c4f5d4] hover:text-[#40b93c] text-base font-semibold rounded-md">All Plants</NavLink></li>
            <li><NavLink to='/addPlant' className="px-4 py-2 hover:bg-[#c4f5d4] hover:text-[#40b93c] text-base font-semibold rounded-md">Add Plant</NavLink></li>
            <li><NavLink to='/myPlants' className="px-4 py-2 hover:bg-[#c4f5d4] hover:text-[#40b93c] text-base font-semibold rounded-md">My Plants</NavLink></li>

            {!user && (
                <>
                    <li><NavLink to='/login' className="px-4 py-2 hover:bg-[#c4f5d4] hover:text-[#40b93c] text-base font-semibold rounded-md md:hidden">Login</NavLink></li>
                    <li><NavLink to='/register' className="px-4 py-2 hover:bg-[#c4f5d4] hover:text-[#40b93c] text-base font-semibold rounded-md md:hidden">Register</NavLink></li>
                </>
            )}
        </>
    );

    const logOutForm = () => {
        logOut()
    }

    const toogleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light')
    }

    return (
        <div className="navbar w-full md:w-11/12 mx-auto border-b-[0.5px] border-[#dbdbdb]">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu bg-[#acffd1] dark:text-black font-bold menu-sm dropdown-content rounded-box z-1 mt-3 w-52 p-2 shadow">
                        {link}
                    </ul>
                </div>
                <div className='flex justify-center items-center -ml-4 md:ml-0'>
                    <img src="https://i.ibb.co/7NvMPFQp/logo2.png" className='w-16' alt="logo" />
                    <h1 className='text-[#006838] font-bold text-base md:text-xl -ml-[7px]'>Plenture</h1>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {link}
                </ul>
            </div>

            {
                user ?
                    (<div className="navbar-end flex gap-4">
                        <button onClick={toogleTheme}
                            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
                            className='p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:gray-600 transition-colors cursor-pointer'>
                            {
                                theme === 'dark' ? (
                                    <span className='text-xl'><MdOutlineWbSunny /></span>
                                ) : (
                                    <span className='text-xl'><PiMoonStarsFill /></span>
                                )
                            }
                        </button>
                        <div className="dropdown dropdown-left dropdown-bottom">
                            <div tabIndex={0}>
                                <div className="avatar avatar-online cursor-pointer">
                                    <div className="w-10 rounded-full dark:border-[1px] dark:border-white">
                                        <img src={user.photoURL} />
                                    </div>
                                </div>
                            </div>
                            <ul
                                tabIndex={0}
                                className="menu dropdown-content rounded-box z-10 w-[220px] p-2 shadow-lg bg-[#d7e1db] dark:text-black"
                            >
                                <li className='border-b-[1px] border-[#a7a7a7]'><h1 className='bg-transparent active:bg-transparent focus:bg-transparent font-bold'>{user.displayName}</h1></li>
                                <li><button onClick={logOutForm} className='bg-transparent active:bg-transparent focus:bg-transparent font-bold'>Log Out</button></li>
                            </ul>
                        </div>
                    </div>
                    ) : (
                        <div className="navbar-end flex gap-1 md:gap-4">
                            <button onClick={toogleTheme}
                                aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
                                className='p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:gray-600 transition-colors cursor-pointer'>
                                {
                                    theme === 'dark' ? (
                                        <span className='text-xl'><MdOutlineWbSunny /></span>
                                    ) : (
                                        <span className='text-xl'><PiMoonStarsFill /></span>
                                    )
                                }
                            </button>
                            <Link to='/login' className='btn bg-[#006838] hover:bg-[#40b93c] text-[12px] md:text-sm text-white md:px-8 hidden md:flex'>Login</Link>
                            <Link to='/register' className='btn bg-[#40b93c] hover:bg-[#006838] text-[12px] md:text-sm text-white md:px-8 hidden md:flex'>Register</Link>
                        </div>
                    )
            }
        </div>
    );
};

export default Header;