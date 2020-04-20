import {AnyAction} from 'redux';
import * as actionTypes from './actionTypes';

export interface WidgetState {
    thingToDo: string;
}

const initialState = {
    thingToDo: ''
} as WidgetState

const widgetReducer = (state = initialState, action: AnyAction) => {
    switch (action.type) {
        case actionTypes.DO_THING:
            return {
                ...state,
                thingToDo: action.thingToDo
            };

        default:
            return state;
    }
};

export default widgetReducer;
