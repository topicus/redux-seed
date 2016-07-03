import { createStore } from 'redux'
import { increment } from './reducers'

export const configureStore = () => {
  const store = createStore(increment);
  return store;
};