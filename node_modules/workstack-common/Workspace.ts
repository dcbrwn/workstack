import { Task } from "./Task";

export type WorkspaceId = string;

export type Workspace = {
  id: WorkspaceId;
  tasks: Task[];
}
