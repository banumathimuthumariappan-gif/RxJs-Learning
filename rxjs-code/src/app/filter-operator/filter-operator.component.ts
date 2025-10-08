import { Component, OnInit } from '@angular/core';
import { filter, from, Observable } from 'rxjs';

interface NewsItem {
  category: 'Business' | 'Sports';
  content: string;
}

@Component({
  selector: 'app-filter-operator',
  imports: [],
  templateUrl: './filter-operator.component.html',
  styleUrl: './filter-operator.component.css',
})
export class FilterOperatorComponent implements OnInit {
  numbers$ = from([1, 2, 3, 4, 5, 6]);
  newsFeed$ = new Observable<NewsItem>((subscriber) => {
    subscriber.next({ category: 'Business', content: 'This is business 1' });
    subscriber.next({ category: 'Sports', content: 'This is Sports 1' });
    subscriber.next({ category: 'Sports', content: 'This is Sports 2' });
    subscriber.next({ category: 'Sports', content: 'This is Sports 3' });
    subscriber.next({ category: 'Business', content: 'This is business 2' });
    subscriber.next({ category: 'Sports', content: 'This is Sports 4' });
  });

  ngOnInit() {
    // Simple Example
    this.numbers$.pipe(filter((num) => num % 2 == 0)).subscribe({
      next: (value) => {
        console.log('Value: ' + value);
      },
      error: (error) => {
        console.log(error);
      },
    });

    // Another Example
    this.newsFeed$
      .pipe(filter((item) => item.category === 'Sports'))
      .subscribe({
        next: (value) => {
          console.log(
            'News feed example: ' +
              value.category +
              ' and this is ' +
              value.content
          );
        },
      });
  }
}
