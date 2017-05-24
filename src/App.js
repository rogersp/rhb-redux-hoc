import React, { Component } from 'react';
import { withPlainHoc, withReduxConnectedHoc } from './HOC';
import NumberDisplay from './NumberDisplay';

const NumberDisplayPlain = withPlainHoc(NumberDisplay);
const NumberDisplayReduxConnected = withReduxConnectedHoc(NumberDisplay);

export default class App extends Component {  
  render() {
    return (
      <div>
        <h1>Hello, world.</h1>
        <NumberDisplayPlain />
        <NumberDisplayReduxConnected />
      </div>
    );
  }
}

