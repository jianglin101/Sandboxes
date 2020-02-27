import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";

const styles = {
  list: {
    width: 250
  },
  fullList: {
    width: "auto"
  }
};

const pages = [
  { title: "TextFields" },
  { title: "FinalForm" },
  { title: "Demo" }
];
class TemporaryDrawer extends React.Component {
  state = {
    top: false
  };

  toggleDrawer = (side, open) => () => {
    this.setState({
      [side]: open
    });
  };

  render() {
    const { classes } = this.props;

    const fullList = (
      <div className={classes.fullList}>
        <List>
          {pages.map((page, index) => (
            <ListItem button key={page.title}>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText
                primary={<Link to={"/" + page.title}>{page.title}</Link>}
              />
            </ListItem>
          ))}
        </List>
        <Divider />
      </div>
    );

    return (
      <div>
        <Button
          variant="contained"
          color="primary"
          onClick={this.toggleDrawer("left", true)}
        >
          Menu
        </Button>
        <Drawer
          open={this.state.left}
          onClose={this.toggleDrawer("left", false)}
        >
          {fullList}
        </Drawer>
      </div>
    );
  }
}

TemporaryDrawer.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(TemporaryDrawer);
