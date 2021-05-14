import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TicketDataService } from '../../service/data/ticket-data.service';

export class Note {
  constructor( public author: string,
              public content: any,
              public date: Date,
              public ticket_id: number
              ) { }
}  

export class Ticket {
    customer: any;
    notes: any;
    constructor(
                public dateReceived: Date,
                public deadline: Date,
                public topic: string,
                public source: string,
                public prefferedContactMethod: string,
                public status: string,
                public details: string,
                public queue: string
                ) { }
  }  

@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.component.html',
  styleUrls: ['./tickets.component.css']
})
export class TicketsComponent implements OnInit {
tickets: Ticket[]
username: string
  constructor(private ticketService: TicketDataService, 
              private router: Router, 
              private route:ActivatedRoute
              ) { }

  ngOnInit() {
    this.username = this.route.snapshot.params['user_id'];
    this.refreshTickets();
  }

  refreshTickets(){
    this.ticketService.retrieveAllTickets(this.username).subscribe(
      response => {
        console.log(response);
        this.tickets = response;
      }
      )
  }

  ticketsInQueue() {
    if (this.tickets.length > 0){
      return true;
    } 
  }

  lookUpTicket(id){
    console.log("look up works")
    this.router.navigate([`${this.username}/tickets`, id])
  }

}
