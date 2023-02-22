import { takeEvery, put, call } from "redux-saga/effects";
import { getBalanceOGP } from "../../../infrastructure/api/one-gate-payment";
import { getBalanceSuccess } from "../../actions/one-gate-payment";
import { GET_BALANCE } from "../../action_types/one-gate-payment";

function* getBalance() {
    try {
        const response = yield call(getBalanceOGP);
        yield put(getBalanceSuccess(response))
    } catch (error) {
        console.log(error)
    }
} 

export default function* watchGetBalanceSaga() {
    yield takeEvery(GET_BALANCE, getBalance);
}