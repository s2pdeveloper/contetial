import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {
  showNavigationIndicators = false;
  showNavigationArrows = false;
  user: any;
  data: any = {
    phone: '+91 9975933829',
    email: 'drnarayanvidwansa@gmai.com',
    address:
      'Plot no 18, near Uttar Dakshin Restaurant, P&T Colony, Kotwal Nagar, Pratap Nagar, Nagpur, Maharashtra 440022',
    fbLink: '',
    twitterLink: '',
    instaLink: 'www.instagram.com/jhumka.planet/',
    mapLink:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3722.163511380687!2d79.08246509006074!3d21.106046348733113!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd4bffed0f8c23f%3A0x636d5cd18096ac72!2sRide%20Ready%20(MS%20Biking%20Solutions%20inc.)!5e0!3m2!1sen!2sin!4v1747292240039!5m2!1sen!2sin',
  };

  constructor(private router: Router) {}

  messageForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [
      Validators.required,
      Validators.pattern('[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}'),
    ]),
    enquiryMsg: new FormControl('', [Validators.required]),
  });

  get email() {
    return this.messageForm.get('email');
  }

  get name() {
    return this.messageForm.get('name');
  }
  navigateTo(path: any) {
    this.router.navigate([path]);
  }
  submit(){
    console.log("form",this.messageForm.value);
    
  }
}
