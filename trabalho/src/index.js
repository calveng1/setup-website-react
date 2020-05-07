import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import * as serviceWorker from './serviceWorker';

import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from './components/home'
import Sobre from './components/sobre'
import Button from './components/button'
import Dropdown from './components/dropdown'
import ListGroup from './components/listGroup'
import TableMenu from './components/tableMenu'
import Badge from './components/badge'

ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route path="/" exact={true} component={Home} />
            <Route path="/button" exact={true} component={Button} />
            <Route path="/dropdown" exact={true} component={Dropdown} />
            <Route path="/listgroup" exact={true} component={ListGroup} />
            <Route path="/tablemenu" exact={true} component={TableMenu} />
            <Route path="/badge" exact={true} component={Badge} />
            <Route path="/sobre" exact={true} component={Sobre} />
        </Switch>
    </BrowserRouter>
    ,document.getElementById('root')
    );

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
