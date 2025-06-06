import { Component, Input } from '@angular/core';
import { Product } from '../../models/product.model';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-product',
  imports: [CommonModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css',
})
export class ProductComponent {
  @Input() product!: Product | null;

}
