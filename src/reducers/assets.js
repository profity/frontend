import { ADD_ASSET } from '../constants/ActionTypes'

const asset = (state, action) => {
  console.log('called')
    switch (action.type) {
      case ADD_ASSET:
        return {
          symbol: action.symbol
        };
      case 'TOGGLE_TODO':
        if (state.id !== action.id) {
          return state;
        }
        return {
          ...state,
          completed: !state.completed,
        };
      default:
        return state;
    }
  };
  
  const assets = (state = [], action) => {
    switch (action.type) {
      case ADD_ASSET:
        return [
          ...state,
          asset(undefined, action),
        ];
      case 'TOGGLE_TODO':
        return state.map(t =>
          asset(t, action)
        );
      default:
        return state;
    }
  };
  
  export default assets;