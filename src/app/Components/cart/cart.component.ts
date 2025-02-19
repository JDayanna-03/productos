import { Component,OnInit } from '@angular/core';
import { CartItem } from '../../Models/cart-item';
import { CartService } from '../../Services/cart.service';
import { IonicModule, MenuController } from '@ionic/angular';
import { NgIf } from '@angular/common';
@Component({
  selector: 'app-cart',
  imports: [IonicModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {

  cartItems: CartItem[] = [];
  total: number = 0;
  isVisible: boolean = true; // Carrito visible
  isMinimized: boolean = false; // Estado del carrito

  constructor(private cartService: CartService) {}

  ngOnInit() {
    this.cartService.getCart().subscribe((items) => {// Obtiene los productos del carrito desde el servicio
      this.cartItems = items;
      this.total = this.cartService.getTotal();
    });
  }



  minimizeCart() {
    this.isVisible = false;
    this.isMinimized = true; // Cambiar a estado minimizado
  }

  maximizeCart() {
    this.isVisible = true;
    this.isMinimized = false; // Cambiar a estado maximizado
  }

  removeItem(productId: number) { // Eliminar un producto
    this.cartService.removeFromCart(productId);
  }

  updateQuantity(productId: number, quantity: number) { // Método para actualizar la cantidad de un producto en el carrito
    if (quantity > 0) {
      this.cartService.updateQuantity(productId, quantity);
    } else {
      this.removeItem(productId);
    }
  }

}
