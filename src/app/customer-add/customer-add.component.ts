import { Component, EventEmitter, Output } from '@angular/core';
import { Customer } from '../models/customer';

@Component({
  selector: 'app-customer-add',
  templateUrl: './customer-add.component.html',
  styleUrls: ['./customer-add.component.css']
})
export class CustomerAddComponent {
  customers: Customer[] = [];
  @Output() customerAdded = new EventEmitter<Customer[]>();

  addCustomer(customer_name: string, customer_age: string, customer_address: string) {
    let age: number = parseInt(customer_age, 10);
    let customer: Customer = {
      name: customer_name,
      age: age,
      address: customer_address
    };
    this.customers.push(customer);
    this.customerAdded.emit(this.customers);
  }
  
}
