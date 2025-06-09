
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Sparkles, Crown, Heart } from 'lucide-react';

const JewelryCategories = () => {
  const categories = [
    {
      title: "Necklaces",
      subtitle: "Golden Elegance Collection",
      heroImage: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=600&h=400&fit=crop",
      items: [
        { name: "Traditional Choker", price: "₹8,999", originalPrice: "₹12,999", image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=200&h=200&fit=crop" },
        { name: "Pearl Chain", price: "₹5,499", originalPrice: "₹7,999", image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=200&h=200&fit=crop" },
        { name: "Diamond Pendant", price: "₹15,999", originalPrice: "₹22,999", image: "https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?w=200&h=200&fit=crop" },
        { name: "Gold Chain", price: "₹12,499", originalPrice: "₹18,999", image: "https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=200&h=200&fit=crop" }
      ],
      gradient: "from-amber-400 to-orange-500",
      bgColor: "bg-gradient-to-br from-amber-50 to-orange-50"
    },
    {
      title: "Earrings",
      subtitle: "Stunning Drops & Studs",
      heroImage: "https://images.unsplash.com/photo-1506629905621-b8c36d007811?w=600&h=400&fit=crop",
      items: [
        { name: "Jhumka Earrings", price: "₹3,999", originalPrice: "₹5,999", image: "https://images.unsplash.com/photo-1583292650898-7d22cd27ca6f?w=200&h=200&fit=crop" },
        { name: "Diamond Studs", price: "₹7,499", originalPrice: "₹9,999", image: "https://images.unsplash.com/photo-1609873814058-4c8c60d20e5c?w=200&h=200&fit=crop" },
        { name: "Chandelier Drops", price: "₹4,599", originalPrice: "₹6,999", image: "https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=200&h=200&fit=crop" },
        { name: "Pearl Danglers", price: "₹2,999", originalPrice: "₹4,499", image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=200&h=200&fit=crop" }
      ],
      gradient: "from-rose-400 to-amber-500",
      bgColor: "bg-gradient-to-br from-rose-50 to-amber-50"
    },
    {
      title: "Rings & Bangles",
      subtitle: "Hand Accessories",
      heroImage: "https://images.unsplash.com/photo-1576053139448-8d87b891cd1b?w=600&h=400&fit=crop",
      items: [
        { name: "Engagement Ring", price: "₹25,999", originalPrice: "₹35,999", image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=200&h=200&fit=crop" },
        { name: "Gold Bangles Set", price: "₹18,999", originalPrice: "₹25,999", image: "https://images.unsplash.com/photo-1611791485021-a86c1e4b65e5?w=200&h=200&fit=crop" },
        { name: "Designer Ring", price: "₹6,999", originalPrice: "₹9,999", image: "https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=200&h=200&fit=crop" },
        { name: "Bracelet Chain", price: "₹4,999", originalPrice: "₹7,499", image: "https://images.unsplash.com/photo-1609873814058-4c8c60d20e5c?w=200&h=200&fit=crop" }
      ],
      gradient: "from-yellow-400 to-amber-500",
      bgColor: "bg-gradient-to-br from-yellow-50 to-amber-50"
    }
  ];

  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Crown className="h-6 w-6 text-amber-600" />
            <h2 className="text-3xl font-bold bg-gradient-to-r from-amber-700 to-orange-700 bg-clip-text text-transparent">
              Jewelry & Accessories ✨
            </h2>
            <Crown className="h-6 w-6 text-amber-600" />
          </div>
          <p className="text-amber-700 max-w-2xl mx-auto">
            Complete your look with our stunning collection of traditional and modern jewelry
          </p>
        </div>

        <div className="space-y-12">
          {categories.map((category, index) => (
            <div key={index} className={`${category.bgColor} rounded-3xl p-8 border border-amber-200`}>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
                <div className="lg:col-span-1">
                  <div className="relative">
                    <img 
                      src={category.heroImage} 
                      alt={category.title}
                      className="w-full h-64 object-cover rounded-2xl shadow-lg"
                    />
                    <div className="absolute inset-0 bg-black/20 rounded-2xl"></div>
                    <div className="absolute bottom-4 left-4 text-white">
                      <h3 className={`text-2xl font-bold mb-2`}>
                        {category.title}
                      </h3>
                      <p className="text-sm opacity-90">{category.subtitle}</p>
                    </div>
                  </div>
                </div>
                
                <div className="lg:col-span-2">
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <h3 className={`text-2xl font-bold bg-gradient-to-r ${category.gradient} bg-clip-text text-transparent mb-2`}>
                        {category.title}
                      </h3>
                      <p className="text-amber-700">{category.subtitle}</p>
                    </div>
                    <Button variant="outline" className={`bg-gradient-to-r ${category.gradient} text-white border-0 hover:opacity-90`}>
                      View All →
                    </Button>
                  </div>

                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {category.items.map((item, itemIndex) => (
                      <Card key={itemIndex} className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 bg-white/90 backdrop-blur-sm border border-amber-200 rounded-xl overflow-hidden">
                        <div className="relative h-32 overflow-hidden">
                          <img 
                            src={item.image} 
                            alt={item.name}
                            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                          />
                        </div>
                        <CardContent className="p-3 text-center">
                          <h4 className="font-semibold text-amber-800 mb-2 text-sm">{item.name}</h4>
                          <div className="space-y-1">
                            <span className={`font-bold bg-gradient-to-r ${category.gradient} bg-clip-text text-transparent`}>
                              {item.price}
                            </span>
                            <p className="text-xs text-amber-600 line-through">{item.originalPrice}</p>
                          </div>
                          <Button size="sm" className={`w-full mt-3 bg-gradient-to-r ${category.gradient} text-white rounded-full text-xs py-2`}>
                            <Heart className="h-3 w-3 mr-1" />
                            Add to Wishlist
                          </Button>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default JewelryCategories;
