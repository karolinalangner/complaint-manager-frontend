import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DashboardReportComponent } from 'src/app/dashboard-report/dashboard-report.component';
import { TicketDataService } from 'src/app/service/data/ticket-data.service';
import { Ticket } from '../tickets/tickets.component';

@Component({
  selector: 'app-unaccepted-tickets',
  templateUrl: './unaccepted-tickets.component.html',
  styleUrls: ['./unaccepted-tickets.component.css']
})
export class UnacceptedTicketsComponent implements OnInit {
  
  tickets: Ticket[]
  username: string
  
  constructor(private ticketService: TicketDataService, 
    private router: Router, private route: ActivatedRoute ) { }

  ngOnInit() {
    this.username = this.route.snapshot.params['user_id'];
    this.refreshUnacceptedTickets();
  }

  
  refreshUnacceptedTickets(){
    this.ticketService.retrieveUnacceptedTickets(this.username).subscribe(
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