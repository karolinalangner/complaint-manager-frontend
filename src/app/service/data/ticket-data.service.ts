import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_URL } from 'src/app/constants';
import { Ticket } from 'src/app/tickets/tickets.component';

@Injectable({
  providedIn: 'root'
})
export class TicketDataService {

  constructor(private http: HttpClient) { }

  retrieveAllTickets(username){
    return this.http.get<Ticket[]>(`${API_URL}/jpa/${username}/tickets`);
  }

  retrieveOneTicket(username, id){
    return this.http.get<Ticket>(`${API_URL}/jpa/${username}/tickets/${id}`);
  }

  saveTicket(username, ticket){
    return this.http.post(`${API_URL}/jpa/${username}/tickets`, ticket);
  }

}
