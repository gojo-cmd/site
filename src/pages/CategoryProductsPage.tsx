
import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Search, ArrowLeft } from "lucide-react";

const CategoryProductsPage = () => {
  const { categoryId } = useParams<{ categoryId: string }>();
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  
  // Mock data - in a real app, you'd fetch this from your backend
  const categories = [
    { id: 1, name: "General Surgery" },
    { id: 2, name: "Cardiovascular" },
    { id: 3, name: "Diagnostics" },
    { id: 4, name: "Orthopedic" },
    { id: 5, name: "Gynecology" },
    { id: 6, name: "ENT" },
  ];
  
  const categoryProducts = [
    {
      id: 1,
      name: "Surgical Scissors",
      image: "/placeholder.svg",
      categoryId: 1,
      description: "Precision-crafted surgical scissors for precise tissue cutting"
    },
    {
      id: 4,
      name: "Surgical Retractors",
      image: "/placeholder.svg",
      categoryId: 1,
      description: "Ergonomic surgical retractors for optimal surgical field exposure"
    },
    {
      id: 7,
      name: "Surgical Scalpel Set",
      image: "/placeholder.svg",
      categoryId: 1,
      description: "Premium surgical scalpel set with multiple blades"
    },
    {
      id: 9,
      name: "Needle Holders",
      image: "/placeholder.svg",
      categoryId: 1,
      description: "Durable needle holders for secure suture placement"
    },
    {
      id: 10,
      name: "Forceps Set",
      image: "/placeholder.svg",
      categoryId: 1,
      description: "Various forceps for different surgical applications"
    },
    {
      id: 11,
      name: "Surgical Clamps",
      image: "/placeholder.svg",
      categoryId: 1,
      description: "Reliable surgical clamps for vessel and tissue control"
    }
  ].filter(product => product.categoryId === Number(categoryId));
  
  const category = categories.find(cat => cat.id === Number(categoryId));
  
  const filteredProducts = categoryProducts.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    product.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (!category) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-32 text-center">
          <h1 className="text-2xl font-bold mb-4">Category Not Found</h1>
          <Button onClick={() => navigate("/products")}>
            Return to Products
          </Button>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="pt-24 pb-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center mb-4">
            <Button 
              variant="ghost" 
              className="p-0 h-auto hover:bg-transparent" 
              onClick={() => navigate("/products")}
            >
              <ArrowLeft className="h-4 w-4 mr-1" /> Back to Products
            </Button>
          </div>
        
          <h1 className="text-3xl md:text-4xl font-bold mb-6">{category.name}</h1>
          <p className="text-gray-600 max-w-3xl">
            Browse our selection of high-quality {category.name.toLowerCase()} instruments and equipment designed for optimal performance and reliability in medical settings.
          </p>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-10">
        <div className="mb-8 max-w-md">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-4 w-4" />
            <Input 
              type="text"
              placeholder={`Search ${category.name} products...`}
              className="pl-9"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
        
        {filteredProducts.length === 0 ? (
          <div className="text-center py-10">
            <p className="text-xl text-gray-500">No products found in this category.</p>
            <Button 
              variant="outline" 
              className="mt-4"
              onClick={() => navigate("/products")}
            >
              Browse All Products
            </Button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map(product => (
              <Card 
                key={product.id} 
                className="overflow-hidden transition-all duration-300 hover:shadow-lg group"
                onClick={() => navigate(`/products/${product.id}`)}
              >
                <div className="aspect-square overflow-hidden bg-gray-100">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <CardContent className="p-4">
                  <h3 className="text-lg font-medium">{product.name}</h3>
                  <p className="text-sm text-gray-600 mt-1 line-clamp-2">{product.description}</p>
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="mt-4 w-full" 
                  >
                    View Details
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </Layout>
  );
};

export default CategoryProductsPage;
