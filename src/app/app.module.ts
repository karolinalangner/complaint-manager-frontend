import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { MenuComponent } from './menu/menu.component';
import { TicketsComponent } from './tickets/tickets.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TicketComponent } from './ticket/ticket.component';
import { DashboardReportComponent } from './dashboard-report/dashboard-report.component';
import { HttpIntercepterAuthServiceService } from './service/http/http-intercepter-auth-service.service';
import { ErrorComponent } from './error/error.component';
import { NewTicketComponent } from './new-ticket/new-ticket.component';
import { LogoutComponent } from './logout/logout.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MenuComponent,
    TicketsComponent,
    DashboardComponent,
    TicketComponent,
    DashboardReportComponent,
    ErrorComponent,
    NewTicketComponent,
    LogoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: HttpIntercepterAuthServiceService, multi:true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
