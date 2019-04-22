import { Component, OnInit } from '@angular/core';
import { CustomerService } from 'src/app/_services/customer.service';
import { AlertifyService } from 'src/app/_services/alertify.service';
import { ActivatedRoute } from '@angular/router';
import { Customer } from 'src/app/_models/Customer';

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.css']
})
export class CustomerDetailsComponent implements OnInit {
customer: Customer;
  constructor(private custService: CustomerService, private alertify: AlertifyService, private route: ActivatedRoute ) { }

  ngOnInit() {
    this.GetUserById();
  }
  GetUserById() {
   
    this.custService.getCustomerById(+this.route.snapshot.params['id']).
    subscribe((customer: Customer) => {
      this.customer = customer[0];
      console.log(customer[0])
    });

  }

}
