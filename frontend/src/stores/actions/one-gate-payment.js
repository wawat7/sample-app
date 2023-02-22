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
export const resetGetBalance = () => {
    return {
        type: TYPE.RESET_GET_BALANCE
    }
}
export const getBalanceFailed = (data) => {
    return {
        type: TYPE.GET_BALANCE_ERROR,
        payload: data
    }
}
export const removeGetBalanceFailed = () => {
    return {
        type: TYPE.REMOVE_GET_BALANCE_ERROR
    }
}