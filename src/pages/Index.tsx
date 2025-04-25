
import { Button } from "@/components/ui/button";
import ProductCategories from "@/components/ProductCategories";
import FeaturedProducts from "@/components/FeaturedProducts";
import CompanyHighlights from "@/components/CompanyHighlights";
import HeroSection from "@/components/HeroSection";
import ContactCTA from "@/components/ContactCTA";
import Layout from "@/components/Layout";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <div className="container mx-auto px-4 py-10 space-y-16">
        <FeaturedProducts />
        <ProductCategories />
        <CompanyHighlights />
        <ContactCTA />
      </div>
    </Layout>
  );
};

export default Index;
