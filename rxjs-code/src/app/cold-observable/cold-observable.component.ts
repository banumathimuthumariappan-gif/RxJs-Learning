import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cold-observable',
  imports: [],
  templateUrl: './cold-observable.component.html',
  styleUrl: './cold-observable.component.css',
})
export class ColdObservableComponent implements OnInit {
  userData: any = [];
  constructor(private http: HttpClient) {}

  ngOnInit() {
    const observable$ = this.http.get(
      'https://jsonplaceholder.typicode.com/users/1'
    );

    console.log('Observable Subscription 1...');

    observable$.subscribe({
      next: (data) => {
        this.userData = data;
        console.log(this.userData.name);
      },
    });

    console.log('Observable Subscription 1...');
    setTimeout(() => {
      observable$.subscribe({
        next: (data) => {
          this.userData = data;
          console.log(this.userData.name);
        },
      });
    }, 2000);

    console.log('Observable Subscription 1...');
    setTimeout(() => {
      observable$.subscribe({
        next: (data) => {
          this.userData = data;
          console.log(this.userData.name);
        },
      });
    }, 4000);
  }
}
