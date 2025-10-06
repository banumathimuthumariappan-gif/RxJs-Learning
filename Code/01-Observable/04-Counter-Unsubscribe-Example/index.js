const { Observable } = require("rxjs");

const observable$ = new Observable((subscriber) => {
  let counter = 1;

  const intervalId = setInterval(() => {
    console.log(`Emitted ` + counter);

    subscriber.next(counter++);
  }, 1000);

  return () => {
    console.log("Tear down");
    clearInterval(intervalId);
  };
});

const observer = observable$.subscribe({
  next: (value) => console.log(value),
});

setTimeout(() => {
  console.log("Unsubscribed");
  observer.unsubscribe();
}, 10000);
