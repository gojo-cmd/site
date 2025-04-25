
import { Award, Clock, Gift, Shield } from "lucide-react";

const CompanyHighlights = () => {
  const highlights = [
    {
      icon: <Shield className="h-10 w-10 mb-3 text-primary" />,
      title: "Quality Assured",
      description: "All our products undergo rigorous quality testing and meet international standards"
    },
    {
      icon: <Clock className="h-10 w-10 mb-3 text-primary" />,
      title: "Fast Delivery",
      description: "Prompt delivery to hospitals and medical facilities across the country"
    },
    {
      icon: <Award className="h-10 w-10 mb-3 text-primary" />,
      title: "ISO Certified",
      description: "Our manufacturing processes adhere to ISO 13485 standards"
    },
    {
      icon: <Gift className="h-10 w-10 mb-3 text-primary" />,
      title: "Custom Solutions",
      description: "Customized surgical instrument sets tailored to your specific requirements"
    }
  ];

  return (
    <section className="py-10">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold">Why Choose Us</h2>
        <p className="text-gray-600 mt-2 max-w-xl mx-auto">
          Trusted by medical professionals nationwide for our commitment to quality and service excellence
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {highlights.map((item, index) => (
          <div 
            key={index} 
            className="text-center p-6 rounded-lg hover:shadow-md transition-shadow duration-300"
          >
            <div className="flex justify-center">
              {item.icon}
            </div>
            <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
            <p className="text-gray-600">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CompanyHighlights;
