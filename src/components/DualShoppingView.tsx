
import React from 'react';
import { ShoppingBag, Heart, Star } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

interface DualShoppingViewProps {
  currentProduct: any;
}

export const DualShoppingView = ({ currentProduct }: DualShoppingViewProps) => {
  const accessories = [
    {
      id: 1,
      name: "Rose Gold Statement Earrings",
      price: "₹899",
      originalPrice: "₹1,299",
      image: "💍",
      rating: 4.6,
      category: "Jewelry"
    },
    {
      id: 2,
      name: "Matte Nude Lipstick",
      price: "₹499",
      originalPrice: "₹699",
      image: "💄",
      rating: 4.8,
      category: "Beauty"
    },
    {
      id: 3,
      name: "Woven Crossbody Bag",
      price: "₹1,299",
      originalPrice: "₹1,899",
      image: "👜",
      rating: 4.7,
      category: "Bags"
    },
    {
      id: 4,
      name: "Block Heel Sandals",
      price: "₹1,599",
      originalPrice: "₹2,299",
      image: "👠",
      rating: 4.5,
      category: "Footwear"
    }
  ];

  return (
    <div className="space-y-8">
      {/* From Where She Bought This */}
      <Card className="border-0 shadow-lg bg-gradient-to-r from-purple-100 to-pink-100">
        <CardContent className="p-6">
          <h2 className="text-2xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            💃 From Where She Bought This
          </h2>
          <div className="flex items-center space-x-4 p-4 bg-white rounded-xl shadow-md">
            <img 
              src={currentProduct.images[0]} 
              alt={currentProduct.name}
              className="w-20 h-20 object-cover rounded-lg"
            />
            <div className="flex-1">
              <h3 className="font-semibold text-gray-900">{currentProduct.name}</h3>
              <div className="flex items-center space-x-2 mt-1">
                <span className="font-bold text-purple-600">{currentProduct.price}</span>
                <span className="text-sm text-gray-400 line-through">{currentProduct.originalPrice}</span>
              </div>
              <div className="flex items-center mt-1">
                <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                <span className="text-sm text-gray-600 ml-1">{currentProduct.rating}</span>
              </div>
            </div>
            <div className="text-right">
              <div className="text-2xl mb-2">✅</div>
              <p className="text-sm text-green-600 font-medium">In your cart</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* You'll Also Love This */}
      <Card className="border-0 shadow-lg bg-gradient-to-r from-pink-100 to-orange-100">
        <CardContent className="p-6">
          <h2 className="text-2xl font-bold mb-4 bg-gradient-to-r from-pink-600 to-orange-600 bg-clip-text text-transparent">
            💅 You'll Also Love This
          </h2>
          <p className="text-gray-600 mb-6">Complete your look like a fashion influencer! These items go perfectly with your dress:</p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
            {accessories.map((item) => (
              <Card key={item.id} className="group hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 bg-white border-0 rounded-xl overflow-hidden">
                <CardContent className="p-4 text-center">
                  <div className="text-4xl mb-3">{item.image}</div>
                  <h3 className="font-semibold text-gray-800 mb-1 text-sm leading-tight">{item.name}</h3>
                  <div className="flex items-center justify-center space-x-1 mb-2">
                    <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                    <span className="text-xs text-gray-600">{item.rating}</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2 mb-3">
                    <span className="font-bold text-purple-600 text-sm">{item.price}</span>
                    <span className="text-xs text-gray-400 line-through">{item.originalPrice}</span>
                  </div>
                  <Button size="sm" className="bg-gradient-to-r from-pink-500 to-orange-500 hover:from-pink-600 hover:to-orange-600 text-white rounded-full w-full text-xs">
                    Quick Add
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center space-y-3">
            <div className="bg-white rounded-xl p-4">
              <p className="text-lg font-semibold text-gray-900 mb-2">Complete the Look Bundle 💫</p>
              <div className="flex items-center justify-center space-x-3 mb-3">
                <span className="text-2xl font-bold text-green-600">₹4,496</span>
                <span className="text-lg text-gray-400 line-through">₹6,296</span>
                <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">
                  Save ₹1,800
                </span>
              </div>
              <Button className="bg-gradient-to-r from-green-500 to-teal-500 hover:from-green-600 hover:to-teal-600 text-white rounded-full px-8 py-3 text-lg font-semibold">
                <ShoppingBag className="h-5 w-5 mr-2" />
                Add Complete Look to Cart
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
