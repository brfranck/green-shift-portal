import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Blog = () => {
  const articles = [
    {
      title: "L'Innovation dans le Recyclage",
      excerpt: "Découvrez les dernières technologies en matière de recyclage...",
      date: "15 Mars 2024",
      image: "/lovable-uploads/1ccc1e5c-baf1-40af-8b32-d0a0099d5a1a.png"
    },
    {
      title: "Énergies Renouvelables",
      excerpt: "Comment les énergies renouvelables transforment notre futur...",
      date: "10 Mars 2024",
      image: "/lovable-uploads/2b1fcc8a-6324-40f5-bc24-f826f5844c98.png"
    },
    {
      title: "Développement Durable",
      excerpt: "Les meilleures pratiques pour un développement durable...",
      date: "5 Mars 2024",
      image: "/lovable-uploads/624d01f0-e3c6-4325-a571-726b16159595.png"
    },
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
        className="text-center mb-12"
      >
        <h1 className="text-4xl font-bold text-primary mb-4">Notre Blog</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Actualités et insights sur le développement durable
        </p>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {articles.map((article, index) => (
          <motion.div key={index} variants={itemVariants}>
            <Card className="h-full bg-white/80 backdrop-blur-sm shadow-lg hover:shadow-xl transition-shadow">
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-48 object-cover rounded-t-lg"
              />
              <CardHeader>
                <CardTitle className="text-xl text-primary">{article.title}</CardTitle>
                <p className="text-sm text-muted-foreground">{article.date}</p>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{article.excerpt}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Blog;