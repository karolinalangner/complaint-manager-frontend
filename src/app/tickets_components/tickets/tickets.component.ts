import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TicketDataService } from '../../service/data/ticket-data.service';

export class Note {
  constructor(public id: number, 
              public content: string,
              public date: Date,
              ticket_id: number
              ) { }
}  

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
