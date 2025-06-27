import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ContactComponent } from './features/pages/contact/contact.component';
import { LandingComponent } from './features/pages/landing/landing.component';
import { ProductDetailsComponent } from './features/pages/product-details/product-details.component';

export const routes: Routes = [
  {
    path: '',
    component: LandingComponent,
    children: [
      {
        path: '',
        loadComponent: () =>
          import('./features/pages/landing/landing.component').then(
            (m) => m.LandingComponent
          ),
      },
    ],
  },
  {
    path: 'contact',
    component: ContactComponent,
    pathMatch: 'full',
  },
  {
    path: 'product-details',
    component: ProductDetailsComponent,
    pathMatch: 'full',
  },
];
