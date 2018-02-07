import React from 'react';
import { render } from 'react-dom';
import App from './components/App';
import configureStore from './configureStore';
import registerServiceWorker from './registerServiceWorker';
import { AppContainer } from 'react-hot-loader';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/lib/integration/react';

const {store, persistor} = configureStore();


const renderApp = (Component, store) => {
    render(
      <AppContainer>
        <Provider store={store} >
          <PersistGate loading={null} persistor={persistor}>
            <Component/>
          </PersistGate>
        </Provider>
      </AppContainer>,
      document.getElementById('root'),
    )
  }

renderApp( App, store );

registerServiceWorker();

// Webpack Hot Module Replacement API
if (module.hot) {
    module.hot.accept('./components/App', () => {
        renderApp( App, store );
    })
  }