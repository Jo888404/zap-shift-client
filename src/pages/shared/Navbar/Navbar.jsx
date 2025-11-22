// import React from 'react';

import { Link, NavLink } from "react-router";
import Profastlogo from "../Profastlogo/Profastlogo";
import useAuth from "../../../hooks/useAuth";

const Navbar = () => {

    const { user, logOut } = useAuth()

    const navItems = <div className="font-bold flex ">
        <li><NavLink to={"/services"}>Services</NavLink></li>
        <li><NavLink to={"/coverage"}>Coverage</NavLink></li>

        {
            user && <>
                <li><NavLink to={"/dashboard"}>Dashboard</NavLink></li>
                <li><NavLink to={"/addParcel"}>Send Parcel</NavLink></li>
            </>
        }


        <li><NavLink to={"/about"}>About Us</NavLink></li>
        <li><NavLink to="/pricing">Pricing</NavLink></li>
        <li><NavLink to="/rider">Be a Rider</NavLink></li>

    </div>



        const handleLogout =()=>{
            logOut()
            .then()
            .catch(error =>{
                console.log(error)
            })
        }

    return (
        <div className="navbar  shadow-sm bg-white text-black mt-4 rounded">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex="-1"
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow text-white">
                        {navItems}
                    </ul>
                </div>
                <Link to={"/"} className=" text-xl"><Profastlogo></Profastlogo></Link>
            </div>
            <div className="navbar-center hidden lg:flex ">
                <ul className="menu menu-horizontal px-1">
                    {navItems}
                </ul>
            </div>
            <div className="navbar-end">


            {
                user ? <Link onClick={handleLogout} className="btn  mr-2 font-extrabold border-none hover:bg-info ">Sign Out</Link>
                :
                 <Link to="/login" className="btn  mr-2 font-extrabold border-none hover:bg-info ">Sign In</Link>
            }

               
              {
                user ? <Link className="btn bg-[#CAEB66] text-black font-extrabold border-none">Be a rider</Link>
                :
                <Link to="/register" className="btn btn-primary mr-2 font-extrabold border-none hover:bg-info ">SignUp</Link>
              }     
                
            </div>



        </div>
    );
};

export default Navbar;