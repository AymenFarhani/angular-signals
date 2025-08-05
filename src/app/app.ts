import { Component, computed, inject, signal } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  dataService = inject(DataService);
  title = signal("Angular-Signals-Demo");
  count = signal<number>(0);
  quantity = signal<number>(0);
  price = signal<number>(10);
  firstName = signal<string>('Aymen');
  lastName = signal<string>('Farhani');

  //push-based example
  fullName = computed(() => `${this.firstName()} ${this.lastName()}`);

  // push-based example
  totalPrice = computed(() => this.quantity() * this.price());

  // pull based example
 /* totalPrice = signal(0); // Now it's a signal, not a computed

  calculateTotalPrice() {
    this.totalPrice.set(this.quantity() * this.price());
  }*/

  increment() {
    this.count.set(this.count() + 1);
    this.getData();
  }

  getData() {
    this.dataService.getData();
  }

}


