import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  name: string;
  email: string;
  message: string;

  constructor() {
    this.name = '';
    this.email = '';
    this.message = '';
  }
  submitForm() {
    console.log(`Name: ${this.name}\nEmail: ${this.email}\nMessage: ${this.message}`);
  }
}
