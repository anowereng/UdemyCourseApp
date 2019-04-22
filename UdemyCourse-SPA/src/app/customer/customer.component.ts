import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../_services/customer.service';
import { AlertifyService } from '../_services/alertify.service';
import { Customer } from '../_models/Customer';
@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  
  cust: Customer[];
  private customer: any;
  students: Customer[] = [];

  constructor(private custService:  CustomerService, private alertifyService: AlertifyService) { }

  ngOnInit() {
    this.loadUsers();
  }
   loadUsers() {
     this.custService.getCustomers().subscribe((res) => {
       this.customer = res;
     });

   }
}




