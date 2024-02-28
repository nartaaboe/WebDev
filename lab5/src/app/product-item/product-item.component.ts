import { Component } from '@angular/core';
import {categories} from "../categories";
import {Router} from "@angular/router";

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrl: './product-item.component.css'
})
export class ProductItemComponent {
  categories = [...categories];
  constructor(private router: Router) {
  }
  goToProductsPage(type: string) {
    this.router.navigate(['/category', type]);
  }
}
