
import React from "react";
import { Shield, Clock, CreditCard, Heart } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    icon: <Shield className="text-taxi-yellow" size={32} />,
    title: "Sécurité garantie",
    description: "Tous nos véhicules sont régulièrement entretenus et conformes aux normes de sécurité les plus strictes."
  },
  {
    icon: <Clock className="text-taxi-yellow" size={32} />,
    title: "Ponctualité",
    description: "Nous nous engageons à respecter les horaires convenus pour tous vos déplacements."
  },
  {
    icon: <CreditCard className="text-taxi-yellow" size={32} />,
    title: "Paiement facile",
    description: "Paiement en espèces, par carte bancaire ou par virement pour votre confort."
  },
  {
    icon: <Heart className="text-taxi-yellow" size={32} />,
    title: "Service personnalisé",
    description: "Une attention particulière portée à chaque client pour un service sur mesure."
  }
];

const Features = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section className="py-12 md:py-16 lg:py-20 bg-white">
      <div className="taxi-container px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
            className="rounded-lg overflow-hidden shadow-xl order-2 md:order-1"
          >
            <img 
              src="https://images.unsplash.com/photo-1527844386361-60358deda5f4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1400&q=80" 
              alt="Taxi service in Saverne" 
              className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700"
              style={{ minHeight: "300px", maxHeight: "400px", objectPosition: "center" }}
            />
          </motion.div>

          {/* Features */}
          <div className="order-1 md:order-2 mb-8 md:mb-0">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-taxi-black">Pourquoi choisir notre service de taxi ?</h2>
              <p className="text-taxi-gray-dark mb-6 sm:mb-8">
                Nous mettons un point d'honneur à offrir un service de qualité supérieure à tous nos clients, avec une attention particulière aux détails qui font toute la différence.
              </p>
            </motion.div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="space-y-4 sm:space-y-6"
            >
              {features.map((feature, index) => (
                <motion.div 
                  key={index}
                  variants={itemVariants}
                  className="flex items-start"
                >
                  <div className="mr-4 mt-1">{feature.icon}</div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1 text-taxi-black">{feature.title}</h3>
                    <p className="text-taxi-gray-dark text-sm sm:text-base">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
