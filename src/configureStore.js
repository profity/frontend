// eslint-disable-next-line
import { createStore, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist'
import { createLogger } from 'redux-logger';
import storage from 'redux-persist/lib/storage'
import rootReducer from './reducers';

const configureStore = () => {
  const middlewares = [];
  if (process.env.NODE_ENV !== 'production') {
    middlewares.push(createLogger());
  }

  const persistConfig = {
    key: 'profity',
    storage: storage,
  }
  const persistedReducer = persistReducer(persistConfig, rootReducer)

  let store =  createStore(
    persistedReducer, /* preloadedState, */
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    //applyMiddleware(...middlewares)
  );

  let persistor = persistStore(store);

  return { store, persistor}
};

export default configureStore;