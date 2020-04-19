import * as actionTypes from './actionTypes';
import loginReducer from './loginReducer';

it('should return the initial state', () => {
    expect(loginReducer(undefined, {} as any)).toEqual({
        isLoggedIn: false,
        userName: ''
    });
});

it('should set the state', () => {
    expect(
        loginReducer(undefined, {
            type: actionTypes.LOGIN_START,
            userName: 'test@test.com',
        }),
    ).toEqual({
        userName: 'test@test.com',
        isLoggedIn: true
    });
});
