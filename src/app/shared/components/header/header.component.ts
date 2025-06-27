import {
  Component,
  OnInit,
  Inject,
  PLATFORM_ID,
  inject,
  TemplateRef,
} from '@angular/core';
import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { NgbAccordionModule, NgbOffcanvas } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NgbAccordionModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  isBrowser = false;
  isMobileClicked = true;
  private offcanvasService = inject(NgbOffcanvas);
  constructor(
    @Inject(DOCUMENT) private document: Document,
    @Inject(PLATFORM_ID) private platformId: Object,
    private router: Router
  ) {
    this.isBrowser = isPlatformBrowser(this.platformId);
  }

  navigateTo(path: any) {
    this.router.navigate([path]);
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
    const header = this.document.querySelector('#header');

    if (!header) return;

    const hasSticky =
      header.classList.contains('scroll-up-sticky') ||
      header.classList.contains('sticky-top') ||
      header.classList.contains('fixed-top');

    if (!hasSticky) return;
    if (window.scrollY > 100) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  }
  scrollTo(id: string) {
    let ele = this.document.querySelector(id);
    ele?.scrollIntoView({ behavior: 'smooth' });
  }
  open(content: TemplateRef<any>) {
    this.offcanvasService.open(content, { position: 'end' });
  }
}
