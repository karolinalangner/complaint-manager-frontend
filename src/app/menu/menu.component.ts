import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AUTHENTICATED_USER, AuthenticationService, User } from '../service/authentication.service';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  username: string 
  user: User

  constructor(private authenticationService: AuthenticationService, private router: Router, 
              private route: ActivatedRoute ) { }

  ngOnInit() {
    this.username = sessionStorage.getItem(AUTHENTICATED_USER)
    this.authenticationService.getUser(this.username).subscribe(
      data =>  this.user = data
    )
  }

  seeDashboard(){
    this.router.navigate([`${this.username}/dashboard`]);
  }

  canCreateTicket(){
    if(this.user.authorities.find( ({ authority }) => authority === 'ADMIN') || this.user.authorities.find( ({ authority }) => authority === 'CUSTOMER_SERVICES')) {
      return true
    } 
  }

}
