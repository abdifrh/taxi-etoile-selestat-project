
import React from "react";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Marie Dubois",
    role: "Cliente régulière",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    stars: 5,
    text: "Service exceptionnel ! Je prends régulièrement ce taxi pour mes rendez-vous médicaux et je suis toujours satisfaite de la ponctualité et de la gentillesse du chauffeur."
  },
  {
    name: "Jean Martin",
    role: "Homme d'affaires",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    stars: 5,
    text: "Je recommande vivement ce service de taxi pour les trajets professionnels. Voiture impeccable, conduite sécurisée et chauffeur très courtois."
  },
  {
    name: "Sophie Laurent",
    role: "Touriste",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
    stars: 5,
    text: "Merci pour cette excellente prestation lors de notre séjour touristique à Saverne. Le chauffeur nous a fait découvrir la région avec passion."
  }
];

const TestimonialCard = ({ testimonial, index }: { testimonial: typeof testimonials[0], index: number }) => {
  return (
    <motion.div 
      className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true, margin: "-50px" }}
    >
      {/* Stars */}
      <div className="flex mb-4">
        {[...Array(testimonial.stars)].map((_, i) => (
          <Star key={i} size={16} className="fill-taxi-yellow text-taxi-yellow mr-1" />
        ))}
      </div>
      
      {/* Testimonial */}
      <p className="text-gray-700 mb-6 italic text-sm sm:text-base">"{testimonial.text}"</p>
      
      {/* Person */}
      <div className="flex items-center">
        <img 
          src={testimonial.image} 
          alt={testimonial.name} 
          className="w-10 h-10 sm:w-12 sm:h-12 rounded-full mr-4 object-cover"
        />
        <div>
          <h4 className="font-semibold text-taxi-black text-sm sm:text-base">{testimonial.name}</h4>
          <p className="text-xs sm:text-sm text-taxi-gray-dark">{testimonial.role}</p>
        </div>
      </div>
    </motion.div>
  );
};

const Testimonials = () => {
  return (
    <section className="py-12 md:py-16 lg:py-20 bg-gray-50">
      <div className="taxi-container px-4 sm:px-6">
        <div className="text-center mb-10 md:mb-16">
          <motion.span 
            className="inline-block bg-taxi-yellow-light text-taxi-black px-3 py-1 rounded-full mb-3 sm:mb-4 font-medium text-sm"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            Témoignages clients
          </motion.span>
          <motion.h2 
            className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4 text-taxi-black"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            Ce que nos clients disent de nous
          </motion.h2>
          <motion.p 
            className="text-lg text-taxi-gray-dark max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            La satisfaction de nos clients est notre priorité absolue
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
