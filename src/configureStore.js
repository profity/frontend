// eslint-disable-next-line
import { createStore, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist'
import { createLogger } from 'redux-logger';
import storage from 'redux-persist/lib/storage'
import rootReducer from './reducers';
import createSagaMiddleware from 'redux-saga';
import mySaga from './sagas';

const sagaMiddleware = createSagaMiddleware()
const configureStore = () => {
  const middlewares = [sagaMiddleware];
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
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(...middlewares)
  );

  sagaMiddleware.run(mySaga);
  let persistor = persistStore(store);

  if (module.hot) {
    module.hot.accept(() => {
      // This fetch the new state of the above reducers.
      store.replaceReducer(
        persistReducer(persistConfig, rootReducer)
      )
    })
  }
  return { store, persistor}
};

export default configureStore;