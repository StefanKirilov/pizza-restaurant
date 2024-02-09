import { Component, OnInit } from '@angular/core';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {

  // ERROR_KEY = '[error]';
  // error: string | undefined;
  // err: string | undefined;

  constructor(private apiService: ApiService) {
    // this.err = (localStorage.getItem(this.ERROR_KEY) || '');  
    // if (this.err){
    //     this.error = JSON.parse(this.err);
    // }
  }

  ngOnInit(): void {

  }

  // ok(): void {
  //   localStorage.removeItem(this.ERROR_KEY);
  // }
}
