import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TicketDataService } from 'src/app/service/data/ticket-data.service';
import { Ticket } from '../tickets/tickets.component';

@Component({
  selector: 'app-unaccepted-overdue-tickets',
  templateUrl: './unaccepted-overdue-tickets.component.html',
  styleUrls: ['./unaccepted-overdue-tickets.component.css']
})
export class UnacceptedOverdueTicketsComponent implements OnInit {

  tickets: Ticket[]
  username: string
  
  constructor(private ticketService: TicketDataService, 
    private router: Router, private route: ActivatedRoute ) { }

  ngOnInit() {
    this.username = this.route.snapshot.params['user_id'];
    this.getUnacceptedOverdueTickets();
  }

  
  getUnacceptedOverdueTickets(){
    this.ticketService.retrieveUnacceptedOverdueTickets(this.username).subscribe(
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
