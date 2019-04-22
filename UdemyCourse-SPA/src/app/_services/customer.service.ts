import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Customer } from '../_models/Customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  baseUrl = environment.apiUrl;

constructor(private http: HttpClient) { }

  getCustomers(): Observable<Customer> {
    return this.http.get<Customer>(this.baseUrl + 'Customer');
  }
  getCustomerById(id): Observable<Customer> {
    return this.http.get<Customer>(this.baseUrl + 'Customer/' + id);
  }

}
