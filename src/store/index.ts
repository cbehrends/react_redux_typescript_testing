import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import loginReducer from "../Features/Login/store/loginReducer";

const rootReducer = combineReducers<any>({
    Login: loginReducer
});

export default createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

export type AppState = ReturnType<typeof rootReducer>
