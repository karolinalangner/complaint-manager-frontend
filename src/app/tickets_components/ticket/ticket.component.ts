import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TicketDataService } from 'src/app/service/data/ticket-data.service';

import { Note, Ticket } from '../tickets/tickets.component';


@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.css']
})
export class TicketComponent implements OnInit {

  ticketId: number
  username: string
  ticket: Ticket
  note: Note
  content: ''

  constructor(private ticketService: TicketDataService, private route: ActivatedRoute, private router:Router) { }

  ngOnInit(){
    this.username = this.route.snapshot.params['user_id'];
    this.ticketId = this.route.snapshot.params['id'];
    this.getTicket();
    // this.note = new Note(this.username, this.content, new Date(), this.ticketId)
  }

  getTicket(){
    this.ticketService.retrieveOneTicket(this.username ,this.ticketId).subscribe(
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

  createNote(){
    this.ticketService.saveNote(this.username, this.ticketId, this.note)
 
  }

  // saveTicket(){
  //   this.ticketService.saveTicket('karolina', this.ticket).subscribe(
  //     data => {
  //       console.log(data)
  //     }
  //   )
  // }
}
