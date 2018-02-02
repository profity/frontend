import React from 'react';
import { render } from 'react-dom';
import App from './components/App';
import configureStore from './configureStore';
import registerServiceWorker from './registerServiceWorker';
import 'semantic-ui-css/semantic.min.css';
import { AppContainer } from 'react-hot-loader';
import { Provider } from 'react-redux';
const store = configureStore();


const renderApp = (Component, store) => {
    render(
      <AppContainer>
        <Provider store={store} >
          <Component/>
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