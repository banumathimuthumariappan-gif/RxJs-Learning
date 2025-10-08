import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { from, map, tap } from 'rxjs';

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
}

@Component({
  selector: 'app-tap-operator',
  imports: [],
  templateUrl: './tap-operator.component.html',
  styleUrl: './tap-operator.component.css',
})
export class TapOperatorComponent implements OnInit {
  constructor(private http: HttpClient) {}

  numbers$ = from([1, 2, 3, 4, 5, 6]);

  ngOnInit() {
    this.numbers$
      .pipe(
        tap((value) => console.log('Before map: ' + value)),
        map((value) => value * 10),
        tap((value) => console.log('After map: ' + value))
      )
      .subscribe({
        next: (value) => {
          console.log('Value: ' + value);
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

    username$
      .pipe(
        tap((value) => console.log('Before map: ' + value)),
        map((response) => response.username),
        tap((value) => console.log('After map: ' + value)),
      )
      .subscribe({
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
