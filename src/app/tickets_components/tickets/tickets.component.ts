import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TicketDataService } from '../../service/data/ticket-data.service';

export class Note {
  constructor(public id: number,
              public author: string,
              public content: string,
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

  lookUpTicket(id){
    console.log("look up works")
    this.router.navigate([`${this.username}/tickets`, id])
  }

}
