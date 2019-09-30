import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import store from './core/redux';

import Main from './container/Main';
import Overview from './container/Overview';
import Apply from './container/Apply';
import Quiz from './container/Quiz';
import SectionVote from './container/SectionVote';
import Navigator from './components/Navigator';

import './App.scss';

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <div className="page-wrapper">
        <Navigator />
        <div className="main-wrapper">
          <div className="content">
            <Switch>
              <Route exact path="/" component={Main} />
              <Route path="/overview" component={Overview} />
              <Route path="/apply" component={Apply} />
              <Route path="/quiz" component={Quiz} />
              <Route path="/vote/section" component={SectionVote} />
            </Switch>
          </div>
        </div>
        <div className="copyright">created by team. zennvote</div>
      </div>
    </BrowserRouter>
  </Provider>
);

export default App;
