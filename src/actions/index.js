import * as types from '../constants/ActionTypes'

export const addAsset = ( symbol ) => ({ type: types.ADD_ASSET, symbol })
export const subscribePrice = ( symbol ) => ({ type: types.SUBSCRIBE_PRICE, symbol })
export const assetPriceChange = ( symbol, currency, price, exchange) => ({ type: types.ASSET_PRICE_CHANGE, symbol, currency, price, exchange })