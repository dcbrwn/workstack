import { h, Fragment } from "preact";
import { useState } from "preact/hooks";
import { TaskId } from "workstack-common";
import { TaskList } from "../../../components/TaskList";
import { useMediator } from "../../../lib/hooks/useMediator";
import { DashboardContext } from "./definitions";
import { createDashboardMediator } from "./mediator";
import dashboardStyles from "./styles.module.scss";


export function DashboardTaskList() {
  const [state, put] = useMediator(DashboardContext)!;

  return <div class={dashboardStyles.tasklist}>
    <TaskList tasks={state.tasks} />
  </div>
}

export function DashboardTimer() {
  return <div class={dashboardStyles.timer}>
    Timer
  </div>
}

export function DashboardLog() {
  return <div class={dashboardStyles.log}>
    Log
  </div>
}

export function DashboardPage() {
  return <div class={dashboardStyles.dashboard}>
    <DashboardContext.Provider value={createDashboardMediator()}>
      <DashboardTaskList />
      <DashboardTimer />
      <DashboardLog />
    </DashboardContext.Provider>
  </div>;
}
