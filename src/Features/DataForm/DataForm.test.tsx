import React from 'react';
import { Provider } from 'react-redux';
import { render as rtlRender, fireEvent, wait } from '@testing-library/react';
import {createStore, applyMiddleware, combineReducers} from 'redux';
import thunk from 'redux-thunk';
import '@testing-library/jest-dom/extend-expect';
import axios from 'axios';
import reducers from "../../store/";
import * as actionTypes from "./store/actionTypes";
import DataForm from "./DataForm";

const rootReducer = combineReducers<any>({
    Login: reducers
});

jest.mock('axios');

const render = (ui: any, initialStore = {}, options = {}) => {
    const rootStore = createStore(rootReducer, initialStore, applyMiddleware(thunk));
    const Providers = ({ children }: any) => <Provider store={rootStore}>{children}</Provider>;

    return rtlRender(ui, { wrapper: Providers, ...options });
};


it('should have TextField with the value', async () => {

    const {getByTestId} = render(<DataForm/>);
    expect(getByTestId('valueInput')).toBeInTheDocument();
    expect(getByTestId('valueInput')).toHaveValue('TestValue')

});
