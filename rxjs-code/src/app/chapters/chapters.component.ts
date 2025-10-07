import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-chapters',
  imports: [RouterLink],
  templateUrl: './chapters.component.html',
  styleUrl: './chapters.component.css'
})
export class ChaptersComponent {
  observable$ = new Observable<string>((subscriber) => {
    console.log("Observable starts...");
    
    subscriber.next("Alice");
    subscriber.next("Ben");
    subscriber.next("Charlie");
  });
}
