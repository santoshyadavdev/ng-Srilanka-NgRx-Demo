import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TeamService {

  apiEndpoint = 'http://www.balldontlie.io/api/';

  constructor(private http: HttpClient) { }

  getTeamList()
  {
    return this.http.get(this.apiEndpoint + 'v1/teams');
  }

  
}