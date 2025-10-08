import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { from, map } from 'rxjs';

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
}

@Component({
  selector: 'app-map-operator',
  imports: [],
  templateUrl: './map-operator.component.html',
  styleUrl: './map-operator.component.css',
})
export class MapOperatorComponent implements OnInit {
  constructor(private http: HttpClient) {}

  numbers$ = from([1, 2, 3, 4, 5]);

  ngOnInit() {
    // Simple Example
    this.numbers$.pipe(map((num) => num * 10)).subscribe({
      next: (value) => {
        console.log('Value ' + value);
      },
      error: (error) => {
        console.log(error);
      },
    });

    // Another Example
    const username$ = this.http.get<User>(
      'https://jsonplaceholder.typicode.com/users/1'
    );
    const email$ = this.http.get<User>(
      'https://jsonplaceholder.typicode.com/users/1'
    );
    const name$ = this.http.get<User>(
      'https://jsonplaceholder.typicode.com/users/1'
    );

    username$.pipe(map((response) => response.username)).subscribe({
      next: (value) => {
        console.log('username is: ' + value);
      },
    });

    email$.pipe(map((response) => response.email)).subscribe({
      next: (value) => {
        console.log('Email is: ' + value);
      },
    });

    name$.pipe(map((response) => response.name)).subscribe({
      next: (value) => {
        console.log('Name is: ' + value);
      },
    });
  }
}
