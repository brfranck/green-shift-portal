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

export const FAQAdmin = () => {
  const { toast } = useToast();
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [category, setCategory] = useState("");
  const [orderIndex, setOrderIndex] = useState("");

  const { data: faqs, refetch } = useQuery({
    queryKey: ["faqs"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("faqs")
        .select("*")
        .order("order_index");
      if (error) throw error;
      return data;
    },
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const { error } = await supabase.from("faqs").insert([
        {
          question,
          answer,
          category,
          order_index: parseInt(orderIndex),
        },
      ]);
      if (error) throw error;
      toast({ title: "FAQ ajoutée avec succès" });
      setQuestion("");
      setAnswer("");
      setCategory("");
      setOrderIndex("");
      refetch();
    } catch (error) {
      console.error("Error adding FAQ:", error);
      toast({ 
        title: "Erreur lors de l'ajout de la FAQ",
        variant: "destructive"
      });
    }
  };

  const handleDelete = async (id: string) => {
    try {
      const { error } = await supabase.from("faqs").delete().eq("id", id);
      if (error) throw error;
      toast({ title: "FAQ supprimée avec succès" });
      refetch();
    } catch (error) {
      console.error("Error deleting FAQ:", error);
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
          placeholder="Question"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          required
        />
        <Textarea
          placeholder="Réponse"
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
          required
        />
        <Input
          placeholder="Catégorie"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          required
        />
        <Input
          type="number"
          placeholder="Ordre d'affichage"
          value={orderIndex}
          onChange={(e) => setOrderIndex(e.target.value)}
          required
        />
        <Button type="submit">Ajouter la FAQ</Button>
      </form>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Question</TableHead>
            <TableHead>Catégorie</TableHead>
            <TableHead>Ordre</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {faqs?.map((faq) => (
            <TableRow key={faq.id}>
              <TableCell>{faq.question}</TableCell>
              <TableCell>{faq.category}</TableCell>
              <TableCell>{faq.order_index}</TableCell>
              <TableCell>
                <Button
                  variant="destructive"
                  onClick={() => handleDelete(faq.id)}
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