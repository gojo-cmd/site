
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Phone, Mail } from "lucide-react";

const ContactCTA = () => {
  const navigate = useNavigate();

  return (
    <section className="py-10">
      <div className="rounded-2xl bg-gradient-to-br from-primary to-primary/70 text-white p-8 md:p-12">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl md:text-3xl font-bold mb-2">Need More Information?</h2>
            <p className="opacity-90 max-w-lg">
              Our team of experts is ready to assist you with product information, customization options, and quotations.
            </p>
            
            <div className="mt-6 flex flex-col sm:flex-row gap-4 sm:gap-6">
              <div className="flex items-center">
                <Phone className="mr-2 h-5 w-5" />
                <span>+91 9876543210</span>
              </div>
              <div className="flex items-center">
                <Mail className="mr-2 h-5 w-5" />
                <span>info@medsurgical.com</span>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-3">
            <Button 
              variant="secondary" 
              size="lg"
              onClick={() => navigate("/products")}
            >
              Browse Products
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => navigate("/contact")}
              className="bg-transparent text-white border-white hover:bg-white/10"
            >
              Contact Us
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;
