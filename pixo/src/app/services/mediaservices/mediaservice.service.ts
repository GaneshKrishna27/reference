import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Media } from 'src/app/models/media.model';

const BasicURL = "http://localhost:3000/mediafiles";
@Injectable({
  providedIn: 'root'
})
export class MediaserviceService {

  constructor( public http:HttpClient) {

   }

   getAllMedia():any{
    return this.http.get(BasicURL);
  }

  getMedia(id:number):any{
    return this.http.get(BasicURL+"/"+id);
  }

  uploadMedia(file:Media):any{
    return this.http.post(BasicURL,file);
  }
}
