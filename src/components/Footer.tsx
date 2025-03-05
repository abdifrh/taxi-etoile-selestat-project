
import React from "react";
import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Facebook, Instagram, Clock } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-taxi-black text-white pt-12 pb-6">
      <div className="taxi-container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <img 
                src="/lovable-uploads/3faf51f3-d98f-48b5-b3b9-6c1699b47d22.png" 
                alt="Taxi Etoile Sélestat" 
                className="h-10" 
              />
            </Link>
            <p className="text-gray-300 text-sm">
              Votre service de taxi de confiance à Sélestat et ses environs. Transport professionnel, ponctuel et sécurisé pour tous vos déplacements.
            </p>
            <div className="flex space-x-4 pt-2">
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-taxi-yellow transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-taxi-yellow transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-medium mb-4 text-taxi-yellow">Liens rapides</h3>
            <ul className="space-y-2">
              {[
                { name: "Accueil", path: "/" },
                { name: "À propos", path: "/about" },
                { name: "Nos services", path: "/services" },
                { name: "Tarifs", path: "/pricing" },
                { name: "Contact", path: "/contact" }
              ].map((link) => (
                <li key={link.path}>
                  <Link 
                    to={link.path}
                    className="text-gray-300 hover:text-white hover:pl-1 transition-all duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-medium mb-4 text-taxi-yellow">Nos services</h3>
            <ul className="space-y-2">
              {[
                "Transport en ville",
                "Transfert aéroport/gare",
                "Transport médical",
                "Longue distance",
                "Mise à disposition"
              ].map((service, index) => (
                <li key={index}>
                  <Link 
                    to="/services"
                    className="text-gray-300 hover:text-white hover:pl-1 transition-all duration-200"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-medium mb-4 text-taxi-yellow">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Phone size={18} className="mr-3 text-taxi-yellow flex-shrink-0 mt-1" />
                <div>
                  <a 
                    href="tel:0601020304" 
                    className="text-white hover:text-taxi-yellow transition-colors"
                  >
                    06 01 02 03 04
                  </a>
                </div>
              </li>
              <li className="flex items-start">
                <Mail size={18} className="mr-3 text-taxi-yellow flex-shrink-0 mt-1" />
                <div>
                  <a 
                    href="mailto:contact@taxi-selestat.fr" 
                    className="text-white hover:text-taxi-yellow transition-colors"
                  >
                    contact@taxi-selestat.fr
                  </a>
                </div>
              </li>
              <li className="flex items-start">
                <MapPin size={18} className="mr-3 text-taxi-yellow flex-shrink-0 mt-1" />
                <span className="text-gray-300">Sélestat, Bas-Rhin (67600)</span>
              </li>
              <li className="flex items-start">
                <Clock size={18} className="mr-3 text-taxi-yellow flex-shrink-0 mt-1" />
                <span className="text-gray-300">7j/7 - 24h/24</span>
              </li>
            </ul>
          </div>
        </div>

        <hr className="border-gray-800 my-6" />
        
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
          <p>© {currentYear} Taxi Etoile Sélestat. Tous droits réservés.</p>
          <div className="mt-4 md:mt-0 space-x-4">
            <Link to="/privacy" className="hover:text-white transition-colors">Politique de confidentialité</Link>
            <Link to="/terms" className="hover:text-white transition-colors">Mentions légales</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
