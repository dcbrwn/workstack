import { h, Fragment } from "preact";
import { useState } from "preact/hooks";
import { useMediator } from "../../../lib/hooks/useMediator";
import { TaskId } from "../../../models/Task";
import { TaskListItem } from "../TaskListItem";
import { CreateTask, RemoveTask, TasksContext } from "../TasksBlock/context";
import styles from "./styles.module.css";

export function TaskList() {
  const [currentlyEditedTask, editTask] = useState<TaskId | null>(null);
  const [state, put] = useMediator(TasksContext)!;

  return <>
    <ul class={styles.list}>
      {state?.tasks?.map((task) => {
        const isEditor = task.id === currentlyEditedTask;

        return <li>
          <TaskListItem
            key={task.id}
            task={task}
            isEditor={isEditor}
          />

          {isEditor
            ? <button onClick={() => editTask(null)}>Save</button>
            : <button onClick={() => editTask(task.id)}>Edit</button>
          }

          <button onClick={() => put(new RemoveTask(task.id))}>Remove</button>
        </li>
      })}
    </ul>

    <button class={styles.button} onClick={() => put(new CreateTask())}>Create task</button>
  </>
}
