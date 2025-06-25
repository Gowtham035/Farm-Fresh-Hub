import React from 'react';
import { useLocation, Link, Navigate } from 'react-router-dom';
import { CheckCircle, Package, ArrowRight } from 'lucide-react';
import { formatCurrency } from '../utils/currency';

const OrderConfirmation: React.FC = () => {
  const location = useLocation();
  const { orderDetails, orderTotal, items } = location.state || {};

  if (!orderDetails) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="pt-20 pb-16 bg-gray-50">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-lg shadow-md p-6 md:p-8">
            {/* Success Message */}
            <div className="text-center mb-8">
              <div className="flex justify-center mb-4">
                <CheckCircle className="h-16 w-16 text-primary-600" />
              </div>
              <h1 className="text-3xl font-serif font-bold mb-2">Order Confirmed!</h1>
              <p className="text-gray-600">
                Thank you for your order. We'll send you a confirmation email shortly.
              </p>
            </div>

            {/* Order Details */}
            <div className="space-y-6">
              <div>
                <h2 className="text-xl font-bold mb-4">Order Summary</h2>
                <div className="bg-gray-50 rounded-lg p-4 space-y-4">
                  {items.map(item => (
                    <div key={item.product.id} className="flex justify-between items-center">
                      <div className="flex items-center">
                        <img 
                          src={item.product.image} 
                          alt={item.product.name}
                          className="w-16 h-16 rounded-md object-cover"
                        />
                        <div className="ml-4">
                          <p className="font-medium">{item.product.name}</p>
                          <p className="text-sm text-gray-500">Quantity: {item.quantity}</p>
                        </div>
                      </div>
                      <span className="font-medium">
                        {formatCurrency(item.product.price * item.quantity)}
                      </span>
                    </div>
                  ))}
                  <div className="border-t border-gray-200 pt-4 flex justify-between font-bold">
                    <span>Total</span>
                    <span className="text-primary-600">{formatCurrency(orderTotal)}</span>
                  </div>
                </div>
              </div>

              {/* Shipping Details */}
              <div>
                <h2 className="text-xl font-bold mb-4">Shipping Details</h2>
                <div className="bg-gray-50 rounded-lg p-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm text-gray-600">Full Name</p>
                      <p className="font-medium">{orderDetails.fullName}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Mobile Number</p>
                      <p className="font-medium">{orderDetails.mobile}</p>
                    </div>
                    {orderDetails.email && (
                      <div>
                        <p className="text-sm text-gray-600">Email</p>
                        <p className="font-medium">{orderDetails.email}</p>
                      </div>
                    )}
                    <div className="md:col-span-2">
                      <p className="text-sm text-gray-600">Delivery Address</p>
                      <p className="font-medium">
                        {orderDetails.address}, {orderDetails.city}, {orderDetails.state} - {orderDetails.zipCode}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Payment Information */}
              <div>
                <h2 className="text-xl font-bold mb-4">Payment Information</h2>
                <div className="bg-gray-50 rounded-lg p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-600">Payment Method</p>
                      <p className="font-medium">
                        {orderDetails.paymentMethod === 'cod' && 'Cash on Delivery'}
                        {orderDetails.paymentMethod === 'upi' && 'UPI Payment'}
                        {orderDetails.paymentMethod === 'card' && 'Credit/Debit Card'}
                      </p>
                    </div>
                    <Package className="h-6 w-6 text-primary-600" />
                  </div>
                </div>
              </div>

              {/* Next Steps */}
              <div className="text-center pt-6">
                <Link 
                  to="/products" 
                  className="btn btn-primary inline-flex items-center"
                >
                  Continue Shopping
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderConfirmation;