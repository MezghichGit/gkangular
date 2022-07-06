import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmployerService } from '../services/employer.service';

@Component({
  selector: 'app-details-employer',
  templateUrl: './details-employer.component.html',
  styleUrls: ['./details-employer.component.css']
})
export class DetailsEmployerComponent implements OnInit {

   idEmp:any;
   emp:any;
  constructor(private employerService:EmployerService, private route:ActivatedRoute) { }

  ngOnInit(): void {
    // 1) récupération de l'id de l'employer
    this.route.paramMap.subscribe(
      params =>{
        this.idEmp = params.get('id');
      }
      );
      
      // 2)Recherche de l'employer via son id
    this.employerService.getEmpById(this.idEmp).subscribe(
      data => {
        this.emp = data;
        console.log(data);
      }
    );
    
  }

}
