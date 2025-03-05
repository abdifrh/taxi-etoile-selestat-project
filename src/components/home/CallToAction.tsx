
import React from "react";
import { Link } from "react-router-dom";
import { Phone, Mail } from "lucide-react";
import { motion } from "framer-motion";
import { useIsMobile } from "@/hooks/use-mobile";

const CallToAction = () => {
  const isMobile = useIsMobile();
  
  return (
    <section className="py-16 md:py-20 relative overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 bg-taxi-black/80 z-10"></div>
      <div 
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ 
          backgroundImage: "url('img/taxi-night.jpg')",
          filter: "brightness(0.4) blur(2px)"
        }}
      ></div>
      
      <div className="taxi-container relative z-20 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto text-center">
          <motion.h2 
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            Besoin d'un taxi à Sélestat ?
          </motion.h2>
          
          <motion.p 
            className="text-lg sm:text-xl text-gray-300 mb-8 md:mb-10 px-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            Contactez-nous dès maintenant pour réserver votre course ou obtenir un devis personnalisé.
          </motion.p>
          
          <motion.div 
            className="flex flex-col md:flex-row items-center justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <a 
              href="tel:0601020304" 
              className="btn-primary flex items-center justify-center gap-2 w-full md:w-auto"
            >
              <Phone size={isMobile ? 16 : 18} />
              <span>Appeler maintenant</span>
            </a>
            <Link 
              to="/contact" 
              className="btn-outline border-white text-white hover:bg-white/20 flex items-center justify-center gap-2 w-full md:w-auto"
            >
              <Mail size={isMobile ? 16 : 18} />
              <span>Nous contacter</span>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
