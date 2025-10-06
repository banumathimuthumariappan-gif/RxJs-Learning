const { Observable } = require("rxjs");

const observable$ = new Observable((subscriber) => {
  console.log("Observable starts");
  subscriber.next("Alice");
  setTimeout(() => subscriber.next("Ben"), 2000);
  setTimeout(() => {
    subscriber.next("Charlie");
  }, 4000);
});

const observer = observable$.subscribe({
  next: (value) => console.log(value),
});

setTimeout(() => {
  observer.unsubscribe();
  console.log("Unsubscribed");
}, 3000);
