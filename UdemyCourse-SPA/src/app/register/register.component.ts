import { Component, OnInit } from '@angular/core';
import { LoginService } from '../_services/login.service';

  @Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css']
  })
export class RegisterComponent implements OnInit {
model: any = {};

registerMode = false;
  constructor(private loginService: LoginService) { }

  ngOnInit() {
  }

    register() {
      this.loginService.register(this.model).subscribe(next => {
        console.log('Register Successfully');
      }, error => {
          console.log(error);
      });
      this.model.UserName = '';
      this.model.UserPassword = '';
    }
  cancel() {
    console.log('cancel click');
  }
}
