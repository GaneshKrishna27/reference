import { Component, OnInit } from '@angular/core';
import { UserAuthService } from 'src/app/services/authenications/user-auth.service';
import { Router } from '@angular/router';
import { FormGroup,FormControl,FormBuilder, Validators } from '@angular/forms';
import { User } from 'src/app/models/user.model';
import { UserserviceService } from 'src/app/services/DataServices/userservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginid:string;
  loginpwd:string;
  submitted = false;
  errtext : string ;
  authorized : boolean;
  myFormGroup : FormGroup;
  userlist : Array<User>;
  constructor(public auth:UserAuthService,public router : Router,public formbuilder: FormBuilder,public ser : UserserviceService) { 
    this.errtext = "Invalid Credentials...";
    this.authorized = true;
    this.myFormGroup=formbuilder.group({
      "userid" : new FormControl("",[Validators.required,Validators.pattern('^[A-Za-z0-9]{3,10}$')]),
      "userpwd" : new FormControl("", [Validators.required,Validators.minLength(6),Validators.maxLength(10)])
    });
  console.log("Inside constructor")
  }

  get f(){
    return this.myFormGroup.controls;
  }

  login(){
    this.loginid = this.myFormGroup.controls['userid'].value;
    this.loginpwd = this.myFormGroup.controls['userpwd'].value;
    this.submitted = true;
    this.auth.authenticate(this.loginid, this.loginpwd).subscribe(
      // success function
      successData=>{
        console.log("SUCCESS !!!")
        this.authorized = true
        this.router.navigate(['/gallery'])
        console.log("alredy called the gallery")
      },
      // failure function
      failureData => {
        console.log("FAILED!!!");
        this.authorized = false;
      }
    );
  }

  ngOnInit() {

  }

}
