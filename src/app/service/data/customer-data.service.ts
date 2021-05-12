import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_URL } from 'src/app/constants';
import { Customer } from 'src/app/find-customer/find-customer.component';

@Injectable({
  providedIn: 'root'
})
export class CustomerDataService {

  constructor(private http: HttpClient) { }

  retrieveAllCustomers(){
    return this.http.get<Customer[]>(`${API_URL}/jpa/customers`);
  }

  //a method on selecting a customer name,
  //takes the id and makes it a param in the router navigation address.
  
  
}
