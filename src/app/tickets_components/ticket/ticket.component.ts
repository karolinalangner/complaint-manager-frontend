import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TicketDataService } from 'src/app/service/data/ticket-data.service';

import { Ticket } from '../tickets/tickets.component';


@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.css']
})
export class TicketComponent implements OnInit {

  id: number
  username: string
  ticket: Ticket

  constructor(private ticketService: TicketDataService, private route: ActivatedRoute, private router:Router) { }

  ngOnInit(){
    this.username = this.route.snapshot.params['user_id'];
    this.id = this.route.snapshot.params['id'];
    this.getTicket();
  }
  getTicket(){
    this.ticketService.retrieveOneTicket(this.username ,this.id).subscribe(
      response => {
        console.log(response);
        this.ticket = response;
      }
      )
  }

  ticketHasNotes(){
    if (this.ticket.notes.length != 0){
      return true
    }
   
  }

  saveTicket(){
    this.ticketService.saveTicket('karolina', this.ticket).subscribe(
      data => {
        console.log(data)
      }
    )
  }
}
