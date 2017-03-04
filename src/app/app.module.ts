import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { AngularFireModule } from 'angularfire2';

// Must export the config
export const firebaseConfig = {
    apiKey: "AIzaSyAuUM-73VyykFzJb_cyb6xJbj5J-lmzBoc",
    authDomain: "ambient-34c45.firebaseapp.com",
    databaseURL: "https://ambient-34c45.firebaseio.com",
    storageBucket: "ambient-34c45.appspot.com",
    messagingSenderId: "221338218466"
};


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(firebaseConfig),
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
