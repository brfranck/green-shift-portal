import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Image } from "@/components/ui/image";

export const CaseStudies = () => {
  const studies = [
    {
      title: "Installation Solaire - Village de Kalonge",
      description: "Équipement de 50 ménages et une école primaire en systèmes solaires",
      impact: "-70% de dépenses en carburants fossiles",
      image: "/lovable-uploads/photo-1501286353178-1ec881214838"
    },
    {
      title: "Production de Compost - Région de Bukavu",
      description: "Transformation des déchets alimentaires en compost de haute qualité",
      impact: "30 agriculteurs bénéficiaires",
      image: "/lovable-uploads/photo-1487058792275-0ad4aaf24ca7"
    },
    {
      title: "Réduction Énergétique - Entreprise A",
      description: "Réduction de 40% de la consommation énergétique",
      impact: "-150 tonnes CO2/an",
      image: "/lovable-uploads/photo-1581091226825-a6a2a5aee158"
    }
  ];

  return (
    <Card className="bg-white/80 backdrop-blur-sm">
      <CardHeader>
        <CardTitle className="text-2xl text-primary">Études de Cas</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {studies.map((study, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            className="p-6 bg-secondary rounded-lg shadow-md hover:shadow-lg transition-shadow"
          >
            <div className="flex flex-col md:flex-row gap-6">
              <div className="w-full md:w-1/3">
                <img
                  src={study.image}
                  alt={study.title}
                  className="w-full h-48 object-cover rounded-lg"
                />
              </div>
              <div className="w-full md:w-2/3">
                <h3 className="text-xl font-semibold text-primary mb-3">
                  {study.title}
                </h3>
                <p className="text-gray-600 mb-3">{study.description}</p>
                <div className="flex items-center gap-2">
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                    Impact: {study.impact}
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </CardContent>
    </Card>
  );
};