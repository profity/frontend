import { combineReducers } from 'redux';
import assets from './assets';
import omni_button from './omnibutton'


const profityApp = combineReducers({
  assets,
  omni_button
});

export default profityApp;