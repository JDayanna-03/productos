import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CartComponent } from './Components/cart/cart.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CartComponent],
  template: `
    <main>
    <app-cart />
      <router-outlet></router-outlet>
    </main>
  `,
  styles: [`
    main {
      min-height: 100vh;
      background-color: #f7fafc;
    }
  `]
})
export class AppComponent {}