import React from 'react';
import { Switch, Route, Router } from 'react-router-dom';
import { StylesProvider, createGenerateClassName } from '@material-ui/core';

import Signin from './components/Signin';
import Signup from './components/Signup';

const generateClassName = createGenerateClassName({
    productionPrefix: 'au',
});

export default ({ onSignIn, history }) => {
    return (
        <div>
            <StylesProvider generateClassName={generateClassName}>
                <Router history={history}>
                    <Switch>
                        <Route exact path="/auth/signin">
                          <Signin onSignIn={onSignIn} />
                        </Route>
                        <Route exact path="/auth/signup">
                          <Signup onSignIn={onSignIn} />
                        </Route>
                    </Switch>
                </Router>
            </StylesProvider>
        </div>
    )
};
