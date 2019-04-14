import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './Home.component.html',
  styleUrls: ['./Home.component.css']
})
export class HomeComponent implements OnInit {

  registerMode = false; values: any;


  constructor( private http: HttpClient) { }


  ngOnInit() {
   this.getValues();
  }

  getValues() {
    this.http.get('http://localhost:5000/api/values').subscribe(response => {
      this.values = response;
      console.log(response);
    }, error => {
      console.log(error);
    });
  }
  registerToggle() {
    this.registerMode = !this.registerMode;
  }

}
