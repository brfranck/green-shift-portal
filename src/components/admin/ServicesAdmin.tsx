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

export const ServicesAdmin = () => {
  const { toast } = useToast();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [icon, setIcon] = useState("");

  const { data: services, refetch } = useQuery({
    queryKey: ["services"],
    queryFn: async () => {
      const { data, error } = await supabase.from("services").select("*");
      if (error) throw error;
      return data;
    },
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const { error } = await supabase.from("services").insert([
        {
          title,
          description,
          icon,
        },
      ]);
      if (error) throw error;
      toast({ title: "Service ajouté avec succès" });
      setTitle("");
      setDescription("");
      setIcon("");
      refetch();
    } catch (error) {
      console.error("Error adding service:", error);
      toast({ 
        title: "Erreur lors de l'ajout du service",
        variant: "destructive"
      });
    }
  };

  const handleDelete = async (id: string) => {
    try {
      const { error } = await supabase.from("services").delete().eq("id", id);
      if (error) throw error;
      toast({ title: "Service supprimé avec succès" });
      refetch();
    } catch (error) {
      console.error("Error deleting service:", error);
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
          placeholder="Titre du service"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <Textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
        <Input
          placeholder="Icône (nom Lucide)"
          value={icon}
          onChange={(e) => setIcon(e.target.value)}
        />
        <Button type="submit">Ajouter le service</Button>
      </form>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Titre</TableHead>
            <TableHead>Description</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {services?.map((service) => (
            <TableRow key={service.id}>
              <TableCell>{service.title}</TableCell>
              <TableCell>{service.description}</TableCell>
              <TableCell>
                <Button
                  variant="destructive"
                  onClick={() => handleDelete(service.id)}
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