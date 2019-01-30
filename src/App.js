import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { withStyles } from "@material-ui/core/styles";
<<<<<<< HEAD
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
=======
import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { TextFields } from "./Components";
const styles = theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200
  },
  dense: {
    marginTop: 19
  },
  menu: {
    width: 200
  }
});

class App extends React.Component {
  render() {
    return (
      <div>
        <Button variant="contained" color="primary">
          Hello World
        </Button>
        <TextFields />
      </div>
    );
  }
}
>>>>>>> 8fbf78535f553d3b2456b4e42672cbde38af183b

export default withStyles(styles)(App);
