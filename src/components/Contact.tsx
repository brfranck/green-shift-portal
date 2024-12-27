import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";

export const Contact = () => {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message envoyé !",
      description: "Nous vous répondrons dès que possible.",
    });
  };

  return (
    <section className="py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-up">
          <span className="text-sm font-medium text-primary-light">Contact</span>
          <h2 className="text-3xl md:text-4xl font-bold text-primary mt-2">
            Contactez-nous
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Prêt à faire la différence ? Contactez-nous pour discuter de la façon
            dont nous pouvons aider votre entreprise à devenir plus durable.
          </p>
        </div>
        <form
          onSubmit={handleSubmit}
          className="max-w-lg mx-auto space-y-6 animate-fade-up"
        >
          <div className="grid grid-cols-2 gap-4">
            <Input
              placeholder="Prénom"
              className="bg-white border-gray-200"
              required
            />
            <Input
              placeholder="Nom"
              className="bg-white border-gray-200"
              required
            />
          </div>
          <Input
            type="email"
            placeholder="Email"
            className="bg-white border-gray-200"
            required
          />
          <Textarea
            placeholder="Votre Message"
            className="bg-white border-gray-200 min-h-[150px]"
            required
          />
          <Button
            type="submit"
            className="w-full bg-primary text-white hover:bg-primary/90"
          >
            Envoyer le Message
          </Button>
        </form>
      </div>
    </section>
  );
};