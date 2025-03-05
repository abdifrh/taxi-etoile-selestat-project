
import React, { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { Phone, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useIsMobile } from "@/hooks/use-mobile";

const navItems = [
  { name: "Accueil", path: "/" },
  { name: "À propos", path: "/about" },
  { name: "Nos services", path: "/services" },
  { name: "Tarifs", path: "/pricing" },
  { name: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const isMobile = useIsMobile();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  const navbarClass = `fixed top-0 w-full z-50 transition-all duration-300 ${
    isScrolled
      ? "backdrop-blur-md bg-white/60 shadow-md py-2"
      : "backdrop-blur-sm bg-white/20 py-4"
  }`;

  const menuItemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.4,
        ease: "easeOut"
      }
    }),
    exit: { opacity: 0, y: -10 }
  };

  const mobileMenuVariants = {
    hidden: { opacity: 0, height: 0 },
    visible: {
      opacity: 1,
      height: "auto",
      transition: {
        duration: 0.4,
        ease: "easeInOut",
        staggerChildren: 0.1
      }
    },
    exit: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    }
  };

  return (
    <nav className={navbarClass}>
      <div className="taxi-container">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center"
          >
            <NavLink to="/" className="flex items-center">
              <img 
                src="/lovable-uploads/3faf51f3-d98f-48b5-b3b9-6c1699b47d22.png" 
                alt="Taxi Etoile Sélestat" 
                className="h-10 md:h-12" 
              />
            </NavLink>
          </motion.div>

          {/* Desktop menu */}
          {!isMobile && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="hidden md:flex items-center space-x-8"
            >
              {navItems.map((item, i) => (
                <motion.div 
                  key={item.path}
                  custom={i}
                  initial="hidden"
                  animate="visible"
                  variants={menuItemVariants}
                >
                  <NavLink
                    to={item.path}
                    className={({ isActive }) =>
                      `font-medium relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-taxi-yellow after:transition-all after:duration-300 
                      ${isActive 
                        ? "text-taxi-black after:w-full" 
                        : isScrolled 
                          ? "text-taxi-gray-dark hover:text-taxi-yellow after:w-0 hover:after:w-full"
                          : "text-taxi-black hover:text-taxi-yellow after:w-0 hover:after:w-full"}`
                    }
                  >
                    {item.name}
                  </NavLink>
                </motion.div>
              ))}
            </motion.div>
          )}

          {/* Phone number and mobile menu toggle */}
          <div className="flex items-center space-x-4">
            <motion.a
              href="tel:0601020304"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.3 }}
              className="bg-taxi-yellow text-taxi-black px-3 py-2 rounded-md flex items-center gap-2 font-medium shadow-sm hover:bg-taxi-yellow-light transition-all duration-300 hover:shadow-md"
            >
              <Phone size={18} />
              <span className="hidden sm:inline">06 01 02 03 04</span>
            </motion.a>

            {/* Mobile menu toggle */}
            {isMobile && (
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label={isMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
                className="block md:hidden p-2 text-taxi-black focus:outline-none"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            )}
          </div>
        </div>

        {/* Mobile navigation menu */}
        <AnimatePresence>
          {isMobile && isMenuOpen && (
            <motion.div
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={mobileMenuVariants}
              className="md:hidden mt-4 pb-4 overflow-hidden"
            >
              <div className="flex flex-col space-y-3 bg-white/90 backdrop-blur-md rounded-lg p-4 shadow-lg">
                {navItems.map((item, i) => (
                  <motion.div 
                    key={item.path}
                    custom={i}
                    variants={menuItemVariants}
                  >
                    <NavLink
                      to={item.path}
                      className={({ isActive }) =>
                        `block px-4 py-2 rounded-md transition-colors ${
                          isActive
                            ? "bg-taxi-yellow-light text-taxi-black font-medium"
                            : "text-taxi-gray-dark hover:text-taxi-yellow"
                        }`
                      }
                    >
                      {item.name}
                    </NavLink>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;
