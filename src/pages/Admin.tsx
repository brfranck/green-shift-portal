import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import { supabase } from "@/integrations/supabase/client";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ServicesAdmin } from "@/components/admin/ServicesAdmin";
import { ProjectsAdmin } from "@/components/admin/ProjectsAdmin";
import { BlogAdmin } from "@/components/admin/BlogAdmin";
import { TestimonialsAdmin } from "@/components/admin/TestimonialsAdmin";
import { FAQAdmin } from "@/components/admin/FAQAdmin";

export default function Admin() {
  const navigate = useNavigate();

  useEffect(() => {
    supabase.auth.onAuthStateChange((event, session) => {
      if (!session) {
        navigate("/admin");
      }
      console.log("Auth state changed:", event, session);
    });
  }, [navigate]);

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-8">Administration</h1>
      <div className="grid grid-cols-1 gap-8">
        <Auth 
          supabaseClient={supabase}
          appearance={{ theme: ThemeSupa }}
          theme="light"
        />
        <Tabs defaultValue="services" className="w-full">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="services">Services</TabsTrigger>
            <TabsTrigger value="projects">Projets</TabsTrigger>
            <TabsTrigger value="blog">Blog</TabsTrigger>
            <TabsTrigger value="testimonials">Témoignages</TabsTrigger>
            <TabsTrigger value="faq">FAQ</TabsTrigger>
          </TabsList>
          <TabsContent value="services">
            <ServicesAdmin />
          </TabsContent>
          <TabsContent value="projects">
            <ProjectsAdmin />
          </TabsContent>
          <TabsContent value="blog">
            <BlogAdmin />
          </TabsContent>
          <TabsContent value="testimonials">
            <TestimonialsAdmin />
          </TabsContent>
          <TabsContent value="faq">
            <FAQAdmin />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}