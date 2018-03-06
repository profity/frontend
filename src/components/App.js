import React from 'react';
import './App.css'
import withRoot from '../withRoot';
import FAB from '../containers/FAB';
import HTML5Backend from 'react-dnd-html5-backend';
import Workspace from './Workspace'

const App = () => (
  <div backend={HTML5Backend}>
    <Workspace/>
    <FAB/>
  </div>

)

export default withRoot(App);
