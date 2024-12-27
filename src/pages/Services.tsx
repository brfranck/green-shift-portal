import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calculator } from "@/components/Calculator";
import { ProcessTimeline } from "@/components/ProcessTimeline";
import { CaseStudies } from "@/components/CaseStudies";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Services = () => {
  const services = [
    {
      title: "Conseil en Développement Durable",
      description: "Accompagnement stratégique pour une transition écologique réussie.",
    },
    {
      title: "Audits Environnementaux",
      description: "Évaluation complète de votre impact environnemental.",
    },
    {
      title: "Solutions d'Énergie Renouvelable",
      description: "Implémentation de solutions énergétiques durables.",
    },
    {
      title: "Gestion des Déchets",
      description: "Optimisation de votre cycle de gestion des déchets.",
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
        <h1 className="text-4xl font-bold text-primary mb-4">Nos Services</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Des solutions innovantes pour un avenir durable
        </p>
      </motion.div>

      <Tabs defaultValue="services" className="w-full">
        <TabsList className="grid w-full grid-cols-3 mb-8">
          <TabsTrigger value="services">Services</TabsTrigger>
          <TabsTrigger value="process">Processus</TabsTrigger>
          <TabsTrigger value="impact">Impact</TabsTrigger>
        </TabsList>

        <TabsContent value="services">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {services.map((service, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card className="h-full bg-white/80 backdrop-blur-sm shadow-lg hover:shadow-xl transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-xl text-primary">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{service.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </TabsContent>

        <TabsContent value="process">
          <ProcessTimeline />
        </TabsContent>

        <TabsContent value="impact">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Calculator />
            <CaseStudies />
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Services;