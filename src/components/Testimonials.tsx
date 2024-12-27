import { Star } from "lucide-react";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Marie Dubois",
    role: "Directrice RSE",
    company: "EcoSolutions France",
    content: "Green Shift nous a aidés à réduire notre empreinte carbone de 40% en seulement un an. Leur expertise et leur accompagnement ont été exceptionnels.",
    rating: 5
  },
  {
    name: "Thomas Laurent",
    role: "PDG",
    company: "Innovations Durables",
    content: "Une équipe professionnelle qui comprend vraiment les enjeux de la transition écologique. Leur approche personnalisée a fait toute la différence.",
    rating: 5
  },
  {
    name: "Sophie Martin",
    role: "Responsable Développement Durable",
    company: "GreenTech SA",
    content: "Les solutions proposées par Green Shift sont innovantes et efficaces. Nous avons vu des résultats concrets dès les premiers mois.",
    rating: 5
  }
];

export const Testimonials = () => {
  return (
    <section className="py-24 bg-primary/5">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-medium text-primary-light">Témoignages</span>
          <h2 className="text-3xl md:text-4xl font-bold text-primary mt-2">
            Ce que nos clients disent
          </h2>
        </motion.div>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-4 italic">{testimonial.content}</p>
              <div className="border-t pt-4">
                <p className="font-semibold text-primary">{testimonial.name}</p>
                <p className="text-sm text-gray-500">{testimonial.role}</p>
                <p className="text-sm text-primary-light">{testimonial.company}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};