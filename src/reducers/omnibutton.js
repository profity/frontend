import { CLICK_OMNI } from '../constants/ActionTypes'

const omni_button = (state = 'ADD', action) => {
    switch (action.type) {
      case CLICK_OMNI:
        return state==='ADD'? 'CLEAR':'ADD'
      default:
        return state;
    }
  };

export default omni_button;