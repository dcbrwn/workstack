import { h, render } from "preact";

import "./styles/reset.scss";
import "./styles/global.scss";

import { DashboardPage } from "./containers/pages/dashboard";

render(<DashboardPage />, document.body);
