import React from 'react';
import { render } from 'react-dom';
import App from './containers/App';
import configureStore from './configureStore';
import registerServiceWorker from './registerServiceWorker';
import 'semantic-ui-css/semantic.min.css';
import { AppContainer } from 'react-hot-loader'
const store = configureStore();


const renderApp = (Component, store) => {
    render(
      <AppContainer>
        <Component store={store} />
      </AppContainer>,
      document.getElementById('root'),
    )
  }

renderApp( App, store );

registerServiceWorker();

// Webpack Hot Module Replacement API
if (module.hot) {
    module.hot.accept('./containers/App', () => {
        renderApp( App, store );
    })
  }