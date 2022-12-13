import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http";


@Component({
  selector: 'app-create-page',
  templateUrl: './create-page.component.html',
  styleUrls: ['./create-page.component.css']
})

export class CreatePageComponent{
  public first_name = ''
  public last_name = ''
  public birth_day = ''
  public year = ''
  public month = ''
  public day = ''
  public gender = ''
  userUrl: string = '/api/'

  constructor(private httpClient: HttpClient) {}
  CreateUser() {
    const url = `${this.userUrl}users` // INSERT api/delete/
    this.httpClient.post(url,{gender: this.gender, first_name: this.first_name,
      last_name: this.last_name, birth_day: this.year + '-' + this.month + '-' + this.day}).subscribe(
    )
    confirm("you have successfully added a user: " + this.first_name + " " +  this.last_name + "!")
    this.first_name = ''
    this.last_name = ''
    this.birth_day = ''
    this.gender = ''
    this.year = ''
    this.month = ''
    this.day = ''
  }
}
