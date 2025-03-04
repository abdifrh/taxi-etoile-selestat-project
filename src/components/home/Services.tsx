
import React from "react";
import { Car, Plane, HeartPulse, Clock, Users } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const services = [
  {
    icon: <Car size={24} />,
    title: "Courses en ville",
    description: "Transport rapide et fiable pour tous vos déplacements dans Saverne et sa périphérie.",
    delay: 0
  },
  {
    icon: <Plane size={24} />,
    title: "Transferts aéroports/gares",
    description: "Service ponctuel pour vos arrivées et départs, avec suivi des horaires en temps réel.",
    delay: 0.1
  },
  {
    icon: <HeartPulse size={24} />,
    title: "Transport médical",
    description: "Trajets vers hôpitaux, cliniques ou médecins dans le confort et en toute sécurité.",
    delay: 0.2
  },
  {
    icon: <Users size={24} />,
    title: "Mise à disposition",
    description: "Service à l'heure pour vos événements professionnels ou personnels.",
    delay: 0.3
  }
];

const Services = () => {
  return (
    <section className="py-12 md:py-16 lg:py-20 bg-gray-50">
      <div className="taxi-container px-4 sm:px-6">
        <div className="text-center mb-10 md:mb-16">
          <motion.h2 
            className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4 text-taxi-black"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            Nos services
          </motion.h2>
          <motion.p 
            className="text-lg text-taxi-gray-dark max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            Des solutions de transport adaptées à tous vos besoins
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border-l-4 border-transparent hover:border-taxi-yellow"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: service.delay }}
              viewport={{ once: true, margin: "-50px" }}
            >
              <div className="bg-taxi-yellow/10 p-3 rounded-full inline-block mb-4">
                {service.icon}
              </div>
              <h3 className="text-lg font-bold mb-2 text-taxi-black">{service.title}</h3>
              <p className="text-taxi-gray-dark text-sm">{service.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="mt-10 md:mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <Link to="/services" className="btn-primary inline-flex items-center gap-2">
            <span>Voir tous nos services</span>
            <Clock size={18} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
