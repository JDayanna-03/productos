import { Component } from '@angular/core';
import { CartComponent } from './Components/cart/cart.component';
import { IonRouterOutlet } from '@ionic/angular/standalone';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [IonRouterOutlet, CartComponent],
  templateUrl: './app.component.html',
  styles: [``]
})
export class AppComponent {}