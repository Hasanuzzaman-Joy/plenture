import { NavLink, Link } from 'react-router';

const link = <div className='flex text-lg font-medium'>
    <li><NavLink to='/'>Home</NavLink></li>
    <li><NavLink to='/Plants'>All Plants</NavLink></li>
    <li><NavLink to='/addPlant'>Add Plant</NavLink></li>
    <li><NavLink to='/myPlants'>My Plants</NavLink></li>
    <li><NavLink to='/login'>Login</NavLink></li>
    <li><NavLink to='/register'>Register</NavLink></li>
</div>

const Header = () => {
    return (
        <div className="navbar w-full md:w-11/12 mx-auto">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu bg-[#d7e1db] font-bold menu-sm dropdown-content rounded-box z-1 mt-3 w-52 p-2 shadow">
                        {link}
                    </ul>
                </div>
                <div className='w-30'>
                    <img src="https://i.ibb.co/Wv1hYvK4/logo.png" alt="logo" />
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {link}
                </ul>
            </div>
            <div className="navbar-end flex gap-4">
                <Link to='/login' className='btn btn-primary md:px-8'>Login</Link>
                <Link to='/register' className='btn btn-primary md:px-8'>Register</Link>
            </div>
            {/* {
                user ?
                    (<div className="navbar-end flex gap-4">
                        <div className="dropdown dropdown-left dropdown-bottom">
                            <div tabIndex={0}>
                                <div className="avatar avatar-online cursor-pointer">
                                    <div className="w-10 rounded-full">
                                        <img src={user.photoURL} />
                                    </div>
                                </div>
                            </div>
                            <ul
                                tabIndex={0}
                                className="menu dropdown-content rounded-box z-10 w-[220px] p-2 shadow-lg bg-[#d7e1db]"
                            >
                                <li className='border-b-[1px] border-[#a7a7a7]'><h1 className='bg-transparent active:bg-transparent focus:bg-transparent font-bold'>Balance : {amount} BDT</h1></li>
                                <li><button onClick={signOut} className='bg-transparent active:bg-transparent focus:bg-transparent font-bold'>Log Out</button></li>
                            </ul>
                        </div>
                    </div>
                    ) : (
                        <div className="navbar-end flex gap-4">
                            <Link to='/login' className='btn btn-outline btn-primary md:px-8'>Login</Link>
                            <Link to='/register' className='btn btn-primary md:px-8'>Register</Link>
                        </div>
                    )
            } */}
        </div>
    );
};

export default Header;