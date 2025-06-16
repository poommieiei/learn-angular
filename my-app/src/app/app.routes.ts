import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProductDetailComponent } from './pages/product-detail/product-detail.component';
import { AddProductComponent } from './pages/add-product/add-product.component';
import { EditProductComponent } from './pages/edit-porduct/edit-porduct.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'product/:_id', component: ProductDetailComponent },
  { path: 'add-product', component: AddProductComponent },
  { path: 'edit-product/:_id', component: EditProductComponent },
];
