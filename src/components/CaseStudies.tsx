import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";

export const CaseStudies = () => {
  const studies = [
    {
      title: "Réduction Énergétique - Entreprise A",
      description: "Réduction de 40% de la consommation énergétique",
      impact: "-150 tonnes CO2/an",
    },
    {
      title: "Gestion des Déchets - Entreprise B",
      description: "Taux de recyclage augmenté à 85%",
      impact: "90% de déchets valorisés",
    },
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle>Études de Cas</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {studies.map((study, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            className="p-4 bg-secondary rounded-lg"
          >
            <h3 className="font-semibold text-primary">{study.title}</h3>
            <p className="text-sm text-muted-foreground mt-2">
              {study.description}
            </p>
            <p className="text-sm font-medium text-primary mt-2">
              Impact: {study.impact}
            </p>
          </motion.div>
        ))}
      </CardContent>
    </Card>
  );
};