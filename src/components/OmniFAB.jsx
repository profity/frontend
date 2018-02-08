import React from 'react';
import { withStyles } from 'material-ui/styles';
import Button from 'material-ui/Button';
import Add from 'material-ui-icons/Add';
import Clear from 'material-ui-icons/Clear';
import Zoom from 'material-ui/transitions/Zoom';


const styles = theme => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    width: 500,
    position: 'relative',
    minHeight: 200,
  },
  fab: {
    position: 'absolute',
    bottom: theme.spacing.unit * 2,
    right: theme.spacing.unit * 2,
  }
});




const OmniFAB = ({ classes, active, theme, onButtonClick }) => {

  const fabs = [
    {
      name: 'ADD',
      color: 'secondary',
      className: classes.fab,
      icon: <Add />
    },
    {
      name: 'CLEAR',
      color: 'primary',
      className: classes.fab,
      icon: <Clear />
    }
  ]
  const transitionDuration = {
    enter: theme.transitions.duration.enteringScreen,
    exit: theme.transitions.duration.leavingScreen,
  };

  return (
    <div>
      {fabs.map((fab) => (
        <Zoom
          key={fab.color}
          in={active === fab.name}
          timeout={transitionDuration}
          style={{
            transitionDelay: active === fab.name ? transitionDuration.exit : 0,
          }}
          unmountOnExit
          onClick={() => { onButtonClick() }}
        >
          <Button variant="fab" className={fab.className} color={fab.color}>
            {fab.icon}
          </Button>
        </Zoom>
      ))}
    </div>
  )

}


export default withStyles(styles, { withTheme: true })(OmniFAB);