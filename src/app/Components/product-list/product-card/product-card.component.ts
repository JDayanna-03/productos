import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Product } from '../../../Models/product';
import { CommonModule } from '@angular/common';
import { CartService } from '../../../Services/cart.service';
import { IonicModule } from '@ionic/angular';


@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CommonModule, RouterLink, IonicModule],
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent {
  @Input() product!: Product;

  constructor(private cartService: CartService) {}

  addToCart() {
    this.cartService.addToCart(this.product);
  }
}