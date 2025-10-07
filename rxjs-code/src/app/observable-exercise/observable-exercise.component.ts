import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-observable-exercise',
  imports: [],
  templateUrl: './observable-exercise.component.html',
  styleUrl: './observable-exercise.component.css',
})
export class ObservableExerciseComponent implements OnInit {
  observable$ = new Observable<string>((subscriber) => {
    subscriber.next('Alice');

    setTimeout(() => {
      subscriber.next('Ben');
    }, 2000);

    setTimeout(() => {
      subscriber.next('Charlie');
    }, 4000);

    setTimeout(() => {
      subscriber.complete();
    }, 6000);

    // setTimeout(() => {
    //   subscriber.error(new Error("Failure"));
    // }, 6000);

    return () => {
      console.log('Tear down');
    };
  });

  ngOnInit() {
    this.observable$.subscribe({
      next: (value) => console.log(value),
      error: (error) => console.log('ERROR: ' + error.message),
      complete: () => console.log('Subscription completed'),
    });
  }
}
