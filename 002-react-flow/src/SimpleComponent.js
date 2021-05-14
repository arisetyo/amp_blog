// @flow

/**
 * Example of standard React component written with Flow
 * @author Arie M. Prasetyo
 * @copyright 2021
 */

// We need to import React types
import type {Node} from "react";
import React, {Component} from 'react';

type Props = {
  foo: number,
  bar?: string,
};

type State = {
  count: number,
};

class SimpleComponent extends Component<Props, State> {
  constructor() {
    super();

    this.state = {
      count: 0,
    }
  }

  componentDidMount() {
    setInterval(() => {
      this.setState(prevState => (
        { count: prevState.count + 1 }
      ));
    }, 1000);
  }

  render(): Node {
    // this.props.doesNotExist; // Missing prop. Will show error.

    return (
      <div>
        {this.props.foo} {this.props.bar}
        <br/>
        Count: {this.state.count}
      </div>
    );
  }
}

export default SimpleComponent;