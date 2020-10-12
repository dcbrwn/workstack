import { Timestamp } from "./definitions";

export enum TaskEventType {
  CREATED,
  STARTED,
  PAUSED,
  FINISHED,
  COMMENT,
  COMMENT_UPDATED,
};

export type BaseTaskEvent<T> = {
  type: T,
  createdAt: Timestamp,
};

export type TaskCreatedEvent = BaseTaskEvent<TaskEventType.CREATED> & {
  summary: string;
};

export type TaskStartedEvent = BaseTaskEvent<TaskEventType.STARTED>;

export type TaskPausedEvent = BaseTaskEvent<TaskEventType.PAUSED>;

export type TaskFinishedEvent = BaseTaskEvent<TaskEventType.FINISHED>;

export type TaskCommentEvent = BaseTaskEvent<TaskEventType.COMMENT> & {
  message: string;
};

export type COMMENT_UPDATED = BaseTaskEvent<TaskEventType.COMMENT_UPDATED> & {
  message: string;
};

export type TaskEvent =
  | TaskCreatedEvent
  | TaskStartedEvent
  | TaskPausedEvent
  | TaskFinishedEvent
  | TaskCommentEvent;
