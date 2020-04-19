import {AnyAction, createStore} from 'redux';
import * as actionTypes from './actionTypes';

export interface LoginState {
    userName: string;
    isLoggedIn: boolean;
}

const initialState = {
    userName: '',
    isLoggedIn: false
} as LoginState

const loginReducers = (state = initialState, action: AnyAction) => {
    switch (action.type) {
        case actionTypes.LOGIN_START:
            return {
                ...state,
                userName: action.userName,
                isLoggedIn: true
            };

        default:
            return state;
    }
};


// export default createStore(loginReducers);
export default loginReducers;
