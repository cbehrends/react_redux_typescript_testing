import * as actionTypes from './actionTypes';
import widgetReducer from './dataWidgetReducer';

it('should return the initial state', () => {
    expect(widgetReducer(undefined, {} as any)).toEqual({
        thingToDo: ''
    });
});

it('should set the state', () => {
    expect(
        widgetReducer(undefined, {
            type: actionTypes.DO_THING,
            thingToDo: 'Wang Chung',
        }),
    ).toEqual({
        thingToDo: 'Wang Chung'
    });
});
