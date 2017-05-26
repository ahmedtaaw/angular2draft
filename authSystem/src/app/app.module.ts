import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import {AngularFireModule} from 'angularfire2';
// New imports to update based on AngularFire2 version 4
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { AppComponent } from './app.component';




//to save the information in the fire properties (interface)
export const firebaseConfig={
  apiKey: "AIzaSyDm1DJFL5FPlS5IdTwx5wpMvK2XIVKtHPM",
    authDomain: "authsystem-71e83.firebaseapp.com",
    databaseURL: "https://authsystem-71e83.firebaseio.com",
    projectId: "authsystem-71e83",
    storageBucket: "authsystem-71e83.appspot.com",
    messagingSenderId: "749781072010"
}


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
