// import lib here
import { Component } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

// import components here
import { ProductComponent } from '../../components/product/product.component';

// import Models here
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-home',
  imports: [ProductComponent, HttpClientModule, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  products: Product[] = [];

  constructor(private http: HttpClient) {
    this.fetchProducts();
  }

  fetchProducts() {
    this.http.get<Product[]>('http://localhost:3000/api/products').subscribe({
      next: (data) => (this.products = data),
      error: (err) => console.error('Error fetching products', err),
    });

  }
}
