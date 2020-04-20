import React from 'react';
import { Provider } from 'react-redux';
import { render as rtlRender, fireEvent, wait } from '@testing-library/react';
import {createStore, applyMiddleware, combineReducers} from 'redux';
import thunk from 'redux-thunk';
import '@testing-library/jest-dom/extend-expect';
import LoginButton from "./LoginButton";
import loginReducer from "./store/loginReducer";
const rootReducer = combineReducers<any>({
    Login: loginReducer
});

const render = (ui: any, initialStore = {}, options = {}) => {
    const rootStore = createStore(rootReducer, initialStore, applyMiddleware(thunk));
    const Providers = ({ children }: any) => <Provider store={rootStore}>{children}</Provider>;

    return rtlRender(ui, { wrapper: Providers, ...options });
};

it('should should log in and out when clicked', async () => {

    const {getByTestId} = render(<LoginButton/>);

    fireEvent.click(getByTestId('loginButton'));
    expect(getByTestId('logOutButton')).toBeInTheDocument();

    fireEvent.click(getByTestId('logOutButton'));
    expect(getByTestId('loginButton')).toBeInTheDocument();


});

