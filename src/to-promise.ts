import { Observable, Subscriber } from 'rxjs';

const obs = new Observable((subscriber: Subscriber<number>) => {
  subscriber.next(1);
  subscriber.complete();
});

obs.subscribe(console.log);
