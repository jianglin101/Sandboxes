import React from "react";
import { Button } from "@material-ui/core";
class Demo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }
  render() {
    const { name = "jwu" } = this.props;
    const { count } = this.state;
    return (
      <div>
        <h1>Hello, {name}</h1>
        <p>
          <b>{count}</b>
        </p>
        <Button
          color="primary"
          variant="outlined"
          onClick={() =>
            this.setState((prevState, props) => {
              return { count: prevState.count + 1 };
            })
          }
        >
          Count +1
        </Button>
        <Button
          color="default"
          variant="outlined"
          onClick={() => this.setState({ count: 0 })}
        >
          Reset
        </Button>
      </div>
    );
  }
}

export default Demo;
