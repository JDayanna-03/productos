import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { CartItem } from '../Models/cart-item';
import { Product } from '../Models/product';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartItems: CartItem[] = [];
  private cartSubject = new BehaviorSubject<CartItem[]>([]);

  constructor() {
    this.loadCart();
  }

  getCart(): Observable<CartItem[]> {
    return this.cartSubject.asObservable();
  }

  addToCart(product: Product, quantity: number = 1): void {
    const existingItem = this.cartItems.find(item => item.productId === product.id);

    if (existingItem) {
      existingItem.quantity += quantity;
    } else {
      this.cartItems.push({
        productId: product.id,
        name: product.name,
        price: product.price,
        quantity
      });
    }

    this.updateCart();
  }

  removeFromCart(productId: number): void {
    this.cartItems = this.cartItems.filter(item => item.productId !== productId);
    this.updateCart();
  }

  updateQuantity(productId: number, quantity: number): void {
    const item = this.cartItems.find(item => item.productId === productId);
    if (item) {
      item.quantity = quantity;
      this.updateCart();
    }
  }

  clearCart(): void {
    this.cartItems = [];
    this.updateCart();
  }

  getTotal(): number {
    return this.cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  }

  private updateCart(): void {
    this.cartSubject.next([...this.cartItems]);
    this.saveCart();
  }

  private saveCart(): void {
    localStorage.setItem('cart', JSON.stringify(this.cartItems));
  }

  private loadCart(): void {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      this.cartItems = JSON.parse(savedCart);
      this.cartSubject.next([...this.cartItems]);
    }
  }
}