import { useState } from 'react';
import { supabase } from '../lib/supabase';
import { useAuth } from '../context/AuthContext';
import { Database } from '../types/database';

type Order = Database['public']['Tables']['orders']['Row'];
type OrderItem = Database['public']['Tables']['order_items']['Row'];

interface CreateOrderData {
  items: {
    productId: string;
    quantity: number;
    price: number;
  }[];
  totalAmount: number;
  deliveryNote?: string;
}

interface OrderHookResult {
  createOrder: (data: CreateOrderData) => Promise<string>;
  getOrders: () => Promise<Order[]>;
  getOrderItems: (orderId: string) => Promise<OrderItem[]>;
  isLoading: boolean;
  error: string | null;
}

export const useOrders = (): OrderHookResult => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { user } = useAuth();

  const createOrder = async (data: CreateOrderData): Promise<string> => {
    setIsLoading(true);
    setError(null);

    try {
      if (!user) throw new Error('User not authenticated');

      // Create order
      const { data: order, error: orderError } = await supabase
        .from('orders')
        .insert({
          user_id: user.id,
          total_amount: data.totalAmount,
          delivery_note: data.deliveryNote,
        })
        .select()
        .single();

      if (orderError) throw orderError;

      // Create order items
      const orderItems = data.items.map(item => ({
        order_id: order.id,
        product_id: item.productId,
        quantity: item.quantity,
        price: item.price,
      }));

      const { error: itemsError } = await supabase
        .from('order_items')
        .insert(orderItems);

      if (itemsError) throw itemsError;

      return order.id;
    } catch (err) {
      setError(err.message);
      throw err;
    } finally {
      setIsLoading(false);
    }
  };

  const getOrders = async (): Promise<Order[]> => {
    setIsLoading(true);
    setError(null);

    try {
      if (!user) throw new Error('User not authenticated');

      const { data, error } = await supabase
        .from('orders')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      return data;
    } catch (err) {
      setError(err.message);
      throw err;
    } finally {
      setIsLoading(false);
    }
  };

  const getOrderItems = async (orderId: string): Promise<OrderItem[]> => {
    setIsLoading(true);
    setError(null);

    try {
      if (!user) throw new Error('User not authenticated');

      const { data, error } = await supabase
        .from('order_items')
        .select('*')
        .eq('order_id', orderId);

      if (error) throw error;
      return data;
    } catch (err) {
      setError(err.message);
      throw err;
    } finally {
      setIsLoading(false);
    }
  };

  return {
    createOrder,
    getOrders,
    getOrderItems,
    isLoading,
    error,
  };
};