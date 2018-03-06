import React, {Component} from 'react';
import Paper from 'material-ui/Paper';

const style = {
  height: 100,
  width: '50%',
  margin: 20,
  textAlign: 'center',
  display: 'inline-block'
};
export default class Workspace extends Component {

  render() {
    return (
      <div>
        <Paper style={style} zDepth={1}>123123</Paper>
        <Paper style={style} zDepth={1}/>
        <Paper style={style} zDepth={1}/>
        <Paper style={style} zDepth={1}/></div>
    )
  }
}
