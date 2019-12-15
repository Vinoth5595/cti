import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserManagementService {
 DUMMY_REST_URL="https://angular-datatables-demo-server.herokuapp.com/";

  constructor(private http: HttpClient) { }

  getUsers(){
    this.http.get(this.DUMMY_REST_URL);
  }

  updateUser(user){
    this.http.put(this.DUMMY_REST_URL,user);
  }

  delteUser(user){
    this.http.delete(this.DUMMY_REST_URL,user);
  }

}
