
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

const FeaturedProducts = () => {
  const navigate = useNavigate();
  
  const featuredProducts = [
    {
      id: 1,
      name: "Surgical Scissors",
      image: "/placeholder.svg",
      category: "General Surgery",
      description: "Precision-crafted surgical scissors for precise tissue cutting"
    },
    {
      id: 2,
      name: "Hemostatic Forceps",
      image: "/placeholder.svg",
      category: "Cardiovascular",
      description: "Advanced hemostatic forceps for secure vessel clamping"
    },
    {
      id: 3,
      name: "Diagnostic Set",
      image: "/placeholder.svg",
      category: "Diagnostics",
      description: "Complete diagnostic set with otoscope and ophthalmoscope"
    },
    {
      id: 4,
      name: "Surgical Retractors",
      image: "/placeholder.svg",
      category: "General Surgery",
      description: "Ergonomic surgical retractors for optimal surgical field exposure"
    }
  ];

  return (
    <section className="py-10">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h2 className="text-3xl font-bold">Featured Products</h2>
          <p className="text-gray-600 mt-2">Our most trusted surgical instruments</p>
        </div>
        <Button variant="ghost" onClick={() => navigate("/products")} className="flex items-center gap-2">
          View All <ArrowRight className="h-4 w-4" />
        </Button>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {featuredProducts.map((product) => (
          <Card key={product.id} className="overflow-hidden transition-all duration-300 hover:shadow-lg group">
            <div className="relative aspect-square overflow-hidden bg-gray-100">
              <img
                src={product.image}
                alt={product.name}
                className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute top-2 right-2 bg-primary text-white text-xs px-2 py-1 rounded">
                {product.category}
              </div>
            </div>
            <CardContent className="p-4">
              <h3 className="text-lg font-medium">{product.name}</h3>
              <p className="text-sm text-gray-600 mt-1 line-clamp-2">{product.description}</p>
              <Button 
                variant="outline" 
                size="sm"
                className="mt-4 w-full" 
                onClick={() => navigate(`/products/${product.id}`)}
              >
                View Details
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default FeaturedProducts;
