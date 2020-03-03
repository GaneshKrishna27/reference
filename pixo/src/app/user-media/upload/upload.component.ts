import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { MediaserviceService } from 'src/app/services/mediaservices/mediaservice.service';
import { Media } from 'src/app/models/media.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {
  ftitle : string;
  fdesc : string;
  ftags : string;
  file : any;
  myFormGroup : FormGroup;

  constructor(formbuilder : FormBuilder,public mservice : MediaserviceService,public router:Router) {

    this.myFormGroup=formbuilder.group({
      "media" : new FormControl(""),
      "title" : new FormControl(""),
      "description" : new FormControl(""),
      "tags" : new FormControl(""),
    });
   
   }
   singleUpload(){
    this.file = this.myFormGroup.controls['media'].value;
    this.ftitle = this.myFormGroup.controls['title'].value;
    this.fdesc = this.myFormGroup.controls['description'].value;
    this.ftags = this.myFormGroup.controls['tags'].value;
  
    console.log(this.file+"\n"+this.ftitle+"\n"+this.fdesc+"\n"+this.ftags);
    let uploadfile = new Media(this.file,this.ftitle,this.fdesc,this.ftags)

    this.mservice.uploadMedia(uploadfile).subscribe((responce)=>{alert("Uploaded successfully");
                                                                  this.router.navigate(['/account/'])});
    
    
  }

  ngOnInit() {
  }

}
