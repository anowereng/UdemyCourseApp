import { Component, OnInit } from '@angular/core';
import { LoginService } from '../_services/login.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  model: any = {};
  constructor(private loginService: LoginService) { }

  ngOnInit() {
  }
  login() {
    this.loginService.login(this.model).subscribe(next => {
      console.log('Logged in Successfully');
    }, error => {
        console.log(error);
    } );
  }
  loggedIn() {
    const token = localStorage.getItem('token');
    return !!token;
  }
  logout() {
    localStorage.removeItem('token');
    console.log('logged out');
  }

}
