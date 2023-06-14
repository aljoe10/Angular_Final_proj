import { Component, OnInit } from '@angular/core';
import { LaptopsService } from '../Services/laptops.service';
import { ActivatedRoute } from '@angular/router';
import { ILaptop } from '../Models2/ILaptop';
import { IAddLaptop } from '../Models2/IAddLaptop';

@Component({
  selector: 'app-update-laptop',
  templateUrl: './update-laptop.component.html',
  styleUrls: ['./update-laptop.component.css']
})
export class UpdateLaptopComponent {
  constructor(private activatedRoute: ActivatedRoute, private service: LaptopsService) { }
  LId: number=0;
  public getLaptop: ILaptop = {} as ILaptop;
  addLaptop: IAddLaptop = {
    LName :'',
    Processor : '',
    Color : '',
    Lprice : 0,
  }

  ngOnInit(): void {
    
  }

  updateLaptop() {
    console.log(this.addLaptop);
    if (this.LId !== null)
      this.service.updateLaptop((this.LId),this.addLaptop).subscribe((data) => {
        console.log(data);
      })
    }
  }