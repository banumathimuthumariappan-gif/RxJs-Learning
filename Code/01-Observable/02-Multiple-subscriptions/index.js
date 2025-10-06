const { Observable } = require("rxjs");

const observable$ = new Observable((subscriber) => {
  subscriber.next("Alice");
  setTimeout(() => subscriber.next("Ben"), 2000);
  setTimeout(() => {
    subscriber.next("Charlie");
  }, 4000);
});

console.log("Subscription 1 starts: ");
observable$.subscribe({
  next: (value) => console.log(value),
});

setTimeout(() => {
  console.log("Subscription 2 starts: ");
  observable$.subscribe({
    next: (value) => console.log(value),
  });
}, 1000);
