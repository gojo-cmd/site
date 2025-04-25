
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "@/components/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

const ProductsPage = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  
  const categories = [
    { id: 1, name: "General Surgery" },
    { id: 2, name: "Cardiovascular" },
    { id: 3, name: "Diagnostics" },
    { id: 4, name: "Orthopedic" },
    { id: 5, name: "Gynecology" },
    { id: 6, name: "ENT" },
  ];
  
  const products = [
    {
      id: 1,
      name: "Surgical Scissors",
      image: "/placeholder.svg",
      category: "General Surgery",
      categoryId: 1,
      description: "Precision-crafted surgical scissors for precise tissue cutting"
    },
    {
      id: 2,
      name: "Hemostatic Forceps",
      image: "/placeholder.svg",
      category: "Cardiovascular",
      categoryId: 2,
      description: "Advanced hemostatic forceps for secure vessel clamping"
    },
    {
      id: 3,
      name: "Diagnostic Set",
      image: "/placeholder.svg",
      category: "Diagnostics",
      categoryId: 3,
      description: "Complete diagnostic set with otoscope and ophthalmoscope"
    },
    {
      id: 4,
      name: "Surgical Retractors",
      image: "/placeholder.svg",
      category: "General Surgery",
      categoryId: 1,
      description: "Ergonomic surgical retractors for optimal surgical field exposure"
    },
    {
      id: 5,
      name: "Bone Drill",
      image: "/placeholder.svg",
      category: "Orthopedic",
      categoryId: 4,
      description: "High-precision bone drill for orthopedic procedures"
    },
    {
      id: 6,
      name: "Stethoscope",
      image: "/placeholder.svg",
      category: "Diagnostics",
      categoryId: 3,
      description: "Professional-grade stethoscope for clear auscultation"
    },
    {
      id: 7,
      name: "Surgical Scalpel Set",
      image: "/placeholder.svg",
      category: "General Surgery",
      categoryId: 1,
      description: "Premium surgical scalpel set with multiple blades"
    },
    {
      id: 8,
      name: "ENT Examination Kit",
      image: "/placeholder.svg",
      category: "ENT",
      categoryId: 6,
      description: "Complete ENT examination kit with specialized tools"
    },
  ];

  const [selectedCategory, setSelectedCategory] = useState<number | null>(null);
  
  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === null || product.categoryId === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  return (
    <Layout>
      <div className="pt-24 pb-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-6">Our Products</h1>
          <p className="text-gray-600 max-w-3xl mb-8">
            Browse our comprehensive catalog of high-quality surgical instruments and medical equipment. 
            All our products are manufactured to meet the highest industry standards.
          </p>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-10">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-1/4">
            <div className="sticky top-24">
              <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
                <h3 className="font-medium text-lg mb-4">Search Products</h3>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-4 w-4" />
                  <Input 
                    type="text"
                    placeholder="Search..."
                    className="pl-9"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
              </div>
              
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="font-medium text-lg mb-4">Categories</h3>
                <div className="space-y-2">
                  <button
                    className={`w-full text-left px-2 py-1.5 rounded ${
                      selectedCategory === null ? 'bg-primary/10 text-primary' : 'hover:bg-gray-100'
                    }`}
                    onClick={() => setSelectedCategory(null)}
                  >
                    All Categories
                  </button>
                  {categories.map(category => (
                    <button
                      key={category.id}
                      className={`w-full text-left px-2 py-1.5 rounded ${
                        selectedCategory === category.id ? 'bg-primary/10 text-primary' : 'hover:bg-gray-100'
                      }`}
                      onClick={() => setSelectedCategory(category.id)}
                    >
                      {category.name}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          <div className="md:w-3/4">
            {filteredProducts.length === 0 ? (
              <div className="text-center py-10">
                <p className="text-xl text-gray-500">No products found matching your criteria.</p>
                <Button 
                  variant="outline" 
                  className="mt-4"
                  onClick={() => {
                    setSearchTerm("");
                    setSelectedCategory(null);
                  }}
                >
                  Clear Filters
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
                      >
                        View Details
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ProductsPage;
