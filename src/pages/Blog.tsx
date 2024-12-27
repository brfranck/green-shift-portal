import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";

const blogPosts = [
  {
    id: 1,
    title: "Les briquettes écologiques : Une solution pour préserver nos forêts",
    excerpt: "Face à la déforestation massive en RDC, les briquettes écologiques apparaissent comme une alternative durable au charbon de bois. Découvrez comment GreenShift contribue à ce changement.",
    category: "Technologies Vertes",
    imageUrl: "/lovable-uploads/cfc2dab0-d015-4512-ab4b-dff4c3912adc.png"
  },
  {
    id: 2,
    title: "5 astuces pour adopter un style de vie écoresponsable",
    excerpt: "Du tri des déchets à l'utilisation de produits locaux, ces gestes simples peuvent faire une grande différence pour la planète et votre quotidien.",
    category: "Conseils Pratiques",
    imageUrl: "/lovable-uploads/2b1fcc8a-6324-40f5-bc24-f826f5844c98.png"
  },
  {
    id: 3,
    title: "L'impact de l'énergie solaire sur les communautés rurales en RDC",
    excerpt: "Avec l'installation de panneaux solaires, les villages isolés ont accès à une énergie propre et fiable. Retour sur nos projets d'énergie renouvelable.",
    category: "Actualités de GreenShift",
    imageUrl: "/placeholder.svg"
  },
  {
    id: 4,
    title: "Composter chez soi : un guide pratique",
    excerpt: "Le compostage domestique transforme vos déchets organiques en fertilisant naturel. Voici comment vous pouvez commencer aujourd'hui !",
    category: "Conseils Pratiques",
    imageUrl: "/placeholder.svg"
  }
];

const categories = [
  "Actualités de GreenShift",
  "Conseils Pratiques",
  "Technologies Vertes",
  "Histoires Inspirantes",
  "Partenariats et Opportunités"
];

const Blog = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-12 animate-fade-up">
        <h1 className="text-4xl font-bold text-primary mb-4">Blog GreenShift</h1>
        <p className="text-lg text-gray-600">
          Partagez nos idées et actualités sur le développement durable
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Sidebar with categories */}
        <div className="lg:col-span-1">
          <Card className="sticky top-4">
            <CardHeader>
              <CardTitle>Catégories</CardTitle>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-[300px]">
                <ul className="space-y-2">
                  {categories.map((category) => (
                    <li
                      key={category}
                      className="cursor-pointer hover:text-primary transition-colors p-2 rounded-lg hover:bg-secondary"
                    >
                      {category}
                    </li>
                  ))}
                </ul>
              </ScrollArea>
            </CardContent>
          </Card>
        </div>

        {/* Main content - Blog posts */}
        <div className="lg:col-span-3 space-y-8">
          {blogPosts.map((post) => (
            <Card key={post.id} className="overflow-hidden hover:shadow-lg transition-shadow animate-fade-up">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="aspect-video relative">
                  <img
                    src={post.imageUrl}
                    alt={post.title}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="p-6">
                  <span className="text-sm text-primary-light mb-2 inline-block">
                    {post.category}
                  </span>
                  <h2 className="text-2xl font-semibold mb-3 text-primary">
                    {post.title}
                  </h2>
                  <p className="text-gray-600">{post.excerpt}</p>
                  <button className="mt-4 text-primary hover:text-primary-light transition-colors">
                    Lire la suite →
                  </button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
