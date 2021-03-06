import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';

import Header from './../components/Header';
import ExpenseDashboardPage from './../components/ExpenseDashboardPage';
import CreateExpensePage from './../components/CreateExpensePage';
import EditExpensePage from './../components/EditExpensePage';
import HelpPage from './../components/HelpPage';
import NotFoundPage from './../components/NotFoundPage';

const AppRouter = () => (
    <BrowserRouter>
        <div className='row'>
            <Header />
            <Switch>
                <Route path='/' component={ExpenseDashboardPage} exact={true} />
                <Route path='/create' component={CreateExpensePage} />
                <Route path="/edit/:id" component={EditExpensePage} />
                <Route path='/help' component={HelpPage} />
                <Route component={NotFoundPage} />
            </Switch>
        </div>
    </BrowserRouter>
);

export default AppRouter;