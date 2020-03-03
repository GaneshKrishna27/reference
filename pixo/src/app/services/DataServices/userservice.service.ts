import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from 'src/app/models/user.model';
import { Userid } from 'src/app/models/userid.model';
const BasicURL = "http://localhost:8765/user-service/users";
const UseridURL = "http://localhost:8765/user-service/custom";
const UsernamesURL = "http://localhost:8765/user-service/usernames";
const REGISTER_URL = "http://localhost:8765/user-service/register";

@Injectable({
  providedIn: 'root'
})


export class UserserviceService {
  user : Userid;
  constructor(public http : HttpClient) {


   }
  getAllUsernames():any{
    return this.http.get(UsernamesURL);
  }

  getId():any {
    
    let name = sessionStorage.getItem("username");
    return this.http.get(UseridURL+"/"+name);
   
  }
  getUser(id:number):any{
    return this.http.get(BasicURL+"/"+id);
  }

  addUser(user:User):any{
    return this.http.post(REGISTER_URL,user);
  }

  delete(id:number){
    this.http.delete(BasicURL+"/"+id);
  }

  update(id:number,user:User):any{
    return this.http.put(BasicURL+"/"+id,user);
  }
}
