
import React from "react";
import { Link } from "react-router-dom";
import { Phone, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="relative pt-28 pb-24 overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 bg-black/60 z-10"></div>
      <div 
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1400&q=80')",
          filter: "brightness(0.6)"
        }}
      ></div>
      
      {/* Content */}
      <div className="taxi-container relative z-20">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-block bg-taxi-yellow text-taxi-black font-medium px-4 py-1 rounded-full mb-6">
              Transport confortable et sécurisé
            </span>
          </motion.div>
          
          <motion.h1 
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            Votre taxi de confiance à Saverne et ses environs !
          </motion.h1>
          
          <motion.p 
            className="text-xl text-gray-200 mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            Service professionnel disponible 24h/24 et 7j/7 pour tous vos déplacements en ville, vers les gares, aéroports ou rendez-vous médicaux.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
          >
            <a 
              href="tel:0601020304" 
              className="btn-primary flex items-center justify-center gap-2 w-full sm:w-auto"
            >
              <Phone size={18} />
              <span>06 01 02 03 04</span>
            </a>
            <Link 
              to="/contact" 
              className="btn-outline bg-white/10 text-white border-white hover:bg-white/20 flex items-center justify-center gap-2 w-full sm:w-auto"
            >
              <span>Contactez-nous</span>
              <ChevronRight size={18} />
            </Link>
          </motion.div>
        </div>
      </div>
      
      {/* Decorative element */}
      <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-white to-transparent z-10"></div>
    </section>
  );
};

export default Hero;
