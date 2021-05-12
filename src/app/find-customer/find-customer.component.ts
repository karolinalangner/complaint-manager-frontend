import { Component, OnInit } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AUTHENTICATED_USER } from '../service/authentication.service';
import { CustomerDataService } from '../service/data/customer-data.service';

export class Customer {

  constructor(public id: number, 
    public name: String, 
    public address: String,
    public email: String,
    public phoneNumber: String
    ) { }
}

@Component({
  selector: 'app-find-customer',
  templateUrl: './find-customer.component.html',
  styleUrls: ['./find-customer.component.css']
})
export class FindCustomerComponent implements OnInit {

  customers: Customer[]
  selectedCustomer: Customer
  customerId: number
  username: string 

  constructor(private customerService: CustomerDataService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.username = sessionStorage.getItem(AUTHENTICATED_USER);
    this.retrieveAllCustomers();

  }


  retrieveAllCustomers(){
    this.customerService.retrieveAllCustomers().subscribe(
      response =>  this.customers = response
    )
  }

  createNewTicket(){
    this.customerId = this.selectedCustomer.id
    console.log(this.selectedCustomer)
    this.router.navigate([this.username,'new_ticket', this.customerId ], {queryParams: {customerDetails: `${this.selectedCustomer.name}` }});
  }

  

}
