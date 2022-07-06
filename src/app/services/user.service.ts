import { Injectable } from '@angular/core';
import { Stagiaire } from '../models';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  stagiaires:Stagiaire[]=[
    {
      "nom":"Amine",
      "email" : "amine@gmail.com",
      "adresse": "Paris",
      "tel":1111111
    },
    {
      "nom":"Gabriel",
      "email" : "Gabriel@gmail.com",
      "adresse": "Paris",
      "tel":222222
    },
    {
      "nom":"François",
      "email" : "François@gmail.com",
      "adresse": "Paris",
      "tel":3333333
    },
    {
      "nom":"Bruno",
      "email" : "Bruno@gmail.com",
      "adresse": "Paris",
      "tel":4444444
    },
    {
      "nom":"Stéphane",
      "email" : "Stephane@gmail.com",
      "adresse": "Paris",
      "tel":5555555
    },
    {
      "nom":"Nada",
      "email" : "Nada@gmail.com",
      "adresse": "Paris",
      "tel":6666666
    }
  ];
  constructor() { }

  public getListStagiaires()
  {
    return this.stagiaires;
  }

  public addStagiaire(stagiaire:Stagiaire)
  {
   this.stagiaires.push(stagiaire);
  }
}
