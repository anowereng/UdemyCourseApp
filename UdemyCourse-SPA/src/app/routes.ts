import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ListComponent } from './list/list.component';
import { MemberListComponent } from './member-list/member-list.component';
import { MessagesComponent } from './messages/messages.component';
import { AuthGuard } from './_guard/auth.guard';

export const appRoutes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'list', component: ListComponent , canActivate: [AuthGuard]},
    { path: 'member-list', component: MemberListComponent },
    { path: 'messages', component: MessagesComponent },
    { path: '**', redirectTo: 'home', pathMatch: 'full' },

];
