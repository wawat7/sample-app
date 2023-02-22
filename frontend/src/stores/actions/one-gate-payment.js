import * as TYPE from "../action_types/one-gate-payment"

export const getBalance = () => {
    return {
        type: TYPE.GET_BALANCE
    }
}

export const getBalanceSuccess = (data) => {
    return {
        type: TYPE.GET_BALANCE_SUCCESS,
        payload: data
    }
}