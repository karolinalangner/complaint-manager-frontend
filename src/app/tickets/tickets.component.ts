import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TicketDataService } from '../service/data/ticket-data.service';

export class Ticket {
    constructor(public id: number, 
                public deadline: Date,
                public dateReceived: Date,
                public topic: string,
                public source: string,
                public prefferedContactMethod: string,
                public status
                ) { }
  }  

@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.component.html',
  styleUrls: ['./tickets.component.css']
})
export class TicketsComponent implements OnInit {
tickets: Ticket[]

  constructor(private ticketService: TicketDataService, 
              private router: Router, 
              private route:ActivatedRoute
              ) { }

  ngOnInit() {
    this.refreshTickets();
  }

  refreshTickets(){
    this.ticketService.retrieveAllTickets('karolina').subscribe(
      response => {
        console.log(response);
        this.tickets = response;
      }
      )
  }

  lookUpTicket(id){
    console.log("look up works")
    this.router.navigate(['karolina/tickets', id])
  }

}
