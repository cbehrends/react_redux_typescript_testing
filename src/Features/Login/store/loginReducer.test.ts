import * as actionTypes from './actionTypes';
import loginReducer from './loginReducer';

it('should return the initial state', () => {
    expect(loginReducer(undefined, {} as any)).toEqual({
        isLoggedIn: false,
        userName: ''
    });
});

it('should log in', () => {
    expect(
        loginReducer(undefined, {
            type: actionTypes.LOGIN,
            userName: 'test@test.com',
        }),
    ).toEqual({
        userName: 'test@test.com',
        isLoggedIn: true
    });
});

it('should log out', () => {

    expect(
        loginReducer(undefined, {
            type: actionTypes.LOGIN,
            userName: 'test@test.com',
        }),
    ).toEqual({
        userName: 'test@test.com',
        isLoggedIn: true
    });

    expect(
        loginReducer(undefined, {
            type: actionTypes.LOGOUT
        }),
    ).toEqual({
        userName: '',
        isLoggedIn: false
    });
});
