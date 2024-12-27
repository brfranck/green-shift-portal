import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export const TestimonialsAdmin = () => {
  const { toast } = useToast();
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [company, setCompany] = useState("");
  const [content, setContent] = useState("");
  const [rating, setRating] = useState("");

  const { data: testimonials, refetch } = useQuery({
    queryKey: ["testimonials"],
    queryFn: async () => {
      const { data, error } = await supabase.from("testimonials").select("*");
      if (error) throw error;
      return data;
    },
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const { error } = await supabase.from("testimonials").insert([
        {
          name,
          role,
          company,
          content,
          rating: parseInt(rating),
        },
      ]);
      if (error) throw error;
      toast({ title: "Témoignage ajouté avec succès" });
      setName("");
      setRole("");
      setCompany("");
      setContent("");
      setRating("");
      refetch();
    } catch (error) {
      console.error("Error adding testimonial:", error);
      toast({ 
        title: "Erreur lors de l'ajout du témoignage",
        variant: "destructive"
      });
    }
  };

  const handleDelete = async (id: string) => {
    try {
      const { error } = await supabase.from("testimonials").delete().eq("id", id);
      if (error) throw error;
      toast({ title: "Témoignage supprimé avec succès" });
      refetch();
    } catch (error) {
      console.error("Error deleting testimonial:", error);
      toast({ 
        title: "Erreur lors de la suppression",
        variant: "destructive"
      });
    }
  };

  return (
    <div className="space-y-8">
      <form onSubmit={handleSubmit} className="space-y-4">
        <Input
          placeholder="Nom"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <Input
          placeholder="Rôle"
          value={role}
          onChange={(e) => setRole(e.target.value)}
          required
        />
        <Input
          placeholder="Entreprise"
          value={company}
          onChange={(e) => setCompany(e.target.value)}
          required
        />
        <Textarea
          placeholder="Témoignage"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
        />
        <Input
          type="number"
          placeholder="Note (1-5)"
          value={rating}
          onChange={(e) => setRating(e.target.value)}
          min="1"
          max="5"
          required
        />
        <Button type="submit">Ajouter le témoignage</Button>
      </form>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Nom</TableHead>
            <TableHead>Entreprise</TableHead>
            <TableHead>Note</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {testimonials?.map((testimonial) => (
            <TableRow key={testimonial.id}>
              <TableCell>{testimonial.name}</TableCell>
              <TableCell>{testimonial.company}</TableCell>
              <TableCell>{testimonial.rating}/5</TableCell>
              <TableCell>
                <Button
                  variant="destructive"
                  onClick={() => handleDelete(testimonial.id)}
                >
                  Supprimer
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};