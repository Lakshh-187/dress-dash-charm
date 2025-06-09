import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, Heart, ShoppingCart, Star, Filter, TrendingUp, Sparkles, Crown, Users, Menu, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import HeroCarousel from '@/components/HeroCarousel';
import JewelryCategories from '@/components/JewelryCategories';
import InstaGlamSection from '@/components/InstaGlamSection';
import LiveChatbot from '@/components/LiveChatbot';
import WhatsAppBot from '@/components/WhatsAppBot';

const Index = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const jewelryCategories = [
    {
      name: "BESTSELLER",
      image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=100&h=100&fit=crop",
      bgColor: "bg-gradient-to-br from-amber-200 to-amber-300"
    },
    {
      name: "EARRINGS",
      image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=100&h=100&fit=crop",
      bgColor: "bg-gradient-to-br from-rose-200 to-rose-300"
    },
    {
      name: "NECKLACES",
      image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=100&h=100&fit=crop",
      bgColor: "bg-gradient-to-br from-yellow-200 to-yellow-300"
    },
    {
      name: "RINGS",
      image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=100&h=100&fit=crop",
      bgColor: "bg-gradient-to-br from-orange-200 to-orange-300"
    },
    {
      name: "BRACELETS",
      image: "https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=100&h=100&fit=crop",
      bgColor: "bg-gradient-to-br from-amber-200 to-orange-300"
    },
    {
      name: "PENDANTS",
      image: "https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?w=100&h=100&fit=crop",
      bgColor: "bg-gradient-to-br from-yellow-200 to-amber-300"
    },
    {
      name: "BANGLES",
      image: "https://images.unsplash.com/photo-1611791485021-a86c1e4b65e5?w=100&h=100&fit=crop",
      bgColor: "bg-gradient-to-br from-rose-200 to-amber-300"
    },
    {
      name: "CHAINS",
      image: "https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=100&h=100&fit=crop",
      bgColor: "bg-gradient-to-br from-orange-200 to-yellow-300"
    },
    {
      name: "SETS",
      image: "https://images.unsplash.com/photo-1576053139448-8d87b891cd1b?w=100&h=100&fit=crop",
      bgColor: "bg-gradient-to-br from-amber-200 to-rose-300"
    }
  ];

  const categories = [
    { name: 'All', icon: '👗', color: 'from-purple-400 to-pink-400' },
    { name: 'Traditional', icon: '🪷', color: 'from-orange-400 to-red-400' },
    { name: 'Western', icon: '✨', color: 'from-blue-400 to-purple-400' },
    { name: 'Party Wear', icon: '🎉', color: 'from-pink-400 to-purple-400' },
    { name: 'Casual', icon: '🌸', color: 'from-green-400 to-blue-400' },
    { name: 'Formal', icon: '💼', color: 'from-gray-400 to-purple-400' }
  ];

  const trendingProducts = [
    {
      id: 1,
      name: "Floral Maxi Dress",
      price: "₹2,499",
      originalPrice: "₹3,999",
      image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=400&h=500&fit=crop",
      rating: 4.8,
      reviews: 234,
      tag: "Trending",
      colors: ['#ff69b4', '#00ced1', '#32cd32']
    },
    {
      id: 2,
      name: "Embroidered Anarkali",
      price: "₹4,299",
      originalPrice: "₹6,999",
      image: "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?w=400&h=500&fit=crop",
      rating: 4.9,
      reviews: 189,
      tag: "Bestseller",
      colors: ['#ff1493', '#ffd700', '#8a2be2']
    },
    {
      id: 3,
      name: "Denim Mini Dress",
      price: "₹1,899",
      originalPrice: "₹2,999",
      image: "https://images.unsplash.com/photo-1566479179817-19eede5a1468?w=400&h=500&fit=crop",
      rating: 4.7,
      reviews: 156,
      tag: "New",
      colors: ['#4169e1', '#20b2aa', '#ff6347']
    },
    {
      id: 4,
      name: "Silk Saree Gown",
      price: "₹5,699",
      originalPrice: "₹8,999",
      image: "https://images.unsplash.com/photo-1594736797933-d0c501ba2fe6?w=400&h=500&fit=crop",
      rating: 4.6,
      reviews: 98,
      tag: "Premium",
      colors: ['#dc143c', '#ffd700', '#9370db']
    }
  ];

  const collections = [
    {
      name: "Bollywood Glam",
      description: "Inspired by your favorite stars ✨",
      image: "https://images.unsplash.com/photo-1583391733981-24943dc3f86b?w=600&h=400&fit=crop",
      products: "45+ styles"
    },
    {
      name: "Festival Ready",
      description: "Traditional meets modern 🪷",
      image: "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?w=600&h=400&fit=crop",
      products: "30+ styles"
    },
    {
      name: "Date Night",
      description: "Perfect for romantic evenings 💕",
      image: "https://images.unsplash.com/photo-1566479179817-19eede5a1468?w=600&h=400&fit=crop",
      products: "25+ styles"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50">
      {/* Main Header */}
      <header className="bg-gradient-to-r from-amber-50 to-orange-50 shadow-lg sticky top-0 z-50 border-b border-amber-200">
        <div className="container mx-auto px-4">
          {/* Top Bar */}
          <div className="flex items-center justify-between py-4">
            <div className="text-2xl font-bold bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
              JewelCraft ✨
            </div>
            
            {/* Search Bar */}
            <div className="flex-1 max-w-md mx-8">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-amber-600 h-5 w-5" />
                <Input
                  placeholder="Search for exquisite jewelry..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 pr-4 py-2 rounded-full border-amber-300 focus:border-amber-500 focus:ring-amber-400/20 bg-white/80"
                />
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="sm" className="relative hover:bg-amber-100">
                <User className="h-5 w-5 text-amber-700" />
              </Button>
              <Button variant="ghost" size="sm" className="relative hover:bg-amber-100">
                <Heart className="h-5 w-5 text-amber-700" />
                <span className="absolute -top-1 -right-1 bg-rose-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">3</span>
              </Button>
              <Button variant="ghost" size="sm" className="relative hover:bg-amber-100">
                <ShoppingCart className="h-5 w-5 text-amber-700" />
                <span className="absolute -top-1 -right-1 bg-amber-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">2</span>
              </Button>
            </div>
          </div>

          {/* Navigation Menu */}
          <div className="border-t border-amber-200 py-2">
            <NavigationMenu className="mx-auto">
              <NavigationMenuList className="space-x-8">
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-sm font-medium text-amber-800 hover:text-amber-600">
                    EARRINGS
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="p-4 w-80">
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <h4 className="font-semibold mb-2 text-amber-800">Studs</h4>
                          <ul className="space-y-1 text-sm">
                            <li><NavigationMenuLink href="#" className="text-amber-700 hover:text-amber-600">Diamond Studs</NavigationMenuLink></li>
                            <li><NavigationMenuLink href="#" className="text-amber-700 hover:text-amber-600">Pearl Studs</NavigationMenuLink></li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-2 text-amber-800">Drops</h4>
                          <ul className="space-y-1 text-sm">
                            <li><NavigationMenuLink href="#" className="text-amber-700 hover:text-amber-600">Chandelier</NavigationMenuLink></li>
                            <li><NavigationMenuLink href="#" className="text-amber-700 hover:text-amber-600">Jhumkas</NavigationMenuLink></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-sm font-medium text-amber-800 hover:text-amber-600">
                    NECKLACES
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="p-4 w-80">
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <h4 className="font-semibold mb-2 text-amber-800">Chains</h4>
                          <ul className="space-y-1 text-sm">
                            <li><NavigationMenuLink href="#" className="text-amber-700 hover:text-amber-600">Gold Chains</NavigationMenuLink></li>
                            <li><NavigationMenuLink href="#" className="text-amber-700 hover:text-amber-600">Pearl Strings</NavigationMenuLink></li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-2 text-amber-800">Chokers</h4>
                          <ul className="space-y-1 text-sm">
                            <li><NavigationMenuLink href="#" className="text-amber-700 hover:text-amber-600">Traditional</NavigationMenuLink></li>
                            <li><NavigationMenuLink href="#" className="text-amber-700 hover:text-amber-600">Modern</NavigationMenuLink></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-sm font-medium text-amber-800 hover:text-amber-600">
                    RINGS
                  </NavigationMenuTrigger>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-sm font-medium text-amber-800 hover:text-amber-600">
                    BRACELETS
                  </NavigationMenuTrigger>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-sm font-medium text-amber-800 hover:text-amber-600">
                    BANGLES
                  </NavigationMenuTrigger>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-sm font-medium text-amber-800 hover:text-amber-600">
                    NEW ARRIVALS
                  </NavigationMenuTrigger>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-sm font-medium text-amber-800 hover:text-amber-600">
                    BRIDAL COLLECTION
                  </NavigationMenuTrigger>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-sm font-medium text-amber-800 hover:text-amber-600">
                    GIFT SETS
                  </NavigationMenuTrigger>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* Jewelry Categories Row */}
          <div className="bg-gradient-to-r from-amber-800 to-orange-800 text-white py-4 -mx-4">
            <div className="container mx-auto px-4">
              <div className="flex items-center justify-center space-x-6 md:space-x-8 overflow-x-auto scrollbar-hide">
                {jewelryCategories.map((category, index) => (
                  <div key={index} className="flex flex-col items-center space-y-2 min-w-[80px] cursor-pointer group">
                    <div className={`w-16 h-16 md:w-20 md:h-20 rounded-full ${category.bgColor} p-1 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                      <img 
                        src={category.image} 
                        alt={category.name}
                        className="w-full h-full object-cover rounded-full"
                      />
                    </div>
                    <span className="text-xs font-medium text-center leading-tight">
                      {category.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Carousel */}
      <HeroCarousel />

      {/* Category Filter */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-amber-900">Shop by Category</h2>
            <Button variant="outline" size="sm" className="rounded-full border-amber-300 text-amber-700 hover:bg-amber-50">
              <Filter className="h-4 w-4 mr-2" />
              Filter
            </Button>
          </div>
          
          <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
            {categories.map((category) => (
              <button
                key={category.name}
                onClick={() => setSelectedCategory(category.name)}
                className={`p-4 rounded-2xl transition-all duration-300 transform hover:scale-105 ${
                  selectedCategory === category.name
                    ? `bg-gradient-to-br ${category.color} text-white shadow-lg`
                    : 'bg-white hover:bg-amber-50 border border-amber-200'
                }`}
              >
                <div className="text-2xl mb-2">{category.icon}</div>
                <div className="text-sm font-medium">{category.name}</div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Trending Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center space-x-2">
              <TrendingUp className="h-6 w-6 text-amber-600" />
              <h2 className="text-2xl font-bold bg-gradient-to-r from-amber-700 to-orange-700 bg-clip-text text-transparent">
                Trending Now 🔥
              </h2>
            </div>
            <Button variant="link" className="text-amber-700">
              View All →
            </Button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {trendingProducts.map((product) => (
              <Link key={product.id} to={`/product/${product.id}`}>
                <Card className="group overflow-hidden border-0 shadow-lg bg-white rounded-2xl hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                  <div className="relative">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-full h-48 md:h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute top-3 left-3">
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold text-white ${
                        product.tag === 'Trending' ? 'bg-gradient-to-r from-amber-500 to-orange-500' :
                        product.tag === 'Bestseller' ? 'bg-gradient-to-r from-green-500 to-emerald-500' :
                        product.tag === 'New' ? 'bg-gradient-to-r from-blue-500 to-purple-500' :
                        'bg-gradient-to-r from-amber-600 to-orange-600'
                      }`}>
                        {product.tag}
                      </span>
                    </div>
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      className="absolute top-3 right-3 bg-white/80 hover:bg-white rounded-full p-2"
                    >
                      <Heart className="h-4 w-4 text-amber-700 hover:text-rose-500" />
                    </Button>
                    
                    {/* Color Options */}
                    <div className="absolute bottom-3 left-3 flex space-x-1">
                      {product.colors.map((color, index) => (
                        <div 
                          key={index}
                          className="w-4 h-4 rounded-full border-2 border-white shadow-sm"
                          style={{ backgroundColor: color }}
                        />
                      ))}
                    </div>
                  </div>
                  
                  <CardContent className="p-4">
                    <h3 className="font-semibold text-amber-900 mb-2 group-hover:text-amber-700 transition-colors">
                      {product.name}
                    </h3>
                    <div className="flex items-center space-x-1 mb-2">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm font-medium">{product.rating}</span>
                      <span className="text-sm text-amber-600">({product.reviews})</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="text-lg font-bold text-amber-700">{product.price}</span>
                      <span className="text-sm text-amber-500 line-through">{product.originalPrice}</span>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* New Jewelry Categories Section */}
      <JewelryCategories />

      {/* New Insta Glam Section */}
      <InstaGlamSection />

      {/* Collections */}
      <section className="py-12 bg-gradient-to-br from-amber-50 to-orange-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <Sparkles className="h-6 w-6 text-amber-600" />
              <h2 className="text-3xl font-bold bg-gradient-to-r from-amber-700 to-orange-700 bg-clip-text text-transparent">
                Curated Collections
              </h2>
              <Sparkles className="h-6 w-6 text-orange-600" />
            </div>
            <p className="text-amber-700 max-w-2xl mx-auto">
              Handpicked jewelry for every mood, occasion, and celebration ✨
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {collections.map((collection, index) => (
              <Card key={index} className="group overflow-hidden border-0 shadow-lg bg-white rounded-2xl hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={collection.image} 
                    alt={collection.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-xl font-bold mb-1">{collection.name}</h3>
                    <p className="text-sm opacity-90">{collection.description}</p>
                    <span className="text-xs bg-white/20 px-2 py-1 rounded-full mt-2 inline-block">
                      {collection.products}
                    </span>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* You'll Also Love Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <Crown className="h-6 w-6 text-amber-600" />
              <h2 className="text-3xl font-bold bg-gradient-to-r from-amber-700 to-orange-700 bg-clip-text text-transparent">
                You'll Also Love This 💎
              </h2>
            </div>
            <p className="text-amber-700 max-w-2xl mx-auto">
              Complete your look with these must-have jewelry accessories!
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { name: "Rose Gold Earrings", price: "₹899", image: "💍", category: "Earrings" },
              { name: "Diamond Pendant", price: "₹2,499", image: "💎", category: "Pendants" },
              { name: "Gold Bracelet", price: "₹1,299", image: "⌚", category: "Bracelets" },
              { name: "Pearl Ring", price: "₹1,599", image: "💍", category: "Rings" }
            ].map((item, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 bg-white border-0 rounded-xl overflow-hidden">
                <CardContent className="p-4 text-center">
                  <div className="text-4xl mb-3">{item.image}</div>
                  <h3 className="font-semibold text-amber-800 mb-1 text-sm">{item.name}</h3>
                  <p className="text-xs text-amber-600 mb-2">{item.category}</p>
                  <span className="font-bold text-amber-700">{item.price}</span>
                  <Button size="sm" className="w-full mt-3 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white rounded-full">
                    Quick Add
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-amber-900 to-orange-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="text-2xl font-bold mb-4">JewelCraft ✨</div>
              <p className="text-amber-200 mb-4">
                Your destination for exquisite jewelry that celebrates every moment of your life.
              </p>
              <div className="flex space-x-4">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors">
                  <Users className="h-5 w-5" />
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-amber-200">
                <li><a href="#" className="hover:text-white transition-colors">New Arrivals</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Best Sellers</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Sale</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Size Guide</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Customer Care</h3>
              <ul className="space-y-2 text-amber-200">
                <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Track Order</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Returns</a></li>
                <li><a href="#" className="hover:text-white transition-colors">FAQ</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Stay Updated</h3>
              <p className="text-amber-200 mb-4">Get the latest jewelry trends & exclusive offers!</p>
              <div className="flex space-x-2">
                <Input 
                  placeholder="Your email"
                  className="bg-white/20 border-white/30 text-white placeholder-amber-200"
                />
                <Button className="bg-amber-600 hover:bg-amber-700">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
          
          <div className="border-t border-amber-700 mt-8 pt-8 text-center text-amber-200">
            <p>&copy; 2024 JewelCraft. Made with 💎 for jewelry lovers everywhere.</p>
          </div>
        </div>
      </footer>

      {/* Live Chatbot */}
      <LiveChatbot />

      {/* WhatsApp Bot */}
      <WhatsAppBot />
    </div>
  );
};

export default Index;
