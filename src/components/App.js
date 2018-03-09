import React from 'react';
import './App.css'
import withRoot from '../withRoot';
import FAB from '../containers/FAB';
import Workspace from './Workspace'

const App = () => (
  <div>
    <Workspace/>
    <FAB/>
  </div>

)

export default withRoot(App);
