import { Component, OnInit } from '@angular/core';
import { AUTHENTICATED_USER } from 'src/app/service/authentication.service';
import { TicketDataService } from 'src/app/service/data/ticket-data.service';

@Component({
  selector: 'app-all-tickets',
  templateUrl: './all-tickets.component.html',
  styleUrls: ['./all-tickets.component.css']
})
export class AllTicketsComponent implements OnInit {

  username: string
  unacceptedOverdue: Number
  unaccepted: Number
  overdue: Number
  userQueue: Number

  constructor(private ticketService: TicketDataService) { }

  ngOnInit() {
    this.username = sessionStorage.getItem(AUTHENTICATED_USER);
    this.ticketService.countUnacceptedOverdueTickets(this.username).subscribe(
      data =>{
        this.unacceptedOverdue = data
        console.log(data)
      }
    )
    this.ticketService.countTicketsInUserQueue(this.username).subscribe(
      data =>{
        this.userQueue = data
        console.log(data)
      }
    )
    this.ticketService.countUsersOverdueTickets(this.username).subscribe(
      data =>{
        this.overdue = data
        console.log(data)
      }
    )
    this.ticketService.countUnacceptedTickets(this.username).subscribe(
      data =>{
        this.unaccepted = data
        console.log(data)
      }
    )
  }

}
