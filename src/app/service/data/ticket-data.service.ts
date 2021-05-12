import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_URL } from 'src/app/constants';
import { Ticket } from 'src/app/tickets_components/tickets/tickets.component';

@Injectable({
  providedIn: 'root'
})
export class TicketDataService {

  constructor(private http: HttpClient) { }

  retrieveAllTickets(username){
    return this.http.get<Ticket[]>(`${API_URL}/jpa/${username}/tickets`);
  }

  retrieveUnacceptedTickets(username){
    return this.http.get<Ticket[]>(`${API_URL}/jpa/${username}/tickets/unaccepted`);
  }

  retrieveUsersOverdueTickets(username){
    return this.http.get<Ticket[]>(`${API_URL}/jpa/${username}/tickets/overdue`);
  }

  retrieveOneTicket(username, id){
    return this.http.get<Ticket>(`${API_URL}/jpa/${username}/tickets/${id}`);
  }

  countUnacceptedTickets(username){
    return this.http.get<Number>(`${API_URL}/jpa/${username}/tickets/unaccepted/count`);
  }

  countUsersOverdueTickets(username){
    return this.http.get<Number>(`${API_URL}/jpa/${username}/tickets/overdue/count`);
  }

  countTicketsInUserQueue(username){
    return this.http.get<Number>(`${API_URL}/jpa/${username}/tickets/count`);
  }

  saveTicket(username, customerId, ticket){
    return this.http.post(`${API_URL}/jpa/${username}/${customerId}/tickets`, ticket);
  }

  saveNote(username, ticket_id, note){
    return this.http.post(`${API_URL}/jpa/${username}/tickets/${ticket_id}/notes`, note);
  }



}
