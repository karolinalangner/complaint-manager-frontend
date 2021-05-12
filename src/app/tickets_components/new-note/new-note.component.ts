import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TicketDataService } from '../../service/data/ticket-data.service';
import { NewTicketComponent } from '../new-ticket/new-ticket.component';
import { Note } from '../tickets/tickets.component';



@Component({
  selector: 'app-new-note',
  templateUrl: './new-note.component.html',
  styleUrls: ['./new-note.component.css']
})
export class NewNoteComponent implements OnInit {
  note: Note
  ticket_id: number
  username: String

  constructor(private route: ActivatedRoute, private ticketService: TicketDataService, private newTicketPage: NewTicketComponent) { }
  ngOnInit() {
    this.ticket_id = this.route.snapshot.params['id'];
    this.username = this.route.snapshot.params['user_id'];
    this.note = new Note(-1, '', new Date(), this.ticket_id)
  }

  createNote(){
    this.ticketService.saveNote(this.username, this.ticket_id, this.note)
    
  }

}
