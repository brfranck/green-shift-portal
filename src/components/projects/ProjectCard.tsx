import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

interface ProjectCardProps {
  project: {
    title: string;
    description: string;
    impacts: string[];
    testimonial: {
      quote: string;
      author: string;
    };
    type: string;
    location: string;
    year: string;
    images?: string[];
  };
}

export const ProjectCard = ({ project }: ProjectCardProps) => {
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
    <motion.div variants={itemVariants}>
      <Card className="h-full bg-white/80 backdrop-blur-sm hover:shadow-lg transition-all duration-300">
        {project.images && project.images.length > 0 && (
          <div className="p-4">
            <Carousel className="w-full">
              <CarouselContent>
                {project.images.map((image, index) => (
                  <CarouselItem key={index}>
                    <div className="aspect-video w-full overflow-hidden rounded-lg">
                      <img
                        src={image}
                        alt={`${project.title} - Image ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        )}
        <CardHeader>
          <CardTitle className="text-2xl text-primary">{project.title}</CardTitle>
          <div className="flex flex-wrap gap-2 mt-2">
            <span className="text-sm bg-primary/10 text-primary px-2 py-1 rounded-full">
              {project.type}
            </span>
            <span className="text-sm bg-secondary/10 text-secondary-foreground px-2 py-1 rounded-full">
              {project.location}
            </span>
            <span className="text-sm bg-accent/10 text-accent-foreground px-2 py-1 rounded-full">
              {project.year}
            </span>
          </div>
          <CardDescription className="text-base mt-2">
            {project.description}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="bg-secondary/50 p-4 rounded-lg">
              <h3 className="font-semibold text-primary mb-2">Résultats et impacts :</h3>
              <ul className="list-disc list-inside space-y-1">
                {project.impacts.map((impact, i) => (
                  <li key={i} className="text-muted-foreground">{impact}</li>
                ))}
              </ul>
            </div>
            <div className="bg-accent/10 p-4 rounded-lg">
              <blockquote className="italic text-muted-foreground">
                "{project.testimonial.quote}"
                <footer className="mt-2 font-medium text-primary">
                  — {project.testimonial.author}
                </footer>
              </blockquote>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};