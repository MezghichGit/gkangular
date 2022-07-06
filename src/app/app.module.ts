import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactComponent } from './contact/contact.component';
import { StartsWithDrPipe } from './pipes/starts-with-dr.pipe';
import { CoursComponent } from './cours/cours.component';
import { FormsModule } from '@angular/forms';
import { ListUsersComponent } from './list-users/list-users.component';
import { AddUserComponent } from './add-user/add-user.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { ListEmployerComponent } from './list-employer/list-employer.component';
import { DetailsEmployerComponent } from './details-employer/details-employer.component'
@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    StartsWithDrPipe,
    CoursComponent,
    ListUsersComponent,
    AddUserComponent,
    NavbarComponent,
    HomeComponent,
    ListEmployerComponent,
    DetailsEmployerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
