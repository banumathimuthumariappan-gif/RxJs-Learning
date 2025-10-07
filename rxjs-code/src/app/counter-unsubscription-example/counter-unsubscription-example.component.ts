import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-counter-unsubscription-example',
  imports: [],
  templateUrl: './counter-unsubscription-example.component.html',
  styleUrl: './counter-unsubscription-example.component.css',
})
export class CounterUnsubscriptionExampleComponent implements OnInit {
  observable$ = new Observable<number>((subscriber) => {
    let counter = 1;
    const interval = setInterval(() => {
      subscriber.next(counter++);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  });

  ngOnInit() {
    const obs = this.observable$.subscribe({
      next: (value) => console.log(value),
    });

    setTimeout(() => {
      console.log('Unsubscribed!!!');

      obs.unsubscribe();
    }, 10000);
  }
}
