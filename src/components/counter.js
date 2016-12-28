import React from 'react';
import {connect} from 'react-redux';
import {increment} from '../actions/operations';
import {withRouter} from 'react-router';
// Map the state of the store to the props to be passed
// to the container component.
const mapStateToProps = (state, ownProps) => ({
  count: state.count
});

// Map actions to properties in the container
const mapDispatchToProps = (dispatch) => ({
  onClick: () => dispatch(increment())
});

const Counter = ({
    count,
    onClick,
    params
  }) => (
  <div>
    <div>{count}</div>
    <div>{params.countStart}</div>
    <button onClick={onClick}>Increment</button>
  </div>
);

export const CounterContainer = withRouter(connect(
  mapStateToProps, 
  mapDispatchToProps
)(Counter));