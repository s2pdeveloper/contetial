import { DOCUMENT } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  constructor(
    private router: Router,
    @Inject(DOCUMENT) private document: Document
  ) {}
  navigateTo(path: string) {
    this.router.navigate([path]);
  }

  navigateWithScroll(path: string, id: string) {
    this.router.navigate([path]);
    let ele = this.document.querySelector(id);
    ele?.scrollIntoView({ behavior: 'smooth' });
  }
}
