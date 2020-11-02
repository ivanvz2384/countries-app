import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import CountriesDashboard from '../components/CountriesDashboard';
import NoPageFound from '../components/NoPageFound';

const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Switch>
                <Route path="/" component= {CountriesDashboard} exact={true} />
                <Route path="/dashboard" component={CountriesDashboard} />
                <Route component={NoPageFound}/>
            </Switch>
        </div>
    </BrowserRouter>
)

export default AppRouter
