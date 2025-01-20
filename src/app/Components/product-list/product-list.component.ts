import { Component } from '@angular/core';
import { ProductService } from '../../Services/product.service';
import { ProductCardComponent } from './product-card/product-card.component';
import { Product } from '../../Models/product';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, ProductCardComponent],
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  products: Product[];

  constructor(private productService: ProductService) {
    this.products = this.productService.getAllProducts();
  }

}