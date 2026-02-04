// import React from 'react';

import { Link } from "react-router";
import logo from "../../../assets/logo.png"
// import logo1 from "../../../assets/Challok-logos.png"

const Profastlogo = () => {
    return (
        <Link to={"/"}>
            <div className="flex items-end">
                <img className="mb-2" src={logo} alt="logo" />
                {/* <img className="mb-2 w-32 h-32" src={logo1} alt="logo" /> */}
                <p className="text-3xl font-bold -ml-2">Challok</p>
            </div>
        </Link>
    );
};

export default Profastlogo;