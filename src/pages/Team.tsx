import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const teamMembers = [
  {
    name: "Patient Asifiwe",
    role: "Directeur Général et Fondateur",
    profile: "Diplômé en Communication des Entreprises, Patient est un expert reconnu dans le développement de projets environnementaux et sociaux.",
    responsibilities: [
      "Supervise la stratégie globale de l'entreprise.",
      "Initie des partenariats stratégiques avec des organisations locales et internationales.",
      "Met en avant les solutions innovantes pour répondre aux défis liés au développement durable en RDC."
    ],
    imageUrl: "/placeholder.svg",
    initials: "PA"
  },
  {
    name: "Yvette Mwinja",
    role: "Directrice de la Production",
    profile: "Ingénieure en Agronomie avec une expérience significative dans des unités de transformation agro-industrielle dans les pays des Grands Lacs d'Afrique.",
    responsibilities: [
      "Supervise les opérations de production des briquettes écologiques.",
      "Optimise les processus de transformation des matières premières pour garantir la qualité des produits.",
      "Implémente des pratiques agricoles et industrielles durables."
    ],
    imageUrl: "/placeholder.svg",
    initials: "YM"
  },
  {
    name: "Alice Mugoli",
    role: "Directrice Commerciale",
    profile: "Diplômée en Marketing, Alice excelle dans la commercialisation de produits durables pour les ménages et les entreprises.",
    responsibilities: [
      "Développe et met en œuvre des stratégies commerciales pour promouvoir les produits de GreenShift.",
      "Crée des campagnes de sensibilisation pour encourager l'adoption de solutions durables.",
      "Maintient des relations solides avec les clients et partenaires stratégiques."
    ],
    imageUrl: "/placeholder.svg",
    initials: "AM"
  },
  {
    name: "Salomon Lubunga",
    role: "Responsable de l'Innovation",
    profile: "Diplômé en sciences de l'environnement, Salomon est spécialisé dans l'optimisation des procédés de valorisation des déchets agricoles.",
    responsibilities: [
      "Conduit des projets d'innovation pour améliorer les technologies de production.",
      "Recherche et développe de nouvelles applications pour les déchets recyclés.",
      "Collabore avec des experts pour intégrer des solutions technologiques avancées."
    ],
    imageUrl: "/placeholder.svg",
    initials: "SL"
  }
];

const Team = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="text-center mb-16 animate-fade-up">
        <h1 className="text-4xl font-bold text-primary mb-4">Notre Équipe : Les Leaders de GreenShift</h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Chez GreenShift, notre équipe dirigeante combine expertise, expérience et passion pour mener des initiatives 
          innovantes en matière de développement durable. Voici les leaders qui guident notre mission pour un avenir 
          plus vert en RDC :
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {teamMembers.map((member, index) => (
          <Card 
            key={member.name}
            className="overflow-hidden hover:shadow-lg transition-shadow animate-fade-up"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <CardHeader className="flex flex-row items-center gap-4 pb-4">
              <Avatar className="h-16 w-16">
                <AvatarImage src={member.imageUrl} alt={member.name} />
                <AvatarFallback className="bg-primary/10 text-primary">
                  {member.initials}
                </AvatarFallback>
              </Avatar>
              <div>
                <CardTitle className="text-xl text-primary">{member.name}</CardTitle>
                <p className="text-sm text-primary-light font-medium">{member.role}</p>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold mb-2">Profil :</h3>
                  <p className="text-gray-600">{member.profile}</p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Rôle chez GreenShift :</h3>
                  <ul className="list-disc list-inside text-gray-600 space-y-2">
                    {member.responsibilities.map((responsibility, idx) => (
                      <li key={idx}>{responsibility}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="text-center mt-16 animate-fade-up">
        <p className="text-lg text-gray-600 italic">
          Ensemble, nous transformons les défis en opportunités et travaillons chaque jour pour un avenir plus écologique et équitable.
        </p>
      </div>
    </div>
  );
};

export default Team;