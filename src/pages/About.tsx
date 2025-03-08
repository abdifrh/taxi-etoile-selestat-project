
import React, { useEffect } from "react";
import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import { Shield, Award, Clock, ThumbsUp } from "lucide-react";

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "À propos - Taxi Saverne";
  }, []);

  const values = [
    {
      icon: <Shield size={24} />,
      title: "Sécurité",
      description: "Véhicules régulièrement entretenus et conduite responsable pour votre sécurité."
    },
    {
      icon: <Clock size={24} />,
      title: "Ponctualité",
      description: "Nous respectons les horaires et votre temps est précieux pour nous."
    },
    {
      icon: <Award size={24} />,
      title: "Qualité",
      description: "Un service haut de gamme pour une expérience de transport agréable."
    },
    {
      icon: <ThumbsUp size={24} />,
      title: "Fiabilité",
      description: "Un service sur lequel vous pouvez compter, quelles que soient les circonstances."
    }
  ];

  return (
    <Layout>
      {/* Header */}
      <section className="pt-32 pb-16 bg-gray-50">
                {/* Background with overlay */}
       <div className="absolute inset-0 bg-black/60 z-10"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{ 
            backgroundImage: "url('/img/contact-img.jpg')",
            filter: "brightness(0.6)"
          }}
        ></div>
        <div className="taxi-container">
          <motion.div 
            className="max-w-3xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-taxi-black mb-6">À propos de nous</h1>
            <p className="text-xl text-taxi-gray-dark">
              Découvrez l'histoire et les valeurs qui animent notre service de taxi à Saverne.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story */}
      <section className="taxi-section bg-white">
        <div className="taxi-container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <img 
                src="/img/img-about.jpg" 
                alt="Taxi driver in Saverne" 
                className="rounded-lg shadow-xl w-full h-auto"
              />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <span className="inline-block bg-taxi-yellow text-taxi-black px-4 py-1 rounded-full mb-4 font-medium">
                Notre histoire
              </span>
              <h2 className="text-3xl font-bold mb-6 text-taxi-black">
                Une passion pour le service depuis 2010
              </h2>
              <p className="text-taxi-gray-dark mb-4">
                Fondée en 2010 par Jean Dupont, notre entreprise de taxi est née d'une passion pour le service et d'une volonté d'offrir aux habitants de Saverne et ses environs un moyen de transport fiable, confortable et personnalisé.
              </p>
              <p className="text-taxi-gray-dark mb-4">
                Après plus de 10 ans d'expérience dans le secteur du transport de personnes, nous avons développé une connaissance approfondie de la région et des besoins spécifiques de notre clientèle.
              </p>
              <p className="text-taxi-gray-dark">
                Aujourd'hui, nous continuons à servir notre communauté avec le même engagement et la même passion qu'à nos débuts, en veillant à ce que chaque trajet soit une expérience agréable pour nos clients.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="taxi-section bg-gray-50">
        <div className="taxi-container">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <motion.span 
              className="inline-block bg-taxi-yellow text-taxi-black px-4 py-1 rounded-full mb-4 font-medium"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              Nos valeurs
            </motion.span>
            <motion.h2 
              className="section-title"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              Ce qui guide nos actions au quotidien
            </motion.h2>
            <motion.p 
              className="section-subtitle"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              Notre mission est de vous offrir un service de taxi exceptionnel, guidé par des valeurs fortes qui définissent notre approche.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                className="taxi-card text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true, margin: "-50px" }}
              >
                <div className="taxi-icon-container mx-auto">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-taxi-black">{value.title}</h3>
                <p className="text-taxi-gray-dark">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Driver */}
      <section className="taxi-section bg-white">
        <div className="taxi-container">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
            <motion.div
              className="lg:col-span-3"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <span className="inline-block bg-taxi-yellow text-taxi-black px-4 py-1 rounded-full mb-4 font-medium">
                Votre chauffeur
              </span>
              <h2 className="text-3xl font-bold mb-6 text-taxi-black">
                Un professionnel à votre service
              </h2>
              <p className="text-taxi-gray-dark mb-4">
                Jean Dupont, fondateur et chauffeur principal de Taxi Saverne, possède plus de 15 ans d'expérience dans le transport de personnes. Titulaire de la carte professionnelle de taxi depuis 2008, il connaît parfaitement Saverne et sa région.
              </p>
              <p className="text-taxi-gray-dark mb-4">
                Sa priorité : votre confort et votre sécurité. Discret, ponctuel et courtois, il saura vous accompagner dans tous vos déplacements avec professionnalisme.
              </p>
              <p className="text-taxi-gray-dark mb-6">
                Jean se perfectionne régulièrement à travers des formations continues pour vous garantir un service de qualité optimale en toutes circonstances.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center">
                  <div className="h-2 w-2 bg-taxi-yellow rounded-full mr-2"></div>
                  <span>Carte professionnelle de taxi</span>
                </li>
                <li className="flex items-center">
                  <div className="h-2 w-2 bg-taxi-yellow rounded-full mr-2"></div>
                  <span>Formation aux premiers secours</span>
                </li>
                <li className="flex items-center">
                  <div className="h-2 w-2 bg-taxi-yellow rounded-full mr-2"></div>
                  <span>Conduite éco-responsable</span>
                </li>
                <li className="flex items-center">
                  <div className="h-2 w-2 bg-taxi-yellow rounded-full mr-2"></div>
                  <span>Parle français, anglais et allemand</span>
                </li>
              </ul>
            </motion.div>
            
            <motion.div
              className="lg:col-span-2"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <img 
                src="https://randomuser.me/api/portraits/men/77.jpg" 
                alt="Jean Dupont - Taxi driver" 
                className="rounded-lg shadow-xl w-full h-auto"
              />
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
