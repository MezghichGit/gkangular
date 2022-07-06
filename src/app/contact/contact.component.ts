import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Stagiaire } from '../models';
import { UserService } from '../services/user.service';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  logoGK="https://mma.prnewswire.com/media/602946/Global_Knowledge_Logo.jpg?p=twitter";
  isHidden:boolean=false;
  maCouleur:string="vert";
  som:number = 0;
  v1:number=10;
  v2:number=10;
  a:number=0;
  b:number=0;
  //som:number = this.v1+this.v2;
  formation:string = "Angular";
  lieu : string = "Global Knowledge - Paris France";
  nbreCandidats:number = 5;
  noms:string[]=["Amine","Gabriel","François","Bruno","Nada","Stéphane"]
  
  stagiaires:Stagiaire[]=[];
  // ici on fait l'injection de dépendence  (ici c'est UserService) dans le constructeur
  constructor(private serviceUser:UserService) { 
    console.log("Constructeur");
  }

  ngOnInit(): void {
    console.log("ngOnInit");
    this.stagiaires = this.serviceUser.getListStagiaires();
  }

  info()
  {
    alert("Vous avez cliquer sur le btn primary");
  }

  succes(){
    alert("Vous avez gagner"); 
  }

  infoStagire(stagiaire:Stagiaire)
  {
    alert("Vous êtes : "+ stagiaire.nom +" Votre tel : "+stagiaire.tel); 
  }

  showHide()
  {
    this.isHidden = !this.isHidden
  }

  calcul(calculatrice:NgForm){
    this.som = Number.parseInt(calculatrice.value.v1)  + Number.parseInt(calculatrice.value.v2);
  }
}
