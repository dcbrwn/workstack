import { h } from "preact";
import { TaskList } from "../TaskList";
import { TasksContext } from "./context";
import { createTasksBlockMediator } from "./mediator";

export function TasksBlock() {
  const mediator = createTasksBlockMediator();

  return <TasksContext.Provider value={mediator}>
    <TaskList></TaskList>
  </TasksContext.Provider>
}
