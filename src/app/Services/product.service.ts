import { Injectable } from '@angular/core';
import { Product } from '../Models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private products: Product[] = [
    { id: 1, name: 'Enrollados 🥖', price: 0.15, description: 'Pan crujiente tradicional' },
    { id: 2, name: 'Enquesillado🧀', price: 0.15, description: 'Pan integral de centeno' },
    { id: 3, name: 'Baguette🥖', price: 0.20, description: 'Pan francés tradicional' },
    { id: 4, name: 'Pan de Ajo🧄', price: 0.20, description: 'Pan con mantequilla de ajo' },
    { id: 5, name: 'Moldes🍇', price: 1.50, description: 'Pan hecho con queso, pasas y harina de trigo' },
    { id: 6, name: 'Rodillas de Cristo🫓', price: 0.20, description: 'Pan hecho con queso y harina de trigo' },
    { id: 7, name: 'Pan de Huev🥚', price: 0.20, description: 'Pan hecho con claras de huevo' },
    { id: 8, name: 'Pan de Leche🐄', price: 0.20, description: 'Pan tradiconal hecho con leche' },
    { id: 9, name: 'Gusanos de Mermelada🍘', price: 0.20, description: 'Pan hecho con mermelada y harina de trigo' },
    { id: 10, name: 'Pan de Azúcar🧊', price: 0.20, description: 'Pan hecho con azucar' },
  ];

  getAllProducts(): Product[] {
    return this.products;
  }

  getProductById(id: number): Product | undefined {
    return this.products.find(product => product.id === id);
  }
}