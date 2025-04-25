
import Layout from "@/components/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Award, Check, Shield, Star } from "lucide-react";

const AboutPage = () => {
  const milestones = [
    {
      year: "2005",
      title: "Company Founded",
      description: "MedSurgical was established with a vision to provide high-quality surgical instruments."
    },
    {
      year: "2010",
      title: "ISO Certification",
      description: "Achieved ISO 13485 certification for our quality management system."
    },
    {
      year: "2015",
      title: "Manufacturing Expansion",
      description: "Expanded our manufacturing facility to include advanced machinery and equipment."
    },
    {
      year: "2018",
      title: "Export Initiative",
      description: "Started exporting our products to international markets across Asia and Europe."
    },
    {
      year: "2022",
      title: "Product Range Expansion",
      description: "Introduced new product categories for specialized surgical procedures."
    }
  ];

  const team = [
    {
      name: "Dr. Rajesh Sharma",
      position: "Founder & CEO",
      image: "/placeholder.svg"
    },
    {
      name: "Dr. Priya Patel",
      position: "Medical Advisor",
      image: "/placeholder.svg"
    },
    {
      name: "Amit Kumar",
      position: "Head of Operations",
      image: "/placeholder.svg"
    },
    {
      name: "Sunita Verma",
      position: "Quality Control Manager",
      image: "/placeholder.svg"
    }
  ];

  return (
    <Layout>
      <div className="pt-24 pb-16 bg-gradient-to-br from-primary/10 to-transparent">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-6">About Us</h1>
          <p className="text-gray-600 max-w-3xl mb-8">
            MedSurgical is a leading manufacturer and supplier of high-quality surgical instruments and medical equipment in India. 
            With over 15 years of experience, we've established ourselves as a trusted partner for hospitals, clinics, and medical professionals nationwide.
          </p>
        </div>
      </div>
      
      {/* Our Story */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-2xl font-bold mb-4">Our Story</h2>
            <p className="text-gray-600 mb-4">
              Founded in 2005, MedSurgical began as a small family business with a passion for precision and quality. Our founder, Dr. Rajesh Sharma, an experienced surgeon himself, recognized the need for reliable, high-quality surgical instruments that medical professionals could depend on.
            </p>
            <p className="text-gray-600 mb-4">
              What started as a small workshop has now grown into a state-of-the-art manufacturing facility equipped with advanced machinery and skilled craftsmen who meticulously create each instrument with precision and care.
            </p>
            <p className="text-gray-600">
              Today, our products are used in thousands of medical facilities across India and internationally, but our commitment remains the same – to provide medical professionals with instruments they can trust when it matters most.
            </p>
          </div>
          <div className="relative">
            <div className="bg-white rounded-lg shadow-lg p-4 transform rotate-2 transition-transform hover:rotate-0">
              <img
                src="/placeholder.svg"
                alt="Our Manufacturing Facility"
                className="w-full h-auto rounded"
              />
            </div>
            <div className="absolute -bottom-4 -left-4 bg-primary text-white px-4 py-2 rounded shadow-lg">
              Since 2005
            </div>
          </div>
        </div>
      </div>
      
      {/* Our Values */}
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold">Our Values</h2>
            <p className="text-gray-600 mt-2 max-w-2xl mx-auto">
              The principles that guide everything we do at MedSurgical
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="border-t-4 border-t-primary">
              <CardContent className="pt-6">
                <div className="rounded-full bg-primary/10 p-3 inline-flex mb-4">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-medium mb-2">Quality</h3>
                <p className="text-gray-600">
                  We maintain the highest standards in our manufacturing processes and materials to ensure exceptional product quality.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-t-4 border-t-primary">
              <CardContent className="pt-6">
                <div className="rounded-full bg-primary/10 p-3 inline-flex mb-4">
                  <Star className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-medium mb-2">Innovation</h3>
                <p className="text-gray-600">
                  We continuously improve our products through research and development to meet evolving medical needs.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-t-4 border-t-primary">
              <CardContent className="pt-6">
                <div className="rounded-full bg-primary/10 p-3 inline-flex mb-4">
                  <Award className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-medium mb-2">Integrity</h3>
                <p className="text-gray-600">
                  We conduct our business with honesty, transparency and adhere to ethical practices in all our operations.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-t-4 border-t-primary">
              <CardContent className="pt-6">
                <div className="rounded-full bg-primary/10 p-3 inline-flex mb-4">
                  <Check className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-medium mb-2">Reliability</h3>
                <p className="text-gray-600">
                  We provide consistent quality and service that our customers can depend on, time after time.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      
      {/* Company Milestones */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-2xl font-bold">Our Journey</h2>
          <p className="text-gray-600 mt-2 max-w-2xl mx-auto">
            Key milestones in our company's history
          </p>
        </div>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gray-200 transform -translate-x-1/2"></div>
          
          <div className="space-y-12">
            {milestones.map((milestone, index) => (
              <div key={index} className="relative">
                <div className={`flex flex-col md:flex-row items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}>
                  {/* Year bubble for mobile */}
                  <div className="md:hidden bg-primary text-white rounded-full py-1 px-3 text-sm font-bold mb-4">
                    {milestone.year}
                  </div>
                  
                  {/* Content */}
                  <div className="md:w-5/12 p-5 bg-white rounded-lg shadow-sm">
                    <h3 className="text-xl font-medium mb-2">{milestone.title}</h3>
                    <p className="text-gray-600">{milestone.description}</p>
                  </div>
                  
                  {/* Center line with year */}
                  <div className="hidden md:flex w-2/12 justify-center relative">
                    <div className="bg-primary text-white rounded-full py-1 px-3 text-sm font-bold absolute top-1/2 transform -translate-y-1/2">
                      {milestone.year}
                    </div>
                  </div>
                  
                  {/* Empty space for alternating layout */}
                  <div className="hidden md:block md:w-5/12"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Leadership Team */}
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold">Our Leadership</h2>
            <p className="text-gray-600 mt-2 max-w-2xl mx-auto">
              The team behind our success
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="text-center">
                <div className="mb-4 relative inline-block">
                  <div className="rounded-full overflow-hidden aspect-square w-48 h-48 mx-auto">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="object-cover w-full h-full"
                    />
                  </div>
                </div>
                <h3 className="text-xl font-medium">{member.name}</h3>
                <p className="text-gray-600">{member.position}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AboutPage;
