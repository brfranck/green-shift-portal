import { motion } from "framer-motion";
import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react";
import { Button } from "./ui/button";

export const SocialProof = () => {
  const socialLinks = [
    { icon: Facebook, href: "https://facebook.com/greenshift", label: "Facebook" },
    { icon: Twitter, href: "https://twitter.com/greenshift", label: "Twitter" },
    { icon: Linkedin, href: "https://linkedin.com/company/greenshift", label: "LinkedIn" },
    { icon: Instagram, href: "https://instagram.com/greenshift", label: "Instagram" }
  ];

  return (
    <section className="py-16 bg-secondary">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4">
            Rejoignez notre communauté
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Suivez-nous sur les réseaux sociaux pour rester informé de nos dernières actualités et innovations en matière de développement durable.
          </p>
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex justify-center gap-4 mb-8"
        >
          {socialLinks.map((social, index) => (
            <Button
              key={index}
              variant="outline"
              size="lg"
              className="bg-white hover:bg-primary hover:text-white transition-colors duration-300"
              asChild
            >
              <a
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
              >
                <social.icon className="w-5 h-5" />
              </a>
            </Button>
          ))}
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center"
        >
          <p className="text-sm text-gray-500">
            Déjà plus de 10 000 abonnés nous font confiance
          </p>
        </motion.div>
      </div>
    </section>
  );
};