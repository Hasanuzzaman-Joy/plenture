import { Outlet, useNavigation, Link } from 'react-router';
import Loading from '../Component/Loading';
import ScrollToTop from '../Component/ScrollToTop';
import { useContext, useState } from "react";
import { FaBars, FaTimes, FaLeaf, FaPlusCircle, FaListUl } from "react-icons/fa";
import AuthContext from '../Context/AuthContext';

const DashboardLayouts = () => {
    const navigation = useNavigation();
    const [isOpen, setIsOpen] = useState(false);
    const { user } = useContext(AuthContext);  

    return (
        <>
            {navigation.state === "loading" && <Loading />}
            <ScrollToTop />

            <div className="h-screen flex">

                {/* Sidebar */}
                <div className={`bg-[#40b93c] text-white w-64 h-full flex flex-col fixed md:static z-40 
                    transform transition-transform duration-300 pt-16 md:pt-0
                    ${isOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0`}>

                    {/* Sidebar Top */}
                    <div className="p-4 flex flex-col gap-2 border-b border-green-700">
                        <h1 className="text-2xl font-bold">Plenture</h1>

                        {/* User Info below logo */}
                        {user ? (
                            <div className="mt-2">
                                <p className="font-semibold">{user.name || "No Name"}</p>
                                <p className="text-sm text-green-200">{user.email || "No Email"}</p>
                            </div>
                        ) : (
                            <p className="mt-2 text-sm text-green-200">No user logged in</p>
                        )}
                    </div>

                    {/* Sidebar Links */}
                    <div className="flex flex-col flex-1 p-4 space-y-4">
                        <Link to='/dashboard/myPlants' className="bg-[#006838] hover:bg-[#00522e] text-white p-2 rounded font-semibold flex items-center gap-2">
                            <FaListUl />
                            My Plants
                        </Link>
                        <Link to='/dashboard/addPlant' className="bg-[#006838] hover:bg-[#00522e] text-white p-2 rounded font-semibold flex items-center gap-2">
                            <FaPlusCircle />
                            Add Plant
                        </Link>
                        <Link to='/dashboard/Plants' className="bg-[#006838] hover:bg-[#00522e] text-white p-2 rounded font-semibold flex items-center gap-2">
                            <FaLeaf />
                            All Plants
                        </Link>
                    </div>
                </div>

                {/* Mobile Top Navbar */}
                <div className="md:hidden fixed top-0 left-0 right-0 bg-[#40b93c] text-white flex justify-between items-center p-4 z-50">
                    <button className="text-2xl" onClick={() => setIsOpen(!isOpen)}>
                        {isOpen ? <FaTimes /> : <FaBars />}
                    </button>
                    <h1 className="text-xl font-bold">Plenture</h1>
                </div>

                {/* Main Content */}
                <div className="flex-1 bg-[#FAFAF9] p-4 overflow-auto">
                    <Outlet />
                </div>
            </div>
        </>
    );
};

export default DashboardLayouts;
