import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

const FAQ = () => {
  const [searchQuery, setSearchQuery] = useState("");
  
  const categories = {
    services: {
      title: "Services",
      questions: [
        {
          question: "Comment fonctionne la production de briquettes écologiques ?",
          answer: "Nous collectons des déchets organiques et agricoles (sciure, coques de café, épluchures), qui sont broyés, séchés, puis comprimés dans des presses spécialisées pour former des briquettes compactes et énergétiques."
        },
        {
          question: "Quels sont les avantages des briquettes écologiques ?",
          answer: "• Réduction de la déforestation en remplaçant le charbon de bois.\n• Économie d'énergie grâce à une combustion efficace.\n• Produit plus sécuritaire pour la santé, émettant moins de fumées nocives."
        },
        {
          question: "Offrez-vous des solutions pour l'énergie solaire ?",
          answer: "Oui, GreenShift installe des systèmes solaires pour les ménages, écoles et entreprises. Nos services incluent l'évaluation des besoins énergétiques, l'installation des panneaux solaires et leur maintenance."
        }
      ]
    },
    general: {
      title: "À Propos de GreenShift",
      questions: [
        {
          question: "Qu'est-ce que GreenShift ?",
          answer: "GreenShift est un Groupement d'Intérêt Économique (GIE) basé en RDC qui promeut le développement durable à travers des initiatives telles que la production de briquettes écologiques, l'installation de solutions solaires, la gestion des déchets et l'éducation environnementale."
        },
        {
          question: "Quels types de déchets recyclez-vous ?",
          answer: "Nous valorisons principalement :\n• Les déchets organiques (pour le compost et les briquettes).\n• Les plastiques et métaux (pour le recyclage industriel)."
        },
        {
          question: "Comment puis-je participer à vos projets ?",
          answer: "Nous collaborons avec des particuliers, entreprises, ONG et gouvernements. Vous pouvez rejoindre nos initiatives en tant que partenaire, bénévole ou bénéficiaire. Contactez-nous pour discuter des opportunités."
        }
      ]
    },
    contact: {
      title: "Contact & Commandes",
      questions: [
        {
          question: "Comment puis-je acheter vos produits ?",
          answer: "Nos briquettes écologiques et autres produits durables sont disponibles dans nos points de vente partenaires et via commande directe en ligne ou par téléphone. Contactez-nous pour en savoir plus sur les prix et la livraison."
        },
        {
          question: "Vos projets sont-ils accessibles dans toute la RDC ?",
          answer: "Pour l'instant, nous opérons principalement à Bukavu et dans les environs, mais nous prévoyons d'étendre nos activités à d'autres régions prochainement."
        },
        {
          question: "Quels sont les moyens de vous contacter ?",
          answer: "• Email : info@greenshift-rdc.com\n• Téléphone : +243 816 937 859\n• Adresse : 019, Avenue Nyarwizimia, Panzi, Ibanda, Bukavu, RDC\n\nVous pouvez aussi remplir le formulaire de contact sur notre site web."
        }
      ]
    }
  };

  const allQuestions = Object.values(categories).flatMap(category => 
    category.questions.map(q => ({ ...q, category: category.title }))
  );

  const filteredQuestions = allQuestions.filter(
    qa => 
      qa.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      qa.answer.toLowerCase().includes(searchQuery.toLowerCase())
  );

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
    <section className="py-16 bg-secondary/50">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-primary mb-4">
            Questions Fréquentes
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Trouvez rapidement des réponses à vos questions sur nos services, notre fonctionnement et notre impact.
          </p>
        </motion.div>

        <div className="relative max-w-md mx-auto mb-12">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
          <Input
            type="text"
            placeholder="Rechercher une question..."
            className="pl-10 w-full"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        {searchQuery ? (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-4 max-w-3xl mx-auto"
          >
            <Card className="bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-xl text-primary">
                  Résultats de recherche
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible className="space-y-4">
                  {filteredQuestions.map((qa, index) => (
                    <motion.div
                      key={index}
                      variants={itemVariants}
                      className="w-full"
                    >
                      <AccordionItem
                        value={`search-${index}`}
                        className="border rounded-lg overflow-hidden transition-all duration-300 hover:shadow-md"
                      >
                        <AccordionTrigger className="px-4 py-4 hover:no-underline">
                          <div className="text-left">
                            <p className="font-medium text-primary">{qa.question}</p>
                            <p className="text-sm text-muted-foreground mt-1">{qa.category}</p>
                          </div>
                        </AccordionTrigger>
                        <AccordionContent className="px-4 pb-4 whitespace-pre-line">
                          {qa.answer}
                        </AccordionContent>
                      </AccordionItem>
                    </motion.div>
                  ))}
                </Accordion>
              </CardContent>
            </Card>
          </motion.div>
        ) : (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
          >
            {Object.entries(categories).map(([key, category], categoryIndex) => (
              <motion.div
                key={key}
                variants={itemVariants}
                className="w-full"
              >
                <Card className="h-full bg-white/80 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="text-xl text-primary">
                      {category.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Accordion type="single" collapsible className="space-y-4">
                      {category.questions.map((qa, index) => (
                        <AccordionItem
                          key={index}
                          value={`${key}-${index}`}
                          className="border rounded-lg overflow-hidden transition-all duration-300 hover:shadow-md"
                        >
                          <AccordionTrigger className="px-4 py-4 hover:no-underline">
                            <span className="text-left font-medium text-primary">
                              {qa.question}
                            </span>
                          </AccordionTrigger>
                          <AccordionContent className="px-4 pb-4 whitespace-pre-line">
                            {qa.answer}
                          </AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default FAQ;