import * as TYPE from "../../action_types/one-gate-payment"
import * as STACKBLITZ from "../../action_types/stackblitz"

const initialState = {
    data: [],
    messageResponse: null,
    isLoading: false,
    success: false,
    error: false
};

const get_balance = (state = initialState, action) =>  {
    switch (action.type) {
        case TYPE.GET_BALANCE:
            return {
                ...state,
                isLoading: true
            }
        case TYPE.GET_BALANCE_SUCCESS:
            return {
                ...state,
                isLoading: false,
                data: action.payload.data,
                success: true
            }
        case TYPE.RESET_GET_BALANCE:
            return {
                ...state,
                success: false
            }
        case TYPE.GET_BALANCE_ERROR:
            return {
                ...state,
                data: action.payload.data,
                messageResponse: action.payload.message,
                isLoading: false,
                error: true
            }
        case TYPE.REMOVE_GET_BALANCE_ERROR:
            return {
                ...state,
                error: false
            }
        case STACKBLITZ.GET_BALANCE_SUCCESS:
            return {
                ...state,
                data: action.payload,
                success: true
            }
        case STACKBLITZ.GET_BALANCE_ERROR:
            return {
                ...state,
                data: action.payload,
                error: true
            }
        case STACKBLITZ.REMOVE_GET_BALANCE_ERROR:
            return {
                ...state,
                error: false
            }
        default:
            state = {...state};
            return state;
    }
};

export default get_balance;