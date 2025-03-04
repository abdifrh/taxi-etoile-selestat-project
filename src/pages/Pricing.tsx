
import React, { useEffect } from "react";
import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { 
  Info, MapPin, Clock, Plane, Phone, Mail, AlertCircle, Check, X
} from "lucide-react";

const Pricing = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Nos tarifs - Taxi Saverne";
  }, []);

  const hourlyRates = [
    { hours: 1, price: "45€", description: "Idéal pour un court rendez-vous" },
    { hours: 2, price: "85€", description: "Pour vos rendez-vous médicaux" },
    { hours: 4, price: "160€", description: "Demi-journée shopping ou tourisme" },
    { hours: 8, price: "300€", description: "Journée complète à votre disposition" },
  ];

  const destinations = [
    { from: "Saverne", to: "Strasbourg", distance: "~45 km", price: "75€" },
    { from: "Saverne", to: "Strasbourg Aéroport", distance: "~55 km", price: "85€" },
    { from: "Saverne", to: "Aéroport Bâle-Mulhouse", distance: "~140 km", price: "210€" },
    { from: "Saverne", to: "Aéroport Frankfurt", distance: "~240 km", price: "350€" },
    { from: "Saverne", to: "Colmar", distance: "~80 km", price: "110€" },
    { from: "Saverne", to: "Haguenau", distance: "~40 km", price: "65€" },
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
            <h1 className="text-4xl md:text-5xl font-bold text-taxi-black mb-6">Nos tarifs</h1>
            <p className="text-xl text-taxi-gray-dark">
              Des tarifs clairs et transparents pour tous vos déplacements
            </p>
          </motion.div>
        </div>
      </section>

      {/* Price Info Banner */}
      <div className="bg-white py-6">
        <div className="taxi-container">
          <div className="bg-taxi-yellow/10 rounded-lg p-4 flex items-start">
            <Info size={24} className="text-taxi-yellow mr-4 flex-shrink-0 mt-1" />
            <p className="text-taxi-black-light">
              Tous nos tarifs sont indicatifs et peuvent varier en fonction des conditions spécifiques (heure, jour férié, conditions de circulation). 
              Pour un devis précis, n'hésitez pas à nous contacter directement.
            </p>
          </div>
        </div>
      </div>

      {/* Main Pricing */}
      <section className="taxi-section bg-white">
        <div className="taxi-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* City Pricing */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <div className="bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden h-full">
                <div className="bg-taxi-yellow p-6">
                  <h2 className="text-2xl font-bold text-taxi-black">Courses en ville</h2>
                  <p className="text-taxi-black-light">Tarifs pour les déplacements à Saverne et ses environs</p>
                </div>
                <div className="p-6">
                  <div className="mb-6">
                    <div className="flex justify-between border-b border-gray-200 pb-2 mb-2">
                      <span className="font-medium">Prise en charge</span>
                      <span className="font-semibold">2,50€</span>
                    </div>
                    <div className="flex justify-between border-b border-gray-200 pb-2 mb-2">
                      <span className="font-medium">Prix au kilomètre</span>
                      <span className="font-semibold">1,80€</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium">Heure d'attente</span>
                      <span className="font-semibold">30€</span>
                    </div>
                  </div>

                  <div className="bg-gray-50 p-4 rounded-lg mb-6">
                    <div className="flex items-start">
                      <Clock size={18} className="text-taxi-yellow mr-2 flex-shrink-0 mt-1" />
                      <p className="text-sm text-taxi-gray-dark">
                        Une majoration de 30% est appliquée la nuit (de 19h à 7h), les dimanches et jours fériés.
                      </p>
                    </div>
                  </div>

                  <h3 className="font-semibold text-lg mb-3">Exemples de trajets dans Saverne</h3>
                  <div className="space-y-2 mb-6">
                    <div className="flex justify-between">
                      <span>Gare SNCF → Centre-ville</span>
                      <span className="font-semibold">~8€</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Centre-ville → Hôpital</span>
                      <span className="font-semibold">~10€</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Centre-ville → Zone commerciale</span>
                      <span className="font-semibold">~12€</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Hourly Rates */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <div className="bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden h-full">
                <div className="bg-taxi-black p-6">
                  <h2 className="text-2xl font-bold text-white">Mise à disposition</h2>
                  <p className="text-gray-300">Tarifs à l'heure pour une mise à disposition du véhicule</p>
                </div>
                <div className="p-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                    {hourlyRates.map((rate, index) => (
                      <div key={index} className="bg-gray-50 p-4 rounded-lg">
                        <div className="text-2xl font-bold text-taxi-black mb-2">{rate.price}</div>
                        <div className="text-sm text-taxi-gray-dark mb-1">{rate.hours} heure{rate.hours > 1 ? 's' : ''}</div>
                        <div className="text-sm text-taxi-gray-dark">{rate.description}</div>
                      </div>
                    ))}
                  </div>

                  <div className="bg-taxi-yellow/10 p-4 rounded-lg mb-6">
                    <div className="flex items-start">
                      <Info size={18} className="text-taxi-yellow mr-2 flex-shrink-0 mt-1" />
                      <p className="text-sm text-taxi-gray-dark">
                        La mise à disposition inclut le véhicule et le chauffeur pour la durée indiquée. 
                        Idéal pour les événements, visites touristiques ou rendez-vous multiples.
                      </p>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center">
                      <Check size={18} className="text-green-500 mr-2" />
                      <span>Kilométrage inclus (jusqu'à 30km/h)</span>
                    </div>
                    <div className="flex items-center">
                      <Check size={18} className="text-green-500 mr-2" />
                      <span>Temps d'attente inclus</span>
                    </div>
                    <div className="flex items-center">
                      <Check size={18} className="text-green-500 mr-2" />
                      <span>Plusieurs arrêts possibles</span>
                    </div>
                    <div className="flex items-center">
                      <X size={18} className="text-red-500 mr-2" />
                      <span>Frais de péage non inclus</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Destinations */}
      <section className="taxi-section bg-gray-50">
        <div className="taxi-container">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <motion.h2 
              className="section-title"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              Trajets longue distance
            </motion.h2>
            <motion.p 
              className="section-subtitle"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              Prix forfaitaires pour les destinations courantes
            </motion.p>
          </div>

          <motion.div
            className="bg-white rounded-xl shadow-md overflow-hidden"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead className="bg-taxi-black text-white">
                  <tr>
                    <th className="px-6 py-4">Départ</th>
                    <th className="px-6 py-4">Destination</th>
                    <th className="px-6 py-4">Distance</th>
                    <th className="px-6 py-4">Prix (aller simple)</th>
                  </tr>
                </thead>
                <tbody>
                  {destinations.map((dest, index) => (
                    <tr 
                      key={index}
                      className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}
                    >
                      <td className="px-6 py-4 border-b border-gray-100">
                        <div className="flex items-center">
                          <MapPin size={16} className="text-taxi-yellow mr-2" />
                          {dest.from}
                        </div>
                      </td>
                      <td className="px-6 py-4 border-b border-gray-100">{dest.to}</td>
                      <td className="px-6 py-4 border-b border-gray-100">{dest.distance}</td>
                      <td className="px-6 py-4 border-b border-gray-100 font-semibold">{dest.price}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>

          <div className="mt-8 text-center">
            <motion.div
              className="bg-taxi-yellow/10 inline-block px-6 py-4 rounded-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <div className="flex items-center">
                <AlertCircle size={20} className="text-taxi-yellow mr-3" />
                <p className="text-taxi-black-light text-sm">
                  Prix aller simple. Pour un aller-retour, comptez 80% du prix pour le retour. Les prix incluent les frais de péage.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="taxi-section bg-white">
        <div className="taxi-container">
          <div className="bg-taxi-black rounded-2xl p-8 md:p-12 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
                Besoin d'un devis personnalisé ?
              </h2>
              <p className="text-gray-300 max-w-2xl mx-auto mb-8">
                Pour toute demande spécifique ou pour obtenir un devis précis adapté à vos besoins, 
                n'hésitez pas à nous contacter. Nous vous répondrons dans les plus brefs délais.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                <a 
                  href="tel:0601020304" 
                  className="bg-white hover:bg-gray-100 text-taxi-black font-medium px-6 py-3 rounded-md transition-all duration-300 flex items-center gap-2"
                >
                  <Phone size={18} />
                  <span>06 01 02 03 04</span>
                </a>
                <Link 
                  to="/contact" 
                  className="bg-taxi-yellow hover:bg-taxi-yellow-light text-taxi-black font-medium px-6 py-3 rounded-md transition-all duration-300 flex items-center gap-2"
                >
                  <Mail size={18} />
                  <span>Contactez-nous</span>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Pricing;
