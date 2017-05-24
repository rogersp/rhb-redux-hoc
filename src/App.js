import React, { Component } from 'react';
import Layout from './Layout';
//import Counter from './Counter';
import { withPlainHoc, withReduxConnectedHoc } from './HOC';
import NumberDisplay from './NumberDisplay';

const NumberDisplayPlain = withPlainHoc(NumberDisplay);
const NumberDisplayReduxConnected = withReduxConnectedHoc(NumberDisplay);

// If you use React Router, make this component
// render <Router> with your routes. Currently,
// only synchronous routes are hot reloaded, and
// you will see a warning from <Router> on every reload.
// You can ignore this warning. For details, see:
// https://github.com/reactjs/react-router/issues/2182
export default class App extends Component {
  render() {
    return (
      <Layout>        
        <NumberDisplayPlain />
        <NumberDisplayReduxConnected />
      </Layout>
    );
  }
}
