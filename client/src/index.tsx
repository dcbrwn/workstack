import { h, render } from "preact";
import { TasksBlock } from "./components/tasks/TasksBlock";

import "./styles/reset";
import "./styles/global";

render(<TasksBlock />, document.body);
