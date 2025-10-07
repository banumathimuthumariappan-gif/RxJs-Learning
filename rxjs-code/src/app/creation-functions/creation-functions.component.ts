import { Component, OnInit } from '@angular/core';
import { from, of } from 'rxjs';

@Component({
  selector: 'app-creation-functions',
  imports: [],
  templateUrl: './creation-functions.component.html',
  styleUrl: './creation-functions.component.css',
})
export class CreationFunctionsComponent implements OnInit {
  ngOnInit() {
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
      reject(new Error('Promise Rejected'));
    });

    const obsFromPromise$ = from(promise);
    obsFromPromise$.subscribe({
      next: (value) => console.log(value),
      error: (error) => console.log(error.message),
      complete: () => console.log('Promise Completed'),
    });
  }
}
