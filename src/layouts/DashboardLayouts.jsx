import React from 'react';
import { Link, Outlet } from 'react-router';
import Profastlogo from '../pages/shared/Profastlogo/Profastlogo';
import {
    MdDashboard,
    MdLocalShipping,
    MdPayment,
    MdTrackChanges,
    MdPerson,
    
} from "react-icons/md";
import { FaUserCheck, FaUserClock } from 'react-icons/fa';





const DashboardLayouts = () => {
    return (

        <div className="drawer lg:drawer-open">

            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col  ">
                {/* Page content here */}



                <div className="navbar bg-base-300 w-full lg:hidden">
                    <div className="flex-none ">
                        <label htmlFor="my-drawer-2" aria-label="open sidebar" className="btn btn-square btn-ghost">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                className="inline-block h-6 w-6 stroke-current"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h16M4 18h16"
                                ></path>
                            </svg>
                        </label>

                    </div>
                    <div className="mx-2 flex-1 px-2 lg:hidden">Dashboard</div>
                    <div className="hidden flex-none lg:hidden">
                        <ul className="menu menu-horizontal">
                            {/* Navbar menu content here */}
                            <li><a>Navbar Item 1</a></li>
                            <li><a>Navbar Item 2</a></li>
                        </ul>
                    </div>
                </div>
                {/* Page content here */}

                <Outlet></Outlet>

            </div>



            <div className="drawer-side">
                <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                <ul className="menu bg-base-200 min-h-full w-80 p-4">
                    {/* Sidebar content here */}
                    <Profastlogo></Profastlogo>
                    {/* <li><Link to='/dashboard'>Home</Link></li>
                    <li><Link to='/dashboard/myParcels'>My Parcels</Link></li>
                    <li><Link to='/dashboard/paymentHistory'>Payment History</Link></li>
                    <li><Link to='/dashboard/track'>Track a Pakage</Link></li>
                    <li><Link to='/dashboard/profile'>Update Profile</Link></li> */}

                    <li>
                        <Link to="/dashboard" className="flex items-center gap-2">
                            <MdDashboard size={20} /> Home
                        </Link>
                    </li>

                    <li>
                        <Link to="/dashboard/myParcels" className="flex items-center gap-2">
                            <MdLocalShipping size={20} /> My Parcels
                        </Link>
                    </li>

                    <li>
                        <Link to="/dashboard/paymentHistory" className="flex items-center gap-2">
                            <MdPayment size={20} /> Payment History
                        </Link>
                    </li>

                    <li>
                        <Link to="/dashboard/track" className="flex items-center gap-2">
                            <MdTrackChanges size={20} /> Track a Package
                        </Link>
                    </li>

                    <li>
                        <Link to="/dashboard/profile" className="flex items-center gap-2">
                            <MdPerson size={20} /> Update Profile
                        </Link>
                    </li>

                    {/* Rider links */}
                    <li>
                        <Link to="/dashboard/hires" className="flex items-center gap-2">
                            <FaUserCheck size={20} /> Order Menu
                        </Link>
                    </li>
                    <li>
                        <Link to="/dashboard/pending-riders" className="flex items-center gap-2">
                            <FaUserClock size={20} /> Pending Riders
                        </Link>
                    </li>
                </ul>
            </div>
        </div>

    );
};

export default DashboardLayouts;