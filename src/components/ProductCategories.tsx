
import { useNavigate } from "react-router-dom";
import { Card } from "@/components/ui/card";

const ProductCategories = () => {
  const navigate = useNavigate();
  
  const categories = [
    {
      id: 1,
      name: "General Surgery",
      image: "/placeholder.svg",
      count: 76
    },
    {
      id: 2,
      name: "Cardiovascular",
      image: "/placeholder.svg",
      count: 43
    },
    {
      id: 3,
      name: "Diagnostics",
      image: "/placeholder.svg",
      count: 38
    },
    {
      id: 4,
      name: "Orthopedic",
      image: "/placeholder.svg",
      count: 52
    },
    {
      id: 5,
      name: "Gynecology",
      image: "/placeholder.svg",
      count: 29
    },
    {
      id: 6,
      name: "ENT",
      image: "/placeholder.svg",
      count: 31
    }
  ];

  return (
    <section className="py-10">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold">Our Product Categories</h2>
        <p className="text-gray-600 mt-2 max-w-xl mx-auto">
          Explore our comprehensive range of high-quality surgical instruments and medical equipment
        </p>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((category) => (
          <Card 
            key={category.id}
            className="group relative overflow-hidden h-48 cursor-pointer"
            onClick={() => navigate(`/products/category/${category.id}`)}
          >
            <div className="absolute inset-0">
              <img 
                src={category.image} 
                alt={category.name}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
              <h3 className="text-xl font-semibold">{category.name}</h3>
              <p className="text-sm opacity-75">{category.count} Products</p>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default ProductCategories;
