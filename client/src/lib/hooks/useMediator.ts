import { Immutable } from "immer";
import { Context, useContext, useMemo } from "react";
import { startWith } from "rxjs/operators";
import { Mediator } from "../mediator";
import { observe } from "./observe";

export function useMediator<Actions, State>(contextName: Context<Mediator<Actions, State> | undefined>): [
  Immutable<State>,
  (action: Actions) => void,
] | undefined {
  const context = useContext(contextName);

  if (!context) {
    return undefined;
  }

  const [state$, put, getCurrentState] = context;

  const instanceState$ = useMemo(() => {
    return state$.pipe(startWith(getCurrentState()));
  }, [state$]);

  return [
    observe(instanceState$),
    put,
  ];
}
