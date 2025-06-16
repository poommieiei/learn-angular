import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-navbar',
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  isOpen = false;
  menuItems = [
    { name: 'Products', link: '/products' },
  ]

  constructor(private router: Router) {}

  addProductPage() {
    this.router.navigate(['add-product']);
  }


}
