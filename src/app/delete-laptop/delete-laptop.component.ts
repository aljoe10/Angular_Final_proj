import { Component } from '@angular/core';
import { ILaptop } from '../Models2/ILaptop';
import { ActivatedRoute } from '@angular/router';
import { LaptopsService } from '../Services/laptops.service';

@Component({
  selector: 'app-delete-laptop',
  templateUrl: './delete-laptop.component.html',
  styleUrls: ['./delete-laptop.component.css']
})
export class DeleteLaptopComponent {
  constructor(private activatedRoute: ActivatedRoute, private service: LaptopsService) { }
  LId: string | null = '';
  public getLaptop: ILaptop = {} as ILaptop;
  public allLaptops: ILaptop[] = [];
  public deleteLaptopId: number | null = null;

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((param) => {
      this.LId = param.get('id');
      console.log(this.LId);
    });
    if (this.LId !== null)
      this.service.getLaptop(parseInt(this.LId)).subscribe((data) => {
        this.getLaptop = data;
        console.log(this.getLaptop);
      });
  }

  viewAllLaptops(): void {
    this.service.getAllLaptops().subscribe((data) => {
      this.allLaptops = data;
      console.log(this.allLaptops);
    });
  }

  deleteLaptop(): void {
    if (this.deleteLaptopId) {
      this.service.deleteLaptop(this.deleteLaptopId).subscribe(() => {
        console.log('Laptop deleted successfully');
      });
    }
  }
}
