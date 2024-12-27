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

export const BlogAdmin = () => {
  const { toast } = useToast();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [excerpt, setExcerpt] = useState("");
  const [category, setCategory] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const { data: posts, refetch } = useQuery({
    queryKey: ["blog_posts"],
    queryFn: async () => {
      const { data, error } = await supabase.from("blog_posts").select("*");
      if (error) throw error;
      return data;
    },
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const { error } = await supabase.from("blog_posts").insert([
        {
          title,
          content,
          excerpt,
          category,
          image_url: imageUrl,
          published_at: new Date().toISOString(),
        },
      ]);
      if (error) throw error;
      toast({ title: "Article ajouté avec succès" });
      setTitle("");
      setContent("");
      setExcerpt("");
      setCategory("");
      setImageUrl("");
      refetch();
    } catch (error) {
      console.error("Error adding blog post:", error);
      toast({ 
        title: "Erreur lors de l'ajout de l'article",
        variant: "destructive"
      });
    }
  };

  const handleDelete = async (id: string) => {
    try {
      const { error } = await supabase.from("blog_posts").delete().eq("id", id);
      if (error) throw error;
      toast({ title: "Article supprimé avec succès" });
      refetch();
    } catch (error) {
      console.error("Error deleting blog post:", error);
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
          placeholder="Titre de l'article"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <Textarea
          placeholder="Contenu"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
          className="min-h-[200px]"
        />
        <Textarea
          placeholder="Extrait"
          value={excerpt}
          onChange={(e) => setExcerpt(e.target.value)}
        />
        <Input
          placeholder="Catégorie"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />
        <Input
          placeholder="URL de l'image"
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
        />
        <Button type="submit">Publier l'article</Button>
      </form>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Titre</TableHead>
            <TableHead>Extrait</TableHead>
            <TableHead>Catégorie</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {posts?.map((post) => (
            <TableRow key={post.id}>
              <TableCell>{post.title}</TableCell>
              <TableCell>{post.excerpt}</TableCell>
              <TableCell>{post.category}</TableCell>
              <TableCell>
                <Button
                  variant="destructive"
                  onClick={() => handleDelete(post.id)}
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