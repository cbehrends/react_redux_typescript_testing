import * as actionTypes from "./actionTypes";

export function login(userName: string) {
    return { type: actionTypes.LOGIN_START, userName: userName };
}
