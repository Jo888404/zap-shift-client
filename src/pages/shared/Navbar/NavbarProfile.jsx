import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaSignOutAlt, FaUserCircle, FaMoon, FaSun } from "react-icons/fa";
import useAuth from "../../../hooks/useAuth";
import { NavLink } from "react-router";


const NavbarProfile = ({ user }) => {
    const {logOut} = useAuth();

  const [open, setOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(true);
  const dropdownRef = useRef();

  // 🔥 Outside Click Close
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // 🌗 Dark Mode Toggle
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);



 const handleLogout = () => {
        logOut()
            .then()
            .catch(error => {
                console.log(error)
            })
    }









  return (
    <div className="relative" ref={dropdownRef}>
      {/* Avatar Button */}
      <div
        onClick={() => setOpen(!open)}
        className="w-10 h-10 rounded-full bg-gray-300 cursor-pointer overflow-hidden border-2 border-purple-500 flex items-center justify-center"
      >
        {user?.photoURL ? (
          <img
            src={user.photoURL}
            alt="profile"
            className="w-full h-full object-cover"
          />
        ) : (
          <FaUserCircle className="text-3xl text-gray-600" />
        )}
      </div>

      {/* Dropdown */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.25 }}
            className="absolute right-0 mt-4 w-80 rounded-2xl shadow-2xl z-50
            bg-white dark:bg-gradient-to-b dark:from-[#14002b] dark:to-[#1e003d]
            text-black dark:text-white border border-purple-500/20"
          >
            {/* Profile Header */}
            <div className="flex flex-col items-center p-6 border-b border-purple-400/20">
              <div className="w-20 h-20 rounded-full bg-gray-200 overflow-hidden border-4 border-purple-400 shadow-lg flex items-center justify-center">
                {user?.photoURL ? (
                  <img
                    src={user.photoURL}
                    alt="profile"
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <FaUserCircle className="text-6xl text-gray-500" />
                )}
              </div>

              <h2 className="mt-3 text-lg font-semibold">
                {user?.displayName || "User Name"}
              </h2>

              <p className="text-sm text-gray-500 dark:text-gray-300">
                {user?.email}
              </p>

              <button className="mt-4 px-6 py-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg font-medium hover:scale-105 transition">
                View Profile
              </button>
            </div>

            {/* Menu */}
            <div className="p-4 space-y-3 text-sm">

              <NavLink to="my-orders"><MenuItem label="My Order" /></NavLink>
              {/* <MenuItem label="Bookmark" />
              <MenuItem label="Helpdesk" badge="New*" />
              <MenuItem label="Student Analytics" />
              <MenuItem label="Leaderboard" />
              <MenuItem label="Announcement" />
              <MenuItem label="Conceptual Sessions" /> */}
              <MenuItem label="Settings" />

              {/* Dark Mode Toggle */}
              <div
                onClick={() => setDarkMode(!darkMode)}
                className="flex items-center justify-between px-3 py-2 rounded-lg hover:bg-purple-500/10 cursor-pointer transition"
              >
                <span>Theme Mode</span>
                {darkMode ? <FaSun /> : <FaMoon />}
              </div>

              {/* Logout */}
              <div className="border-t border-purple-400/20 pt-3">
                <button onClick={handleLogout} className="flex items-center cursor-pointer gap-2 text-pink-500 hover:text-pink-600 transition">
                  <FaSignOutAlt />
                  Logout
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const MenuItem = ({ label, badge }) => {
  return (
    <div className="flex justify-between items-center hover:bg-purple-500/10 px-3 py-2 rounded-lg cursor-pointer transition">
      <span>{label}</span>
      {badge && (
        <span className="text-xs text-pink-500 font-medium">
          {badge}
        </span>
      )}
    </div>
  );
};

export default NavbarProfile;
