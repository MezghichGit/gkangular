import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class EmployerService {
// injection de dépendence : HttpClient
  constructor(private http:HttpClient) { }

  getAllEmployer()
  {
    return this.http.get("https://jsonplaceholder.typicode.com/users");
  }

  getEmpById(id:any)
  {
    //return "Détails Emp;"
    return this.http.get("https://jsonplaceholder.typicode.com/users/"+id);
  
  }
}
