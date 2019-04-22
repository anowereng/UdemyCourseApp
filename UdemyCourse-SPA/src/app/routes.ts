import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ListComponent } from './list/list.component';
import { MemberListComponent } from './member-list/member-list.component';
import { MessagesComponent } from './messages/messages.component';
import { AuthGuard } from './_guard/auth.guard';
import { CustomerComponent } from './Customer/Customer.component';

export const appRoutes: Routes = [
   { path: 'home', component: HomeComponent },
   { path: '', runGuardsAndResolvers: 'always',
    canActivate: [AuthGuard],
    children: [
        { path: 'list', component: ListComponent },
        { path: 'member-list', component: MemberListComponent },
        { path: 'messages', component: MessagesComponent },
      { path: 'customer', component: CustomerComponent },
    ]
},
  { path: '**', redirectTo: 'home', pathMatch: 'full' },
];
