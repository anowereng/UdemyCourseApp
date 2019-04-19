import { Component, OnInit } from '@angular/core';
import { LoginService } from '../_services/login.service';
import { AlertifyService } from '../_services/alertify.service';

  @Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css']
  })
export class RegisterComponent implements OnInit {
model: any = {};

registerMode = false;
  constructor(private loginService: LoginService, private alertify: AlertifyService) { }

  ngOnInit() {
  }

    register() {
      this.loginService.register(this.model).subscribe(next => {
        this.alertify.success('Register Successfully');

      }, error => {
          this.alertify.error(error);
      });
      this.model.UserName = '';
      this.model.UserPassword = '';
    }
  cancel() {
    console.log('cancel click');
  }
}
