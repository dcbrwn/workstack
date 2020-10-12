import React, { useEffect } from "react";
import { TaskId } from "workstack-common";
import { TaskList } from "../../../components/TaskList";
import { useMediator } from "../../../lib/hooks/useMediator";
import { CreateTask, DashboardContext } from "./definitions";
import { createDashboardMediator } from "./mediator";
import dashboardStyles from "./styles.module.scss";


export function DashboardTaskList() {
  const [state, put] = useMediator(DashboardContext)!;

  console.log(state)

  return <div className={dashboardStyles.tasklist}>
    {state?.tasks ? <TaskList tasks={state.tasks} /> : null}

    <button onClick={() => put(new CreateTask())}>asdf</button>
  </div>
}

export function DashboardTimer() {
  const [state, put] = useMediator(DashboardContext)!;

  return <div className={dashboardStyles.timer}>
    Timer { state?.tasks.length}
  </div>
}

export function DashboardLog() {
  return <div className={dashboardStyles.log}>
    Log
  </div>
}

export function DashboardPage() {
  return <div className={dashboardStyles.dashboard}>
    <DashboardContext.Provider value={createDashboardMediator()}>
      <DashboardTaskList />
      <DashboardTimer />
      <DashboardLog />
    </DashboardContext.Provider>
  </div>;
}
