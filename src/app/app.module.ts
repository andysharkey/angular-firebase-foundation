import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { AngularFireModule } from 'angularfire2';
import { ApiplaygroundComponent } from './apiplayground/apiplayground.component';
import { HomeComponent } from './home/home.component';
import { firebaseConfig } from "../environments/firebase.config";
import { LessonsService } from './shared/model/lessons.service';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';

@NgModule({
  declarations: [
    AppComponent,
    ApiplaygroundComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(firebaseConfig),
    FormsModule,
    HttpModule
  ],
  providers: [LessonsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
