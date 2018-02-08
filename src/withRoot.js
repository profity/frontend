import React from 'react';
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import Reboot from 'material-ui/Reboot';

// A theme with custom primary and secondary color.
// It's optional.
const theme = createMuiTheme({
  // transitions:{
  //   duration:{
  //     enteringScreen: 1,
  //     leavingScreen: 1
  //   }
  // }
});
// {
//     palette: {
//       primary: {
//         light: purple[300],
//         main: purple[500],
//         dark: purple[700],
//       },
//       secondary: {
//         light: green[300],
//         main: green[500],
//         dark: green[700],
//       },
//     },
//   }
// Expose the theme as a global variable so people can play with it.
if (process.browser) {
  window.theme = theme;
}

function withRoot(Component) {
  function WithRoot(props) {
    // MuiThemeProvider makes the theme available down the React tree
    // thanks to React context.
    return (
      <MuiThemeProvider theme={theme}>
        {/* Reboot kickstart an elegant, consistent, and simple baseline to build upon. */}
        <Reboot />
        <Component {...props} />
      </MuiThemeProvider>
    );
  }

  return WithRoot;
}

export default withRoot;