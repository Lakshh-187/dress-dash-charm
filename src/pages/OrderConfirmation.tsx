
import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { CheckCircle, Package, Calendar, Eye } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const OrderConfirmation = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { orderId, product, deliveryAddress, paymentMethod, totalAmount } = location.state || {};

  const estimatedDelivery = new Date();
  estimatedDelivery.setDate(estimatedDelivery.getDate() + 3);

  const handleTrackOrder = () => {
    navigate('/track-order', { state: { orderId, product } });
  };

  const handleContinueShopping = () => {
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto">
          {/* Success Message */}
          <div className="text-center mb-8">
            <div className="bg-gradient-to-r from-green-400 to-green-600 rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="h-12 w-12 text-white" />
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Order Placed Successfully! 🎉</h1>
            <p className="text-gray-600">Thank you for shopping with us</p>
          </div>

          {/* Order Details */}
          <Card className="border-0 shadow-lg bg-white/70 mb-6">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Package className="h-5 w-5 text-purple-600" />
                <span>Order Details</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Order ID</span>
                <span className="font-semibold text-purple-600">{orderId}</span>
              </div>
              
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Total Amount</span>
                <span className="font-bold text-xl text-green-600">₹{totalAmount}</span>
              </div>

              <div className="flex justify-between items-center">
                <span className="text-gray-600">Payment Method</span>
                <span className="font-semibold capitalize">{paymentMethod}</span>
              </div>

              <div className="flex items-center space-x-2 bg-blue-50 p-3 rounded-lg">
                <Calendar className="h-5 w-5 text-blue-600" />
                <div>
                  <p className="font-semibold text-blue-900">Estimated Delivery</p>
                  <p className="text-blue-700">{estimatedDelivery.toLocaleDateString('en-IN', { 
                    weekday: 'long',
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Product Details */}
          {product && (
            <Card className="border-0 shadow-lg bg-white/70 mb-6">
              <CardHeader>
                <CardTitle>Product Details</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center space-x-4">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-20 h-24 object-cover rounded-lg"
                  />
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg">{product.name}</h3>
                    <p className="text-purple-600 font-bold">{product.price}</p>
                    <p className="text-sm text-gray-600">Size: M</p>
                    <p className="text-sm text-gray-600">Quantity: 1</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Delivery Address */}
          {deliveryAddress && (
            <Card className="border-0 shadow-lg bg-white/70 mb-8">
              <CardHeader>
                <CardTitle>Delivery Address</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-sm space-y-1">
                  <p className="font-semibold">{deliveryAddress.fullName}</p>
                  <p>{deliveryAddress.streetAddress}</p>
                  <p>{deliveryAddress.city}, {deliveryAddress.state} - {deliveryAddress.pincode}</p>
                  <p>{deliveryAddress.mobileNumber}</p>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Action Buttons */}
          <div className="space-y-4">
            <Button
              className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white py-3 text-lg font-semibold rounded-full"
              onClick={handleTrackOrder}
            >
              <Eye className="h-5 w-5 mr-2" />
              Track Your Order
            </Button>
            
            <Button
              variant="outline"
              className="w-full py-3 text-lg font-semibold rounded-full border-purple-300 text-purple-600 hover:bg-purple-50"
              onClick={handleContinueShopping}
            >
              Continue Shopping
            </Button>
          </div>

          {/* Additional Info */}
          <div className="mt-8 p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg">
            <h3 className="font-semibold text-gray-900 mb-2">What's Next?</h3>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>• You'll receive SMS & email updates about your order</li>
              <li>• Track your order anytime using the Order ID</li>
              <li>• Contact customer support for any queries</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderConfirmation;
