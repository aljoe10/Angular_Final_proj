import { Component } from '@angular/core';
import { Developer } from '../models/developer.model';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  developers: Developer[] = [
    {
      name: 'Alvin T Jose',
      role: 'Laptop Retailer',
      description: 'One-stop destination for all your computing needs!',
      contact: 7857975643,
      image: '../assets/wix.jpg'
    }
    
  ];
}
