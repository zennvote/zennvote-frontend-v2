import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import store from './core/redux';

import Main from './container/Main';
import Navigator from './components/Navigator';

import './App.scss';

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <div className="page-wrapper">
        <Navigator />
        <div className="main-wrapper">
          <div className="copyright">created by team. zennvote</div>
          <div className="content">
            <Switch>
              <Route exact path="/" component={Main} />
            </Switch>
          </div>
        </div>
      </div>
    </BrowserRouter>
  </Provider>
);

export default App;
