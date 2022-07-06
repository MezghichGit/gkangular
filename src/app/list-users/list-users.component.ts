import { Component, OnInit } from '@angular/core';
import { Stagiaire } from '../models';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css']
})
export class ListUsersComponent implements OnInit {

  stagiaires:Stagiaire[]=[];
  // ici on fait l'injection de dépendence  (ici c'est UserService) dans le constructeur
  constructor(private serviceUser:UserService) { 
    console.log("Constructeur");
  }

  ngOnInit(): void {
    console.log("ngOnInit");
    this.stagiaires = this.serviceUser.getListStagiaires();
  }
}
