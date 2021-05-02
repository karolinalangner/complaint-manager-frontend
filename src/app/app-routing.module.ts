import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { RouteGuardService } from './service/route-gard.service';
import { TicketsComponent } from './tickets/tickets.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: ':username/dashboard', component: DashboardComponent}
];

// , canActivate: [RouteGuardService]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
