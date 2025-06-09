
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Instagram, Star, ShoppingBag } from 'lucide-react';

const InstaGlamSection = () => {
  const brands = [
    {
      name: "TANISHQ",
      category: "Gold & Diamond Jewelry",
      image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400&h=300&fit=crop",
      gradient: "from-yellow-500 to-orange-500",
      products: ["Necklace", "Earrings", "Rings", "Bangles"]
    },
    {
      name: "KALYAN",
      category: "Traditional Jewelry",
      image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400&h=300&fit=crop",
      gradient: "from-amber-500 to-yellow-500",
      products: ["Temple Jewelry", "Antique", "Bridal Sets", "Chains"]
    },
    {
      name: "BLUESTONE",
      category: "Modern Diamond Jewelry",
      image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=400&h=300&fit=crop",
      gradient: "from-blue-500 to-amber-500",
      products: ["Diamond Rings", "Pendants", "Studs", "Bracelets"]
    },
    {
      name: "CARATLANE",
      category: "Contemporary Jewelry",
      image: "https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=400&h=300&fit=crop",
      gradient: "from-rose-500 to-amber-500",
      products: ["Fashion Jewelry", "Silver", "Gold Plated", "Gemstones"]
    }
  ];

  return (
    <section className="py-12 bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Instagram className="h-6 w-6 text-amber-600" />
            <h2 className="text-3xl font-bold bg-gradient-to-r from-amber-700 to-orange-700 bg-clip-text text-transparent">
              Insta Jewelry Collection 📸
            </h2>
          </div>
          <p className="text-amber-700 max-w-2xl mx-auto">
            Get Instagram-ready with our curated collection from top jewelry brands
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {brands.map((brand, index) => (
            <Card key={index} className="group overflow-hidden border-0 shadow-lg bg-white rounded-2xl hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={brand.image} 
                  alt={brand.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className={`absolute inset-0 bg-gradient-to-br ${brand.gradient} opacity-80`} />
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="font-bold text-lg">{brand.name}</h3>
                  <p className="text-sm opacity-90">{brand.category}</p>
                </div>
                <div className="absolute top-3 right-3">
                  <div className="bg-white/20 backdrop-blur-sm rounded-full p-2">
                    <Star className="h-4 w-4 text-white fill-white" />
                  </div>
                </div>
              </div>
              
              <CardContent className="p-4">
                <div className="space-y-2 mb-4">
                  {brand.products.map((product, productIndex) => (
                    <div key={productIndex} className="flex items-center justify-between text-sm">
                      <span className="text-amber-800">{product}</span>
                      <span className="text-xs text-amber-600">In Stock</span>
                    </div>
                  ))}
                </div>
                <Button className={`w-full bg-gradient-to-r ${brand.gradient} text-white rounded-full hover:opacity-90`}>
                  <ShoppingBag className="h-4 w-4 mr-2" />
                  Shop Now
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InstaGlamSection;
