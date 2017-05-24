import React, { Component } from 'react';
import { connect } from 'react-redux'

export const withPlainHoc = (WrappedComponent) => {
  return class PlainHoc extends Component {
    render() {
      return (
        <WrappedComponent type='PlainHoc' />
      );
    }
  }
}

export const withReduxConnectedHoc = (WrappedComponent) => {
    class ReduxConnectedHoc extends Component {
        render() {
            return (
                <WrappedComponent type='ReduxConnectedHoc' />
            );
        }
    }

    return connect()(ReduxConnectedHoc);
}