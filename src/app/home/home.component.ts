import { Component } from '@angular/core';
import { Customer } from '../models/customer';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  customers: Customer[] = [];

  getCustomers(customers: Customer[]) {
    this.customers = customers;
  }
}
