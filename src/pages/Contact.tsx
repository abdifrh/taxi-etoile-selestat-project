
import React, { useEffect } from "react";
import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import { Phone, Mail, MapPin, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Contact - Taxi Saverne";
  }, []);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast({
      title: "Message envoyé !",
      description: "Nous vous répondrons dans les plus brefs délais.",
      variant: "default",
    });
    // Reset form
    (e.target as HTMLFormElement).reset();
  };

  return (
    <Layout>
      <section className="pt-32 pb-20 relative">
        {/* Background with overlay */}
        <div className="absolute inset-0 bg-black/60 z-10"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{ 
            backgroundImage: "url('/img/contact-img.jpg')",
            filter: "brightness(0.6)"
          }}
        ></div>
        
        <div className="taxi-container relative z-20">
          <motion.h1 
            className="text-4xl md:text-5xl font-bold text-white mb-6 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            Contactez-nous
          </motion.h1>
          
          <motion.p 
            className="text-xl text-gray-200 mb-10 text-center max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            Besoin d'un taxi à Saverne ou ses environs ? N'hésitez pas à nous contacter par téléphone ou via le formulaire ci-dessous.
          </motion.p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="taxi-container">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div 
              className="bg-white rounded-lg shadow-lg p-8"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <h2 className="text-2xl font-bold mb-6 text-taxi-black">Envoyez-nous un message</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-taxi-gray-dark mb-2">Nom</label>
                    <input 
                      type="text" 
                      id="name" 
                      name="name" 
                      required
                      className="w-full px-4 py-2 border border-taxi-gray-medium rounded-md focus:outline-none focus:ring-2 focus:ring-taxi-yellow"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-taxi-gray-dark mb-2">Email</label>
                    <input 
                      type="email" 
                      id="email" 
                      name="email" 
                      required
                      className="w-full px-4 py-2 border border-taxi-gray-medium rounded-md focus:outline-none focus:ring-2 focus:ring-taxi-yellow"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-taxi-gray-dark mb-2">Téléphone</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    name="phone"
                    className="w-full px-4 py-2 border border-taxi-gray-medium rounded-md focus:outline-none focus:ring-2 focus:ring-taxi-yellow"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-taxi-gray-dark mb-2">Message</label>
                  <textarea 
                    id="message" 
                    name="message" 
                    rows={5} 
                    required
                    className="w-full px-4 py-2 border border-taxi-gray-medium rounded-md focus:outline-none focus:ring-2 focus:ring-taxi-yellow"
                  ></textarea>
                </div>
                
                <button 
                  type="submit"
                  className="bg-taxi-yellow hover:bg-taxi-yellow-light text-taxi-black font-medium px-6 py-3 rounded-md transition-colors duration-300 flex items-center justify-center gap-2"
                >
                  <Send size={18} />
                  <span>Envoyer le message</span>
                </button>
              </form>
            </motion.div>
            
            {/* Contact Information */}
            <motion.div 
              className="space-y-8"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <div>
                <h2 className="text-2xl font-bold mb-6 text-taxi-black">Nos coordonnées</h2>
                <p className="text-taxi-gray-dark mb-8">
                  N'hésitez pas à nous contacter par téléphone pour une réservation immédiate ou par email pour toute demande d'information.
                </p>
              </div>
              
              <div className="bg-taxi-gray-light p-6 rounded-lg space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-taxi-yellow p-3 rounded-full">
                    <Phone className="text-taxi-black" size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-taxi-black">Téléphone</h3>
                    <p className="text-taxi-gray-dark">Disponible 7j/7, 24h/24</p>
                    <a 
                      href="tel:0601020304" 
                      className="text-lg font-medium text-taxi-black hover:text-taxi-yellow-dark transition-colors mt-1 block"
                    >
                      +33 7 45 11 10 18
                    </a>
                    <a 
                      href="tel:0951156560" 
                      className="text-lg font-medium text-taxi-black hover:text-taxi-yellow-dark transition-colors mt-1 block"
                    >
                      +33 9 51 15 65 60
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-taxi-yellow p-3 rounded-full">
                    <Mail className="text-taxi-black" size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-taxi-black">Email</h3>
                    <p className="text-taxi-gray-dark">Réponse sous 24h</p>
                    <a 
                      href="mailto:contact@taxietoile.com" 
                      className="text-lg font-medium text-taxi-black hover:text-taxi-yellow-dark transition-colors mt-1 block"
                    >
                      contact@taxietoile.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-taxi-yellow p-3 rounded-full">
                    <MapPin className="text-taxi-black" size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-taxi-black">Zone de service</h3>
                    <p className="text-taxi-gray-dark">Sélestat et ses environs</p>
                    <p className="text-lg font-medium text-taxi-black mt-1">
                      Bas-Rhin (67600)
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-taxi-black p-6 rounded-lg text-white">
                <h3 className="font-bold text-taxi-yellow mb-4">Horaires de service</h3>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Lundi - Vendredi</span>
                    <span className="font-medium">24h/24</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Samedi</span>
                    <span className="font-medium">24h/24</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Dimanche et jours fériés</span>
                    <span className="font-medium">24h/24</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
