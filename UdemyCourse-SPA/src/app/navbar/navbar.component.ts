import { Component, OnInit } from '@angular/core';
import { LoginService } from '../_services/login.service';
import { AlertifyService } from '../_services/alertify.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  model: any = {};
  constructor(public loginService: LoginService, private alertify: AlertifyService) { }

  ngOnInit() {
  }
  login() {
    this.loginService.login(this.model).subscribe(next => {
      this.alertify.success('Logged in successfully');
      // console.log('Logged in Successfully');
    }, error => {
        this.alertify.error(error);
    } );
  }
  loggedIn() {
    // const token = localStorage.getItem('token');
    // return !!token;
    return this.loginService.loggedIn();
  }
  logout() {
    localStorage.removeItem('token');
    this.alertify.message( 'logged out !!');
  }

}
