import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import {AppRoutingModuls} from "./app-routing.moduls";
import { MainPageComponent } from './main-page/main-page.component';




@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModuls
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
