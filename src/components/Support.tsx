import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { HandHeart, ArrowRight } from "lucide-react";

export const Support = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-secondary/50 to-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center"
        >
          <div className="flex justify-center mb-6">
            <HandHeart className="h-12 w-12 text-primary" />
          </div>
          <h2 className="text-3xl font-bold text-primary mb-6">
            Soutenez Notre Impact
          </h2>
          <p className="text-gray-600 mb-8">
            Nos actions pour le développement durable sont limitées par nos moyens logistiques et financiers. 
            Votre soutien peut nous aider à étendre notre impact et à mettre en œuvre davantage de projets 
            qui transforment positivement notre communauté.
          </p>
          <div className="space-y-6">
            <div className="bg-white/80 backdrop-blur-sm p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-primary mb-4">
                Comment pouvez-vous nous aider ?
              </h3>
              <ul className="text-left space-y-3 mb-6">
                <li className="flex items-start gap-2">
                  <ArrowRight className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                  <span>Soutien financier pour l'acquisition d'équipements et de matériaux</span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                  <span>Don de matériel et d'équipements pour nos projets</span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                  <span>Partage d'expertise et de connaissances techniques</span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                  <span>Partenariats pour étendre notre impact</span>
                </li>
              </ul>
            </div>
          </div>
          <Button
            asChild
            size="lg"
            className="mt-8 bg-primary text-white hover:bg-primary/90"
          >
            <Link to="/contact">
              Contactez-nous pour contribuer
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};