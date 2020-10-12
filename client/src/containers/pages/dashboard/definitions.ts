import { createContext } from "react";
import { Task, TaskId } from "workstack-common";
import { Mediator } from "../../../lib/mediator";

export type DashboardState = {
  tasks: Task[];
  selectedTask: TaskId | null;
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

export class SelectTask {
  constructor(
    public readonly id: TaskId,
  ) {}
}

export type DashboardActions = CreateTask | RemoveTask | UpdateTask | SelectTask;

export const DashboardContext = createContext<Mediator<DashboardActions, DashboardState> | undefined>(undefined);
