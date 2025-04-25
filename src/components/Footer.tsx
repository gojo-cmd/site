
import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-50 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-xl font-bold mb-4">MedSurgical</h3>
            <p className="text-gray-600 mb-4">
              Providing premium quality surgical instruments and medical equipment to healthcare professionals since 2005.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-500 hover:text-primary transition-colors">
                <Facebook />
              </a>
              <a href="#" className="text-gray-500 hover:text-primary transition-colors">
                <Instagram />
              </a>
              <a href="#" className="text-gray-500 hover:text-primary transition-colors">
                <Linkedin />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Product Categories</h3>
            <ul className="space-y-2">
              <li><Link to="/products/category/1" className="text-gray-600 hover:text-primary transition-colors">General Surgery</Link></li>
              <li><Link to="/products/category/2" className="text-gray-600 hover:text-primary transition-colors">Cardiovascular</Link></li>
              <li><Link to="/products/category/3" className="text-gray-600 hover:text-primary transition-colors">Diagnostics</Link></li>
              <li><Link to="/products/category/4" className="text-gray-600 hover:text-primary transition-colors">Orthopedic</Link></li>
              <li><Link to="/products/category/5" className="text-gray-600 hover:text-primary transition-colors">Gynecology</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-600 hover:text-primary transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-gray-600 hover:text-primary transition-colors">About Us</Link></li>
              <li><Link to="/products" className="text-gray-600 hover:text-primary transition-colors">Products</Link></li>
              <li><Link to="/contact" className="text-gray-600 hover:text-primary transition-colors">Contact</Link></li>
              <li><Link to="/privacy" className="text-gray-600 hover:text-primary transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-2 mt-0.5 text-primary" />
                <span className="text-gray-600">
                  123 Medical Avenue, Mumbai, Maharashtra, India - 400001
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-2 text-primary" />
                <span className="text-gray-600">+91 9876543210</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-2 text-primary" />
                <span className="text-gray-600">info@medsurgical.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-600 text-sm">
              © {new Date().getFullYear()} MedSurgical. All rights reserved.
            </p>
            <div className="mt-4 md:mt-0">
              <ul className="flex space-x-6">
                <li><Link to="/terms" className="text-sm text-gray-600 hover:text-primary transition-colors">Terms of Service</Link></li>
                <li><Link to="/privacy" className="text-sm text-gray-600 hover:text-primary transition-colors">Privacy Policy</Link></li>
                <li><Link to="/faq" className="text-sm text-gray-600 hover:text-primary transition-colors">FAQ</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
