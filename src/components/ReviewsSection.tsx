
import React, { useState } from 'react';
import { Star, ThumbsUp, User } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

interface ReviewsSectionProps {
  productId: number;
  rating: number;
  totalReviews: number;
}

export const ReviewsSection = ({ productId, rating, totalReviews }: ReviewsSectionProps) => {
  const [showAllReviews, setShowAllReviews] = useState(false);

  const reviews = [
    {
      id: 1,
      user: "Priya S.",
      rating: 5,
      date: "2 days ago",
      comment: "Absolutely love this dress! The fabric is so soft and the fit is perfect. Got so many compliments when I wore it to a wedding. 💕",
      helpful: 12,
      verified: true
    },
    {
      id: 2,
      user: "Ananya K.",
      rating: 4,
      date: "1 week ago",
      comment: "Beautiful dress, great quality. The color is exactly as shown in the pictures. Only wish it came in more sizes.",
      helpful: 8,
      verified: true
    },
    {
      id: 3,
      user: "Sneha M.",
      rating: 5,
      date: "2 weeks ago",
      comment: "This is my third purchase from DressUp and they never disappoint! Fast delivery and amazing packaging too. ✨",
      helpful: 15,
      verified: true
    }
  ];

  const displayedReviews = showAllReviews ? reviews : reviews.slice(0, 2);

  return (
    <Card className="mb-8 border-0 shadow-lg bg-white/70">
      <CardContent className="p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Ratings & Reviews
          </h2>
          <Button variant="outline" className="rounded-full border-purple-200 text-purple-600 hover:bg-purple-50">
            Write a Review
          </Button>
        </div>

        {/* Rating Summary */}
        <div className="flex items-center space-x-6 mb-6 p-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl">
          <div className="text-center">
            <div className="text-4xl font-bold text-purple-600">{rating}</div>
            <div className="flex items-center justify-center mb-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className={`h-4 w-4 ${i < Math.floor(rating) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`} />
              ))}
            </div>
            <div className="text-sm text-gray-600">{totalReviews} reviews</div>
          </div>
          
          <div className="flex-1">
            {[5, 4, 3, 2, 1].map((stars) => (
              <div key={stars} className="flex items-center space-x-2 mb-1">
                <span className="text-sm w-6">{stars}</span>
                <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                <div className="flex-1 bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-gradient-to-r from-yellow-400 to-orange-400 h-2 rounded-full"
                    style={{ width: `${stars === 5 ? 70 : stars === 4 ? 20 : stars === 3 ? 8 : stars === 2 ? 2 : 0}%` }}
                  ></div>
                </div>
                <span className="text-sm text-gray-600 w-8">
                  {stars === 5 ? '70%' : stars === 4 ? '20%' : stars === 3 ? '8%' : stars === 2 ? '2%' : '0%'}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Individual Reviews */}
        <div className="space-y-4">
          {displayedReviews.map((review) => (
            <div key={review.id} className="border-b border-gray-100 pb-4 last:border-b-0">
              <div className="flex items-start space-x-3">
                <div className="w-10 h-10 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full flex items-center justify-center">
                  <User className="h-5 w-5 text-white" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-1">
                    <span className="font-semibold">{review.user}</span>
                    {review.verified && (
                      <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
                        Verified Purchase
                      </span>
                    )}
                  </div>
                  <div className="flex items-center space-x-2 mb-2">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className={`h-4 w-4 ${i < review.rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`} />
                      ))}
                    </div>
                    <span className="text-sm text-gray-600">{review.date}</span>
                  </div>
                  <p className="text-gray-700 mb-3">{review.comment}</p>
                  <div className="flex items-center space-x-4">
                    <Button variant="ghost" size="sm" className="text-gray-600 hover:text-purple-600">
                      <ThumbsUp className="h-4 w-4 mr-1" />
                      Helpful ({review.helpful})
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {reviews.length > 2 && (
          <div className="text-center mt-6">
            <Button 
              variant="outline" 
              className="rounded-full border-purple-200 text-purple-600 hover:bg-purple-50"
              onClick={() => setShowAllReviews(!showAllReviews)}
            >
              {showAllReviews ? 'Show Less' : 'Show All Reviews'}
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  );
};
