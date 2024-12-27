import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { ProjectFilters } from "@/components/projects/ProjectFilters";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { exportToWord, exportToPDF } from "@/utils/exportProjects";
import { DownloadIcon } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Projects = () => {
  const navigate = useNavigate();
  const [selectedType, setSelectedType] = useState<string | null>(null);
  const [selectedLocation, setSelectedLocation] = useState<string | null>(null);
  const [selectedImpacts, setSelectedImpacts] = useState<string[]>([]);
  const [selectedYear, setSelectedYear] = useState<string | null>(null);
  
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
    }
  ];

  const projectTypes = ["Énergie renouvelable", "Gestion des déchets", "Éducation environnementale", "Écotourisme"];
  const locations = ["Bukavu", "Kivu"];
  const impactTypes = ["Réduction CO2", "Création d'emplois", "Économie d'énergie", "Éducation", "Gestion des déchets", "Agriculture durable", "Conservation biodiversité", "Développement local"];
  const years = ["2023", "2022"];

  const filteredProjects = projects.filter(project => {
    const typeMatch = !selectedType || project.type === selectedType;
    const locationMatch = !selectedLocation || project.location === selectedLocation;
    const impactsMatch = selectedImpacts.length === 0 || 
      project.impactTypes.some(impact => selectedImpacts.includes(impact));
    const yearMatch = !selectedYear || project.year === selectedYear;
    
    return typeMatch && locationMatch && impactsMatch && yearMatch;
  });

  const handleImpactChange = (impact: string) => {
    setSelectedImpacts(prev => 
      prev.includes(impact)
        ? prev.filter(i => i !== impact)
        : [...prev, impact]
    );
  };

  const handleExport = (format: 'pdf' | 'word') => {
    if (format === 'pdf') {
      exportToPDF(filteredProjects);
    } else {
      exportToWord(filteredProjects);
    }
  };

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

      <div className="flex justify-end mb-4">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="gap-2">
              <DownloadIcon className="h-4 w-4" />
              Télécharger la liste
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem onClick={() => handleExport('pdf')}>
              Format PDF
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => handleExport('word')}>
              Format Word
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <ProjectFilters
        projectTypes={projectTypes}
        locations={locations}
        impactTypes={impactTypes}
        years={years}
        selectedType={selectedType}
        selectedLocation={selectedLocation}
        selectedImpacts={selectedImpacts}
        selectedYear={selectedYear}
        setSelectedType={setSelectedType}
        setSelectedLocation={setSelectedLocation}
        handleImpactChange={handleImpactChange}
        setSelectedYear={setSelectedYear}
      />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 md:grid-cols-2 gap-8"
      >
        {filteredProjects.map((project, index) => (
          <ProjectCard key={index} project={project} />
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
