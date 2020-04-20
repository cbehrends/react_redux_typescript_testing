import * as actionTypes from "./actionTypes";

export function login(userName: string) {
    return { type: actionTypes.LOGIN, userName: userName };
}

export function logOut() {
    return { type: actionTypes.LOGOUT};
}
