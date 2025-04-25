
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 bg-gradient-to-br from-primary/10 to-transparent overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-10 md:mb-0 animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
              Premium Surgical Instruments For Medical Professionals
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-lg">
              Precision-engineered surgical tools designed for excellence in medical procedures. 
              Trusted by leading medical professionals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" onClick={() => navigate("/products")}>
                Browse Products
              </Button>
              <Button size="lg" variant="outline" onClick={() => navigate("/contact")}>
                Contact Us
              </Button>
            </div>
          </div>
          <div className="md:w-1/2 relative animate-fade-in">
            <div className="bg-white p-2 md:p-5 rounded-lg shadow-xl transform rotate-2 transition-transform hover:rotate-0 hover:scale-105">
              <img 
                src="/placeholder.svg" 
                alt="Surgical Instruments" 
                className="w-full h-auto rounded"
              />
            </div>
            <div className="absolute -bottom-4 -left-4 bg-primary text-white px-4 py-2 rounded shadow-lg text-sm">
              Premium Quality
            </div>
            <div className="absolute top-10 -right-4 bg-white px-4 py-2 rounded shadow-lg text-sm">
              ISO Certified
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-background to-transparent"></div>
    </section>
  );
};

export default HeroSection;
