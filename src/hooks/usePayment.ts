import { useState } from 'react';
import { supabase } from '../lib/supabase';

interface PaymentHookResult {
  createOrder: (amount: number, orderId: string) => Promise<string>;
  verifyPayment: (
    orderId: string,
    paymentId: string,
    signature: string,
    notes: { orderId: string; userId: string }
  ) => Promise<void>;
  isLoading: boolean;
  error: string | null;
}

export const usePayment = (): PaymentHookResult => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const createOrder = async (amount: number, orderId: string): Promise<string> => {
    setIsLoading(true);
    setError(null);

    try {
      const { data: { session } } = await supabase.auth.getSession();
      if (!session) throw new Error('No active session');

      const response = await fetch(
        `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/create-order`,
        {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${session.access_token}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            amount,
            currency: 'INR',
            receipt: orderId,
            notes: {
              orderId,
              userId: session.user.id,
            },
          }),
        }
      );

      if (!response.ok) {
        throw new Error('Failed to create order');
      }

      const order = await response.json();
      return order.id;
    } catch (err) {
      setError(err.message);
      throw err;
    } finally {
      setIsLoading(false);
    }
  };

  const verifyPayment = async (
    orderId: string,
    paymentId: string,
    signature: string,
    notes: { orderId: string; userId: string }
  ): Promise<void> => {
    setIsLoading(true);
    setError(null);

    try {
      const { data: { session } } = await supabase.auth.getSession();
      if (!session) throw new Error('No active session');

      const response = await fetch(
        `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/verify-payment`,
        {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${session.access_token}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            razorpay_order_id: orderId,
            razorpay_payment_id: paymentId,
            razorpay_signature: signature,
            notes,
          }),
        }
      );

      if (!response.ok) {
        throw new Error('Failed to verify payment');
      }
    } catch (err) {
      setError(err.message);
      throw err;
    } finally {
      setIsLoading(false);
    }
  };

  return {
    createOrder,
    verifyPayment,
    isLoading,
    error,
  };
};