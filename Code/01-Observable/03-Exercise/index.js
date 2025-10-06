const { Observable } = require("rxjs");

const observable$ = new Observable((subscriber) => {
  console.log("Observable starts...");
  subscriber.next("Alice");
  subscriber.next("Ben");
  setTimeout(() => {
    subscriber.next("Charlie");
    // subscriber.complete();
  }, 2000);

  setTimeout(() => {
    subscriber.error(new Error("FAILURE"));
  }, 4000);

  return () => {
    console.log("Tear down");
  };
});

console.log("Before subscription");

const observer = observable$.subscribe({
  next: (value) => console.log(value),
  complete: () => console.log("Subscription completed"),
  error: (error) => console.log(error.message),
});
console.log("After subscription");
