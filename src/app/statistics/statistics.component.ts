import { Component, OnInit } from '@angular/core';
import { StatisticsService } from '../service/data/statistics.service';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.css']
})
export class StatisticsComponent implements OnInit {
  
  byEmailAll: Number
  byEmail30Days: Number
  byPhoneAll: Number
  byPhone30Days: Number
  byPostAll: Number
  byPost30Days: Number
  within30Days: Number
  within24Hours: Number
 
  constructor(private statService: StatisticsService) { }

  ngOnInit() { 
    this.ticketsByEmailAll()
    this.ticketsByPhoneAll()
    this.ticketsByPostAll()
    this.ticketsByEmail30Days()
    this.ticketsByPhone30Days()
    this.ticketsByPost30Days()
    this.ticketsWithin24hours()
    this.ticketsWithin30Days()
  }

  ticketsByPhoneAll(){
    this.statService.TicketsByPhoneAll().subscribe(
      data => this.byPhoneAll = data)
  }

  ticketsByPhone30Days(){
    this.statService.TicketsByPhoneLast30Days().subscribe(
      data => this.byPhone30Days = data)
  }

  ticketsByEmailAll(){
    this.statService.TicketsByEmailAll().subscribe(
      data => this.byEmailAll = data)
  }

  ticketsByEmail30Days(){
    this.statService.TicketsByEmailLast30Days().subscribe(
      data => this.byEmail30Days = data)
  }

    
  ticketsByPostAll(){
    this.statService.TicketsByPostAll().subscribe(
      data => this.byPostAll = data)
  }

  ticketsByPost30Days(){
    this.statService.TicketsByPostLast30Days().subscribe(
      data => this.byPost30Days = data)
  }

  ticketsWithin30Days(){
    this.statService.TicketsWithin30Days().subscribe(
      data => this.within30Days = data)
  }

  ticketsWithin24hours(){
    this.statService.TicketsWithin24Hours().subscribe(
      data => this.within24Hours = data)
  }
}
