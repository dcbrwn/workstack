import { Task, TaskStatus } from "workstack-common";
import { createMediator, Mediator } from "../../../lib/mediator";
import { reducer } from "../../../lib/operators/reducer";
import { CreateTask, RemoveTask, DashboardActions, DashboardState, UpdateTask } from "./definitions";

export function createDashboardMediator(): Mediator<DashboardActions, DashboardState> {
  return createMediator((actions$) => {
    return actions$.pipe(
      reducer((state: DashboardState, action: DashboardActions) => {
        if (action instanceof CreateTask) {
          state.tasks.push({
            id: Math.random().toString(16).slice(2),
            events: [],
            state: {
              summary: "Dem task!",
              createdAt: Date.now(),
              status: TaskStatus.PAUSED,
              timeInProgress: 0,
              timeTotal: 0,
            }
          });
        } else if (action instanceof UpdateTask) {
          const task = state.tasks.find((task) => task.id === action.id);
          if (task) Object.assign(task, action.patch);
        } else if (action instanceof RemoveTask) {
          state.tasks = state.tasks.filter((task) => task.id !== action.id);
        }
      }, { tasks: [], selectedTask: null })
    );
  });
}
