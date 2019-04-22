import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ValuesComponent } from './values/values.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginService } from './_services/login.service';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import {  ErrorInterceptorProvider } from './_services/error.interceptor';
import { AlertifyService } from './_services/alertify.service';
import { BsDropdownModule } from 'ngx-bootstrap';
import { MemberListComponent } from './member-list/member-list.component';
import { ListComponent } from './list/list.component';
import { MessagesComponent } from './messages/messages.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from './routes';
import { AuthGuard } from './_guard/auth.guard';
import { CustomerService } from './_services/customer.service';
import { CustomerListComponent } from './customer/customer-list/customer-list.component';
import { ClientComponent } from './Client/Client.component';
import { JwtModule } from '@auth0/angular-jwt';
import { CustomerDetailsComponent } from './customer/customer-details/customer-details.component';

export function tokenGetter( ) {
   return localStorage.getItem('token');
}

@NgModule({
   declarations: [
      AppComponent,
      NavbarComponent,
      ValuesComponent,
      HomeComponent,
      LoginComponent,
      RegisterComponent,
      MemberListComponent,
      ListComponent,
      MessagesComponent,
      CustomerListComponent,
     ClientComponent,
     CustomerDetailsComponent 
   ],
   imports: [
      BrowserModule,
      FormsModule,
      HttpClientModule,
      BsDropdownModule.forRoot(),
      RouterModule.forRoot(appRoutes),
      JwtModule.forRoot({
         config: {
            tokenGetter: tokenGetter,
            whitelistedDomains: ['localhost:5000'],
            blacklistedRoutes: ['localhost:5000/api/login']
         }
      })
   ],
   providers: [
      LoginService,
      ErrorInterceptorProvider,
      AlertifyService,
      AuthGuard,
      CustomerService
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
