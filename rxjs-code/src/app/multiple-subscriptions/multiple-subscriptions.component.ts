import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-multiple-subscriptions',
  imports: [],
  templateUrl: './multiple-subscriptions.component.html',
  styleUrl: './multiple-subscriptions.component.css',
})
export class MultipleSubscriptionsComponent implements OnInit {
  observable$ = new Observable<string>((subscriber) => {
    subscriber.next('Alice');
    setTimeout(() => {
      subscriber.next('Ben');
    }, 2000);
    setTimeout(() => {
      subscriber.next('Charlie');
    }, 4000);
  });

  ngOnInit() {
    console.log('Subscription 1 Starts...');
    this.observable$.subscribe({
      next: (value) => console.log(value),
    });

    console.log('Subscription 2 Starts...');
    setTimeout(() => {
      this.observable$.subscribe({
        next: (value) => console.log(value),
      });
    }, 1000);
  }
}
