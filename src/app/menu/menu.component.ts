import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { routerNgProbeToken } from '@angular/router/src/router_module';
import { AUTHENTICATED_USER, AuthenticationService } from '../service/authentication.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  username: string 

  constructor(private authenticationService: AuthenticationService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.username = sessionStorage.getItem(AUTHENTICATED_USER)
    console.log("from menu comp:" + this.username)
  }

  seeDashboard(){
    this.router.navigate(["/dashboard"]);
  }

}
