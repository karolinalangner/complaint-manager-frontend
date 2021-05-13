import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_URL } from 'src/app/constants';

@Injectable({
  providedIn: 'root'
})
export class StatisticsService {

  constructor(private http: HttpClient) { }

  
  TicketsByEmailAll(){
    return this.http.get<Number>(`${API_URL}/jpa/tickets/count/by_email/all`);
  }

  TicketsByEmailLast30Days(){
    return this.http.get<Number>(`${API_URL}/jpa/tickets/count/by_email/30days`);
  }
  TicketsByPhoneAll(){
    return this.http.get<Number>(`${API_URL}/jpa/tickets/count/by_phone/all`);
  }

  TicketsByPhoneLast30Days(){
    return this.http.get<Number>(`${API_URL}/jpa/tickets/count/by_phone/30days`);
  }
  TicketsByPostAll(){
    return this.http.get<Number>(`${API_URL}/jpa/tickets/count/by_post/all`);
  }

  TicketsByPostLast30Days(){
    return this.http.get<Number>(`${API_URL}/jpa/tickets/count/by_post/30days`);
  }

  



}
