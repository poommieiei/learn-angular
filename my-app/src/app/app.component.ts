import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ActionBarComponent } from './components/action-bar/action-bar.component';
import { MaxMinMeterComponent } from './components/max-min-meter/max-min-meter.component';
import { SqaureFlexComponent } from './components/sqaure-flex/sqaure-flex.component';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ProductComponent } from './components/product/product.component';
import { Product } from './models/product.model';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  imports: [ProductComponent, CommonModule, NavbarComponent, HttpClientModule],
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  products: Product[] = [];

  constructor(private http: HttpClient) {
    this.fetchProducts();
  }

  fetchProducts() {
    this.http
      .get<Product[]>('http://localhost:3000/api/products')
      .subscribe({
        next: (data) => (this.products = data),
        error: (err) => console.error('Error fetching products', err),
      });
  }
}
// productLists: string[] = ['Apple', 'Banana', 'Orange', 'Grapes', 'Mango'];

// appMaxLabel = 'Maximum';
// appMinLabel = 'Minimum';

// appCouter = 20;

// sqaureHeight = 100;
// sqaureWidth = 100;

// avtivte = true;

// pushProduct(){
//   this.productLists.push('New Product ' + (this.productLists.length + 1));
// }

// unshiftProduct(){
//   this.productLists.unshift('New Product ' + (this.productLists.length + 1));
// }

// removeProduct(index: number){
//   this.productLists.splice(index, 1);
// }

// testClick(){
//   console.log('Button clicked');
// }

// testNumberChange(value: number) {
//   console.log('Number changed : ' + value);
// }

// doAppMinChange(value: number) {
//   console.log('App min changed : ' + value);
//   this.appMinLabel = 'Minimum: ' + value;
// }

// doAppMaxChange(value: number) {
//   console.log('App max changed : ' + value);
//   this.appMaxLabel = 'Maximum: ' + value;
// }

// price = 0;

// calBuffet(value: string): void {
//   const price = Number(value);
//   this.price = (price * 3) / 4;
//   console.log(this.price);

// }
// title:String = 'poom';
// test:String = 'test';

// showMyName(name: String): void {
//   console.log('My name is Poom');
//   this.test = name;
// }
