import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Projects = () => {
  const projects = [
    {
      title: "Reforestation Urbaine",
      description: "Programme de plantation d'arbres dans les zones urbaines.",
      impact: "5000 arbres plantés, réduction de 50 tonnes de CO2",
    },
    {
      title: "Énergie Solaire Communautaire",
      description: "Installation de panneaux solaires pour les communautés locales.",
      impact: "100 foyers équipés, 30% de réduction des coûts énergétiques",
    },
    {
      title: "Gestion des Déchets Innovante",
      description: "Système de tri et recyclage intelligent.",
      impact: "70% de réduction des déchets, création de 20 emplois locaux",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <div className="container mx-auto py-12 px-4 min-h-screen">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl font-bold text-primary mb-4">Nos Projets</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Découvrez l'impact de nos initiatives durables
        </p>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {projects.map((project, index) => (
          <motion.div key={index} variants={itemVariants}>
            <Card className="h-full bg-white/80 backdrop-blur-sm shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <CardTitle className="text-xl text-primary">{project.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                <div className="bg-primary/10 p-3 rounded-lg">
                  <p className="text-sm font-medium text-primary">Impact: {project.impact}</p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Projects;