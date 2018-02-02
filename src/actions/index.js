import * as types from '../constants/ActionTypes'

export const newAsset = () => ({ type: types.NEW_ASSET })
export const addAsset = ( symbol ) => ({ type: types.ADD_ASSET, symbol })