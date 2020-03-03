import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './user-auth/register/register.component';
import { LoginComponent } from './user-auth/login/login.component';
import { GalleryComponent } from './user-media/gallery/gallery.component';
import { UploadComponent } from './user-media/upload/upload.component';
import { FollowComponent } from './user-media/follow/follow.component';
import { AuthGuardService } from './services/authenications/auth-guard.service';
import { AccountsComponent } from './account/accounts/accounts.component';
import { LogoutComponent } from './account/logout/logout.component';
import { AccountUpdateComponent } from './account/account-update/account-update.component';
import { SearchComponent } from './account/search/search.component';
import { NewsfeedComponent } from './account/newsfeed/newsfeed.component';
import { BlockedComponent } from './account/blocked/blocked.component';
import { UploadMultipleComponent } from './user-media/upload-multiple/upload-multiple.component';
import { MediaDetailsComponent } from './user-media/media-details/media-details.component';
import { SearchResultComponent } from './account/search-result/search-result.component';
import { ImagesComponent } from './user-media/images/images.component';
import { VideosComponent } from './user-media/videos/videos.component';
import { FollowersComponent } from './user-media/followers/followers.component';
import { FollowingComponent } from './user-media/following/following.component';


const routes: Routes = [
  { path:"", redirectTo : "login", pathMatch: "full"},
  {path:"register",component:RegisterComponent},
  {path:"login",component:LoginComponent},
  { path:"gallery", component: GalleryComponent, canActivate : [AuthGuardService]},
  { path:"upload", component: UploadComponent, canActivate : [AuthGuardService]},
  { path:"upload-multiple", component: UploadMultipleComponent, canActivate : [AuthGuardService]},
  { path:"media-details/:mid", component: MediaDetailsComponent, canActivate : [AuthGuardService]},
  { path:"follow", component: FollowComponent, canActivate : [AuthGuardService]},
  { path:"account", component: AccountsComponent, canActivate : [AuthGuardService]},
  { path:"logout",component:LogoutComponent, canActivate : [AuthGuardService]},
  { path:"update-account",component:AccountUpdateComponent, canActivate : [AuthGuardService]},
  { path:"search",component:SearchComponent, canActivate : [AuthGuardService]},
  { path:"search-result/:searchtxt",component:SearchResultComponent, canActivate : [AuthGuardService]},
  { path:"newsfeed",component:NewsfeedComponent, canActivate : [AuthGuardService]},
  { path:"blocked",component:BlockedComponent, canActivate : [AuthGuardService]},
  { path:"images",component:ImagesComponent, canActivate : [AuthGuardService]},
  { path:"videos",component:VideosComponent, canActivate : [AuthGuardService]},
  { path:"following",component:FollowingComponent, canActivate : [AuthGuardService]},
  { path:"followers",component:FollowersComponent, canActivate : [AuthGuardService]},
  {path:"**",component:LoginComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
