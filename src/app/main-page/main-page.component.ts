import {Component, createComponent, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

interface TemplateUser {
  id: number
  first_name: string
  last_name: string
  birth_day: string
  gender: string
  years: number
}

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit{
  userUrl: string = '/api/'
  public deleteStatus = 'Error'
  public users: TemplateUser[] = []
  constructor(private httpClient: HttpClient) {}

  public LoadUsers(): Observable<TemplateUser[]> {
    return this.httpClient
      .get<TemplateUser[]>(this.userUrl)
  }

  ngOnInit() {
    this.LoadUsers().subscribe(res => {
      this.users = res;
    })
  }

  Delete(IdUser: number, firstName: string, lastName: string){
    if(confirm("Are you sure to delete this user: " + firstName + " " +  lastName + "?")) {
      const url = `${this.userUrl}delete` // DELETE api/delete/
      this.httpClient.post(url, {id: IdUser}).subscribe()
      this.LoadUsers().subscribe(res => {
        this.users = res;
      })
    }
  }

}
