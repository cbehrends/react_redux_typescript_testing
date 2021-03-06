import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import Home from "./Home";
import { Provider } from 'react-redux';
import { render as rtlRender, fireEvent, wait } from '@testing-library/react';
import {createStore, applyMiddleware, combineReducers} from 'redux';
import thunk from 'redux-thunk';
import '@testing-library/jest-dom/extend-expect';
import axios from 'axios';
import {rootReducer} from "../../store/";
import {ThemeProvider} from "@material-ui/styles";
import theme from "../../theme";

jest.mock('axios');

const render = (ui: any, initialStore = {}, options = {}) => {
    const rootStore = createStore(rootReducer, initialStore, applyMiddleware(thunk));
    const Providers = ({ children }: any) =>
        <ThemeProvider theme={theme}>
            <Provider store={rootStore}>
                {children}
            </Provider>
        </ThemeProvider>;

    return rtlRender(ui, { wrapper: Providers, ...options });
};

it('should have a greeting', async () => {

    const {getByText, queryByText} = render(<Home/>);

    expect(getByText(/Home/)).toBeInTheDocument();

});
