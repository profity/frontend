import { SpeedDial, SpeedDialItem } from 'react-mui-speeddial';
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Button from 'material-ui/Button';
import Add from 'material-ui-icons/Add';
import PlaylistAdd from 'material-ui-icons/PlaylistAdd';
import NoteAdd from 'material-ui-icons/NoteAdd';
import Close from 'material-ui-icons/Close';
const addMethod1 = () => {
    console.log('Option 1 clicked');
  }

const addMethod2 = () => {
    console.log('Option 2 clicked');
  }
const styles = { height: '400px', padding: '50px', display: 'flex', alignItems: 'center', justifyContent: 'center', boxSizing: 'border-box' };
const Container = ({ children }) => (<div style={styles}><div>{children}</div></div>);

const OmniFAB = () => (<Container>
    <SpeedDial
      fabContentOpen={<Button variant="fab" color="primary" aria-label="add" >
      <Add />
    </Button>}
      fabContentClose={<Close />}
    >
      <SpeedDialItem
        label="Add 1"
        fabContent={<PlaylistAdd />}
        onTouchTap={addMethod1}
      />
      <SpeedDialItem
        label="Add 2"
        fabContent={<NoteAdd />}
        onTouchTap={addMethod2}
      />
    </SpeedDial></Container>
  )


export default OmniFAB;