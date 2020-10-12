import React from "react";
import { Immutable } from "immer";
import { Task } from "workstack-common";
import tasklistStyles from "./styles.module.scss";

export function TaskList(inputs: {
  tasks: Immutable<Task[]>,
}) {
  function renderTask(task: Immutable<Task>, index: number) {
    return <li className={tasklistStyles.task} key={task.id}>
      <span className={tasklistStyles.taskNumber}>{index.toString().padStart(2, "0")}.</span>
      {task.state.summary}
    </li>
  }

  return <ol className={tasklistStyles.tasklist}>
    {inputs.tasks.map(renderTask)}
  </ol>
}
