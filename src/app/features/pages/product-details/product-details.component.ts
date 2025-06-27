import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.scss',
})
export class ProductDetailsComponent {
  constructor(private router: Router) {}
  navigateTo(path: any) {
    this.router.navigate([path]);
  }
  enquire() {}
}
