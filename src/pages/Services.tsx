
import React, { useEffect } from "react";
import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { 
  Car, Plane, Route, HeartPulse, Clock, Users, ShoppingBag, 
  Briefcase, MapPin, CalendarClock, PhoneCall 
} from "lucide-react";

const Services = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Nos services - Taxi Saverne";
  }, []);

  const mainServices = [
    {
      icon: <Car size={36} className="text-taxi-yellow" />,
      title: "Courses en ville",
      description: "Transport rapide et fiable pour tous vos déplacements dans Saverne et sa périphérie. Idéal pour vos rendez-vous, vos sorties ou vos achats."
    },
    {
      icon: <Plane size={36} className="text-taxi-yellow" />,
      title: "Transferts aéroports & gares",
      description: "Service ponctuel pour vos arrivées et départs, avec suivi des horaires en temps réel. Nous desservons les aéroports de Strasbourg, Bâle-Mulhouse et les gares de la région."
    },
    {
      icon: <HeartPulse size={36} className="text-taxi-yellow" />,
      title: "Transport médical non urgent",
      description: "Trajets vers hôpitaux, cliniques ou médecins dans le confort et en toute sécurité. Service attentionné pour vos rendez-vous médicaux."
    },
    {
      icon: <Route size={36} className="text-taxi-yellow" />,
      title: "Longue distance",
      description: "Pour vos déplacements en dehors de la région, nous proposons un service de longue distance confortable et sur mesure. Tarifs forfaitaires disponibles."
    },
    {
      icon: <Users size={36} className="text-taxi-yellow" />,
      title: "Mise à disposition",
      description: "Service à l'heure pour vos événements professionnels ou personnels. Idéal pour les mariages, séminaires ou visites touristiques."
    },
    {
      icon: <Clock size={36} className="text-taxi-yellow" />,
      title: "Service 24/7",
      description: "Disponible jour et nuit, 7j/7, pour répondre à tous vos besoins de déplacement, planifiés ou imprévus. Un simple appel suffit."
    }
  ];

  const additionalServices = [
    {
      icon: <ShoppingBag size={24} className="text-taxi-yellow" />,
      title: "Accompagnement shopping",
      description: "Pour vos séances de shopping, nous pouvons vous attendre et vous aider avec vos paquets."
    },
    {
      icon: <Briefcase size={24} className="text-taxi-yellow" />,
      title: "Déplacements professionnels",
      description: "Service adapté aux besoins des entreprises, avec facturation mensuelle possible."
    },
    {
      icon: <MapPin size={24} className="text-taxi-yellow" />,
      title: "Visites touristiques",
      description: "Découvrez Saverne et sa région avec un chauffeur qui connaît les meilleurs sites."
    },
    {
      icon: <CalendarClock size={24} className="text-taxi-yellow" />,
      title: "Réservation à l'avance",
      description: "Planifiez vos déplacements en réservant votre taxi plusieurs jours à l'avance."
    }
  ];

  return (
    <Layout>
      {/* Header */}
      <section className="pt-32 pb-16 bg-gray-50">
        <div className="taxi-container">
          <motion.div 
            className="max-w-3xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-taxi-black mb-6">Nos services</h1>
            <p className="text-xl text-taxi-gray-dark">
              Découvrez notre gamme complète de services de taxi adaptés à tous vos besoins de déplacement.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Services */}
      <section className="taxi-section bg-white">
        <div className="taxi-container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mainServices.map((service, index) => (
              <motion.div
                key={index}
                className="taxi-card h-full flex flex-col"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true, margin: "-50px" }}
              >
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-taxi-yellow/10 rounded-lg mr-4 flex-shrink-0">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold text-taxi-black">{service.title}</h3>
                </div>
                <p className="text-taxi-gray-dark flex-grow mb-4">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="taxi-section bg-gray-50">
        <div className="taxi-container">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <motion.h2 
              className="section-title"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              Services complémentaires
            </motion.h2>
            <motion.p 
              className="section-subtitle"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              En plus de nos services principaux, nous proposons des prestations supplémentaires pour répondre à tous vos besoins.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {additionalServices.map((service, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md border border-gray-100"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true, margin: "-50px" }}
              >
                <div className="flex items-start">
                  <div className="p-2 bg-taxi-yellow/10 rounded-lg mr-4 mt-1 flex-shrink-0">
                    {service.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-2 text-taxi-black">{service.title}</h3>
                    <p className="text-taxi-gray-dark">{service.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="taxi-section bg-white">
        <div className="taxi-container">
          <div className="bg-taxi-yellow/10 rounded-2xl p-8 md:p-12">
            <div className="max-w-3xl mx-auto text-center">
              <motion.h2 
                className="text-3xl font-bold mb-6 text-taxi-black"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true, margin: "-100px" }}
              >
                Besoin d'un service sur mesure ?
              </motion.h2>
              <motion.p 
                className="text-xl text-taxi-gray-dark mb-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true, margin: "-100px" }}
              >
                N'hésitez pas à nous contacter pour discuter de vos besoins spécifiques. Nous sommes là pour vous proposer une solution adaptée.
              </motion.p>
              <motion.div 
                className="flex flex-col sm:flex-row justify-center gap-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true, margin: "-100px" }}
              >
                <a 
                  href="tel:0601020304" 
                  className="btn-primary flex items-center justify-center gap-2"
                >
                  <PhoneCall size={18} />
                  <span>06 01 02 03 04</span>
                </a>
                <Link 
                  to="/contact" 
                  className="btn-dark flex items-center justify-center gap-2"
                >
                  <span>Demander un devis</span>
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
