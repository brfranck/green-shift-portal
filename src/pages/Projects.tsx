import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { ChevronDownIcon } from "lucide-react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

const Projects = () => {
  const navigate = useNavigate();
  
  const projects = [
    {
      title: "Projet de Production de Briquettes Écologiques à Bukavu",
      description: "Ce projet vise à réduire la déforestation en proposant une alternative durable au charbon de bois. Nous avons mis en place une unité de production utilisant des déchets organiques et agricoles pour fabriquer des briquettes écologiques.",
      impacts: [
        "Production de 20 tonnes de briquettes par mois",
        "Économie de 500 arbres par an",
        "Création de 15 emplois directs et 30 indirects"
      ],
      testimonial: {
        quote: "Ces briquettes ont réduit mes dépenses pour le combustible et sont faciles à utiliser.",
        author: "Jeanne, ménage à Bukavu"
      },
      type: "Gestion des déchets",
      location: "Bukavu",
      impactTypes: ["Réduction CO2", "Création d'emplois"],
      year: "2023"
    },
    {
      title: "Installation de Systèmes Solaires pour Ménages et Institutions",
      description: "Fourniture et installation de panneaux solaires pour les écoles et hôpitaux afin de garantir un accès constant à l'électricité dans les zones reculées.",
      impacts: [
        "Plus de 50 systèmes solaires installés",
        "Réduction des dépenses énergétiques de 40% pour les bénéficiaires",
        "Accès à une énergie fiable pour 3000 personnes"
      ],
      testimonial: {
        quote: "Les panneaux solaires ont transformé notre hôpital, nous avons éclairage et équipements fonctionnels.",
        author: "Dr. Samuel, hôpital rural"
      },
      type: "Énergie renouvelable",
      location: "Kivu",
      impactTypes: ["Économie d'énergie", "Réduction CO2"],
      year: "2023"
    },
    {
      title: "Programme de Sensibilisation sur la Gestion des Déchets dans les Écoles",
      description: "Campagne éducative pour enseigner aux enfants l'importance du tri et du recyclage des déchets.",
      impacts: [
        "10 écoles partenaires dans la région de Bukavu",
        "Participation de 2000 élèves",
        "Mise en place de systèmes de tri des déchets dans 5 écoles pilotes"
      ],
      testimonial: {
        quote: "Je comprends maintenant pourquoi il est important de recycler. Nous avons un compost à l'école maintenant !",
        author: "Patrice, élève"
      },
      type: "Éducation environnementale",
      location: "Bukavu",
      impactTypes: ["Éducation", "Gestion des déchets"],
      year: "2022"
    },
    {
      title: "Création d'un Compostage Communautaire pour les Marchés Locaux",
      description: "Collecte des déchets organiques dans les marchés pour produire du compost, réduisant ainsi les déchets en décharge.",
      impacts: [
        "Production de 10 tonnes de compost par mois",
        "Fourniture de fertilisants naturels à 50 agriculteurs locaux",
        "Réduction des déchets organiques des marchés de 30%"
      ],
      testimonial: {
        quote: "Ce compost a augmenté ma production agricole et m'a permis de réduire les coûts des engrais chimiques.",
        author: "Béatrice, agricultrice"
      },
      type: "Gestion des déchets",
      location: "Kivu",
      impactTypes: ["Agriculture durable", "Gestion des déchets"],
      year: "2022"
    },
    {
      title: "Projet d'Écotourisme : Circuits Verts dans la Région du Kivu",
      description: "Organisation de visites guidées pour valoriser la biodiversité locale et les initiatives de conservation.",
      impacts: [
        "300 participants à nos circuits en 2023",
        "Contribution à la conservation de plusieurs écosystèmes locaux",
        "Appui à des communautés locales grâce à l'écotourisme"
      ],
      testimonial: {
        quote: "Ces visites m'ont appris à respecter et protéger notre environnement.",
        author: "Thierry, participant"
      },
      type: "Écotourisme",
      location: "Kivu",
      impactTypes: ["Conservation biodiversité", "Développement local"],
      year: "2023"
    },
    {
      title: "Programme d'Agriculture Régénératrice à Bukavu",
      description: "Initiative visant à promouvoir des pratiques agricoles durables et régénératrices pour améliorer la qualité des sols et la production alimentaire locale tout en réduisant l'impact environnemental.",
      impacts: [
        "Formation de 25 agriculteurs aux pratiques régénératrices",
        "Augmentation de 40% des rendements agricoles",
        "Réduction de 60% de l'utilisation d'intrants chimiques",
        "Amélioration de la rétention d'eau dans les sols"
      ],
      testimonial: {
        quote: "Grâce à ces nouvelles pratiques, mes terres sont plus fertiles et ma production plus stable, même pendant les périodes difficiles.",
        author: "Pascal, agriculteur à Bukavu"
      },
      type: "Agriculture durable",
      location: "Bukavu",
      impactTypes: ["Agriculture durable", "Formation", "Environnement"],
      year: "2023"
    },
    {
      title: "Projet de Maraîchage Urbain",
      description: "Développement de jardins potagers urbains et formation aux techniques de culture biologique pour améliorer la sécurité alimentaire en ville.",
      impacts: [
        "Création de 15 jardins communautaires",
        "Production de 2 tonnes de légumes par mois",
        "Formation de 50 familles aux techniques de jardinage urbain",
        "Réduction des dépenses alimentaires de 30% pour les participants"
      ],
      testimonial: {
        quote: "Le jardin communautaire nous permet non seulement de manger sainement, mais aussi de créer du lien social dans notre quartier.",
        author: "Marie, participante au projet"
      },
      type: "Agriculture durable",
      location: "Bukavu",
      impactTypes: ["Agriculture durable", "Sécurité alimentaire"],
      year: "2023"
    }
  ];

  // Group projects by type
  const projectsByType = projects.reduce((acc, project) => {
    if (!acc[project.type]) {
      acc[project.type] = [];
    }
    acc[project.type].push(project);
    return acc;
  }, {} as Record<string, typeof projects>);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <div className="container mx-auto py-12 px-4">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl font-bold text-primary mb-4">Nos Réalisations en Développement Durable</h1>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          Bienvenue sur la page consacrée aux projets de GreenShift. Voici un aperçu des initiatives que nous avons réalisées 
          pour promouvoir le développement durable en RDC, ainsi que leurs impacts sur les communautés locales et l'environnement.
        </p>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="space-y-6"
      >
        {Object.entries(projectsByType).map(([type, typeProjects]) => (
          <Collapsible key={type} className="bg-card rounded-lg shadow-sm">
            <CollapsibleTrigger className="w-full flex items-center justify-between p-4 hover:bg-accent/50 rounded-lg transition-colors">
              <h2 className="text-2xl font-semibold text-primary">{type}</h2>
              <ChevronDownIcon className="h-6 w-6 text-muted-foreground transition-transform duration-200" />
            </CollapsibleTrigger>
            <CollapsibleContent className="p-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {typeProjects.map((project, index) => (
                  <ProjectCard key={index} project={project} />
                ))}
              </div>
            </CollapsibleContent>
          </Collapsible>
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="text-center mt-12"
      >
        <p className="text-lg mb-6">
          Envie de contribuer à nos prochains projets ou de nous rejoindre dans cette aventure ?
        </p>
        <Button
          size="lg"
          onClick={() => navigate("/contact")}
          className="bg-primary hover:bg-primary/90"
        >
          Contactez-nous
        </Button>
      </motion.div>
    </div>
  );
};

export default Projects;
