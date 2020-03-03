import { Component, OnInit } from '@angular/core';
import { UserAuthService } from 'src/app/services/authenications/user-auth.service';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { registerLocaleData } from '@angular/common';
import { UserserviceService } from 'src/app/services/DataServices/userservice.service';
import { User } from 'src/app/models/user.model';
import { Router } from '@angular/router';
import { Usernames } from 'src/app/models/usernames.model';
import { UploadService } from 'src/app/services/upload/upload.service';
import { HttpEventType, HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  submitted : boolean = false;
  unamestatus : boolean = false;
  fname : string;
  lname : string;
  dob : Date;
  progress: { percentage: number } = { percentage: 0 };
  regname : string;
  regmail : string;
  regpass : string;
  regrpass : string;
  selectedFiles: FileList;
  currentFileUpload: File;
  profile : String = null;
  errtext : string='';
  erruser : string='';
  errmail : string='';
  dpsupport : boolean = false;
  myFormGroup : FormGroup;
  names : Usernames;
  date: Date;
  constructor(public upload:UploadService,public auth : UserAuthService,formbuilder : FormBuilder,public ser : UserserviceService,public router:Router) {

    this.myFormGroup=formbuilder.group({
      "firstname" : new FormControl("",[Validators.required,Validators.pattern('^[A-Za-z]{3,15}$')]),
      "lastname" : new FormControl("",[Validators.required,Validators.pattern('^[A-Za-z]{3,15}$')]),
      "username" : new FormControl("",[Validators.required,Validators.pattern('^[A-Za-z0-9]{3,10}$'),Validators.minLength(8),Validators.maxLength(12)]),
      "uemail" : new FormControl("",[Validators.required, Validators.email]),
      "dob" : new FormControl("",Validators.required),
      "password1" : new FormControl("", [Validators.required,Validators.minLength(8),Validators.maxLength(12)]),
      "password2" : new FormControl("", [Validators.required,Validators.minLength(8),Validators.maxLength(12)])
      
    });
    
  }

   get f(){return this.myFormGroup.controls;}
   //checking whether username is available or not
   checkUserName(){
    this.regname = this.myFormGroup.controls['username'].value;
     for(let i=0;i<this.names.usernames.length;i++){
        if(this.regname == this.names.usernames[i]){
          this.erruser = "Already exist!!" 
          this.unamestatus = false;
          break;
        }
        else{
          this.unamestatus = true;
          this.erruser = "Success" ;
        }
     }
   }
  /* //checking mailid is already available or not
   checkEmail(){
    this.regmail = this.myFormGroup.controls['uemail'].value;
    console.log(this.regmail)
    for(let u of this.userlist){
       if(this.regmail == u.uemail){
         this.errmail = "Already exist!!";
         alert("Username already taken..")
         break;
       }
    }

   }*/

   //checking whether  passwords are matched or not
   checkPassword(){
    this.regpass = this.myFormGroup.controls['password1'].value;
    this.regrpass = this.myFormGroup.controls['password2'].value;
    if (this.regpass === this.regrpass){
      
      this.errtext = "";
    }
    else{
     this.errtext = "Password not matched";
     alert("Password not Matched")
    }
   }

   onImageLoad(event){
     console.log(event)
       if(event.height ==200 && event.width == 200 && event.target.files[0].size < 307200 ){
      
    this.selectedFiles = event.target.files;
      
      this.dpsupport = true;
    }else{
      this.dpsupport = false ;
      this.selectedFiles = event.target.files;
      alert("Images must be less than 300kb");
    }

   }

   //registering the user
   register(){
    this.submitted = true;
     if(this.myFormGroup.valid && this.unamestatus){
     this.fname = this.myFormGroup.controls['firstname'].value;
     this.lname = this.myFormGroup.controls['lastname'].value;
     this.dob = this.myFormGroup.controls['dob'].value;
     this.regmail = this.myFormGroup.controls['uemail'].value;
     this.progress.percentage = 0;
     this.currentFileUpload = this.selectedFiles.item(0);
   
    this.date = new Date();
    let dateString = `_${this.date.getTime()}_${this.date.getDate()}_${this.date.getFullYear()}`
    if (this.currentFileUpload.type == 'image/png') {
      this.profile = `${this.regname}${dateString}.png`;
    }
    if (this.currentFileUpload.type == 'image/jpeg' || this.currentFileUpload.type == 'image/jpg') {
      this.profile = `${this.regname}${dateString}.jpeg`;
    }
    
     //saving into database
     //let creatuser=new User(this.fname,this.lname,this.regname,this.regmail,this.dob,this.regpass,this.profile);
     //this.ser.addUser(creatuser).subscribe((responce:any)=>{alert("Account created successfully....");this.router.navigate(['/login']);});
      this.upload.pushFileToStorage(this.currentFileUpload,this.fname,this.lname,this.regname,this.regmail,this.regpass,this.dob,this.profile).subscribe(()=>{console.log("created")})
      
    }else{
      return alert("Please enter valid details..")
    }
     
     
  }

  ngOnInit() {
    this.ser.getAllUsernames().subscribe((responce:any)=>{this.names=responce;console.log(responce)});
  }

}
