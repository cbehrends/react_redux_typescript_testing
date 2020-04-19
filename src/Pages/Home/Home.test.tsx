import React from 'react';
import { render as rtlRender} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Home from "./Home";

it('should have a greeting', async () => {

    const {getByText, queryByText} = rtlRender(<Home/>);

    expect(getByText(/Home/)).toBeInTheDocument();

});
