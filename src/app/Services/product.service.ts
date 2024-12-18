import { Injectable } from '@angular/core';
import { Product } from '../Models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private products: Product[] = [
    { id: 1, name: 'Enrollados', price: 0.15, description: 'Pan crujiente tradicional' },
    { id: 2, name: 'Enquesillado', price: 0.15, description: 'Pan integral de centeno' },
    { id: 3, name: 'Baguette', price: 0.20, description: 'Pan francés tradicional' },
    { id: 4, name: 'Pan de Ajo', price: 0.20, description: 'Pan con mantequilla de ajo' },
    { id: 5, name: 'Moldes', price: 1.50, description: 'Pan hecho con claras de huevo' },
    { id: 5, name: 'Rodillas de Cristo', price: 0.20, description: 'Pan hecho con claras de huevo' },
    { id: 5, name: 'Pan de Huev🥚', price: 0.20, description: 'Pan hecho con claras de huevo' },
    { id: 5, name: 'Pan de Huev🥚', price: 0.20, description: 'Pan hecho con claras de huevo' },
    { id: 5, name: 'Pan de Huev🥚', price: 0.20, description: 'Pan hecho con claras de huevo' },
  ];

  getAllProducts(): Product[] {
    return this.products;
  }

  getProductById(id: number): Product | undefined {
    return this.products.find(product => product.id === id);
  }
}