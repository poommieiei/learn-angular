import { Component } from '@angular/core';
import { Product } from '../../models/product.model';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css',
})
export class ProductDetailComponent {
  product!: Product;

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient,
    private router: Router
  ) {}

  editProduct() {
    if (this.product && this.product._id) {
      this.router.navigate(['/edit-product', this.product._id]);
    } else {
      console.error('Product ID is not available for editing');
    }
  }

  deleteProduct() {
    if (this.product && this.product._id) {
      this.http
        .delete(`http://localhost:3000/api/products/${this.product._id}`)
        .subscribe(
          () => {
            console.log('Product deleted successfully');
            this.router.navigate(['/']);
          },
          (error) => {
            console.error('Error deleting product', error);
          }
        );
    } else {
      console.error('Product ID is not available for deletion');
    }
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
              this.router.navigate(['/']);
            }

            this.product = data;
          },
          (error) => {
            console.error('Error fetching product', error);
            this.router.navigate(['/']);
          }
        );
    });
  }
  // if (productId) {

  // this.product = this.getProductById(productId);
  // }
  // this.route.paramMap.subscribe((params) => {
  //   const _id = params.get('_id');
  //   console.log(_id);

  //   if (_id) {
  //     const dataApi = this.http
  //       .get<Product>(`http://localhost:3000/api/products/${_id}`)
  //       .subscribe((data) => {
  //         this.product = data;
  //       });
  //     console.log(dataApi);

  //   }
  // });
  // }

  // getProductById(_id: string): Product | null {
  //   return null; // Placeholder for actual product fetching logic
  // }
}
