import * as CONSTANT from "../constants"

export const getBalanceOGP = async () => {
    const res = await fetch(`${CONSTANT.BASE_URL}/${CONSTANT.GET_BALANCE}`);
    return await res.json();
}