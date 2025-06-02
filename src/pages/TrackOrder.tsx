
import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { ArrowLeft, Package, Truck, MapPin, CheckCircle, Clock, MessageCircle, Phone, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const TrackOrder = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { orderId, product } = location.state || {};

  const [currentStatus, setCurrentStatus] = useState(1);

  const orderStatuses = [
    {
      id: 1,
      title: 'Order Confirmed',
      description: 'Your order has been placed',
      icon: Package,
      timestamp: '2024-01-15 10:30 AM',
      completed: true
    },
    {
      id: 2,
      title: 'Packed',
      description: 'Your order is being packed',
      icon: Package,
      timestamp: '2024-01-15 02:15 PM',
      completed: currentStatus >= 2
    },
    {
      id: 3,
      title: 'Shipped',
      description: 'Your order is on the way',
      icon: Truck,
      timestamp: currentStatus >= 3 ? '2024-01-16 09:00 AM' : null,
      completed: currentStatus >= 3
    },
    {
      id: 4,
      title: 'Out for Delivery',
      description: 'Your order is out for delivery',
      icon: MapPin,
      timestamp: currentStatus >= 4 ? '2024-01-17 08:30 AM' : null,
      completed: currentStatus >= 4
    },
    {
      id: 5,
      title: 'Delivered',
      description: 'Your order has been delivered',
      icon: CheckCircle,
      timestamp: currentStatus >= 5 ? '2024-01-17 03:45 PM' : null,
      completed: currentStatus >= 5
    }
  ];

  // Simulate status updates
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStatus(prev => prev < 5 ? prev + 1 : prev);
    }, 10000); // Update status every 10 seconds for demo

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md shadow-lg sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => navigate(-1)}
              className="hover:bg-purple-100"
            >
              <ArrowLeft className="h-5 w-5" />
            </Button>
            <h1 className="text-xl font-bold bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
              Track Your Order
            </h1>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Order Info */}
          <Card className="border-0 shadow-lg bg-white/70 mb-8">
            <CardHeader>
              <CardTitle>Order #{orderId}</CardTitle>
            </CardHeader>
            <CardContent>
              {product && (
                <div className="flex items-center space-x-4">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-16 h-20 object-cover rounded-lg"
                  />
                  <div>
                    <h3 className="font-semibold">{product.name}</h3>
                    <p className="text-purple-600 font-bold">{product.price}</p>
                    <p className="text-sm text-gray-600">Expected delivery: Jan 17, 2024</p>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Progress Tracking */}
            <div className="lg:col-span-2">
              <Card className="border-0 shadow-lg bg-white/70">
                <CardHeader>
                  <CardTitle>Order Progress</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {orderStatuses.map((status, index) => {
                      const IconComponent = status.icon;
                      const isActive = status.id === currentStatus;
                      const isCompleted = status.completed;
                      
                      return (
                        <div key={status.id} className="flex items-start space-x-4">
                          {/* Progress Line */}
                          <div className="flex flex-col items-center">
                            <div className={`
                              w-10 h-10 rounded-full flex items-center justify-center
                              ${isCompleted ? 'bg-green-500 text-white' : 
                                isActive ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-500'}
                            `}>
                              <IconComponent className="h-5 w-5" />
                            </div>
                            {index < orderStatuses.length - 1 && (
                              <div className={`
                                w-0.5 h-12 mt-2
                                ${isCompleted ? 'bg-green-500' : 'bg-gray-200'}
                              `} />
                            )}
                          </div>

                          {/* Status Content */}
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center justify-between">
                              <h3 className={`font-semibold ${isCompleted ? 'text-green-700' : isActive ? 'text-blue-700' : 'text-gray-700'}`}>
                                {status.title}
                              </h3>
                              {isActive && (
                                <div className="flex items-center space-x-1 text-blue-600">
                                  <Clock className="h-4 w-4" />
                                  <span className="text-sm">In Progress</span>
                                </div>
                              )}
                            </div>
                            <p className="text-gray-600 text-sm">{status.description}</p>
                            {status.timestamp && (
                              <p className="text-xs text-gray-500 mt-1">{status.timestamp}</p>
                            )}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </CardContent>
              </Card>

              {/* Live Updates */}
              <Card className="border-0 shadow-lg bg-white/70 mt-6">
                <CardHeader>
                  <CardTitle>Live Updates</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3 p-3 bg-blue-50 rounded-lg">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                      <div>
                        <p className="text-sm font-medium text-blue-900">Order is being processed</p>
                        <p className="text-xs text-blue-700">Your order is currently being packed at our warehouse</p>
                        <p className="text-xs text-gray-500">2 hours ago</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3 p-3 bg-green-50 rounded-lg">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                      <div>
                        <p className="text-sm font-medium text-green-900">Payment confirmed</p>
                        <p className="text-xs text-green-700">We have received your payment successfully</p>
                        <p className="text-xs text-gray-500">5 hours ago</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Customer Support */}
            <div className="space-y-6">
              <Card className="border-0 shadow-lg bg-white/70">
                <CardHeader>
                  <CardTitle>Need Help?</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Button className="w-full justify-start" variant="outline">
                    <MessageCircle className="h-4 w-4 mr-2" />
                    Chat with Support
                  </Button>
                  <Button className="w-full justify-start" variant="outline">
                    <Phone className="h-4 w-4 mr-2" />
                    Call: 1800-123-4567
                  </Button>
                  <Button className="w-full justify-start" variant="outline">
                    <Mail className="h-4 w-4 mr-2" />
                    Email Support
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg bg-white/70">
                <CardHeader>
                  <CardTitle>Delivery Details</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Delivery Partner</span>
                    <span className="font-medium">DressUp Express</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Tracking ID</span>
                    <span className="font-medium">DEX{orderId?.slice(-6)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Expected Delivery</span>
                    <span className="font-medium text-green-600">Jan 17, 2024</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg bg-white/70">
                <CardHeader>
                  <CardTitle>Order Actions</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Button variant="outline" className="w-full">
                    Cancel Order
                  </Button>
                  <Button variant="outline" className="w-full">
                    Modify Address
                  </Button>
                  <Button variant="outline" className="w-full">
                    Download Invoice
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrackOrder;
