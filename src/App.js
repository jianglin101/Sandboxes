import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { withStyles } from "@material-ui/core/styles";
import Nav from "./Routers/Nav";
import Drawer from "./Routers/Drawer";
import Main from "./Components/Main";
const styles = theme => ({});

const App = () => (
  <div>
    <Drawer />
    <Main />
  </div>
);

export default withStyles(styles)(App);
