import * as TYPE from "../../action_types/one-gate-payment"

const initialState = {
    data: [],
    isLoading: false
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
                data: action.payload
            }
        default:
            state = {...state};
            return state;
    }
};

export default get_balance;