import React from "react";
import { render } from "react-dom";

import "./styles/reset.scss";
import "./styles/global.scss";

import { DashboardPage } from "./containers/pages/dashboard";

render(<DashboardPage />, document.getElementById("root"));
