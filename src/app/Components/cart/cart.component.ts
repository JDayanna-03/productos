import { Component,OnInit } from '@angular/core';
import { CartItem } from '../../Models/cart-item';
import { CartService } from '../../Services/cart.service';
import { IonicModule } from '@ionic/angular';
@Component({
  selector: 'app-cart',
  imports: [IonicModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {
  cartItems: CartItem[] = [];
  total: number = 0;
  isVisible: boolean = true;

  constructor(private cartService: CartService) {}

  ngOnInit() {
    this.cartService.getCart().subscribe(items => {
      this.cartItems = items;
      this.total = this.cartService.getTotal();
    });
  }

  removeItem(productId: number) {
    this.cartService.removeFromCart(productId);
  }

  updateQuantity(productId: number, quantity: number) {
    if (quantity > 0) {
      this.cartService.updateQuantity(productId, quantity);
    } else {
      this.removeItem(productId);
    }
  }

  closeCart() {
    this.isVisible = false;
  }

  showCart() {
    this.isVisible = true;
  }

}
