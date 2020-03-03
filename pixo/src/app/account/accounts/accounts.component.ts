import { Component, OnInit } from '@angular/core';
import { UserAuthService } from 'src/app/services/authenications/user-auth.service';

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.css']
})
export class AccountsComponent implements OnInit {
  username : string;
  constructor(public auth : UserAuthService) { }

  ngOnInit() {
    this.username = this.auth.getUserDetails();
    if (!localStorage.getItem('loaded')) { 
      localStorage.setItem('loaded', 'no reload') 
      location.reload() 
    } else {
      localStorage.removeItem('loaded') 
    }
    
  }
      

}
