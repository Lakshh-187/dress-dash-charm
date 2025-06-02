
import React, { useState } from 'react';
import { Search, Heart, ShoppingBag, User, Star, Filter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';

const Index = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Dresses', icon: '👗' },
    { id: 'traditional', name: 'Traditional', icon: '🥻' },
    { id: 'western', name: 'Western', icon: '👠' },
    { id: 'party', name: 'Party Wear', icon: '✨' },
    { id: 'casual', name: 'Casual', icon: '🌸' },
    { id: 'ethnic', name: 'Ethnic', icon: '🪷' }
  ];

  const trendingProducts = [
    {
      id: 1,
      name: "Floral Maxi Dress",
      price: "₹2,499",
      originalPrice: "₹3,999",
      image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=500&h=600&fit=crop",
      rating: 4.8,
      reviews: 234,
      tag: "Trending",
      colors: ['#FF6B9D', '#4ECDC4', '#45B7D1']
    },
    {
      id: 2,
      name: "Elegant Anarkali Suit",
      price: "₹4,999",
      originalPrice: "₹7,999",
      image: "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?w=500&h=600&fit=crop",
      rating: 4.9,
      reviews: 456,
      tag: "Best Seller",
      colors: ['#E74C3C', '#F39C12', '#8E44AD']
    },
    {
      id: 3,
      name: "Chic Midi Dress",
      price: "₹1,899",
      originalPrice: "₹2,999",
      image: "https://images.unsplash.com/photo-1566479179817-19eede5a1468?w=500&h=600&fit=crop",
      rating: 4.7,
      reviews: 189,
      tag: "New",
      colors: ['#2ECC71', '#E67E22', '#9B59B6']
    },
    {
      id: 4,
      name: "Designer Lehenga",
      price: "₹8,999",
      originalPrice: "₹12,999",
      image: "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?w=500&h=600&fit=crop",
      rating: 4.9,
      reviews: 567,
      tag: "Premium",
      colors: ['#FF1744', '#FFD700', '#00BCD4']
    }
  ];

  const accessories = [
    { name: "Rose Gold Earrings", price: "₹899", image: "💍" },
    { name: "Matte Lipstick", price: "₹499", image: "💄" },
    { name: "Silk Clutch", price: "₹1,299", image: "👛" },
    { name: "Pearl Necklace", price: "₹2,199", image: "📿" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md shadow-lg sticky top-0 z-50 border-b border-purple-100">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="text-2xl font-bold bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
                DressUp ✨
              </div>
            </div>
            
            <div className="flex-1 max-w-xl mx-8">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <Input
                  type="text"
                  placeholder="Search for dresses, styles, occasions..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 pr-4 py-3 rounded-full border-2 border-purple-200 focus:border-purple-400 focus:ring-0 bg-white/70"
                />
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="sm" className="relative hover:bg-purple-100">
                <Heart className="h-5 w-5 text-gray-600" />
                <span className="absolute -top-1 -right-1 bg-pink-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">3</span>
              </Button>
              <Button variant="ghost" size="sm" className="relative hover:bg-purple-100">
                <ShoppingBag className="h-5 w-5 text-gray-600" />
                <span className="absolute -top-1 -right-1 bg-purple-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">2</span>
              </Button>
              <Button variant="ghost" size="sm" className="hover:bg-purple-100">
                <User className="h-5 w-5 text-gray-600" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-pink-400 via-purple-500 to-blue-500 text-white py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
              Your Style, 
              <span className="block bg-gradient-to-r from-yellow-300 to-pink-300 bg-clip-text text-transparent">
                Your Story
              </span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90 animate-fade-in">
              Discover the perfect dress for every moment ✨
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button className="bg-white text-purple-600 hover:bg-gray-100 text-lg px-8 py-3 rounded-full font-semibold transform hover:scale-105 transition-all duration-200">
                Shop Now 🛍️
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-purple-600 text-lg px-8 py-3 rounded-full font-semibold">
                Explore Trends 🌟
              </Button>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      {/* Categories */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Shop by Style
          </h2>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={activeCategory === category.id ? "default" : "outline"}
                onClick={() => setActiveCategory(category.id)}
                className={`rounded-full px-6 py-3 transition-all duration-200 hover:scale-105 ${
                  activeCategory === category.id 
                    ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg' 
                    : 'border-purple-200 text-purple-600 hover:bg-purple-50'
                }`}
              >
                <span className="mr-2">{category.icon}</span>
                {category.name}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Trending Products */}
      <section className="py-16 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Trending Now 🔥
            </h2>
            <Button variant="outline" className="rounded-full border-purple-200 text-purple-600 hover:bg-purple-50">
              <Filter className="h-4 w-4 mr-2" />
              Filter
            </Button>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {trendingProducts.map((product) => (
              <Card key={product.id} className="group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 bg-white rounded-2xl">
                <div className="relative overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-gradient-to-r from-pink-500 to-purple-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      {product.tag}
                    </span>
                  </div>
                  <Button className="absolute top-4 right-4 bg-white/80 hover:bg-white text-gray-600 p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Heart className="h-4 w-4" />
                  </Button>
                  <div className="absolute bottom-4 left-4 flex space-x-2">
                    {product.colors.map((color, index) => (
                      <div 
                        key={index}
                        className="w-6 h-6 rounded-full border-2 border-white shadow-md"
                        style={{ backgroundColor: color }}
                      ></div>
                    ))}
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-gray-800 mb-2 text-lg">{product.name}</h3>
                  <div className="flex items-center space-x-2 mb-3">
                    <div className="flex items-center">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm text-gray-600 ml-1">{product.rating}</span>
                    </div>
                    <span className="text-sm text-gray-500">({product.reviews} reviews)</span>
                  </div>
                  <div className="flex items-center space-x-3 mb-4">
                    <span className="text-2xl font-bold text-purple-600">{product.price}</span>
                    <span className="text-lg text-gray-400 line-through">{product.originalPrice}</span>
                  </div>
                  <div className="flex space-x-2">
                    <Button className="flex-1 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white rounded-full font-semibold">
                      Add to Cart
                    </Button>
                    <Button variant="outline" className="px-4 border-purple-200 text-purple-600 hover:bg-purple-50 rounded-full">
                      <ShoppingBag className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* You'll Also Love Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-2 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            You'll Also Love This ✨
          </h2>
          <p className="text-center text-gray-600 mb-8">Complete your look with these perfect accessories</p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {accessories.map((item, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 bg-gradient-to-br from-purple-50 to-pink-50 border-0 rounded-xl">
                <CardContent className="p-6 text-center">
                  <div className="text-4xl mb-3">{item.image}</div>
                  <h3 className="font-semibold text-gray-800 mb-2">{item.name}</h3>
                  <p className="text-purple-600 font-bold text-lg mb-3">{item.price}</p>
                  <Button size="sm" className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white rounded-full w-full">
                    Quick Add
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-purple-800 to-pink-800 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">DressUp ✨</h3>
              <p className="text-purple-200 mb-4">Your style, your story. Discover the perfect dress for every moment.</p>
              <div className="flex space-x-4">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center cursor-pointer hover:bg-white/30 transition-colors">
                  📱
                </div>
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center cursor-pointer hover:bg-white/30 transition-colors">
                  💬
                </div>
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center cursor-pointer hover:bg-white/30 transition-colors">
                  📧
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Shop</h4>
              <ul className="space-y-2 text-purple-200">
                <li className="hover:text-white cursor-pointer">Traditional Wear</li>
                <li className="hover:text-white cursor-pointer">Western Dresses</li>
                <li className="hover:text-white cursor-pointer">Party Wear</li>
                <li className="hover:text-white cursor-pointer">Accessories</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-purple-200">
                <li className="hover:text-white cursor-pointer">Size Guide</li>
                <li className="hover:text-white cursor-pointer">Return Policy</li>
                <li className="hover:text-white cursor-pointer">Track Order</li>
                <li className="hover:text-white cursor-pointer">Contact Us</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Stay Updated</h4>
              <p className="text-purple-200 mb-4">Get the latest trends and exclusive offers!</p>
              <div className="flex">
                <Input 
                  type="email" 
                  placeholder="Your email" 
                  className="rounded-l-full border-0 bg-white/20 text-white placeholder-purple-200"
                />
                <Button className="bg-white text-purple-800 hover:bg-purple-100 rounded-r-full px-6">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
          
          <div className="border-t border-purple-600 mt-12 pt-8 text-center text-purple-200">
            <p>&copy; 2024 DressUp. Made with 💜 for fashion lovers everywhere.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
