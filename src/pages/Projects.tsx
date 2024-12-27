import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { motion } from "framer-motion";

interface Testimonial {
  quote: string;
  author: string;
  role: string;
}

interface Project {
  id: number;
  title: string;
  description: string;
  impacts: string[];
  testimonials: Testimonial[];
  imageUrl: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Projet de Production de Briquettes Écologiques à Bukavu",
    description: "Ce projet vise à réduire la déforestation en proposant une alternative durable au charbon de bois. Nous avons mis en place une unité de production utilisant des déchets organiques et agricoles pour fabriquer des briquettes écologiques.",
    impacts: [
      "Production de 20 tonnes de briquettes par mois",
      "Économie de 500 arbres par an",
      "Création de 15 emplois directs et 30 indirects"
    ],
    testimonials: [
      {
        quote: "Ces briquettes ont réduit mes dépenses pour le combustible et sont faciles à utiliser.",
        author: "Jeanne",
        role: "ménage à Bukavu"
      }
    ],
    imageUrl: "/placeholder.svg"
  },
  {
    id: 2,
    title: "Installation de Systèmes Solaires pour Ménages et Institutions",
    description: "Fourniture et installation de panneaux solaires pour les écoles et hôpitaux afin de garantir un accès constant à l'électricité dans les zones reculées.",
    impacts: [
      "Plus de 50 systèmes solaires installés",
      "Réduction des dépenses énergétiques de 40% pour les bénéficiaires",
      "Accès à une énergie fiable pour 3000 personnes"
    ],
    testimonials: [
      {
        quote: "Les panneaux solaires ont transformé notre hôpital, nous avons éclairage et équipements fonctionnels.",
        author: "Dr. Samuel",
        role: "hôpital rural"
      }
    ],
    imageUrl: "/placeholder.svg"
  },
  {
    id: 3,
    title: "Programme de Sensibilisation sur la Gestion des Déchets dans les Écoles",
    description: "Campagne éducative pour enseigner aux enfants l'importance du tri et du recyclage des déchets.",
    impacts: [
      "10 écoles partenaires dans la région de Bukavu",
      "Participation de 2000 élèves",
      "Mise en place de systèmes de tri des déchets dans 5 écoles pilotes"
    ],
    testimonials: [
      {
        quote: "Je comprends maintenant pourquoi il est important de recycler. Nous avons un compost à l'école maintenant !",
        author: "Patrice",
        role: "élève"
      }
    ],
    imageUrl: "/placeholder.svg"
  },
  {
    id: 4,
    title: "Création d'un Compostage Communautaire pour les Marchés Locaux",
    description: "Collecte des déchets organiques dans les marchés pour produire du compost, réduisant ainsi les déchets en décharge.",
    impacts: [
      "Production de 10 tonnes de compost par mois",
      "Fourniture de fertilisants naturels à 50 agriculteurs locaux",
      "Réduction des déchets organiques des marchés de 30%"
    ],
    testimonials: [
      {
        quote: "Ce compost a augmenté ma production agricole et m'a permis de réduire les coûts des engrais chimiques.",
        author: "Béatrice",
        role: "agricultrice"
      }
    ],
    imageUrl: "/placeholder.svg"
  },
  {
    id: 5,
    title: "Projet d'Écotourisme : Circuits Verts dans la Région du Kivu",
    description: "Organisation de visites guidées pour valoriser la biodiversité locale et les initiatives de conservation.",
    impacts: [
      "300 participants à nos circuits en 2023",
      "Contribution à la conservation de plusieurs écosystèmes locaux",
      "Appui à des communautés locales grâce à l'écotourisme"
    ],
    testimonials: [
      {
        quote: "Ces visites m'ont appris à respecter et protéger notre environnement.",
        author: "Thierry",
        role: "participant"
      }
    ],
    imageUrl: "/placeholder.svg"
  }
];

const Projects = () => {
  return (
    <div className="container mx-auto py-12 px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl font-bold text-primary mb-4">Nos Réalisations en Développement Durable</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Découvrez nos projets qui contribuent au développement durable en RDC et leur impact sur les communautés locales.
        </p>
      </motion.div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-1">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card className="overflow-hidden">
              <CardHeader>
                <CardTitle className="text-2xl text-primary">{project.title}</CardTitle>
                <CardDescription className="text-lg">{project.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <img
                      src={project.imageUrl}
                      alt={project.title}
                      className="w-full h-64 object-cover rounded-lg"
                    />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Impact du Projet</h3>
                    <ul className="space-y-2 mb-6">
                      {project.impacts.map((impact, i) => (
                        <li key={i} className="flex items-start">
                          <span className="mr-2">•</span>
                          <span>{impact}</span>
                        </li>
                      ))}
                    </ul>
                    <Separator className="my-4" />
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Témoignages</h3>
                      {project.testimonials.map((testimonial, i) => (
                        <blockquote key={i} className="italic text-gray-600">
                          "{testimonial.quote}"
                          <footer className="mt-2 text-sm">
                            - {testimonial.author}, <span className="text-gray-500">{testimonial.role}</span>
                          </footer>
                        </blockquote>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Projects;