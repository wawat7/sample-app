import { takeEvery, put, call } from "redux-saga/effects";
import { getBalanceOGP } from "../../../infrastructure/api/one-gate-payment";
import { getBalanceFailed, getBalanceSuccess, removeGetBalanceFailed } from "../../actions/one-gate-payment";
import { GET_BALANCE } from "../../action_types/one-gate-payment";

const delay = time => new Promise(resolve => setTimeout(resolve,time))
function* getBalance() {
    try {
        const response = yield call(getBalanceOGP);
        yield call(delay, 1200)
        response.message === "success" ? yield put(getBalanceSuccess(response)) : yield put(getBalanceFailed(response))
        yield call(delay, 5000)
        yield put(removeGetBalanceFailed())
    } catch (error) {
        console.log(error)
        yield put(getBalanceFailed(error))
        yield call(delay, 5000)
        yield put(removeGetBalanceFailed())
    }
} 

export default function* watchGetBalanceSaga() {
    yield takeEvery(GET_BALANCE, getBalance);
}