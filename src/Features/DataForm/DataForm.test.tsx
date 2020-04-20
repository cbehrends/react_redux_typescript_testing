import React from 'react';
import { Provider } from 'react-redux';
import { render as rtlRender, fireEvent, wait } from '@testing-library/react';
import {createStore, applyMiddleware, combineReducers} from 'redux';
import thunk from 'redux-thunk';
import '@testing-library/jest-dom/extend-expect';
import axios from 'axios';
import {rootReducer} from "../../store/";
import DataForm from "./DataForm";

jest.mock('axios');

const render = (ui: any, initialStore = {}, options = {}) => {
    const rootStore = createStore(rootReducer, initialStore, applyMiddleware(thunk));
    const Providers = ({ children }: any) => <Provider store={rootStore}>{children}</Provider>;

    return rtlRender(ui, { wrapper: Providers, ...options });
};


it('should have TextField holding our value that saves to local state', async () => {

    const {getByTestId} = render(<DataForm/>);

    expect(getByTestId('valueInput')).toBeInTheDocument();
    expect(getByTestId('valueInput')).toHaveValue('');
    fireEvent.change(getByTestId('valueInput'), { target: { value: 'Oh Snap' } });
    expect(getByTestId('valueInput')).toHaveValue('Oh Snap');

});

it('should have a Button that saves form changes', async () => {

    const {getByTestId} = render(<DataForm/>);

    fireEvent.click(getByTestId('saveButton'));

    expect(getByTestId('valueInput')).toHaveValue('Saved');


});
