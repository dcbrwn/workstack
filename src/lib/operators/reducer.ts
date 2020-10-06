import { Immutable, produce } from "immer";
import { Observable } from "rxjs";
import { scan } from "rxjs/operators";

export function reducer<Actions, State>(
  reducer: (state: State, action: Actions) => void,
  initial: State
): (observable: Observable<Actions>) => Observable<Immutable<State>> {
  return (observable: Observable<Actions>) => observable.pipe(
    scan<Actions, Immutable<State>>(produce(reducer), initial as Immutable<State>)
  );
}
