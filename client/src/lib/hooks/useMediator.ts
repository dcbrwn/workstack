import { Immutable } from "immer";
import { Context } from "preact";
import { useContext } from "preact/hooks";
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

  const [state$, put] = context;

  return [observe(state$), put];
}
