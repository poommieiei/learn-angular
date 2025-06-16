import { Component } from '@angular/core';
import { CreateProduct } from '../../models/product.model';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-add-product',
  imports: [CommonModule, FormsModule, HttpClientModule],
  templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.css',
})
export class AddProductComponent {
  product: CreateProduct = {
    title: '',
    description: '',
    price: 0,
    category: '',
    images: [],
    stock: 0,
    tags: [],
  };

  tagsInput = '';
  imagesInput = '';

  constructor(private router: Router, private http: HttpClient,) {}

  onSubmit() {
    this.http.post<CreateProduct>('http://localhost:3000/api/products', this.product)
      .subscribe(
        (response) => {
          console.log('Product added successfully:', response);
          this.router.navigate(['/']);
        },
        (error) => {
          console.error('Error adding product:', error);
          this.router.navigate(['/']);
        }
      );
  }
}
