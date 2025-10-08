import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {
  combineLatest,
  forkJoin,
  from,
  fromEvent,
  interval,
  Observable,
  of,
  subscribeOn,
  take,
  timer,
} from 'rxjs';

@Component({
  selector: 'app-creation-functions',
  imports: [],
  templateUrl: './creation-functions.component.html',
  styleUrl: './creation-functions.component.css',
})
export class CreationFunctionsComponent implements OnInit {
  constructor(private http: HttpClient) {}

  user1Data: any = [];
  user2Data: any = [];
  user3Data: any = [];

  ngOnInit() {
    // of
    console.log('-----Of-----');
    const observable = of('Alice', 'Ben', 'Charlie');
    observable.subscribe({
      next: (value) => console.log(value),
      complete: () => console.log('Of Subscription completed'),
    });

    // --------------
    // Array to Observable
    console.log('-----From-----');
    const fromObservable = from(['Siva', 'Sakthi', 'Mohan']);
    fromObservable.subscribe({
      next: (value) => console.log(value),
      complete: () => console.log('From subscription completed'),
    });

    // --------------
    // Promise to Observable
    console.log('-----Promise to observable-----');

    const promise = new Promise((resolve, reject) => {
      // resolve('Promise resolved!!!');
      // reject(new Error('Promise Rejected'));
    });

    const obsFromPromise$ = from(promise);
    obsFromPromise$.subscribe({
      next: (value) => console.log(value),
      error: (error) => console.log(error.message),
      complete: () => console.log('Promise Completed'),
    });

    // --------------
    // fromEvent - Mouse click event
    const triggerButton = document.getElementById('trigger');

    if (triggerButton) {
      fromEvent<MouseEvent>(triggerButton, 'click').subscribe({
        next: (event) => console.log(event.type, event.x, event.y),
      });
    }

    // ---------------
    // timer function
    console.log('App started');

    timer(2000).subscribe({
      next: (value) => console.log(value),
      complete: () => {
        console.log('Timer subscription completed');
      },
    });

    // ------------------
    // interval function
    interval(1000).subscribe({
      next: (value) => {
        // console.log("Interval: " + value);
      },
      complete: () => {
        console.log('Intervel subscription completed');
      },
    });

    // -----------------
    // forkJoin function
    const user1$ = this.http.get(
      'https://jsonplaceholder.typicode.com/users/1'
    );
    const user2$ = this.http.get(
      'https://jsonplaceholder.typicode.com/users/2'
    );
    const user3$ = this.http.get(
      'https://jsonplaceholder.typicode.com/users/3'
    );

    forkJoin([user1$, user2$, user3$]).subscribe({
      next: ([user1, user2, user3]) => {
        this.user1Data = user1;
        this.user2Data = user2;
        this.user3Data = user3;

        console.log('User 1: ' + this.user1Data.username);
        console.log('User 2: ' + this.user2Data.username);
        console.log('User 3: ' + this.user3Data.username);
      },
      complete: () => {
        console.log('Forkjoin completed');
      },
    });

    // ---------------------
    // ForkJoin - No Error scenario
    const a$ = new Observable((subscriber) => {
      setTimeout(() => {
        subscriber.next('Observable A emitted');
        subscriber.complete();
      }, 5000);
    });

    const b$ = new Observable((subscriber) => {
      setTimeout(() => {
        subscriber.next('Observable B emitted');
        subscriber.complete();
      }, 3000);
    });

    forkJoin([a$, b$]).subscribe({
      next: ([a, b]) => {
        console.log('ForkJoin Emitted ');
        console.log('Value of a: ' + a);
        console.log('Value of b: ' + b);
      },
    });

    // ---------------------
    // ForkJoin - Error scenario
    const aa$ = new Observable((subscriber) => {
      setTimeout(() => {
        subscriber.next('Observable A emitted');
        subscriber.complete();
      }, 5000);
    });

    const bb$ = new Observable((subscriber) => {
      setTimeout(() => {
        subscriber.error('Observable B error');
      }, 3000);
    });

    forkJoin([aa$, bb$]).subscribe({
      next: ([aa, bb]) => {
        console.log('ForkJoin Emitted ');
        console.log('Value of aa: ' + aa);
        console.log('Value of bb: ' + bb);
      },
    });

    // --------------
    // combineLatest function
    const timer1$ = interval(1000).pipe(take(3));
    const timer2$ = interval(2000).pipe(take(2));

    combineLatest([timer1$, timer2$]).subscribe({
      next: ([timer1$, timer2$]) => {
        console.log(`Timer 1: ${timer1$}, Timer 2: ${timer2$}`);
      },
    });
  }
}
