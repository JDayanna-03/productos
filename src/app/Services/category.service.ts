import { Injectable } from '@angular/core';
import { Category } from '../Models/category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private categories: Category[] = [
    { id: 1, name: 'Panes Tradicionales', description: 'Panes clásicos de nuestra panadería' },
    { id: 2, name: 'Panes Especiales', description: 'Panes gourmet y especialidades' },
    { id: 3, name: 'Panes Integrales', description: 'Opciones saludables y nutritivas' },
    { id: 4, name: 'Dulces y Postres', description: 'Delicias dulces horneadas' }
  ];

  getAllCategories(): Category[] {
    return this.categories;
  }

  getCategoryById(id: number): Category | undefined {
    return this.categories.find(category => category.id === id);
  }
}