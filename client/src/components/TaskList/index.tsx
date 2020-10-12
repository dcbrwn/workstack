import { Immutable } from "immer";
import { h } from "preact";
import { Task } from "workstack-common";
import tasklistStyles from "./styles.module.scss";

export function TaskList(inputs: {
  tasks: Immutable<Task[]>,
}) {
  function renderTask(task: Immutable<Task>, index: number) {
    return <li class={tasklistStyles.task}>
      <span class={tasklistStyles.taskNumber}>{index.toString().padStart(2, "0")}.</span>
      {task.state.summary}
    </li>
  }

  return <ol class={tasklistStyles.tasklist}>
    {inputs.tasks.map(renderTask)}
  </ol>
}
