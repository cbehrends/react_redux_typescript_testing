import * as actionTypes from "./actionTypes";

export function doThing(thingToDo: string) {
    return { type: actionTypes.DO_THING, thingToDo: thingToDo };
}
