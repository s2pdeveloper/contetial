import { Component } from '@angular/core';
import { ProductsComponent } from '../products/products.component';
import { AchievementsComponent } from '../achievements/achievements.component';
import { ExperienceComponent } from '../experience/experience.component';
import { QualificationDetailsComponent } from '../qualification-details/qualification-details.component';
import { AboutComponent } from '../about/about.component';
import { HomeComponent } from '../home/home.component';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [
    HomeComponent,
    AboutComponent,
    QualificationDetailsComponent,
    ExperienceComponent,
    AchievementsComponent,
    ProductsComponent,
  ],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.scss',
})
export class LandingComponent {}
