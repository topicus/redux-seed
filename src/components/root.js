import React from 'react';
import {Provider} from 'react-redux';
import {CounterContainer} from './counter';

const Root = ({store}) => (
  <Provider store={store}>
    <CounterContainer/>
  </Provider>
);

export default Root;