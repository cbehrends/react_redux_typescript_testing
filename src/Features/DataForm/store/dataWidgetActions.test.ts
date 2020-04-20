import * as actions from './dataWidgetActions';
import * as actionTypes from './actionTypes';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import axios from 'axios';
import loginReducer from './dataWidgetReducer';

jest.mock('axios');

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

it('should create a toDo action with the proper value', () => {
    const expectedAction = {
        type: actionTypes.DO_THING,
        thingToDo: 'Wang Chung'
    };
    expect(actions.doThing('Wang Chung')).toEqual(expectedAction);
});


