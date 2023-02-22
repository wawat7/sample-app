import { all } from 'redux-saga/effects'
import watchGetBalanceSaga from './one_gate_payment/get_balance'


export default function* rootSaga(){
    yield all([
        watchGetBalanceSaga(),
    ])
}