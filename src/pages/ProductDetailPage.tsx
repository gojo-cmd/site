
import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowLeft, Mail, Phone } from "lucide-react";
import { toast } from "@/hooks/use-toast";

const ProductDetailPage = () => {
  const { productId } = useParams<{ productId: string }>();
  const navigate = useNavigate();
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  
  // In a real application, you would fetch this based on the productId
  const product = {
    id: Number(productId),
    name: "Surgical Scissors",
    category: "General Surgery",
    description: "Precision-crafted surgical scissors designed for accurate tissue cutting in various surgical procedures. Made from high-quality stainless steel with ergonomic handles for surgeon comfort during extended procedures.",
    features: [
      "Medical-grade stainless steel construction",
      "Ergonomic finger loops for comfort",
      "Precision-ground cutting edges",
      "Autoclavable for sterilization",
      "Available in multiple sizes",
    ],
    specifications: [
      { name: "Material", value: "Stainless Steel 316" },
      { name: "Length", value: "14.5cm" },
      { name: "Tip Type", value: "Straight" },
      { name: "Handle Type", value: "Ergonomic" },
      { name: "Sterilization", value: "Autoclave / ETO" },
      { name: "Country of Origin", value: "India" },
    ],
    images: [
      "/placeholder.svg",
      "/placeholder.svg",
      "/placeholder.svg",
      "/placeholder.svg",
    ],
    relatedProducts: [
      { id: 2, name: "Hemostatic Forceps", image: "/placeholder.svg" },
      { id: 4, name: "Surgical Retractors", image: "/placeholder.svg" },
      { id: 7, name: "Surgical Scalpel Set", image: "/placeholder.svg" },
    ]
  };

  const handleEnquire = () => {
    toast({
      title: "Enquiry Sent",
      description: "Thank you for your interest. Our team will contact you shortly.",
    });
  };

  if (!product) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-32 text-center">
          <h1 className="text-2xl font-bold mb-4">Product Not Found</h1>
          <Button onClick={() => navigate("/products")}>
            Return to Products
          </Button>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Breadcrumb */}
          <div className="flex items-center text-sm text-gray-500 mb-6">
            <Button 
              variant="ghost" 
              size="sm" 
              className="hover:bg-transparent p-0 h-auto" 
              onClick={() => navigate("/products")}
            >
              <ArrowLeft className="h-4 w-4 mr-1" /> Back to Products
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {/* Product Images */}
            <div>
              <div className="bg-white rounded-lg overflow-hidden mb-4 border">
                <img 
                  src={product.images[activeImageIndex]} 
                  alt={`${product.name} - Image ${activeImageIndex + 1}`}
                  className="w-full h-auto object-contain aspect-square"
                />
              </div>
              
              <div className="grid grid-cols-4 gap-2">
                {product.images.map((image, index) => (
                  <div 
                    key={index}
                    className={`border rounded cursor-pointer overflow-hidden aspect-square ${
                      index === activeImageIndex ? "ring-2 ring-primary" : ""
                    }`}
                    onClick={() => setActiveImageIndex(index)}
                  >
                    <img 
                      src={image} 
                      alt={`${product.name} - Thumbnail ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
            
            {/* Product Info */}
            <div>
              <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
              <p className="text-gray-500 mb-4">{product.category}</p>
              
              <div className="bg-gray-50 rounded-lg p-4 mb-6">
                <h2 className="text-lg font-medium mb-2">Product Description</h2>
                <p className="text-gray-700">{product.description}</p>
              </div>
              
              <Tabs defaultValue="features">
                <TabsList className="mb-4">
                  <TabsTrigger value="features">Features</TabsTrigger>
                  <TabsTrigger value="specifications">Specifications</TabsTrigger>
                </TabsList>
                <TabsContent value="features" className="space-y-1">
                  <ul className="list-disc list-inside space-y-1">
                    {product.features.map((feature, index) => (
                      <li key={index} className="text-gray-700">{feature}</li>
                    ))}
                  </ul>
                </TabsContent>
                <TabsContent value="specifications">
                  <div className="grid grid-cols-2 gap-2">
                    {product.specifications.map((spec, index) => (
                      <div key={index} className="py-2">
                        <span className="font-medium">{spec.name}:</span> {spec.value}
                      </div>
                    ))}
                  </div>
                </TabsContent>
              </Tabs>
              
              <div className="mt-8">
                <h3 className="text-lg font-medium mb-4">Interested in this product?</h3>
                <div className="bg-gray-50 rounded-lg p-6">
                  <p className="text-gray-600 mb-4">
                    Contact our sales team for pricing information, availability, and customization options.
                  </p>
                  <div className="space-y-4">
                    <Button 
                      className="w-full gap-2" 
                      size="lg"
                      onClick={handleEnquire}
                    >
                      <Mail className="h-5 w-5" />
                      Enquire Now
                    </Button>
                    <Button 
                      variant="outline" 
                      className="w-full gap-2"
                      size="lg"
                    >
                      <Phone className="h-5 w-5" />
                      Call Sales Team
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Related Products */}
          <div className="mt-16">
            <h2 className="text-2xl font-bold mb-6">Related Products</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {product.relatedProducts.map(relatedProduct => (
                <Card 
                  key={relatedProduct.id}
                  className="overflow-hidden cursor-pointer transition-shadow hover:shadow-md"
                  onClick={() => navigate(`/products/${relatedProduct.id}`)}
                >
                  <div className="aspect-square overflow-hidden">
                    <img 
                      src={relatedProduct.image}
                      alt={relatedProduct.name}
                      className="w-full h-full object-cover transition-transform hover:scale-105"
                    />
                  </div>
                  <CardContent className="p-4">
                    <h3 className="font-medium">{relatedProduct.name}</h3>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ProductDetailPage;
