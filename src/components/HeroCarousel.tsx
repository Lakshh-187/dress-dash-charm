
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

  return (
    <section className="relative overflow-hidden">
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
    </section>
  );
};

export default HeroCarousel;
