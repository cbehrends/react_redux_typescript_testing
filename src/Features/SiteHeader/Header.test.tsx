import React from 'react';
import { render as rtlRender} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Header from "./Header";

it('should have a logo', async () => {

    const {getByText, queryByText} = rtlRender(<Header/>);

    expect(getByText(/Some Logo/)).toBeInTheDocument();

});
