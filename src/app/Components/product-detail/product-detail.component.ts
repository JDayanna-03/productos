import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../../Services/product.service';
import { Product } from '../../Models/product';
import { CommonModule } from '@angular/common';
import { BackButtonComponent } from '../shared/back-button/back-button.component';
import { ProductInfoComponent } from './product-info/product-info.component';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [CommonModule, BackButtonComponent, ProductInfoComponent],
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  product: Product | undefined;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private productService: ProductService
  ) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      const id = Number(params['id']);
      this.product = this.productService.getProductById(id);
      
      if (!this.product) {
        this.router.navigate(['/']);
      }
    });
  }
}