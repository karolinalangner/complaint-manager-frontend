import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../service/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username = 'username'
  password = ''
  invalidLogin = false

  constructor(private router: Router, private authenticationService: AuthenticationService) { }

  ngOnInit() {
  }

  // handleLogin() {
  //   if(this.username, this.password){
  //     this.invalidLogin = false
  //     this.router.navigate(['tickets', this.username])
  //   } else {
  //     this.invalidLogin = true
  //   }
  // }

  handleLogin() {
    this.authenticationService.executeAuthenticationService(this.username, this.password)
        .subscribe(
          data=> {
            console.log(data)
            this.router.navigate(['dashboard', this.username])
            this.invalidLogin = false
          },
          error=> {
            console.log(error)
            this.invalidLogin = true
          }
    )
  }
}
