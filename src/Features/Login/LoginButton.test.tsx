import React from 'react';
import { Provider } from 'react-redux';
import { render as rtlRender, fireEvent, wait } from '@testing-library/react';
import {createStore, applyMiddleware, combineReducers} from 'redux';
import thunk from 'redux-thunk';
import '@testing-library/jest-dom/extend-expect';
import axios from 'axios';
import LoginButton from "./LoginButton";
import loginReducer from "./store/loginReducer";
import * as actionTypes from "./store/actionTypes";
const rootReducer = combineReducers<any>({
    Login: loginReducer
});

jest.mock('axios');

const render = (ui: any, initialStore = {}, options = {}) => {
    const rootStore = createStore(rootReducer, initialStore, applyMiddleware(thunk));
    const Providers = ({ children }: any) => <Provider store={rootStore}>{children}</Provider>;

    return rtlRender(ui, { wrapper: Providers, ...options });
};

it('should should start login when clicked', async () => {
    const randomFactText = 'Random fact';
    (axios.get as jest.Mock).mockResolvedValue({ data: randomFactText });

    const {getByText, queryByText} = render(<LoginButton/>);

    fireEvent.click(getByText(/Login/));


});
