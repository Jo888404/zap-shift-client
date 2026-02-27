// // import React from 'react';

// import { Link, NavLink } from "react-router";
// import Profastlogo from "../Profastlogo/Profastlogo";
// import useAuth from "../../../hooks/useAuth";
// import useAdmin from "../../../hooks/useAdmin";
// import NavbarProfile from "./NavbarProfile";

// const Navbar = () => {

//     const { user,} = useAuth()
//     console.log(user)
//     const isAdmin = useAdmin();

//     const navItems = <div className="font-bold flex ">
//         <li><NavLink to={"/services"}>Services</NavLink></li>

//         {/* <li>
//             {user && (
//                 <NavLink to={"/my-orders"}>
//                     My Orders   
//                 </NavLink>
//             )}
//         </li> */}

//         {
//             user && <>
//                 <li><NavLink to={"/my-orders"}>My Orders</NavLink></li>

//             </>
//         }

//         <li><NavLink to={"/coverage"}>Coverage</NavLink></li>

//         {
//             user && isAdmin && <>
//                 <li><NavLink to={"/dashboard"}>Dashboard</NavLink></li>

//             </>
//         }
//         {/* <li><NavLink to={"/addParcel"}>Send Parcel</NavLink></li> */}


//         <li><NavLink to={"/about"}>About Us</NavLink></li>
//         {/* <li><NavLink to="/pricing">Pricing</NavLink></li> */}
//         <li><NavLink to="/rider">Be a Driver</NavLink></li>

//     </div>



//     // const handleLogout = () => {
//     //     logOut()
//     //         .then()
//     //         .catch(error => {
//     //             console.log(error)
//     //         })
//     // }

//     return (
//         <div className="navbar  shadow-sm bg-white text-black mt-4 rounded">
//             <div className="navbar-start">
//                 <div className="dropdown">
//                     <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
//                         <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
//                     </div>
//                     <ul
//                         tabIndex="-1"
//                         className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow text-white">
//                         {navItems}
//                     </ul>
//                 </div>
//                 <Link to={"/"} className=" text-xl"><Profastlogo></Profastlogo></Link>
//             </div>
//             <div className="navbar-center hidden lg:flex ">
//                 <ul className="menu menu-horizontal px-1">
//                     {navItems}
//                 </ul>
//             </div>
//             <div className="navbar-end">


               



//                 {/* Auth Buttons */}
//                 <div className="flex items-center gap-2">
//                     {user ? (
//                         // <button
//                         //     onClick={handleLogout}
//                         //     className="btn btn-sm md:btn-md font-extrabold border-none hover:bg-info"
//                         // >
//                         //     Sign Out
//                         // </button>
//                         <NavbarProfile user={user}></NavbarProfile>
//                     ) : (
//                         <>
//                             <Link
//                                 to="/login"
//                                 className="btn btn-sm md:btn-md font-extrabold border-none hover:bg-info"
//                             >
//                                 Sign In
//                             </Link>

//                             <Link
//                                 to="/register"
//                                 className="btn btn-sm md:btn-md btn-primary font-extrabold border-none hover:bg-info"
//                             >
//                                 Sign Up
//                             </Link>
//                         </>
//                     )}
//                 </div>




              

//             </div>



//         </div>
//     );
// };

// export default Navbar;




import { Link, NavLink } from "react-router-dom";
import Profastlogo from "../Profastlogo/Profastlogo";
import useAuth from "../../../hooks/useAuth";
import useAdmin from "../../../hooks/useAdmin";
import NavbarProfile from "./NavbarProfile";
import MobileSidebar from "./MobileSidebar";
import LanguageToggle from "../LanguageToggle/LanguageToggle";
import { useTranslation } from "react-i18next";

const Navbar = () => {
  const { user } = useAuth();
  const isAdmin = useAdmin();
  const { t } = useTranslation();

  const navItems = (
    <>
      <li>
        <NavLink to="/services">{t("services")}</NavLink>
      </li>

      {user && (
        <li>
          <NavLink to="/my-orders">{t("myorder")}</NavLink>
        </li>
      )}

      <li>
        <NavLink to="/coverage">{t("coverage")}</NavLink>
      </li>

      {user && isAdmin && (
        <li>
          <NavLink to="/dashboard">{t("dashboard")}</NavLink>
        </li>
      )}

      <li>
        <NavLink to="/about">{t("about")}</NavLink>
      </li>

      <li>
        <NavLink to="/rider">{t("driver")}</NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar  shadow-sm bg-neutral h-24 text-white mt-4 rounded ">
        {/* navbar shadow-md bg-white dark:bg-gray-800 dark:text-white mt-4 rounded px-4 */}

      {/* LEFT */}
      <div className="navbar-start">

        {/* 🔥 Mobile Sidebar */}
        <MobileSidebar navItems={navItems} />

        <span className="mx-auto">
          <Profastlogo />
        </span>
      </div>

      {/* CENTER - Desktop Menu */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 font-bold">
          {navItems}
        </ul>
      </div>



      {/* Language toggle  */}

      <div className="navbar-end flex items-center gap-4">
  <LanguageToggle />
</div>





      {/* RIGHT */}
      <div className="navbar-end">
        <div className="flex items-center gap-3">
          {user ? (
            <NavbarProfile user={user} />
          ) : (
            <>
              <Link
                to="/login"
                className="btn btn-sm font-bold"
              >
                {t("login")}
              </Link>

              <Link
                to="/register"
                className="btn btn-sm btn-primary font-bold"
              >
                {t("signup")}
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
