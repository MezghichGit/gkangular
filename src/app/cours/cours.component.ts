import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cours',
templateUrl: './cours.component.html',
  //styleUrls: ['./cours.component.css']
 // template:`<button (click)="test()" class="btn btn-primary" [disabled]="isActive">Cliquer</button>`
})
export class CoursComponent implements OnInit {

  isActive:boolean=true;
  constructor() { }

  ngOnInit(): void {
  }
  test(){
    alert('test');
  }

}
