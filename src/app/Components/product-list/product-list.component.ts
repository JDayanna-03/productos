import { Component, OnInit } from '@angular/core';
import Swiper from 'swiper';
import { ProductService } from '../../Services/product.service';
import { ProductCardComponent } from './product-card/product-card.component';
import { Product } from '../../Models/product';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { Navigation, Pagination } from 'swiper/modules';


@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, ProductCardComponent, IonicModule],
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  IonRouterOutlet(){}

  products: Product[];
  constructor(private productService: ProductService) {
    this.products = this.productService.getAllProducts();
  }

  ngOnInit() {
    Swiper.use([Navigation, Pagination]);
    new Swiper('.swiper', {
      slidesPerView: 1,
      spaceBetween: 10,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      breakpoints: {
        768: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
      },
    });
  }

}