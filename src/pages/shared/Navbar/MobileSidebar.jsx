import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenu } from "react-icons/hi";
import { IoClose } from "react-icons/io5";

const MobileSidebar = ({ navItems }) => {
  const [open, setOpen] = useState(false);
  const sidebarRef = useRef();

  // 🔥 Outside click close
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target)
      ) {
        setOpen(false);
      }
    };

    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [open]);

  return (
    <div className="lg:hidden">
      {/* Menu Button */}
      <button
        onClick={() => setOpen(true)}
        className="btn btn-ghost text-2xl"
      >
        <HiMenu />
      </button>

      {/* Overlay + Sidebar */}
      <AnimatePresence>
        {open && (
          <>
            {/* Dark Overlay */}
            <motion.div
              className="fixed inset-0 bg-black/40 z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />

            {/* Sidebar */}
            <motion.div
              ref={sidebarRef}
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ duration: 0.3 }}
              className="fixed top-0 left-0 h-full w-72 bg-white text-white dark:bg-gray-900 shadow-2xl z-50 p-5"
            >
              {/* Close Button */}
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-lg font-bold">Menu</h2>
                <button
                  onClick={() => setOpen(false)}
                  className="text-2xl"
                >
                  <IoClose />
                </button>
              </div>

              <ul
                onClick={() => setOpen(false)}
                className="space-y-4 font-semibold"
              >
                {navItems}
              </ul>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MobileSidebar;
