import { Immutable } from "immer";
import { Observable, Subject } from "rxjs";

export type Mediator<Actions, State> = [
  Observable<Immutable<State>>,
  (action: Actions) => void
];

export function createMediator<Actions, State>(
  mediator: (actions$: Observable<Actions>) => Observable<Immutable<State>>
): Mediator<Actions, State> {
  let put: (input: Actions) => void;

  const output$ = new Subject<Immutable<State>>();

  new Observable<Actions>((subscriber) => {
    put = subscriber.next.bind(subscriber);
  }).pipe(mediator).subscribe(output$);

  return [output$, put!];
}
