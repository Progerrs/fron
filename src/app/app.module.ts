import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import {AppRoutingModuls} from "./app-routing.moduls";
import { MainPageComponent } from './main-page/main-page.component';
import { CreatePageComponent } from './create-page/create-page.component';
import { UpdatePageComponent } from './update-page/update-page.component';




@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    CreatePageComponent,
    UpdatePageComponent,
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
