import * as actions from './loginActions';
import * as actionTypes from './actionTypes';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import axios from 'axios';
import loginReducer from './loginReducer';

jest.mock('axios');

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

it('should create a login action with the proper username', () => {
    const expectedAction = {
        type: actionTypes.LOGIN,
        userName: 'test@test.com'
    };
    expect(actions.login('test@test.com')).toEqual(expectedAction);
});

it('should create a log out action', () => {
    const expectedAction = {
        type: actionTypes.LOGOUT
    };
    expect(actions.logOut()).toEqual(expectedAction);
});


