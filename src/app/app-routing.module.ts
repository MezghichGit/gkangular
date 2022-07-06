import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddUserComponent } from './add-user/add-user.component';
import { ContactComponent } from './contact/contact.component';
import { DetailsEmployerComponent } from './details-employer/details-employer.component';
import { HomeComponent } from './home/home.component';
import { ListEmployerComponent } from './list-employer/list-employer.component';
import { ListUsersComponent } from './list-users/list-users.component';

const routes: Routes = [
  {
    path:'',
    component:HomeComponent,
    pathMatch:'full'
  },
  {
    path:"list",
    component:ListUsersComponent
  },
  {
    path:"add",
    component:AddUserComponent 
  },
  {
    path:"contact",
    component:ContactComponent 
  },
  {
    path:"home",
    component:HomeComponent
  },
  {
    path:"employer",
    component : ListEmployerComponent
  }
  ,
  {
    path:"detailsEmployer/:id",
    component : DetailsEmployerComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
