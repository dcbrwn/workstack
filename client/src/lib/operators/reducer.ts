import { Immutable, produce } from "immer";
import { Observable } from "rxjs";
import { scan, startWith } from "rxjs/operators";

export function reducer<Actions, State>(
  reducer: (state: State, action: Actions | undefined) => void,
  initial: Immutable<State>
): (observable: Observable<Actions>) => Observable<Immutable<State>> {
  return (observable: Observable<Actions>) => observable.pipe(
    scan<Actions | undefined, Immutable<State>>(produce(reducer), initial),
    startWith(initial),
  );
}
