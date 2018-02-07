import React from 'react';
import './App.css'
import withRoot from '../withRoot';
import OmniFAB from './OmniFAB';

import { withStyles } from 'material-ui/styles';

const styles = theme => ({
    button: {
      position: "fixed",
      bottom: 0,
      right: 0
    },
  });

const App = ({ classes }) => (
    <OmniFAB/>
)

export default withRoot(withStyles(styles)(App));