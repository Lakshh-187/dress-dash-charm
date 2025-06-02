
import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { ArrowLeft, CreditCard, Smartphone, Building, Wallet, Truck, Tag, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';

const Payment = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { product, deliveryAddress } = location.state || {};

  const [selectedPayment, setSelectedPayment] = useState('upi');
  const [couponCode, setCouponCode] = useState('');
  const [couponApplied, setCouponApplied] = useState(false);

  const productPrice = 2499;
  const deliveryCharge = 99;
  const discount = couponApplied ? 250 : 0;
  const totalAmount = productPrice + deliveryCharge - discount;

  const handleApplyCoupon = () => {
    if (couponCode === 'WELCOME10') {
      setCouponApplied(true);
    }
  };

  const handlePlaceOrder = () => {
    const orderId = `ORD${Date.now()}`;
    navigate('/order-confirmation', { 
      state: { 
        orderId, 
        product, 
        deliveryAddress, 
        paymentMethod: selectedPayment,
        totalAmount 
      } 
    });
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
              Payment Options
            </h1>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Payment Methods */}
          <div className="lg:col-span-2 space-y-6">
            {/* UPI */}
            <Card className="border-0 shadow-lg bg-white/70">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Smartphone className="h-5 w-5 text-purple-600" />
                  <span>UPI</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <RadioGroup value={selectedPayment} onValueChange={setSelectedPayment}>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="upi" id="upi" />
                      <Label htmlFor="upi">Pay using UPI</Label>
                    </div>
                    {selectedPayment === 'upi' && (
                      <div className="ml-6 grid grid-cols-3 gap-3">
                        <Button variant="outline" className="flex items-center space-x-2">
                          <span>💰</span>
                          <span>Google Pay</span>
                        </Button>
                        <Button variant="outline" className="flex items-center space-x-2">
                          <span>📱</span>
                          <span>PhonePe</span>
                        </Button>
                        <Button variant="outline" className="flex items-center space-x-2">
                          <span>🔵</span>
                          <span>Paytm</span>
                        </Button>
                      </div>
                    )}
                  </div>
                </RadioGroup>
              </CardContent>
            </Card>

            {/* Cards */}
            <Card className="border-0 shadow-lg bg-white/70">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <CreditCard className="h-5 w-5 text-purple-600" />
                  <span>Credit/Debit Card</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <RadioGroup value={selectedPayment} onValueChange={setSelectedPayment}>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="card" id="card" />
                    <Label htmlFor="card">Pay using Card</Label>
                  </div>
                </RadioGroup>
              </CardContent>
            </Card>

            {/* Net Banking */}
            <Card className="border-0 shadow-lg bg-white/70">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Building className="h-5 w-5 text-purple-600" />
                  <span>Net Banking</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <RadioGroup value={selectedPayment} onValueChange={setSelectedPayment}>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="netbanking" id="netbanking" />
                    <Label htmlFor="netbanking">Pay using Net Banking</Label>
                  </div>
                </RadioGroup>
              </CardContent>
            </Card>

            {/* Wallets */}
            <Card className="border-0 shadow-lg bg-white/70">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Wallet className="h-5 w-5 text-purple-600" />
                  <span>Wallets</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <RadioGroup value={selectedPayment} onValueChange={setSelectedPayment}>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="wallet" id="wallet" />
                    <Label htmlFor="wallet">Paytm Wallet</Label>
                  </div>
                </RadioGroup>
              </CardContent>
            </Card>

            {/* COD */}
            <Card className="border-0 shadow-lg bg-white/70">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Truck className="h-5 w-5 text-purple-600" />
                  <span>Cash on Delivery</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <RadioGroup value={selectedPayment} onValueChange={setSelectedPayment}>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="cod" id="cod" />
                    <Label htmlFor="cod">Pay on Delivery</Label>
                  </div>
                </RadioGroup>
              </CardContent>
            </Card>
          </div>

          {/* Order Summary */}
          <div className="space-y-6">
            {/* Coupon */}
            <Card className="border-0 shadow-lg bg-white/70">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Tag className="h-5 w-5 text-purple-600" />
                  <span>Apply Coupon</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex space-x-2">
                  <Input
                    placeholder="Enter coupon code"
                    value={couponCode}
                    onChange={(e) => setCouponCode(e.target.value)}
                  />
                  <Button 
                    variant="outline" 
                    onClick={handleApplyCoupon}
                    disabled={couponApplied}
                  >
                    Apply
                  </Button>
                </div>
                {couponApplied && (
                  <p className="text-green-600 text-sm mt-2">✓ Coupon applied successfully!</p>
                )}
              </CardContent>
            </Card>

            {/* Price Breakdown */}
            <Card className="border-0 shadow-lg bg-white/70">
              <CardHeader>
                <CardTitle>Order Summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between">
                  <span>Product Price</span>
                  <span>₹{productPrice}</span>
                </div>
                <div className="flex justify-between">
                  <span>Delivery Charges</span>
                  <span>₹{deliveryCharge}</span>
                </div>
                {discount > 0 && (
                  <div className="flex justify-between text-green-600">
                    <span>Discount</span>
                    <span>-₹{discount}</span>
                  </div>
                )}
                <hr className="border-purple-200" />
                <div className="flex justify-between font-bold text-lg">
                  <span>Total Amount</span>
                  <span className="text-purple-600">₹{totalAmount}</span>
                </div>
                <Button
                  className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white py-3 text-lg font-semibold rounded-full"
                  onClick={handlePlaceOrder}
                >
                  Place Order
                </Button>
              </CardContent>
            </Card>

            {/* Delivery Address */}
            {deliveryAddress && (
              <Card className="border-0 shadow-lg bg-white/70">
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
