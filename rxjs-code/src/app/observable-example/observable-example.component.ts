import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-observable-example',
  imports: [],
  templateUrl: './observable-example.component.html',
  styleUrl: './observable-example.component.css',
})
export class ObservableExampleComponent implements OnInit {
  observable$ = new Observable<string>((subscriber) => {
    console.log('Observable starts...');

    subscriber.next('Alice');

    setTimeout(() => {
      subscriber.next('Ben');
    }, 2000);

    setTimeout(() => {
      subscriber.next('Charlie');
    }, 4000);
  });

  ngOnInit() {
    const observer = this.observable$.subscribe({
      next: (value: string) => console.log(value),
    });

    setTimeout(() => {
      observer.unsubscribe();
      console.log("Unsubscribed");
      
    }, 3000);
  }
  
}
