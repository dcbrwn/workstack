import { Timestamp, TimestampDiff } from "./definitions";
import { TaskEvent } from "./TaskEvent";

export type TaskId = string;

export enum TaskStatus {
  PAUSED,
  IN_PROGRESS,
  DONE,
};

export type TaskState = {
  status: TaskStatus;
  createdAt: Timestamp;
  timeInProgress: TimestampDiff;
  timeTotal: TimestampDiff;
};

export type Task = {
  id: TaskId;

  // Assume it's always sorted by TaskEvent.createdAt
  events: TaskEvent[];

  // Derived from events
  state: TaskState;
};