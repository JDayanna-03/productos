import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../../Models/product';

@Component({
  selector: 'app-product-info',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-info.component.html',
  styleUrls: ['./product-info.component.css']
})
export class ProductInfoComponent {
  @Input() product!: Product;
}