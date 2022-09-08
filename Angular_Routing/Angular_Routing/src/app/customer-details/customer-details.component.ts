import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CUSTOMERS } from '../mocks/Customer-mocks';
import { Customer } from '../models/customer';

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.css'],
})
export class CustomerDetailsComponent implements OnInit {
  customer: Customer;
  message: String;
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.getCustomer();
  }

  private getCustomer(): void {
    let idParam = this.route.snapshot.paramMap.get('id');
    const id: number = parseInt(idParam);

    if (isNaN(id)) {
      this.message = `Error: ${idParam} is not a number`;
    } else {
      this.customer = CUSTOMERS.find((c) => c.id === id);
    }
  }
}
