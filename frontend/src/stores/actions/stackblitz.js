import { responseErrorGetBalance, responseSuccessGetBalance } from "../../dictionary/response";
import { KEY_GET_BALANCE, KEY_STACKBLITZ } from "../../dictionary/sample";
import * as TYPE from "../action_types/stackblitz"
export const getBalanceStackblitz = () => {
    let compareTwoArrayOfObjects = (
        first_array_of_objects,
        second_array_of_objects
    ) => {
        return (
            first_array_of_objects.length === second_array_of_objects.length &&
            first_array_of_objects.every((element_1) =>
                second_array_of_objects.some((element_2) =>
                    Object.keys(element_1).every((key) => element_1[key] === element_2[key])
                )
            )
        );
    };
    return {
        type: compareTwoArrayOfObjects(KEY_STACKBLITZ, KEY_GET_BALANCE) ? TYPE.GET_BALANCE_SUCCESS : TYPE.GET_BALANCE_ERROR,
        payload: compareTwoArrayOfObjects(KEY_STACKBLITZ, KEY_GET_BALANCE) ? responseSuccessGetBalance : responseErrorGetBalance
    }
}

export const removeGetBalanceFailedStackblitz = () => {
    return {
        type: TYPE.REMOVE_GET_BALANCE_ERROR
    }
}