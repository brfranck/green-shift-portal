import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Team = () => {
  const team = [
    {
      name: "Patient Asifiwe",
      role: "Directeur Général et Fondateur",
      bio: "Diplômé en Communication des Entreprises, expert dans le développement de projets environnementaux et sociaux en République Démocratique du Congo.",
      image: "/lovable-uploads/84a33283-1369-4c60-9cf3-1b504beba5a1.png"
    },
    {
      name: "Yvette Mwinja",
      role: "Directrice de la Production",
      bio: "Ingénieure en Agronomie, elle a travaillé dans des unités de transformation agro-industrielle au dans des pays de Grand-Lacs d'Afrique.",
      image: "/lovable-uploads/cfc2dab0-d015-4512-ab4b-dff4c3912adc.png"
    },
    {
      name: "Alice Mugoli",
      role: "Directrice Commerciale",
      bio: "Titulaire d'un diplôme en Marketing, elle a développé des compétences dans la commercialisation de produits durables auprès des ménages et des entreprises.",
      image: "/lovable-uploads/624d01f0-e3c6-4325-a571-726b16159595.png"
    },
    {
      name: "Salomon Lubunga",
      role: "Responsable de l'Innovation",
      bio: "Diplômé en sciences de l'environnement, il apporte son expertise dans l'optimisation des procédés de valorisation des déchets agricoles.",
      image: "/lovable-uploads/84a33283-1369-4c60-9cf3-1b504beba5a1.png"
    }
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
        <h1 className="text-4xl font-bold text-primary mb-4">Notre Équipe</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Des experts passionnés par le développement durable
        </p>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {team.map((member, index) => (
          <motion.div key={index} variants={itemVariants}>
            <Card className="h-full bg-white/80 backdrop-blur-sm shadow-lg hover:shadow-xl transition-shadow">
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-64 object-cover rounded-t-lg"
              />
              <CardHeader>
                <CardTitle className="text-xl text-primary">{member.name}</CardTitle>
                <p className="text-sm font-medium text-primary-light">{member.role}</p>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{member.bio}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Team;