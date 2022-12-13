import {Component, OnInit} from '@angular/core';
import { HttpClient } from '@angular/common/http'
import {catchError, Observable} from "rxjs";

interface TemplateUser{
  id:         number
  first_name: string
  last_name:  string
  birth_day:  string
  gender:     string
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  ngOnInit() {}

}
