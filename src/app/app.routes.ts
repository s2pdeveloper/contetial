import { Routes } from '@angular/router';
import { LandingComponent } from './features/pages/landing/landing.component';

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
];
