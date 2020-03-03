import { Injectable } from '@angular/core';
import { UserserviceService } from '../DataServices/userservice.service';

import { HttpHeaders, HttpClient } from '@angular/common/http';
import {map} from 'rxjs/operators';
import { User } from '../../models/user.model';

const VALIDATION_URL = "http://localhost:8765/user-service/login";


@Injectable({
  providedIn: 'root'
})
export class UserAuthService {
  Id : number ;
  userlist : Array<User>;
  constructor(public ser : UserserviceService,public http : HttpClient) { 
    
  }
  
  authenticate(userid : string, password : string) {
   // create a security token
   // create a security token
   let authenticationToken = "Basic " + window.btoa(userid + ":" + password);
   console.log(authenticationToken);

   let headers = new HttpHeaders({
     Authorization : authenticationToken
   });
   console.log("calling server")
   // send the request
   return this.http.get(VALIDATION_URL, {headers}).pipe(
     // success function
     map(successData=>{
       console.log("success fun")
       sessionStorage.setItem("username", userid);
       // save the token
       sessionStorage.setItem("token", authenticationToken);
       return successData;
     }),
     
     // failure function
     map(failureData=>{
       // console message 
       console.log("failure fun")
       return failureData;
     })
   );
  }

  getAuthenticationToken(){
    if(this.isUserLoggedIn())
      return sessionStorage.getItem("token");
    return null; 
  }

  isUserLoggedIn(): boolean{
    let user = sessionStorage.getItem('username');
    if(user == null)
      return false;
    return true;  
  }
  
 
  
  logout(){
    
    sessionStorage.removeItem('username');
    sessionStorage.removeItem('userid');
    
  }

  getUserDetails():string{
    let user = sessionStorage.getItem('username');
    return user;
  }
  
}
