
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Sparkles, Crown, Heart } from 'lucide-react';

const JewelryCategories = () => {
  const categories = [
    {
      title: "Necklaces",
      subtitle: "Golden Elegance Collection",
      items: [
        { name: "Traditional Choker", price: "₹8,999", originalPrice: "₹12,999", image: "💎" },
        { name: "Pearl Chain", price: "₹5,499", originalPrice: "₹7,999", image: "📿" },
        { name: "Diamond Pendant", price: "₹15,999", originalPrice: "₹22,999", image: "💍" },
        { name: "Gold Chain", price: "₹12,499", originalPrice: "₹18,999", image: "🔗" }
      ],
      gradient: "from-yellow-400 to-orange-500",
      bgColor: "bg-gradient-to-br from-yellow-50 to-orange-50"
    },
    {
      title: "Earrings",
      subtitle: "Stunning Drops & Studs",
      items: [
        { name: "Jhumka Earrings", price: "₹3,999", originalPrice: "₹5,999", image: "👂" },
        { name: "Diamond Studs", price: "₹7,499", originalPrice: "₹9,999", image: "💎" },
        { name: "Chandelier Drops", price: "₹4,599", originalPrice: "₹6,999", image: "💫" },
        { name: "Pearl Danglers", price: "₹2,999", originalPrice: "₹4,499", image: "🌟" }
      ],
      gradient: "from-pink-400 to-purple-500",
      bgColor: "bg-gradient-to-br from-pink-50 to-purple-50"
    },
    {
      title: "Rings & Bangles",
      subtitle: "Hand Accessories",
      items: [
        { name: "Engagement Ring", price: "₹25,999", originalPrice: "₹35,999", image: "💍" },
        { name: "Gold Bangles Set", price: "₹18,999", originalPrice: "₹25,999", image: "📿" },
        { name: "Designer Ring", price: "₹6,999", originalPrice: "₹9,999", image: "💎" },
        { name: "Bracelet Chain", price: "₹4,999", originalPrice: "₹7,499", image: "⛓️" }
      ],
      gradient: "from-purple-400 to-blue-500",
      bgColor: "bg-gradient-to-br from-purple-50 to-blue-50"
    }
  ];

  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Crown className="h-6 w-6 text-yellow-500" />
            <h2 className="text-3xl font-bold bg-gradient-to-r from-yellow-600 to-orange-600 bg-clip-text text-transparent">
              Jewelry & Accessories ✨
            </h2>
            <Crown className="h-6 w-6 text-yellow-500" />
          </div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Complete your look with our stunning collection of traditional and modern jewelry
          </p>
        </div>

        <div className="space-y-12">
          {categories.map((category, index) => (
            <div key={index} className={`${category.bgColor} rounded-3xl p-8`}>
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className={`text-2xl font-bold bg-gradient-to-r ${category.gradient} bg-clip-text text-transparent mb-2`}>
                    {category.title}
                  </h3>
                  <p className="text-gray-600">{category.subtitle}</p>
                </div>
                <Button variant="outline" className={`bg-gradient-to-r ${category.gradient} text-white border-0 hover:opacity-90`}>
                  View All →
                </Button>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {category.items.map((item, itemIndex) => (
                  <Card key={itemIndex} className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 bg-white/80 backdrop-blur-sm border-0 rounded-xl overflow-hidden">
                    <CardContent className="p-4 text-center">
                      <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">
                        {item.image}
                      </div>
                      <h4 className="font-semibold text-gray-800 mb-2 text-sm">{item.name}</h4>
                      <div className="space-y-1">
                        <span className={`font-bold bg-gradient-to-r ${category.gradient} bg-clip-text text-transparent`}>
                          {item.price}
                        </span>
                        <p className="text-xs text-gray-400 line-through">{item.originalPrice}</p>
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
          ))}
        </div>
      </div>
    </section>
  );
};

export default JewelryCategories;
