import React from 'react';
import './App.css'
import withRoot from '../withRoot';
import FAB from '../containers/FAB';
import Paper from 'material-ui/Paper';

const style = {
  height: 100,
  width: '50%',
  margin: 20,
  textAlign: 'center',
  display: 'inline-block'
};

const App = () => (
  <div>
    <Paper style={style} zDepth={1}/>
    <Paper style={style} zDepth={1}/>
    <Paper style={style} zDepth={1}/>
    <Paper style={style} zDepth={1}/>
    <FAB/>
  </div>
)

export default withRoot(App);
