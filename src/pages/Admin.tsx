import { useEffect, useState } from "react";
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
  const [isAdmin, setIsAdmin] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check if user is authenticated and has admin role
    const checkAdminStatus = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      
      if (!session) {
        setLoading(false);
        return;
      }

      // Get user profile to check role
      const { data: profile } = await supabase
        .from('profiles')
        .select('role')
        .eq('id', session.user.id)
        .single();

      console.log("User profile:", profile);

      if (profile?.role === 'admin') {
        setIsAdmin(true);
      }
      
      setLoading(false);
    };

    checkAdminStatus();

    // Listen for auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange(async (event, session) => {
      console.log("Auth state changed:", event, session);
      
      if (!session) {
        setIsAdmin(false);
        return;
      }

      // Get user profile to check role on auth change
      const { data: profile } = await supabase
        .from('profiles')
        .select('role')
        .eq('id', session.user.id)
        .single();

      console.log("User profile after auth change:", profile);

      if (profile?.role === 'admin') {
        setIsAdmin(true);
      } else {
        setIsAdmin(false);
        navigate('/');
      }
    });

    return () => {
      subscription.unsubscribe();
    };
  }, [navigate]);

  if (loading) {
    return <div className="container mx-auto py-8">Chargement...</div>;
  }

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-8">Administration</h1>
      {!isAdmin ? (
        <div className="max-w-md mx-auto">
          <Auth 
            supabaseClient={supabase}
            appearance={{ theme: ThemeSupa }}
            theme="light"
            providers={[]}
          />
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-8">
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
      )}
    </div>
  );
}