import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";

const FAQ = () => {
  const faqs = [
    {
      question: "Qu'est-ce que GreenShift ?",
      answer: "GreenShift est une entreprise basée en RDC qui promeut le développement durable à travers des initiatives telles que la production de briquettes écologiques, l'installation de solutions solaires, la gestion des déchets et l'éducation environnementale."
    },
    {
      question: "Comment fonctionne la production de briquettes écologiques ?",
      answer: "Nous collectons des déchets organiques et agricoles (sciure, coques de café, épluchures), qui sont broyés, séchés, puis comprimés dans des presses spécialisées pour former des briquettes compactes et énergétiques."
    },
    {
      question: "Quels sont les avantages des briquettes écologiques ?",
      answer: "• Réduction de la déforestation en remplaçant le charbon de bois.\n• Économie d'énergie grâce à une combustion efficace.\n• Produit plus sécuritaire pour la santé, émettant moins de fumées nocives."
    },
    {
      question: "Comment puis-je acheter vos produits ?",
      answer: "Nos briquettes écologiques et autres produits durables sont disponibles dans nos points de vente partenaires et via commande directe en ligne ou par téléphone. Contactez-nous pour en savoir plus sur les prix et la livraison."
    },
    {
      question: "Offrez-vous des solutions pour l'énergie solaire ?",
      answer: "Oui, GreenShift installe des systèmes solaires pour les ménages, écoles et entreprises. Nos services incluent l'évaluation des besoins énergétiques, l'installation des panneaux solaires et leur maintenance."
    },
    {
      question: "Quels types de déchets recyclez-vous ?",
      answer: "Nous valorisons principalement :\n• Les déchets organiques (pour le compost et les briquettes).\n• Les plastiques et métaux (pour le recyclage industriel)."
    },
    {
      question: "Organisez-vous des ateliers de sensibilisation ?",
      answer: "Absolument ! Nous proposons des programmes éducatifs dans les écoles, communautés et entreprises pour sensibiliser aux enjeux environnementaux et promouvoir des pratiques écoresponsables."
    },
    {
      question: "Comment puis-je participer à vos projets ?",
      answer: "Nous collaborons avec des particuliers, entreprises et ONG. Vous pouvez rejoindre nos initiatives en tant que partenaire, bénévole ou bénéficiaire. Contactez-nous pour discuter des opportunités."
    },
    {
      question: "Vos projets sont-ils accessibles dans toute la RDC ?",
      answer: "Pour l'instant, nous opérons principalement à Bukavu et dans les environs, mais nous prévoyons d'étendre nos activités à d'autres régions prochainement."
    },
    {
      question: "Quels sont les moyens de vous contacter ?",
      answer: "• Email : info@greenshift-rdc.com\n• Téléphone : +243 816 937 859\n• Adresse : 019, Avenue Nyarwizimia, Panzi, Ibanda, Bukavu, RDC\n\nVous pouvez aussi remplir le formulaire de contact sur notre site web."
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
        className="flex flex-col items-center mb-8"
      >
        <img 
          src="/lovable-uploads/06537a1b-ce0d-4e35-b37c-a3f6eb3289ea.png"
          alt="GreenShift Logo"
          className="w-64 h-auto mb-6"
        />
      </motion.div>

      <Card className="mb-8 bg-white/80 backdrop-blur-sm shadow-lg">
        <CardHeader>
          <CardTitle className="text-3xl font-bold text-center text-primary">
            Questions Fréquemment Posées
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-center text-muted-foreground mb-8">
            Bienvenue sur la page FAQ de GreenShift ! Nous avons réuni ici les questions les plus fréquemment posées sur nos services, produits et initiatives. Si vous avez d'autres questions, n'hésitez pas à nous contacter.
          </p>
        </CardContent>
      </Card>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="space-y-4"
      >
        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
            >
              <AccordionItem
                value={`item-${index}`}
                className="bg-white/80 backdrop-blur-sm rounded-lg shadow-sm border overflow-hidden"
              >
                <AccordionTrigger className="px-6 hover:no-underline">
                  <span className="text-left font-medium text-primary">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 whitespace-pre-line text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            </motion.div>
          ))}
        </Accordion>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="text-center mt-12"
      >
        <p className="text-muted-foreground">
          Si vous avez des questions supplémentaires, n'hésitez pas à nous contacter directement !
        </p>
      </motion.div>
    </div>
  );
};

export default FAQ;