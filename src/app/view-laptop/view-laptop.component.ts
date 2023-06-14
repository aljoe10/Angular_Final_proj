import { Component, OnInit } from '@angular/core';
import { LaptopsService } from '../Services/laptops.service';
import { ILaptop } from '../Models2/ILaptop';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-laptop',
  templateUrl: './view-laptop.component.html',
  styleUrls: ['./view-laptop.component.css']
})
export class ViewLaptopComponent {
  constructor(private activatedRoute: ActivatedRoute, private service: LaptopsService) { }
  LId: string | null = '';
  public getLaptop: ILaptop = {} as ILaptop;
  public allLaptops: ILaptop[] = [];


  ngOnInit(): void {
    
  }

  viewAllLaptops(): void {
    this.service.getAllLaptops().subscribe((data) => {
      this.allLaptops = data;
      console.log(data);
      console.log(this.allLaptops)
    });
  }
}