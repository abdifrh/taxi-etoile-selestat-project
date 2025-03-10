
import React from "react";
import { Link } from "react-router-dom";
import { Phone, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import { useIsMobile } from "@/hooks/use-mobile";

const Hero = () => {
  const isMobile = useIsMobile();
  
  return (
    <section className="relative pt-28 md:pt-36 pb-16 md:pb-24 overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 bg-black/60 z-10"></div>
      <div 
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ 
          backgroundImage: "url('img/hero-home.jpg')",
          filter: "brightness(0.6)"
        }}
      ></div>
      
      {/* Content */}
      <div className="taxi-container relative z-20 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-block bg-taxi-yellow text-taxi-black font-medium px-3 sm:px-4 py-1 rounded-full mb-4 sm:mb-6 text-sm sm:text-base">
              Transport confortable et sécurisé
            </span>
          </motion.div>
          
          <motion.h1 
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 leading-tight px-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            Votre taxi de confiance à Sélestat et ses environs !
          </motion.h1>
          
          <motion.p 
            className="text-lg sm:text-xl text-gray-200 mb-6 sm:mb-10 px-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            Service professionnel disponible 24h/24 et 7j/7 pour tous vos déplacements en ville, vers les gares, aéroports ou rendez-vous médicaux.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row items-center justify-center gap-4 px-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
          >
            <a 
              href="tel:+33754111018" 
              className="btn-primary flex items-center justify-center gap-2 w-full sm:w-auto"
            >
              <Phone size={isMobile ? 16 : 18} />
              <span>07 45 11 10 18</span>
            </a>
            <Link 
              to="/contact" 
              className="btn-outline bg-white/10 text-white border-white hover:bg-white/20 flex items-center justify-center gap-2 w-full sm:w-auto"
            >
              <span>Contactez-nous</span>
              <ChevronRight size={isMobile ? 16 : 18} />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
