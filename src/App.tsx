import React from 'react';
import Home from "./Pages/Home/Home";
import {Box, Container} from "@material-ui/core";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./Features/SiteHeader/Header";

interface Props {

}

const App: React.FC<Props> = () => {
    return (
        <Router>
            <Container>
                <Box
                    my={4}
                >
                    <Header />
                    <Switch>
                        <Route exact path="/" component={Home} />
                    </Switch>
                </Box>
            </Container>
        </Router>
    );
};

export default App
