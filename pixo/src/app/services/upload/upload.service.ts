import { Injectable } from '@angular/core';
import { UserAuthService } from '../authenications/user-auth.service';
import { HttpClient, HttpEvent, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UploadService {
  baseUrl: string = 'http://localhost:8765/user-service/register';
  constructor(public auth:UserAuthService,public http:HttpClient) { }
  pushFileToStorage(file: File,firstname,lastname,username,email,password,dob:Date,profile) : Observable<HttpEvent<{}>>{
    
    const formdata: FormData = new FormData();

    // let product = new  Product (name,category,cost,file,url);
    formdata.append('file', file, profile);
    formdata.append('fname',firstname)
    formdata.append('lname',lastname)

    formdata.append('uname',username)
    formdata.append("dob",dob + "")
    formdata.append('password',password)
    formdata.append('profile',profile)
    formdata.append('email',email)
    // header info to set for responding the progress report
    /*return this.http.post(this.baseUrl, formdata,{
      reportProgress: true,
      responseType: 'text'
    });*/



    const req = new HttpRequest('POST', `${this.baseUrl}`, formdata, {
      reportProgress: true,
      responseType: 'text'
    });

    return this.http.request(req);
  }
}
