import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ErrorComponent } from './error/error.component';
import { LoginComponent } from './login/login.component';
import { NewTicketComponent } from './new-ticket/new-ticket.component';
import { RouteGuardService } from './service/route-gard.service';
import { TicketComponent } from './ticket/ticket.component';
import { TicketsComponent } from './tickets/tickets.component';

const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'login', component: LoginComponent},
  {path: ':user_id/dashboard', component: DashboardComponent},
  {path: ':user_id/new_ticket', component: NewTicketComponent},
  {path: ':user_id/tickets', component: TicketsComponent},
  {path: ':user_id/tickets/:id', component: TicketComponent},

  {path: '**', component: ErrorComponent}
];

// , canActivate: [RouteGuardService]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
