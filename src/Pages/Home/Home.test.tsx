import React from 'react';
import { Provider } from 'react-redux';
import { render as rtlRender} from '@testing-library/react';
import {createStore, applyMiddleware, combineReducers} from 'redux';
import thunk from 'redux-thunk';
import '@testing-library/jest-dom/extend-expect';
import loginReducer from "../../Features/Login/store/loginReducer";
import Home from "./Home";

const rootReducer = combineReducers<any>({
    Login: loginReducer
});


const render = (ui: any, initialStore = {}, options = {}) => {
    const rootStore = createStore(rootReducer, initialStore, applyMiddleware(thunk));
    const Providers = ({ children }: any) => <Provider store={rootStore}>{children}</Provider>;

    return rtlRender(ui, { wrapper: Providers, ...options });
};

it('should have a greeting', async () => {

    // const { getByText, queryByText } = render(<App />);
    const {getByText, queryByText} = render(<Home/>);

    // fireEvent.click(getByText(/Login/));
    expect(getByText(/Home/)).toBeInTheDocument();

    // expect(getByText(/Save/)).toBeInTheDocument();


});
