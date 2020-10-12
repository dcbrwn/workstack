import { h } from "preact";
import { useMediator } from "../../lib/hooks/useMediator";
import { Task } from "../../models/Task";
import { TasksContext, UpdateTask } from "./TasksBlock/context";
import regularInputs from "../../styles/inputs/regular.module.scss";

type Inputs = {
  task: Task;
  isEditor: boolean;
};

export function TaskListItem(inputs: Inputs) {
  const [state, put] = useMediator(TasksContext)!;
  const task = inputs.task;

  const handleSummaryChanged = (event: Event) => {
    const target = (event.target as HTMLInputElement);

    put(new UpdateTask(task.id, {
      summary: target.value
    }))
  };

  return inputs.isEditor
    ? <input class={regularInputs.input} value={task.summary} onChange={handleSummaryChanged}/>
    : <span>{task.summary}</span>
}
