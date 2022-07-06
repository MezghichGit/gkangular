import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  constructor(private UserService:UserService, private router:Router) { }

  ngOnInit(): void {
  }

  addUser(myform:NgForm)
  {
    console.log(myform.value);
    this.UserService.addStagiaire(myform.value);
    this.router.navigate(['/list'])

  }

}
