import { Component } from '@angular/core';
import { WhyContetialComponent } from '../why-contetial/why-contetial.component';
import { CodingComponent } from '../coding/coding.component';
import { HomeComponent } from '../home/home.component';
import { ServicesComponent } from '../services/services.component';
import { ExpertiseComponent } from '../expertise/expertise.component';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [
    HomeComponent,
    CodingComponent,
    WhyContetialComponent,
    ExpertiseComponent,
    ServicesComponent
  ],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.scss',
})
export class LandingComponent {}
