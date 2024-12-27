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
      title: "Programme d'Agriculture Régénératrice dans la Zone Rurale de Bukavu, Sud-Kivu",
      description: "Initiative visant à promouvoir des pratiques agricoles durables et régénératrices pour améliorer la qualité des sols et la production alimentaire locale dans la province du Sud-Kivu, dont Bukavu est le chef-lieu. Ce programme met l'accent sur la réduction de l'impact environnemental tout en augmentant la productivité agricole.",
      impacts: [
        "Formation de 25 agriculteurs aux pratiques régénératrices",
        "Augmentation de 40% des rendements agricoles",
        "Réduction de 60% de l'utilisation d'intrants chimiques",
        "Amélioration de la rétention d'eau dans les sols"
      ],
      testimonial: {
        quote: "Grâce à ces nouvelles pratiques, mes terres sont plus fertiles et ma production plus stable, même pendant les périodes difficiles.",
        author: "Pascal, agriculteur de la zone rurale de Bukavu"
      },
      type: "Agriculture durable",
      location: "Sud-Kivu",
      impactTypes: ["Agriculture durable", "Formation", "Environnement"],
      year: "2023",
      images: [
        "/lovable-uploads/82d48035-4d8b-4ce6-962b-e3c00a01a753.png",
        "https://fgsrxajibgvzeylxhxsy.supabase.co/storage/v1/object/public/project_images/agriculture1.jpg",
        "https://fgsrxajibgvzeylxhxsy.supabase.co/storage/v1/object/public/project_images/WhatsApp%20Image%202024-12-27%20at%2018.56.43%20(1).jpeg",
        "https://fgsrxajibgvzeylxhxsy.supabase.co/storage/v1/object/public/project_images/WhatsApp%20Image%202024-12-27%20at%2018.56.45.jpeg"
      ]
    },
    {
      title: "Projet de Production de Briquettes Écologiques à Bukavu",
      description: "Ce projet innovant vise à réduire la déforestation en proposant une alternative durable au charbon de bois traditionnel. Notre unité de production transforme les déchets organiques et agricoles en briquettes écologiques, offrant ainsi une solution énergétique plus propre et économique pour les ménages tout en créant des emplois locaux.",
      impacts: [
        "Production de 20 tonnes de briquettes par mois",
        "Économie de 500 arbres par an",
        "Création de 15 emplois directs et 30 indirects",
        "Réduction des émissions de CO2 de 40% par rapport au charbon traditionnel"
      ],
      testimonial: {
        quote: "Ces briquettes ont non seulement réduit mes dépenses en combustible, mais elles produisent aussi moins de fumée lors de la cuisson.",
        author: "Jeanne, utilisatrice à Bukavu"
      },
      type: "Gestion des déchets",
      location: "Bukavu",
      impactTypes: ["Réduction CO2", "Création d'emplois", "Innovation"],
      year: "2023",
      images: [
        "/lovable-uploads/30560b85-1fb0-4a4c-b9bd-067cc800d48b.png"
      ]
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
      title: "Programme de Gestion des Eaux Pluviales et Prévention des Inondations à Bukavu",
      description: "Initiative intégrée visant à améliorer la gestion des eaux pluviales et à réduire les risques d'inondation dans la ville de Bukavu. Notre programme comprend le débouchage systématique des caniveaux, la réorientation des flux d'eau non canalisés, et la mise en place d'infrastructures de drainage durables pour protéger les zones vulnérables.",
      impacts: [
        "Réduction significative des zones inondables dans les quartiers à risque",
        "Amélioration du système de drainage urbain",
        "Protection de plus de 1000 foyers contre les inondations",
        "Création d'emplois locaux pour l'entretien des infrastructures"
      ],
      testimonial: {
        quote: "Depuis les travaux d'aménagement, notre quartier n'a plus connu d'inondation majeure. C'est un véritable soulagement pour toute la communauté.",
        author: "Mme Furaha Kalibanya, résidente du quartier Panzi"
      },
      type: "Infrastructure urbaine",
      location: "Bukavu",
      impactTypes: ["Prévention des risques", "Développement urbain", "Protection environnementale"],
      year: "2023"
    },
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