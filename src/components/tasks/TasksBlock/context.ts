import { createContext } from "preact";
import { Mediator } from "../../../lib/mediator";
import { Task, TaskId } from "../../../models/Task";

export type TasksBlockState = {
  tasks: Task[];
}

export class CreateTask {}

export class RemoveTask {
  constructor(
    public readonly id: TaskId,
  ) {}
}

export class UpdateTask {
  constructor(
    public readonly id: TaskId,
    public readonly patch: Partial<Task>,
  ) {}
}

export type TasksBlockActions = CreateTask | RemoveTask | UpdateTask;

export const TasksContext = createContext<Mediator<TasksBlockActions, TasksBlockState> | undefined>(undefined);
