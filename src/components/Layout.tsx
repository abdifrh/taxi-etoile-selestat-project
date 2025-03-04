
import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Toaster } from "@/components/ui/toaster";
import { motion } from "framer-motion";
import { useTheme } from "@/hooks/use-theme";

interface LayoutProps {
  children: React.ReactNode;
}

const pageVariants = {
  initial: {
    opacity: 0,
    y: 10
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: "easeInOut"
    }
  },
  exit: {
    opacity: 0,
    y: -10,
    transition: {
      duration: 0.3,
      ease: "easeInOut"
    }
  }
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const { theme } = useTheme();
  
  return (
    <div className={`flex flex-col min-h-screen w-full overflow-x-hidden ${theme}`}>
      <Navbar />
      <motion.main 
        className="flex-grow dark:bg-gray-900 transition-colors duration-300"
        initial="initial"
        animate="animate"
        exit="exit"
        variants={pageVariants}
      >
        {children}
      </motion.main>
      <Footer />
      <Toaster />
    </div>
  );
};

export default Layout;
