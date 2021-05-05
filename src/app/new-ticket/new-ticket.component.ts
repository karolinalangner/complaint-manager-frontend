import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TicketDataService } from '../service/data/ticket-data.service';
import { Ticket } from '../tickets/tickets.component';

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

  id: number;
  ticket: Ticket;
  form: FormGroup;
  preferredContactMethod: FormControl
  topic: FormControl
  source: FormControl
  status = "Pending"

  constructor(private ticketService: TicketDataService, private route: ActivatedRoute, private router: Router, private formBuilder: FormBuilder)
  {
    this.form = this.formBuilder.group({
    preferredContactMethod: [null, [Validators.required]],
    topic: [null, [Validators.required]],
    source: [null, [Validators.required]]
    }); 

    this.preferredContactMethod = this.form.controls.preferredContactMethod as FormControl;
    this.topic = this.form.controls.topic as FormControl;
    this.source = this.form.controls.source as FormControl;
  }
    
  ngOnInit(){
    this.id = this.route.snapshot.params['id'];
    this.ticket = new Ticket(this.id, new Date(), new Date(), this.topic.value ,'b', 'c', this.status);
   
  }


  createTicket(){
    this.ticketService.saveTicket('karolina', this.ticket).subscribe(
      data => {
        console.log(data)
        console.log(this.ticket.id)
        this.router.navigate(['karolina','dashboard'])

      }
    )
  }
}
