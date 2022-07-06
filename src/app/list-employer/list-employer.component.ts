import { Component, OnInit } from '@angular/core';
import { EmployerService } from '../services/employer.service';

@Component({
  selector: 'app-list-employer',
  templateUrl: './list-employer.component.html',
  styleUrls: ['./list-employer.component.css']
})
export class ListEmployerComponent implements OnInit {

  employers:any;

  //injection de dépendence
  constructor(private employerService:EmployerService) { }

  ngOnInit(): void {

    this.employerService.getAllEmployer().subscribe(
      data =>{
        console.log(data);
        this.employers = data;
      }
    );
  }

}
