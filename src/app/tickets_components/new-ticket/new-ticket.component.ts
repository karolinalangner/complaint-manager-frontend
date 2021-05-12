import { HtmlParser } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Customer } from 'src/app/find-customer/find-customer.component';
import { TicketDataService } from '../../service/data/ticket-data.service';
import { Note, Ticket } from '../tickets/tickets.component';


enum ContactMethods {
  Email = 'Email',
  Phone = 'Phone',
  Post = 'Post'
}

const contactMethods: Array<string> = Object.keys(ContactMethods).filter(key => isNaN(+key));
const topics: Array<string> = [ 'Enquiry about account', 'Problem logging in', 'Missing funds']
const sources: Array<string> = [ 'Email', 'Phone', 'Other']

@Component({
  selector: 'app-new-ticket',
  templateUrl: './new-ticket.component.html',
  styleUrls: ['./new-ticket.component.css']
})
export class NewTicketComponent implements OnInit {

  contactMethods = contactMethods;
  topics = topics;
  sources = sources

  user_id: '';
  customer_id: number;
  ticket: Ticket;
  form: FormGroup;
  preferredContactMethod: FormControl
  topic: FormControl
  source: FormControl
  details: FormControl
  status = "Pending"
  dateReceived= new Date()
  deadline= new Date()
  customerDetails: String

  constructor(private ticketService: TicketDataService, private route: ActivatedRoute, private router: Router, private formBuilder: FormBuilder)
  {
    this.form = this.formBuilder.group({
    preferredContactMethod: [null, [Validators.required]],
    topic: [null, [Validators.required]],
    source: [null, [Validators.required]],
    details: [null, [Validators.required]]
    }); 

    this.preferredContactMethod = this.form.controls.preferredContactMethod as FormControl;
    this.topic = this.form.controls.topic as FormControl;
    this.source = this.form.controls.source as FormControl;
    this.details = this.form.controls.details as FormControl;
  }
    
  ngOnInit(){
    this.user_id = this.route.snapshot.params['user_id'];
    this.customer_id = this.route.snapshot.params['customer_id'];
    this.customerDetails = this.route.snapshot.queryParamMap.get('customerDetails');
    console.log("customer id: "+ this.customer_id)
 
    this.ticket = new Ticket(-1, this.dateReceived, this.deadline, this.topic.value ,' ', ' ', this.status, ' ');
    // this.note = new Note(-1, '', new Date(), this.ticket.id)
    
  }

  calculateDeadline() {
    let dateReceived = document.querySelector('.dateReceived') as HTMLInputElement;
    let newDate = new Date(Date.parse(dateReceived.value));
    this.deadline.setDate(newDate.getDate() + 3);
    return this.deadline;

}

  createTicket(){
    this.deadline = this.calculateDeadline()
    this.ticketService.saveTicket(`${this.user_id}`, `${this.customer_id}`,this.ticket).subscribe(
      data => {
        console.log(data)
        this.router.navigate([`${this.user_id}`,'dashboard'])
      }
    );
  }
}
