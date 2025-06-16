import { Component } from '@angular/core';
import { Product, CreateProduct } from '../../models/product.model';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-edit-porduct',
  standalone: true,
  imports: [HttpClientModule, CommonModule, FormsModule],
  templateUrl: './edit-porduct.component.html',
  styleUrl: './edit-porduct.component.css',
})
export class EditProductComponent {
  product!: Product;


  constructor(private http: HttpClient, private router: Router, private route: ActivatedRoute) {}

  updateProduct() {
    console.log('new produc', this.product);
    this.http
      .put<Product>(`http://localhost:3000/api/products/${this.product._id}`, this.product)
      .subscribe(
        (response) => {
          console.log('Product updated successfully:', response);
          this.router.navigate(['/']);
        },
        (error) => {
          console.error('Error updating product:', error);
          this.router.navigate(['/']);
        }
      );
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const _id = params.get('_id');

      this.http
        .get<Product>(`http://localhost:3000/api/products/${_id}`)
        .subscribe(
          (data) => {
            this.product = data;

            if (!this.product) {
              console.error('Product not found');
              this.router.navigate(['/']);
            }
          },
          (error) => {
            console.error('Error fetching product', error);
            this.router.navigate(['/']);
          }
        );
    });
  }
}
