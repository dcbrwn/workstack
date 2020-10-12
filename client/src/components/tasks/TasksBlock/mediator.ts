import { createMediator, Mediator } from "../../../lib/mediator";
import { reducer } from "../../../lib/operators/reducer";
import { createEmptyTask } from "../../../models/Task";
import { CreateTask, RemoveTask, TasksBlockActions, TasksBlockState, UpdateTask } from "./context";

export function createTasksBlockMediator(): Mediator<TasksBlockActions, TasksBlockState> {
  return createMediator((actions$) => {
    return actions$.pipe(
      reducer((state: TasksBlockState, action: TasksBlockActions) => {
        if (action instanceof CreateTask) {
          state.tasks.push(createEmptyTask());
        } else if (action instanceof UpdateTask) {
          const task = state.tasks.find((task) => task.id === action.id);
          Object.assign(task, action.patch);
        } else if (action instanceof RemoveTask) {
          state.tasks = state.tasks.filter((task) => task.id !== action.id);
        }
      }, { tasks: [] })
    );
  });
}
