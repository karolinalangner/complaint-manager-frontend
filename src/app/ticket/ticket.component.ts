import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TicketDataService } from '../service/data/ticket-data.service';
import { Ticket } from '../tickets/tickets.component';


@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.css']
})
export class TicketComponent implements OnInit {

  id: number
  ticket: Ticket

  constructor(private ticketService: TicketDataService, private route: ActivatedRoute, private router:Router) { }

  ngOnInit(){
    this.id = this.route.snapshot.params['id'];
    this.ticketService.retrieveOneTicket('karolina',this.id).subscribe(
      data =>{
        this.ticket = data
      console.log(data)
      } 
    )
  }
  getTicket(){
    this.ticketService.retrieveOneTicket('karolina',this.id).subscribe(
      response => {
        console.log(response);
        this.ticket = response;
      }
      )
  }

  saveTicket(){
    this.ticketService.saveTicket('karolina', this.ticket).subscribe(
      data => {
        console.log(data)
      }
    )
  }
}
