import { Component, OnInit } from '@angular/core';
import { UserAuthService } from 'src/app/services/authenications/user-auth.service';

@Component({
  selector: 'app-user-header',
  templateUrl: './user-header.component.html',
  styleUrls: ['./user-header.component.css']
})
export class UserHeaderComponent implements OnInit {
  username : string;
  profileImg : string;
  constructor(public auth : UserAuthService) { }

  ngOnInit() {
    this.username=this.auth.getUserDetails();
    
  }

}
