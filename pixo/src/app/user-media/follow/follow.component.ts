import { Component, OnInit } from '@angular/core';
import { UserAuthService } from 'src/app/services/authenications/user-auth.service';

@Component({
  selector: 'app-follow',
  templateUrl: './follow.component.html',
  styleUrls: ['./follow.component.css']
})
export class FollowComponent implements OnInit {
  username : string;
  constructor(public auth : UserAuthService) { }

  ngOnInit() {
    let str=this.auth.getUserDetails();
    let pos = str.indexOf('@');

    this.username = str.substring(0,pos);
  }

}
