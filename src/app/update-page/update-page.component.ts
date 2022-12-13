import {Component, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {HttpClient} from "@angular/common/http";
import {toNumbers} from "@angular/compiler-cli/src/version_helpers";
import { Router } from '@angular/router'

@Component({
  selector: 'app-update-page',
  templateUrl: './update-page.component.html',
  styleUrls: ['./update-page.component.css']
})
export class UpdatePageComponent implements OnInit {
  // @ts-ignore
  public id: number;

  public first_name = ''
  public last_name = ''
  public birth_day = ''
  public year = ''
  public month = ''
  public day = ''
  public gender = ''
  userUrl: string = '/api/'

  constructor(private route: ActivatedRoute, private httpClient: HttpClient, private router: Router) {}
  ngOnInit() {
    // @ts-ignore
    this.id = this.route.snapshot.paramMap.get('id');
    console.log(this.id)
    }
  UpdateUser() {
    const url = `${this.userUrl}update` // Update api/delete/
    this.httpClient.post(url,{gender: this.gender, first_name: this.first_name,
      last_name: this.last_name, birth_day: this.year + '-' + this.month + '-' + this.day, id: this.id}).subscribe(
    )
    confirm("you have successfully update a user: " + this.first_name + " " +  this.last_name + "!")
    this.router.navigate([''])
  }
}



