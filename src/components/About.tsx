import { Leaf, Shield, Globe } from "lucide-react";

const values = [
  {
    icon: Leaf,
    title: "Innovation Durable",
    description: "Nous développons des solutions écologiques innovantes pour répondre aux défis environnementaux de notre communauté.",
  },
  {
    icon: Shield,
    title: "Impact Social",
    description: "Notre engagement est de créer un changement positif durable tout en préservant les ressources naturelles pour les générations futures.",
  },
  {
    icon: Globe,
    title: "Action Collective",
    description: "Nous mobilisons notre communauté et nos partenaires pour amplifier notre impact environnemental et social.",
  },
];

export const About = () => {
  return (
    <section className="py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-up">
          <span className="text-sm font-medium text-primary-light">Notre Mission</span>
          <h2 className="text-3xl md:text-4xl font-bold text-primary mt-2">
            Notre Vision & Nos Valeurs
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Depuis 2022, nous œuvrons pour un avenir plus durable en développant des 
            solutions écologiques innovantes et en mobilisant notre communauté pour 
            un impact positif durable.
          </p>
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