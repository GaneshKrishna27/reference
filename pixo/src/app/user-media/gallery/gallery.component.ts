import { Component, OnInit } from '@angular/core';
import { MediaserviceService } from 'src/app/services/mediaservices/mediaservice.service';
import { Media } from 'src/app/models/media.model';
import { Router } from '@angular/router';
import { UserserviceService } from 'src/app/services/DataServices/userservice.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
  fileslist : Array<Media>;
  constructor(public mservice : MediaserviceService,public router:Router,public userSer:UserserviceService) {

   }

   getDetails(id : number){
     console.log(id);
     this.router.navigate(['/media-details/'+id])

   }

  ngOnInit() {
    this.userSer.getId().subscribe((responce)=>{
      console.log(responce)
      let num = responce.id;
      let name = responce.firstname + " " +responce.lastname;
      console.log(num)
      sessionStorage.setItem("userid",num)
      sessionStorage.setItem("name",name)
    });
    this.mservice.getAllMedia().subscribe((responce)=>this.fileslist=responce);
    
  }

}
