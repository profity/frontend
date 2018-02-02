import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import { ADD_ASSET } from './constants/ActionTypes'

function* hellowSaga(action){
    console.log(action)
}

function* mySaga(){
    yield takeLatest(ADD_ASSET, hellowSaga);
}

export default mySaga