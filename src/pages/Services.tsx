import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";

const services = [
  {
    title: "Gestion des Déchets et Valorisation",
    description: "Recyclage, transformation et sensibilisation pour une gestion efficace des déchets.",
    details: [
      "Collecte, tri et transformation des déchets plastiques, organiques et métalliques",
      "Fabrication de briquettes écologiques et compost",
      "Formation des communautés au tri et à la gestion des déchets"
    ],
    icon: "🔄"
  },
  {
    title: "Solutions en Énergies Renouvelables",
    description: "Installation de systèmes solaires et solutions énergétiques durables.",
    details: [
      "Installation de panneaux solaires pour ménages et entreprises",
      "Maintenance et suivi des systèmes",
      "Projets de biomasse et biogaz"
    ],
    icon: "☀️"
  },
  {
    title: "Agriculture Durable",
    description: "Formation et accompagnement en techniques agricoles écologiques.",
    details: [
      "Techniques d'agriculture écologique",
      "Permaculture et agroforesterie",
      "Production de compost biologique"
    ],
    icon: "🌱"
  },
  {
    title: "Sensibilisation et Éducation",
    description: "Programmes de formation et campagnes de sensibilisation environnementale.",
    details: [
      "Éducation environnementale pour écoles et entreprises",
      "Campagnes de communication",
      "Promotion des pratiques durables"
    ],
    icon: "📚"
  },
  {
    title: "Conseil en Développement Durable",
    description: "Audits environnementaux et assistance technique pour les entreprises.",
    details: [
      "Évaluation des pratiques environnementales",
      "Recommandations d'amélioration",
      "Accompagnement vers les certifications"
    ],
    icon: "📋"
  },
  {
    title: "Aménagement et Urbanisme Durable",
    description: "Conception d'espaces verts et d'infrastructures durables.",
    details: [
      "Conception d'espaces verts",
      "Infrastructures durables",
      "Solutions de drainage écologique"
    ],
    icon: "🏗️"
  },
  {
    title: "Produits Durables",
    description: "Vente de produits écologiques et durables.",
    details: [
      "Briquettes écologiques",
      "Composts",
      "Kits solaires et accessoires recyclés"
    ],
    icon: "🛍️"
  },
  {
    title: "Tourisme et Restauration Durables",
    description: "Expériences écotouristiques pour découvrir la biodiversité locale.",
    details: [
      "Circuits d'écotourisme",
      "Découverte de la biodiversité",
      "Initiatives vertes locales"
    ],
    icon: "🏞️"
  },
  {
    title: "Soutien aux Initiatives Locales",
    description: "Microcrédits et soutien aux projets communautaires écologiques.",
    details: [
      "Financements verts",
      "Microcrédits écologiques",
      "Soutien technique aux projets"
    ],
    icon: "🤝"
  }
];

const Services = () => {
  return (
    <div className="container mx-auto py-12 px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl font-bold text-primary mb-4">Nos Services</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Découvrez notre gamme complète de services dédiés au développement durable en RDC
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card className="h-full hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="text-4xl mb-4">{service.icon}</div>
                <CardTitle className="text-xl text-primary">{service.title}</CardTitle>
                <CardDescription>{service.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  {service.details.map((detail, i) => (
                    <li key={i}>{detail}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Services;