import { call, put, takeEvery,  take } from 'redux-saga/effects';
import { SUBSCRIBE_PRICE } from './constants/ActionTypes';
import { eventChannel } from 'redux-saga';
import io from 'socket.io-client';
import { assetPriceChange } from './actions'


function* subscribe(action) {

}

function* mySaga() {
    yield takeEvery(SUBSCRIBE_PRICE, subscribe);
    yield call(wsSagas)
}


function initCoinCap() {
    return eventChannel(emitter => {
        var socket = io.connect('https://coincap.io');

        socket.on('trades', msg => {
            const symbol = msg.coin
            const currency = msg.market_id.split('_')[1]
            const price = msg.msg.price
            const exchange = msg.exchange_id

            return emitter(assetPriceChange(symbol, currency, price, exchange));

        })

        return () => {
            socket.close()
        }
    })
}

function* wsSagas() {
    const channel = yield call(initCoinCap)
    while (true) {
        const action = yield take(channel)
        yield put(action)
    }
}
export default mySaga