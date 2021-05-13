import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ErrorComponent } from './error/error.component';
import { LoginComponent } from './login/login.component';
import { NewTicketComponent } from './tickets_components/new-ticket/new-ticket.component';
import { RouteGuardService } from './service/route-gard.service';
import { TicketComponent } from './tickets_components/ticket/ticket.component';
import { TicketsComponent } from './tickets_components/tickets/tickets.component';
import { UnacceptedTicketsComponent } from './tickets_components/unaccepted-tickets/unaccepted-tickets.component';
import { OverdueTicketsComponent } from './tickets_components/overdue-tickets/overdue-tickets.component';
import { FindCustomerComponent } from './find-customer/find-customer.component';
import { NewNoteComponent } from './tickets_components/new-note/new-note.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { UnacceptedOverdueTicketsComponent } from './tickets_components/unaccepted-overdue-tickets/unaccepted-overdue-tickets.component';

const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'login', component: LoginComponent},
  {path: ':user_id/dashboard', component: DashboardComponent},
  {path: ':user_id/statistics', component: StatisticsComponent},
  {path: ':user_id/new_ticket', component: FindCustomerComponent},
  {path: ':user_id/new_ticket/:customer_id', component: NewTicketComponent},
  {path: ':user_id/tickets', component: TicketsComponent},
  {path: ':user_id/tickets/:id', component: TicketComponent},
  {path: ':user_id/tickets_pending', component: UnacceptedTicketsComponent},
  {path: ':user_id/tickets_pending_overdue', component: UnacceptedOverdueTicketsComponent},
  {path: ':user_id/tickets_overdue', component: OverdueTicketsComponent},

  {path: '**', component: ErrorComponent}
];

// , canActivate: [RouteGuardService]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
