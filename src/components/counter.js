import React from 'react';
import {connect} from 'react-redux';
import {increment} from '../actions/operations';

// Map the state of the store to the props to be passed
// to the container component.
let mapStateToProps = (state) => ({
  count: state.count
});

// Map actions to properties in the container
let mapDispatchToProps = (dispatch) => ({
  onClick: () => dispatch(increment())
});

let Counter = ({
    count,
    onClick
  }) => (
  <div>
    <div>{count}</div>
    <button onClick={onClick}>Increment</button>
  </div>
);

export const CounterContainer = connect(
  mapStateToProps, 
  mapDispatchToProps
)(Counter);