import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { HttpModule } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthService {
  authToken: any;
  user: any;

  constructor(private http:Http) { }

  registerUser(user){
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    return this.http.post('https://virtualbuds-rshar59.c9users.io:8000/register', user,{headers: headers})
      .map(res => res.json());
  }
  
    authenticateUser(user){
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    return this.http.post('https://virtualbuds-rshar59.c9users.io:8000/authenticate', user,{headers: headers})
      .map(res => res.json());
  }
}