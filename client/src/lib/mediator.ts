import { Immutable } from "immer";
import { Observable, Subject } from "rxjs";

export type Mediator<Actions, State> = [
  Observable<Immutable<State>>,
  (action: Actions) => void,
  () => Immutable<State>
];

export function createMediator<Actions, State>(
  mediator: (actions$: Observable<Actions>) => Observable<Immutable<State>>
): Mediator<Actions, State> {
  let put: (input: Actions) => void;
  let currentState: Immutable<State>;

  const output$ = new Subject<Immutable<State>>();

  new Observable<Actions>((subscriber) => {
    put = subscriber.next.bind(subscriber);
  }).pipe(mediator).subscribe((nextValue) => {
    currentState = nextValue;
    output$.next(nextValue);
  });

  return [output$, put!, () => currentState];
}
