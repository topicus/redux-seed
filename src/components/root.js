import React from 'react';
import {Provider} from 'react-redux';
import {App} from './app';
import {Router, Route, browserHistory} from 'react-router';

const Root = ({store}) => (
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path='/(:countStart)' component={App}/>
    </Router>
  </Provider>
);

export default Root;