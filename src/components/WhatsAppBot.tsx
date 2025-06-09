
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { MessageCircle, Phone, X } from 'lucide-react';

const WhatsAppBot = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleWhatsAppClick = () => {
    const phoneNumber = "919876543210"; // Replace with actual WhatsApp business number
    const message = "Hi! I'm interested in your dress collection. Can you help me find the perfect outfit? 👗✨";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="fixed bottom-6 left-6 z-50">
      <div
        className="relative"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* WhatsApp Button */}
        <Button
          onClick={handleWhatsAppClick}
          className="bg-green-500 hover:bg-green-600 text-white rounded-full w-14 h-14 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110"
        >
          <MessageCircle className="h-6 w-6" />
        </Button>

        {/* Notification Badge */}
        <div className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center animate-pulse">
          1
        </div>

        {/* Hover Card */}
        {isHovered && (
          <Card className="absolute bottom-16 left-0 w-64 border-0 shadow-xl bg-white/95 backdrop-blur-md rounded-2xl overflow-hidden animate-fade-in">
            <CardContent className="p-4">
              <div className="flex items-center space-x-3 mb-3">
                <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                  <MessageCircle className="h-5 w-5 text-white" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Fashion Assistant</div>
                  <div className="text-xs text-gray-600 flex items-center">
                    <div className="w-2 h-2 bg-green-400 rounded-full mr-1"></div>
                    Typically replies in minutes
                  </div>
                </div>
              </div>
              
              <div className="bg-green-50 p-3 rounded-lg mb-3">
                <p className="text-sm text-gray-800 mb-2">
                  👋 Hi there! Need help finding the perfect dress?
                </p>
                <p className="text-xs text-gray-600">
                  Get instant style advice, size help, and exclusive offers on WhatsApp!
                </p>
              </div>

              <div className="space-y-2 text-xs text-gray-600 mb-3">
                <div className="flex items-center space-x-2">
                  <span className="text-green-500">✓</span>
                  <span>Personal styling tips</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-green-500">✓</span>
                  <span>Size & fit guidance</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-green-500">✓</span>
                  <span>Exclusive WhatsApp offers</span>
                </div>
              </div>

              <Button
                onClick={handleWhatsAppClick}
                className="w-full bg-green-500 hover:bg-green-600 text-white rounded-full"
              >
                <MessageCircle className="h-4 w-4 mr-2" />
                Chat on WhatsApp
              </Button>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
};

export default WhatsAppBot;
