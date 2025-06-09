
import React from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Button } from '@/components/ui/button';
import { Sparkles, ShoppingBag, Heart } from 'lucide-react';

const HeroCarousel = () => {
  const slides = [
    {
      title: "Swiss Beauty",
      subtitle: "CRAZE",
      offer: "UP TO 35% OFF",
      extraOffer: "+Extra 5% Off on Prepaid Offer",
      bgGradient: "from-yellow-400 via-pink-400 to-purple-500",
      image: "https://images.unsplash.com/photo-1594736797933-d0c501ba2fe6?w=600&h=400&fit=crop",
      products: ["💄", "✨", "💅"],
      ctaText: "Shop Beauty"
    },
    {
      title: "Festival",
      subtitle: "COLLECTION",
      offer: "UP TO 50% OFF",
      extraOffer: "Free Delivery on Orders Above ₹999",
      bgGradient: "from-orange-400 via-red-400 to-pink-500",
      image: "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?w=600&h=400&fit=crop",
      products: ["🪷", "✨", "👗"],
      ctaText: "Shop Traditional"
    },
    {
      title: "Western",
      subtitle: "VIBES",
      offer: "UP TO 40% OFF",
      extraOffer: "Buy 2 Get 1 Free on Selected Items",
      bgGradient: "from-blue-400 via-purple-400 to-pink-500",
      image: "https://images.unsplash.com/photo-1566479179817-19eede5a1468?w=600&h=400&fit=crop",
      products: ["👗", "👠", "💍"],
      ctaText: "Shop Western"
    }
  ];

  const beautyCategories = [
    {
      name: "BESTSELLER",
      image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=100&h=100&fit=crop",
      bgColor: "bg-gradient-to-br from-pink-200 to-pink-300"
    },
    {
      name: "LIPS",
      image: "https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=100&h=100&fit=crop",
      bgColor: "bg-gradient-to-br from-red-200 to-red-300"
    },
    {
      name: "FACE",
      image: "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=100&h=100&fit=crop",
      bgColor: "bg-gradient-to-br from-orange-200 to-orange-300"
    },
    {
      name: "EYE",
      image: "https://images.unsplash.com/photo-1601049541289-9b1b7bbbfe19?w=100&h=100&fit=crop",
      bgColor: "bg-gradient-to-br from-blue-200 to-blue-300"
    },
    {
      name: "NEW LAUNCH",
      image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=100&h=100&fit=crop",
      bgColor: "bg-gradient-to-br from-purple-200 to-purple-300"
    },
    {
      name: "SKIN CARE",
      image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=100&h=100&fit=crop",
      bgColor: "bg-gradient-to-br from-green-200 to-green-300"
    },
    {
      name: "GIFTS & KITS",
      image: "https://images.unsplash.com/photo-1549062572-544a64fb0c56?w=100&h=100&fit=crop",
      bgColor: "bg-gradient-to-br from-pink-200 to-purple-300"
    },
    {
      name: "SELECT",
      image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=100&h=100&fit=crop",
      bgColor: "bg-gradient-to-br from-yellow-200 to-yellow-300"
    },
    {
      name: "CRAZE",
      image: "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=100&h=100&fit=crop",
      bgColor: "bg-gradient-to-br from-indigo-200 to-indigo-300"
    }
  ];

  return (
    <section className="relative overflow-hidden">
      {/* Main Carousel */}
      <Carousel className="w-full">
        <CarouselContent>
          {slides.map((slide, index) => (
            <CarouselItem key={index}>
              <div className={`relative h-[500px] bg-gradient-to-r ${slide.bgGradient} overflow-hidden`}>
                <div className="container mx-auto px-4 h-full flex items-center">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center w-full">
                    {/* Left Content */}
                    <div className="text-white space-y-6 z-10">
                      <div className="flex items-center space-x-2 mb-4">
                        {slide.products.map((product, idx) => (
                          <div key={idx} className="text-3xl animate-bounce" style={{ animationDelay: `${idx * 0.2}s` }}>
                            {product}
                          </div>
                        ))}
                      </div>
                      
                      <div>
                        <h1 className="text-2xl md:text-3xl font-bold mb-2">{slide.title}</h1>
                        <h2 className="text-4xl md:text-6xl font-black mb-4 tracking-wider">
                          {slide.subtitle}
                        </h2>
                      </div>
                      
                      <div className="space-y-2">
                        <div className="text-3xl md:text-5xl font-black">
                          {slide.offer}
                          <span className="text-lg ml-2">*</span>
                        </div>
                        <div className="bg-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold inline-block">
                          {slide.extraOffer}
                        </div>
                      </div>
                      
                      <div className="flex space-x-4">
                        <Button className="bg-white text-purple-600 hover:bg-gray-100 rounded-full px-8 py-3 font-bold">
                          <ShoppingBag className="h-5 w-5 mr-2" />
                          {slide.ctaText}
                        </Button>
                        <Button variant="outline" className="border-white text-white hover:bg-white/10 rounded-full px-6 py-3">
                          <Heart className="h-5 w-5 mr-2" />
                          Wishlist
                        </Button>
                      </div>
                      
                      <p className="text-sm opacity-80">*on selected products</p>
                    </div>
                    
                    {/* Right Image */}
                    <div className="relative h-full flex items-center justify-center">
                      <div className="relative w-full max-w-md">
                        <img 
                          src={slide.image} 
                          alt={slide.title}
                          className="w-full h-96 object-cover rounded-2xl shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500"
                        />
                        <div className="absolute -top-4 -right-4 bg-white/20 backdrop-blur-sm rounded-full p-4">
                          <Sparkles className="h-8 w-8 text-white animate-spin" />
                        </div>
                        <div className="absolute -bottom-4 -left-4 bg-white/20 backdrop-blur-sm rounded-full p-3">
                          <div className="text-2xl">✨</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Decorative Elements */}
                <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full blur-xl"></div>
                <div className="absolute bottom-20 right-20 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
                <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-white/5 rounded-full blur-lg"></div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-4" />
        <CarouselNext className="right-4" />
      </Carousel>

      {/* Beauty Categories Section */}
      <div className="bg-black text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center space-x-6 md:space-x-8 overflow-x-auto scrollbar-hide">
            {beautyCategories.map((category, index) => (
              <div key={index} className="flex flex-col items-center space-y-3 min-w-[100px] cursor-pointer group">
                <div className={`w-20 h-20 md:w-24 md:h-24 rounded-full ${category.bgColor} p-1 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <img 
                    src={category.image} 
                    alt={category.name}
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
                <span className="text-xs md:text-sm font-medium text-center leading-tight">
                  {category.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroCarousel;
