import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ListComponent } from './list/list.component';
import { MemberListComponent } from './member-list/member-list.component';
import { MessagesComponent } from './messages/messages.component';
import { AuthGuard } from './_guard/auth.guard';
import { CustomerListComponent } from './customer/customer-list/customer-list.component';
import { CustomerDetailsComponent } from './customer/customer-details/customer-details.component';

export const appRoutes: Routes = [
   { path: 'home', component: HomeComponent },
   { path: '', runGuardsAndResolvers: 'always',
    canActivate: [AuthGuard],
    children: [
        { path: 'list', component: ListComponent },
        { path: 'member-list', component: MemberListComponent },
        { path: 'messages', component: MessagesComponent },
      { path: 'customer-list', component: CustomerListComponent },
      { path: 'customer-list/:id', component: CustomerDetailsComponent },
    ]
},
  { path: '**', redirectTo: 'home', pathMatch: 'full' },
];
