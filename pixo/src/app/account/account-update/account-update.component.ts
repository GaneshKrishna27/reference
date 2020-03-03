import { Component, OnInit } from '@angular/core';
import { UserAuthService } from 'src/app/services/authenications/user-auth.service';
import { User } from 'src/app/models/user.model';
import { UserserviceService } from 'src/app/services/DataServices/userservice.service';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Usernames } from 'src/app/models/usernames.model';

@Component({
  selector: 'app-account-update',
  templateUrl: './account-update.component.html',
  styleUrls: ['./account-update.component.css']
})
export class AccountUpdateComponent implements OnInit {
  user : User;
  id : number;
  submitted : boolean =false;
  unamestatus : boolean = false;
  match : boolean =false;
  regname : string;
  regmail : string;
  regpass : string;
  regrpass : string;
  myFormGroup : FormGroup;
  userlist : Array<User>;
  erruser : string ='';
  errpass : string;
  names : Usernames;
  constructor(public auth:UserAuthService,public ser :UserserviceService,public formBuilder:FormBuilder,public router : Router) {
    
    this.myFormGroup=formBuilder.group({
      "username" : new FormControl("",[Validators.required,Validators.pattern('^[A-Za-z0-9]{8,12}$'),Validators.minLength(8),Validators.maxLength(12)]),
      "uemail" : new FormControl(""),
      "password1" : new FormControl("", [Validators.required,Validators.minLength(8),Validators.maxLength(12)]),
      "password2" : new FormControl("", [Validators.required,Validators.minLength(8),Validators.maxLength(12)]),
      
    });
   }
   
   get f(){return this.myFormGroup.controls;}
   
   checkUserName(){
    this.regname = this.myFormGroup.controls['username'].value;
     for(let i=0;i<this.names.usernames.length;i++){
        if(this.regname == this.names.usernames[i]){
          if(this.user.username == this.regname){
            this.unamestatus = true;
          }else{
            this.erruser = "Already exist!!" 
            this.unamestatus = false;
            break;
          }
          
        }
        else{
          this.unamestatus = true;
          this.erruser = "Success" ;
        }
     }
   }

   checkPassword(){
    this.regpass = this.myFormGroup.controls['password1'].value;
    this.regrpass = this.myFormGroup.controls['password2'].value;
    if (this.regpass === this.regrpass){
      this.match = true
      this.errpass = "";
    }
    else{
      this.match = false;
     this.errpass = "Password not matched";
    }
   }

   
   update(){
     this.submitted = true;
     if(this.myFormGroup.valid && this.match && this.unamestatus ){
    this.regname = this.myFormGroup.controls['username'].value;
    this.regmail=this.myFormGroup.controls['uemail'].value;
    this.regpass = this.myFormGroup.controls['password1'].value;
    this.regrpass = this.myFormGroup.controls['password2'].value;
    let url = sessionStorage.getItem("url");
     console.log(this.regname+" "+this.regmail+" "+this.regpass+" "+this.regrpass);
     let userupdated = new User(this.user.fname,this.user.lname,this.regname,this.regmail,this.user.dob,this.regpass,this.user.profile)
     this.ser.update(this.id,userupdated).subscribe((responce)=>{
       alert("updated successfully");
        sessionStorage.setItem("username",this.regname);
        this.router.navigate(['/account'])});
    }else{
      return alert("Enter valid details");
    }
   }

  ngOnInit() {
    this.id = Number(sessionStorage.getItem("userid"));
    this.ser.getAllUsernames().subscribe((responce:any)=>{this.names=responce;console.log(responce)});
    this.ser.getUser(this.id).subscribe((responce)=>this.user=responce);
    console.log("USER DETAILS GOT")
    //this.ser.getAllUsers().subscribe((responce)=>this.userlist=responce);
  }

}
