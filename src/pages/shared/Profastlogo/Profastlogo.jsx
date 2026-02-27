// import React from 'react';

import { Link } from "react-router";
import logo from "../../../assets/logo.png"
import logos from "../../../assets/banner/cha.png"

const Profastlogo = () => {
    return (
        <Link to={"/"}>
            <div className="flex items-end">
                <img className="mb-20 -mr-14" src={logo} alt="logo" />
            
                <img className="h-44" src={logos} alt="logo" />
                {/* <p className="text-3xl font-bold -ml-2">Challok</p> */}
            </div>
        </Link>
    );
};

export default Profastlogo;