import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from '../containers/home/home.jsx';
import PostAd from '../containers/postad.jsx';
import ChooseCat from '../containers/chooseCat.jsx';
import NotFound from './404.jsx';

function AppRouter() {
    return (
        <Router>
            <Route exact path='/' component={Home} />
            <Route exact path='/postAd' component={ChooseCat} />
            <Route exact path='/postAd/details' component={PostAd} />
            {/* <Route path="" component={NotFound} /> */}
        </Router>
    );
}

export default AppRouter;