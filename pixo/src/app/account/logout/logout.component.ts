import { Component, OnInit } from '@angular/core';
import { UserAuthService } from 'src/app/services/authenications/user-auth.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(public auth : UserAuthService) { }

  ngOnInit() {
    this.auth.logout();
  }

}
