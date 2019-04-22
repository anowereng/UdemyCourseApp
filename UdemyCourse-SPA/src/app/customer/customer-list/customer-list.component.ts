import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../../_services/customer.service';
import { AlertifyService } from '../../_services/alertify.service';
import { Customer } from '../../_models/Customer';
@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {
  
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
     }, error => {
       this.alertifyService.error(error);
     }

   )}
}




