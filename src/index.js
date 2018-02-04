import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import reducer from './redux/reducers';
import Play from './pages/play';
import Main from './pages/main';
import End from './pages/end';

import './index.css';

ReactDOM.render(
    <Provider store={createStore(reducer)}>
        <BrowserRouter>
            <Switch>
                <Route path="/play" component={Play}/>
                <Route path="/end" component={End}/>
                <Route path="/" component={Main}/>
            </Switch>
        </BrowserRouter>
    </Provider>
, document.getElementById('root'));
