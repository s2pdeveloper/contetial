import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { Component, HostListener, Inject, PLATFORM_ID } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  isBrowser = false;

  constructor(
    @Inject(DOCUMENT) private document: Document,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    this.isBrowser = isPlatformBrowser(this.platformId);
  }

  ngOnInit(): void {
    if (this.isBrowser) {
      this.toggleScrolled();
    }
  }

  @HostListener('window:scroll')
  onWindowScroll(): void {
    if (this.isBrowser) {
      this.toggleScrolled();
    }
  }

  toggleScrolled(): void {
    const scrollToTop = this.document.querySelector('#scroll-top');

    if (!scrollToTop) return;

    if (window.scrollY > 100) {
      scrollToTop.classList.add('active');
    } else {
      scrollToTop.classList.remove('active');
    }
  }

  scrollToTop() {
    if (this.isBrowser) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }
}
