import React, { Component } from 'react';
import PropTypes from 'prop-types'

export default class NumberDisplay extends Component {
  
  static propTypes = {
      type: PropTypes.string
  }

  constructor(props) {
    super(props);
    this.state = {
      number: 0
    }
  }

  increment() {
    const { number } = this.state;
    this.setState({
      number: number + 1
    });
  }

  render() {
    return (
      <div>
        <h4>Number Display ({this.props.type})</h4>
        <p>Your number: {this.state.number}</p>
        <button onClick={this.increment.bind(this)}>Increment</button>
      </div>
    );
  }
}