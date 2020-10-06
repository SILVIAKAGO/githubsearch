import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class GithubService {
private username: String
  constructor(private http: HttpClient) {
    this.username ='SILVIAKAGO'
   }
  getData(x) {
    const url ="https://api.github.com/users/"+x +"?api_key="+environment;
    return this.http.get<any>(url)
  }
  getRepos (x){
    const url ="https://api.github.com/users/"+ x +"/repos?api_key="+environment;
    return this.http.get<any>(url)
  }
  }

