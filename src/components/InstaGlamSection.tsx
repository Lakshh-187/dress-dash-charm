
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Instagram, Star, ShoppingBag } from 'lucide-react';

const InstaGlamSection = () => {
  const brands = [
    {
      name: "LAKME",
      category: "Beauty & Makeup",
      image: "💄",
      gradient: "from-pink-500 to-red-500",
      products: ["Lipstick", "Foundation", "Mascara", "Blush"]
    },
    {
      name: "FOSSIL",
      category: "Watches & Accessories",
      image: "⌚",
      gradient: "from-gray-500 to-black",
      products: ["Smartwatch", "Leather Watch", "Steel Band", "Classic"]
    },
    {
      name: "NYKAA",
      category: "Skincare & Beauty",
      image: "✨",
      gradient: "from-purple-500 to-pink-500",
      products: ["Face Serum", "Moisturizer", "Sunscreen", "Face Mask"]
    },
    {
      name: "TANISHQ",
      category: "Gold & Diamond Jewelry",
      image: "💎",
      gradient: "from-yellow-500 to-orange-500",
      products: ["Necklace", "Earrings", "Rings", "Bangles"]
    }
  ];

  return (
    <section className="py-12 bg-gradient-to-br from-red-50 via-pink-50 to-purple-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Instagram className="h-6 w-6 text-pink-500" />
            <h2 className="text-3xl font-bold bg-gradient-to-r from-pink-600 to-red-600 bg-clip-text text-transparent">
              Insta Glam Collection 📸
            </h2>
          </div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Get Instagram-ready with our curated collection from top brands
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {brands.map((brand, index) => (
            <Card key={index} className="group overflow-hidden border-0 shadow-lg bg-white rounded-2xl hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className={`h-32 bg-gradient-to-br ${brand.gradient} relative overflow-hidden`}>
                <div className="absolute inset-0 bg-black/20" />
                <div className="absolute bottom-4 left-4 text-white">
                  <div className="text-3xl mb-2">{brand.image}</div>
                  <h3 className="font-bold text-lg">{brand.name}</h3>
                </div>
                <div className="absolute top-3 right-3">
                  <div className="bg-white/20 backdrop-blur-sm rounded-full p-2">
                    <Star className="h-4 w-4 text-white fill-white" />
                  </div>
                </div>
              </div>
              
              <CardContent className="p-4">
                <p className="text-sm text-gray-600 mb-3">{brand.category}</p>
                <div className="space-y-2 mb-4">
                  {brand.products.map((product, productIndex) => (
                    <div key={productIndex} className="flex items-center justify-between text-sm">
                      <span className="text-gray-700">{product}</span>
                      <span className="text-xs text-gray-400">In Stock</span>
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
