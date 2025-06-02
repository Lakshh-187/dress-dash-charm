
import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { ArrowLeft, MapPin, User, Phone, Home, Save } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';

const DeliveryAddress = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { product } = location.state || {};

  const [formData, setFormData] = useState({
    fullName: '',
    mobileNumber: '',
    pincode: '',
    state: '',
    city: '',
    streetAddress: '',
    saveAddress: false
  });

  const [pincodeValid, setPincodeValid] = useState(null);

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const validatePincode = async () => {
    if (formData.pincode.length === 6) {
      // Mock validation - in real app, call actual API
      setTimeout(() => {
        setPincodeValid(true);
        setFormData(prev => ({ 
          ...prev, 
          state: 'Maharashtra', 
          city: 'Mumbai' 
        }));
      }, 1000);
    }
  };

  const handleProceedToPayment = () => {
    navigate('/payment', { state: { product, deliveryAddress: formData } });
  };

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
              Delivery Address
            </h1>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto">
          {/* Product Summary */}
          {product && (
            <Card className="mb-6 border-0 shadow-lg bg-white/70">
              <CardContent className="p-4">
                <div className="flex items-center space-x-4">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-16 h-20 object-cover rounded-lg"
                  />
                  <div>
                    <h3 className="font-semibold">{product.name}</h3>
                    <p className="text-purple-600 font-bold">{product.price}</p>
                    <p className="text-sm text-gray-600">Size: M</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Address Form */}
          <Card className="border-0 shadow-lg bg-white/70">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Home className="h-5 w-5 text-purple-600" />
                <span>Delivery Address</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="fullName" className="flex items-center space-x-2">
                    <User className="h-4 w-4" />
                    <span>Full Name</span>
                  </Label>
                  <Input
                    id="fullName"
                    value={formData.fullName}
                    onChange={(e) => handleInputChange('fullName', e.target.value)}
                    placeholder="Enter your full name"
                    className="mt-2"
                  />
                </div>
                <div>
                  <Label htmlFor="mobileNumber" className="flex items-center space-x-2">
                    <Phone className="h-4 w-4" />
                    <span>Mobile Number</span>
                  </Label>
                  <Input
                    id="mobileNumber"
                    value={formData.mobileNumber}
                    onChange={(e) => handleInputChange('mobileNumber', e.target.value)}
                    placeholder="Enter mobile number"
                    className="mt-2"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <Label htmlFor="pincode" className="flex items-center space-x-2">
                    <MapPin className="h-4 w-4" />
                    <span>Pincode</span>
                  </Label>
                  <div className="mt-2 flex space-x-2">
                    <Input
                      id="pincode"
                      value={formData.pincode}
                      onChange={(e) => handleInputChange('pincode', e.target.value)}
                      placeholder="6-digit pincode"
                      maxLength={6}
                    />
                    <Button 
                      variant="outline" 
                      onClick={validatePincode}
                      disabled={formData.pincode.length !== 6}
                    >
                      Check
                    </Button>
                  </div>
                  {pincodeValid && (
                    <p className="text-green-600 text-sm mt-1">✓ Delivery available</p>
                  )}
                </div>
                <div>
                  <Label htmlFor="state">State</Label>
                  <Input
                    id="state"
                    value={formData.state}
                    onChange={(e) => handleInputChange('state', e.target.value)}
                    placeholder="State"
                    className="mt-2"
                    readOnly={pincodeValid}
                  />
                </div>
                <div>
                  <Label htmlFor="city">City</Label>
                  <Input
                    id="city"
                    value={formData.city}
                    onChange={(e) => handleInputChange('city', e.target.value)}
                    placeholder="City"
                    className="mt-2"
                    readOnly={pincodeValid}
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="streetAddress">Street Address</Label>
                <Input
                  id="streetAddress"
                  value={formData.streetAddress}
                  onChange={(e) => handleInputChange('streetAddress', e.target.value)}
                  placeholder="House no, Building, Street, Area"
                  className="mt-2"
                />
              </div>

              <div className="flex items-center space-x-2">
                <Checkbox
                  id="saveAddress"
                  checked={formData.saveAddress}
                  onCheckedChange={(checked) => handleInputChange('saveAddress', checked)}
                />
                <Label htmlFor="saveAddress" className="flex items-center space-x-2">
                  <Save className="h-4 w-4" />
                  <span>Save this address for future orders</span>
                </Label>
              </div>

              <Button
                className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white py-3 text-lg font-semibold rounded-full"
                onClick={handleProceedToPayment}
                disabled={!formData.fullName || !formData.mobileNumber || !pincodeValid}
              >
                Proceed to Payment
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default DeliveryAddress;
