import React from "react";
import { Route, Switch, NavLink } from 'react-router-dom';
import Home from './Home';
import Logos from './Home';
import NotFound from './NotFound';
import "./App.css";


function  App ( )  {
    const [count, setCount] = React.useState(0);

    const increment = () => {
        setCount(count + 1);
    };

    const decrement = () => {
        setCount(count - 1);
    };

    return (
        <>
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
                render={props => <Home name="Alligator.io" {...props} />}
            />
            <Route path="/logo" component={Logos} />
            <Route component={NotFound} />
        </Switch>

        <p>{count}</p>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        </>
    );
}

export default App;