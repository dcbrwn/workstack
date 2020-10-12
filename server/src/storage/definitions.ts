import { Task, TaskId, WorkspaceId } from "../../../common";

export type Storage = {
  upsertTask: (task: Task) => Promise<void>,
  removeTask: (taskId: TaskId) => Promise<void>,

  getWorkspaceTasks: (workspaceId: WorkspaceId) => Promise<Task[]>,
};
