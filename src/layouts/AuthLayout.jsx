import React from 'react';
import { Outlet } from 'react-router';
import authImage from "../assets/authImage.png"
import Profastlogo from '../pages/shared/Profastlogo/Profastlogo';


const AuthLayout = () => {
    return (

        <div className=" p-12">
            <div className=''>
                <Profastlogo></Profastlogo>
            </div>
            <div className="hero-content flex-col lg:flex-row-reverse p-15">
                <div className='flex-1'>
                    <img
                        src={authImage}
                        className="max-w-sm rounded-lg shadow-2xl"
                    />
                </div>
                <div className='flex-1'>
                    <Outlet></Outlet>
                </div>
            </div>
        </div>

    );
};

export default AuthLayout;