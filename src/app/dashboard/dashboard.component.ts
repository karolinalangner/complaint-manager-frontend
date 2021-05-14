import { Component, OnInit } from '@angular/core';
import { AUTHENTICATED_USER, AuthenticationService, User } from '../service/authentication.service';
import { TicketDataService } from '../service/data/ticket-data.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  user: User
  username: string
  
  constructor(private authenticationService: AuthenticationService) { }

  ngOnInit() {
    this.username = sessionStorage.getItem(AUTHENTICATED_USER)
    this.authenticationService.getUser(this.username).subscribe(
      data =>  this.user = data
    )
    console.log("FROM dashboard: " + this.user)
  }

}
