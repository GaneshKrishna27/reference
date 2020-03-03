import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';

@Component({
  selector: 'app-upload-multiple',
  templateUrl: './upload-multiple.component.html',
  styleUrls: ['./upload-multiple.component.css']
})
export class UploadMultipleComponent implements OnInit {
  ftitle : Array< string>;
  fdesc : Array<string>;
  ftags : Array< string>;
  file : Array<any>;
  myFormGroup : FormGroup;
  filedata : number;
  count : Array<number>;

  constructor( formbuilder : FormBuilder) { 
    
    this.myFormGroup=formbuilder.group({
      "media" : new FormControl(""),
      "title" : new FormControl(""),
      "description" : new FormControl(""),
      "tags" : new FormControl(""),
    });

  }
  fileEvent(event:FileList) {

    let reader = event.length;
    console.log(event[0].name)
    this.count=Array(event.length).fill(1);

    console.log(reader);
    console.log(this.count);
  }
  multipleUpload(){
     // let n =this.myFormGroup.controls['title'].value.length;
      //console.log(n)
    this.ftitle = this.myFormGroup.controls['title'].value;
    this.fdesc = this.myFormGroup.controls['description'].value;
    this.ftags = this.myFormGroup.controls['tags'].value;
    this.file = this.myFormGroup.controls['media'].value;

    console.log(this.file+"\n"+this.ftitle+"\n"+this.fdesc+"\n"+this.ftags);
  }

  ngOnInit() {
  }

}
