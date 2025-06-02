
import React, { useState } from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Card } from '@/components/ui/card';

interface ProductImageCarouselProps {
  images: string[];
}

export const ProductImageCarousel = ({ images }: ProductImageCarouselProps) => {
  const [selectedImage, setSelectedImage] = useState(0);

  return (
    <div className="space-y-4">
      {/* Main Image */}
      <Card className="overflow-hidden border-0 shadow-lg bg-white rounded-2xl">
        <div className="relative aspect-square overflow-hidden group">
          <img 
            src={images[selectedImage]} 
            alt="Product"
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
        </div>
      </Card>

      {/* Thumbnail Carousel */}
      <div className="px-4">
        <Carousel className="w-full">
          <CarouselContent className="-ml-2">
            {images.map((image, index) => (
              <CarouselItem key={index} className="pl-2 basis-1/4">
                <div 
                  className={`relative aspect-square overflow-hidden rounded-lg cursor-pointer transition-all duration-200 ${
                    selectedImage === index 
                      ? 'ring-2 ring-purple-500 ring-offset-2' 
                      : 'hover:opacity-80'
                  }`}
                  onClick={() => setSelectedImage(index)}
                >
                  <img 
                    src={image} 
                    alt={`Product ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-0" />
          <CarouselNext className="right-0" />
        </Carousel>
      </div>
    </div>
  );
};
