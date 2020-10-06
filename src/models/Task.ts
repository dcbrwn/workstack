import { createIdGenerator } from "../lib/id";

const getId = createIdGenerator();

export type TaskId = string;

export type Task = {
  id: TaskId;
  summary: string;
  isDone: boolean;
};

export function createEmptyTask(): Task {
  return {
    id: getId(),
    summary: "",
    isDone: false,
  };
}
