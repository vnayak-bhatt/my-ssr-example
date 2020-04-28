import React from "react";
import { Route, Switch, NavLink } from 'react-router-dom';
import Home from './Home';
import Logo from './Logos';
import NotFound from './NotFound';
import "./App.css";


function  App ( )  {
    return (
        <>
        <img src="./logos.svg" className="App-logo" alt="enlogo"/>
        <div>
            <ul>
                <li>
                    <NavLink to="/">Home</NavLink>
                </li>
                <li>
                    <NavLink to="/logo">Logo</NavLink>
                </li>
            </ul>
        </div>
        <Switch>
            <Route
                exact
                path="/"
                render={props => <Home />}
            />
            <Route path="/logo"
                   render={props => <Logo />}
            />
            <Route component={NotFound} />
        </Switch>
        </>
    );
}

export default App;