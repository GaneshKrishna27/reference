import { BrowserModule } from '@angular/platform-browser';
import { NgModule, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule, } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './user-auth/login/login.component';
import { UserAuthService } from './services/authenications/user-auth.service';
import { RegisterComponent } from './user-auth/register/register.component';
import { AppHeaderComponent } from './headers/app-header/app-header.component';
import { UserHeaderComponent } from './headers/user-header/user-header.component';
import { UploadComponent } from './user-media/upload/upload.component';
import { GalleryComponent } from './user-media/gallery/gallery.component';
import { FollowComponent } from './user-media/follow/follow.component';
import { AccountsComponent } from './account/accounts/accounts.component';
import { LogoutComponent } from './account/logout/logout.component';
import { AccountUpdateComponent } from './account/account-update/account-update.component';
import { SearchComponent } from './account/search/search.component';
import { NewsfeedComponent } from './account/newsfeed/newsfeed.component';
import { BlockedComponent } from './account/blocked/blocked.component';
import { UploadMultipleComponent } from './user-media/upload-multiple/upload-multiple.component';
import { MediaDetailsComponent } from './user-media/media-details/media-details.component';
import { ErrorComponentComponent } from './error-component/error-component.component';
import { SearchResultComponent } from './account/search-result/search-result.component';
import { ImagesComponent } from './user-media/images/images.component';
import { VideosComponent } from './user-media/videos/videos.component';
import { FollowingComponent } from './user-media/following/following.component';
import { FollowersComponent } from './user-media/followers/followers.component';
import { HttpInterceptorService } from './services/http-intercept/http-interceptor.service';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    AppHeaderComponent,
    UserHeaderComponent,
    UploadComponent,
    GalleryComponent,
    FollowComponent,
    AccountsComponent,
    LogoutComponent,
    AccountUpdateComponent,
    SearchComponent,
    NewsfeedComponent,
    BlockedComponent,
    UploadMultipleComponent,
    MediaDetailsComponent,
    SearchResultComponent,
    ErrorComponentComponent,
    ImagesComponent,
    VideosComponent,
    FollowingComponent,
    FollowersComponent
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule  {
  
  
}
