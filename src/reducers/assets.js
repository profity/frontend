import { ADD_ASSET, ASSET_PRICE_CHANGE } from '../constants/ActionTypes'

const asset = (state, action) => {
    switch (action.type) {
      case ADD_ASSET:
        return {
          symbol: action.symbol
        };
      case ASSET_PRICE_CHANGE:
        if (state.symbol !== action.symbol) {
          return state;
        }
        return {
          ...state,
          price: action.price,
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
      case ASSET_PRICE_CHANGE:
        return state.map(t =>{
          return asset(t, action)
        });
      default:
        return state;
    }
  };
  
  export default assets;