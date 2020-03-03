import { Component } from '@angular/core';
import { UserAuthService } from './services/authenications/user-auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'router-base-app';
  constructor(public auth : UserAuthService){
    
  }
}
