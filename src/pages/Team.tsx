import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const teamMembers = [
  {
    name: "Patient Asifiwe",
    role: "Directeur Général et Fondateur",
    bio: "Diplômé en Communication des Entreprises, expert dans le développement de projets environnementaux et sociaux en République Démocratique du Congo.",
    imageUrl: "/placeholder.svg",
    initials: "PA"
  },
  {
    name: "Yvette Mwinja",
    role: "Directrice de la Production",
    bio: "Ingénieure en Agronomie, elle a travaillé dans des unités de transformation agro-industrielle dans des pays de Grand-Lacs d'Afrique.",
    imageUrl: "/placeholder.svg",
    initials: "YM"
  },
  {
    name: "Alice Mugoli",
    role: "Directrice Commerciale",
    bio: "Titulaire d'un diplôme en Marketing, elle a développé des compétences dans la commercialisation de produits durables auprès des ménages et des entreprises.",
    imageUrl: "/placeholder.svg",
    initials: "AM"
  },
  {
    name: "Salomon Lubunga",
    role: "Responsable de l'Innovation",
    bio: "Diplômé en sciences de l'environnement, il apporte son expertise dans l'optimisation des procédés de valorisation des déchets agricoles.",
    imageUrl: "/placeholder.svg",
    initials: "SL"
  }
];

const Team = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="text-center mb-16 animate-fade-up">
        <h1 className="text-4xl font-bold text-primary mb-4">Notre Équipe</h1>
        <p className="text-lg text-gray-600">
          Des experts passionnés par le développement durable
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
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
              <p className="text-gray-600">{member.bio}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Team;