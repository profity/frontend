// eslint-disable-next-line
import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import profityApp from './reducers';

const configureStore = () => {
  const middlewares = [];
  if (process.env.NODE_ENV !== 'production') {
    middlewares.push(createLogger());
  }

  return createStore(
    profityApp
    //,
    //applyMiddleware(...middlewares)
  );
};

export default configureStore;