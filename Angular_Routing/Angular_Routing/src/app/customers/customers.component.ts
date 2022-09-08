import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../customer.service';
import { Customer } from '../models/customer';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css'],
})
export class CustomersComponent implements OnInit {
  customers: Customer[] = [];

  constructor(private customersService: CustomerService) {}

  ngOnInit(): void {
    this.getCustomers();
  }

  /**
   * Subscribing to the CustomerService
   */

  getCustomers(): void {
    this.customersService
      .getCustomers()
      .subscribe((customers) => (this.customers = customers));
  }
}
