import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ToastModule } from 'ng2-toastr/ng2-toastr';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

import { SessionsModule } from './sessions/sessions.module';
import { UsersModule } from './users/users.module';
import { AppRoutingModule } from './app-routing.module';
import { AuthGuard } from './common/auth/auth.guard';
import { AuthService } from './common/auth/auth.service';
import { LoginDetailComponent } from './common/auth/login.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginDetailComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    SessionsModule,
    UsersModule,
    NgbModule,
    ToastModule.forRoot(),
    AppRoutingModule
  ],
  providers: [AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
