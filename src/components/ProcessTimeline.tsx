import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

export const ProcessTimeline = () => {
  const steps = [
    {
      title: "Analyse Initiale",
      description: "Évaluation approfondie de votre situation actuelle",
    },
    {
      title: "Planification",
      description: "Développement d'une stratégie personnalisée",
    },
    {
      title: "Implémentation",
      description: "Mise en place des solutions recommandées",
    },
    {
      title: "Suivi",
      description: "Monitoring et ajustements continus",
    },
  ];

  return (
    <div className="space-y-8">
      {steps.map((step, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: index * 0.2 }}
        >
          <Card>
            <CardContent className="flex items-center gap-4 p-6">
              <div className="flex-shrink-0 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center">
                {index + 1}
              </div>
              <div>
                <h3 className="font-semibold text-lg">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
  );
};