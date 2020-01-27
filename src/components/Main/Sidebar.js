import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
  } from "react-router-dom";
import AutoComplete from '../AutoComplete/AutoComplete';
//import PropTypes from 'prop-types';

function Sidebar(props) {
    return (
        <div>
            <Router>
            <div>
                <ul>
                <li>
                    <Link to="/">Início</Link>
                </li>
                <li>
                    <Link to="/autocomplete">AutoComplete</Link>
                </li>
                </ul>
                <Switch>
                <Route path="/autocomplete">
                    <AutoComplete />
                </Route>
                </Switch>
            </div>
            </Router> 
        </div>
    )
}

//Sidebar.propTypes = {
//
//}

export default Sidebar

