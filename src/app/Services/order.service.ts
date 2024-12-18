import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Order, OrderStatus } from '../Models/order';
import { CartService } from './cart.service';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private orders: Order[] = [];
  private ordersSubject = new BehaviorSubject<Order[]>([]);

  constructor(private cartService: CartService) {
    this.loadOrders();
  }

  getOrders(): Observable<Order[]> {
    return this.ordersSubject.asObservable();
  }

  createOrder(): Order {
    const cartItems = this.cartService.getCart();
    const order: Order = {
      id: this.generateOrderId(),
      items: cartItems,
      total: this.cartService.getTotal(),
      date: new Date(),
      status: OrderStatus.PENDING
    };

    this.orders.push(order);
    this.updateOrders();
    this.cartService.clearCart();

    return order;
  }

  updateOrderStatus(orderId: number, status: OrderStatus): void {
    const order = this.orders.find(o => o.id === orderId);
    if (order) {
      order.status = status;
      this.updateOrders();
    }
  }

  private generateOrderId(): number {
    return Date.now();
  }

  private updateOrders(): void {
    this.ordersSubject.next([...this.orders]);
    this.saveOrders();
  }

  private saveOrders(): void {
    localStorage.setItem('orders', JSON.stringify(this.orders));
  }

  private loadOrders(): void {
    const savedOrders = localStorage.getItem('orders');
    if (savedOrders) {
      this.orders = JSON.parse(savedOrders);
      this.ordersSubject.next([...this.orders]);
    }
  }
}