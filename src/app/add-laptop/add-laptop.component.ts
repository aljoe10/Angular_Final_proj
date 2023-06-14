import { Component } from '@angular/core';
import { IAddLaptop } from '../Models2/IAddLaptop';
import { LaptopsService } from '../Services/laptops.service';

@Component({
  selector: 'app-add-laptop',
  templateUrl: './add-laptop.component.html',
  styleUrls: ['./add-laptop.component.css']
})
export class AddLaptopComponent {
  constructor(private service: LaptopsService) { }
  addLaptop: IAddLaptop = {
    LName: '',
    Processor: '',
    Color: '',
    Lprice: 0
    
  }

  AddLaptop() {
    this.service.AddLaptop(this.addLaptop).subscribe((data) => {
      console.log(data);
      console.log(this.AddLaptop);
    })
  }
}