import { CartItem } from './cart-item';

export interface Order {
  id: number;
  items: CartItem[];
  total: number;
  date: Date;
  status: OrderStatus;
}

export enum OrderStatus {
  PENDING = 'pending',
  PROCESSING = 'processing',
  COMPLETED = 'completed',
  CANCELLED = 'cancelled'
}