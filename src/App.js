import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Homepage from './pages/Homepage';
import Aboutme from './pages/Aboutme'

function App() {
    return (
        <Switch>
            <Route exact path="/" component={Homepage} />
            <Route path="/aboutme" component={Aboutme} />
            {/* <Route component={PageNotFound} /> */}
        </Switch>
    );
}

export default App;
