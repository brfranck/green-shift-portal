import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-primary to-primary-light p-6">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1501854140801-50d01698950b"
          alt="Paysage naturel"
          className="w-full h-full object-cover opacity-20"
        />
      </div>
      <div className="relative container mx-auto text-center z-10 animate-fade-up">
        <span className="inline-block px-4 py-1 mb-6 text-sm font-medium rounded-full bg-white/10 text-secondary backdrop-blur-sm">
          Ensemble pour un Avenir Durable
        </span>
        <h1 className="text-4xl md:text-6xl font-bold mb-6 text-secondary">
          Façonner un Avenir Durable
        </h1>
        <p className="text-lg md:text-xl text-secondary/90 max-w-2xl mx-auto mb-8">
          Notre mission est de créer un impact positif durable pour les générations futures 
          à travers des solutions innovantes et écologiques, en collaboration avec nos 
          communautés locales.
        </p>
        <Button
          asChild
          className="group bg-secondary text-primary hover:bg-secondary/90 transition-all duration-300"
        >
          <Link to="/services">
            Découvrez Nos Solutions
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </Button>
      </div>
    </section>
  );
};