import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Header from './components/header/Header';
import Homepage from './pages/Homepage';
import Aboutme from './pages/Aboutme';
import Aboutblog from './pages/Aboutblog';
import Latestpost from './pages/Latestpost';
import Allposts from './pages/Allposts';

function App() {
    return (
        <>
            <Header></Header>
            <Switch>
                <Route exact path="/" component={Homepage} />
                <Route path="/about-me" component={Aboutme} />
                <Route path="" component={Aboutblog} />
                <Route path="/latest-post" component={Latestpost} />
                <Route path="/all-posts" component={Allposts} />
            </Switch>
        </>
        
    );
}

export default App;
