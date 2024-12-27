import { Leaf, Shield, Globe } from "lucide-react";

const values = [
  {
    icon: Leaf,
    title: "Innovation Durable",
    description: "Créer des solutions écologiques qui favorisent le changement positif.",
  },
  {
    icon: Shield,
    title: "Protection Environnementale",
    description: "Préserver les ressources de notre planète pour les générations futures.",
  },
  {
    icon: Globe,
    title: "Impact Global",
    description: "Faire la différence à l'échelle mondiale, une étape à la fois.",
  },
];

export const About = () => {
  return (
    <section className="py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-up">
          <span className="text-sm font-medium text-primary-light">À Propos</span>
          <h2 className="text-3xl md:text-4xl font-bold text-primary mt-2">
            Notre Mission & Nos Valeurs
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {values.map((value, index) => (
            <div
              key={index}
              className="p-6 rounded-lg bg-white shadow-sm hover:shadow-md transition-shadow duration-300 animate-fade-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <value.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-primary mb-2">
                {value.title}
              </h3>
              <p className="text-gray-600">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};