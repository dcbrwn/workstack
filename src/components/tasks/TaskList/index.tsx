import { h, Fragment } from "preact";
import { useState } from "preact/hooks";
import { useMediator } from "../../../lib/hooks/useMediator";
import { TaskId } from "../../../models/Task";
import { TaskListItem } from "../TaskListItem";
import { CreateTask, RemoveTask, TasksContext } from "../TasksBlock/context";
import styles from "./styles.module.css";
import regularButtons from "../../../styles/buttons/regular.module.css";
import { classes } from "../../../lib/classes";

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
            ? <button class={regularButtons.button} onClick={() => editTask(null)}>Commit</button>
            : <button class={regularButtons.button} onClick={() => editTask(task.id)}>Edit</button>
          }

          <button class={classes(regularButtons.button, regularButtons.negative)} onClick={() => put(new RemoveTask(task.id))}>Terminate</button>
        </li>
      })}
    </ul>

    <button class={regularButtons.button} onClick={() => put(new CreateTask())}>Create task</button>
  </>
}
