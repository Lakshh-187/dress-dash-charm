
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Star, Heart, Share2, ShoppingCart, Zap, MessageCircle, Truck, RotateCcw, ChevronRight, MapPin, User, ThumbsUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { ProductImageCarousel } from '@/components/ProductImageCarousel';
import { ReviewsSection } from '@/components/ReviewsSection';
import { CommentsSection } from '@/components/CommentsSection';
import { DualShoppingView } from '@/components/DualShoppingView';

const ProductDetails = () => {
  const { id } = useParams();
  const [selectedSize, setSelectedSize] = useState('M');
  const [quantity, setQuantity] = useState(1);
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [pincode, setPincode] = useState('');

  // Mock product data - in real app this would come from API
  const product = {
    id: 1,
    name: "Elegant Floral Maxi Dress",
    price: "₹2,499",
    originalPrice: "₹3,999",
    discount: "38% OFF",
    rating: 4.8,
    reviews: 1247,
    images: [
      "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=800&h=1000&fit=crop",
      "https://images.unsplash.com/photo-1566479179817-19eede5a1468?w=800&h=1000&fit=crop",
      "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?w=800&h=1000&fit=crop"
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: ['Rose Pink', 'Sage Green', 'Ocean Blue'],
    description: "Embrace elegance with this stunning floral maxi dress. Perfect for brunches, garden parties, or romantic dinners. The flowing silhouette flatters all body types while the intricate floral print adds a feminine touch.",
    fabric: "100% Cotton with Rayon lining",
    care: "Machine wash cold, hang dry",
    features: ["V-neckline", "Adjustable straps", "Side pockets", "Midi length"],
    deliveryDays: "2-3 days"
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md shadow-lg sticky top-0 z-50 border-b border-purple-100">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
              DressUp ✨
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="sm" className="relative hover:bg-purple-100">
                <Heart className="h-5 w-5 text-gray-600" />
                <span className="absolute -top-1 -right-1 bg-pink-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">3</span>
              </Button>
              <Button variant="ghost" size="sm" className="relative hover:bg-purple-100">
                <ShoppingCart className="h-5 w-5 text-gray-600" />
                <span className="absolute -top-1 -right-1 bg-purple-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">2</span>
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Product Images */}
          <div className="space-y-4">
            <ProductImageCarousel images={product.images} />
          </div>

          {/* Product Details */}
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">{product.name}</h1>
              <div className="flex items-center space-x-4 mb-4">
                <div className="flex items-center">
                  <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  <span className="ml-1 font-semibold">{product.rating}</span>
                  <span className="ml-1 text-gray-600">({product.reviews} reviews)</span>
                </div>
                <Button variant="ghost" size="sm" className="text-blue-600 hover:bg-blue-50">
                  <Share2 className="h-4 w-4 mr-1" />
                  Share
                </Button>
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className={`${isWishlisted ? 'text-pink-600' : 'text-gray-600'} hover:bg-pink-50`}
                  onClick={() => setIsWishlisted(!isWishlisted)}
                >
                  <Heart className={`h-4 w-4 mr-1 ${isWishlisted ? 'fill-current' : ''}`} />
                  Wishlist
                </Button>
              </div>
            </div>

            {/* Price */}
            <div className="space-y-2">
              <div className="flex items-center space-x-3">
                <span className="text-3xl font-bold text-purple-600">{product.price}</span>
                <span className="text-xl text-gray-400 line-through">{product.originalPrice}</span>
                <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-sm font-semibold">
                  {product.discount}
                </span>
              </div>
              <p className="text-sm text-gray-600">Inclusive of all taxes</p>
            </div>

            {/* Size Selection */}
            <div className="space-y-3">
              <h3 className="font-semibold text-gray-900">Size</h3>
              <div className="flex space-x-2">
                {product.sizes.map((size) => (
                  <Button
                    key={size}
                    variant={selectedSize === size ? "default" : "outline"}
                    className={`w-12 h-12 rounded-full ${
                      selectedSize === size 
                        ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white' 
                        : 'border-purple-200 text-purple-600 hover:bg-purple-50'
                    }`}
                    onClick={() => setSelectedSize(size)}
                  >
                    {size}
                  </Button>
                ))}
              </div>
              <Button variant="link" className="text-purple-600 p-0 h-auto">
                Size Guide <ChevronRight className="h-4 w-4 ml-1" />
              </Button>
            </div>

            {/* Quantity */}
            <div className="space-y-3">
              <h3 className="font-semibold text-gray-900">Quantity</h3>
              <div className="flex items-center space-x-3">
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="w-10 h-10 rounded-full"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                >
                  -
                </Button>
                <span className="w-12 text-center font-semibold">{quantity}</span>
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="w-10 h-10 rounded-full"
                  onClick={() => setQuantity(quantity + 1)}
                >
                  +
                </Button>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-3">
              <Button className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white py-3 text-lg font-semibold rounded-full">
                <ShoppingCart className="h-5 w-5 mr-2" />
                Add to Cart
              </Button>
              <Button className="w-full bg-gradient-to-r from-pink-500 to-orange-500 hover:from-pink-600 hover:to-orange-600 text-white py-3 text-lg font-semibold rounded-full">
                <Zap className="h-5 w-5 mr-2" />
                Buy Now
              </Button>
            </div>

            {/* Delivery Info */}
            <Card className="border-purple-200">
              <CardContent className="p-4">
                <h3 className="font-semibold text-gray-900 mb-3">Delivery Information</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <Input 
                      placeholder="Enter pincode"
                      value={pincode}
                      onChange={(e) => setPincode(e.target.value)}
                      className="flex-1"
                    />
                    <Button variant="outline" className="px-6">Check</Button>
                  </div>
                  <div className="flex items-center space-x-3 text-sm">
                    <Truck className="h-4 w-4 text-green-600" />
                    <span>Free delivery in {product.deliveryDays}</span>
                  </div>
                  <div className="flex items-center space-x-3 text-sm">
                    <RotateCcw className="h-4 w-4 text-blue-600" />
                    <span>15 days return & exchange</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Product Description */}
        <Card className="mb-8 border-0 shadow-lg bg-white/70">
          <CardContent className="p-6">
            <h2 className="text-2xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Product Details
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold mb-2">Description</h3>
                <p className="text-gray-700 mb-4">{product.description}</p>
                <h3 className="font-semibold mb-2">Features</h3>
                <ul className="space-y-1">
                  {product.features.map((feature, index) => (
                    <li key={index} className="text-gray-700">• {feature}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Fabric & Care</h3>
                <p className="text-gray-700 mb-2"><strong>Material:</strong> {product.fabric}</p>
                <p className="text-gray-700"><strong>Care:</strong> {product.care}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Reviews Section */}
        <ReviewsSection productId={product.id} rating={product.rating} totalReviews={product.reviews} />

        {/* Comments Section */}
        <CommentsSection productId={product.id} />

        {/* Dual Shopping View */}
        <DualShoppingView currentProduct={product} />
      </div>
    </div>
  );
};

export default ProductDetails;
